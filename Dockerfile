#FROM registry.ci-bedag.ch/docker_base/nginx:1.24
FROM docker.io/nginx
COPY dist/evento-portal /usr/share/nginx/html
COPY build/evento.conf /etc/nginx/conf.d/evento.conf

## Nginx base config is running on port 80
