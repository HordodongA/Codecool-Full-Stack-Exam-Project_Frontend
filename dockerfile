FROM nginx:1.24.0-alpine
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf