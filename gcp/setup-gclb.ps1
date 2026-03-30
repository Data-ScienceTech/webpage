$PROJECT = "forcefield-testing"
$REGION = "northamerica-northeast1"
$SERVICE = "datasciencetech-website"
$LB_NAME = "forcefield-lb"

# 1. Create serverless NEG for the website Cloud Run service
gcloud compute network-endpoint-groups create neg-website `
  --project=$PROJECT `
  --region=$REGION `
  --network-endpoint-type=serverless `
  --cloud-run-service=$SERVICE

# 2. Create backend service with Cloud CDN enabled
gcloud compute backend-services create bs-website `
  --project=$PROJECT `
  --global `
  --load-balancing-scheme=EXTERNAL_MANAGED `
  --enable-cdn `
  --cdn-policy-cache-mode=CACHE_ALL_STATIC `
  --cdn-policy-default-ttl=3600 `
  --cdn-policy-max-ttl=86400

# 3. Add the NEG to the backend service
gcloud compute backend-services add-backend bs-website `
  --project=$PROJECT `
  --global `
  --network-endpoint-group=neg-website `
  --network-endpoint-group-region=$REGION

# 4. Add host rules to the existing URL map
# datasciencetech.ca and www.datasciencetech.ca -> bs-website
gcloud compute url-maps add-host-rule $LB_NAME `
  --project=$PROJECT `
  --hosts="datasciencetech.ca,www.datasciencetech.ca" `
  --path-matcher-name=pm-website

gcloud compute url-maps add-path-matcher $LB_NAME `
  --project=$PROJECT `
  --path-matcher-name=pm-website `
  --default-service=bs-website

# 5. Update the managed SSL certificate to include datasciencetech.ca
gcloud compute ssl-certificates create forcefield-ssl-v2 `
  --project=$PROJECT `
  --domains="forcefield.datasciencetech.ca,dashboard.datasciencetech.ca,api.datasciencetech.ca,datasciencetech.ca,www.datasciencetech.ca" `
  --global

# 6. Update the HTTPS proxy to use the new cert
gcloud compute target-https-proxies update forcefield-https-proxy `
  --project=$PROJECT `
  --ssl-certificates=forcefield-ssl-v2

Write-Host ""
Write-Host "GCLB setup complete."
Write-Host "Next steps:"
Write-Host "  1. Point DNS A record for datasciencetech.ca -> 35.186.250.51"
Write-Host "  2. Point DNS A record for www.datasciencetech.ca -> 35.186.250.51"
Write-Host "  3. Wait for SSL certificate provisioning (requires DNS to propagate first)"
