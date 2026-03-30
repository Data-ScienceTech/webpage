FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:alpine
RUN apk add --no-cache gettext
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/templates/default.conf.template
ENV TENANT_MANAGER_URL=https://forcefield-tenant-manager-546798516374.northamerica-northeast1.run.app
ENV TENANT_MANAGER_HOST=forcefield-tenant-manager-546798516374.northamerica-northeast1.run.app
EXPOSE 8080
CMD ["sh", "-c", "envsubst '${TENANT_MANAGER_URL} ${TENANT_MANAGER_HOST}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
