$PROJECT = "forcefield-testing"
$REGION = "northamerica-northeast1"
$SERVICE = "datasciencetech-website"
$IMAGE = "northamerica-northeast1-docker.pkg.dev/$PROJECT/forcefield-gateway/website:latest"

Write-Host "=== Step 1: Build container image via Cloud Build ==="
gcloud builds submit `
  --config cloudbuild-website.yaml `
  --project $PROJECT `
  .

Write-Host ""
Write-Host "=== Step 2: Deploy to Cloud Run ==="
gcloud run deploy $SERVICE `
  --project $PROJECT `
  --image $IMAGE `
  --region $REGION `
  --port 8080 `
  --cpu 1 `
  --memory 256Mi `
  --min-instances 0 `
  --max-instances 3 `
  --allow-unauthenticated `
  --set-env-vars "TENANT_MANAGER_URL=https://forcefield-tenant-manager-546798516374.northamerica-northeast1.run.app,TENANT_MANAGER_HOST=forcefield-tenant-manager-546798516374.northamerica-northeast1.run.app"

Write-Host ""
Write-Host "=== Deploy complete ==="
Write-Host "Service URL will be printed above."
Write-Host ""
Write-Host "Next: run gcp\setup-gclb.ps1 to wire into the load balancer (one-time)."
