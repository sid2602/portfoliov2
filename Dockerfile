FROM node:22-alpine AS builder
WORKDIR /app

ARG WEB3FORMS_ACCESS_KEY
ARG PUBLIC_UMAMI_WEBSITE_ID
ARG PUBLIC_UMAMI_SCRIPT_URL

ENV WEB3FORMS_ACCESS_KEY=$WEB3FORMS_ACCESS_KEY
ENV PUBLIC_UMAMI_WEBSITE_ID=$PUBLIC_UMAMI_WEBSITE_ID
ENV PUBLIC_UMAMI_SCRIPT_URL=$PUBLIC_UMAMI_SCRIPT_URL

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM caddy:alpine
COPY --from=builder /app/dist /srv
CMD ["caddy", "file-server", "--root", "/srv", "--listen", ":80"]
