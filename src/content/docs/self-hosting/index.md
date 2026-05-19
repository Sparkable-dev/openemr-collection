---
title: Self Hosting OpenEMR
description: How to self-host OpenEMR with Docker Compose and enable the API
---

## Docker Compose Setup

Below is a complete Docker Compose configuration for running OpenEMR with a MySQL database:

```yaml
version: '3.8'

services:
  mysql:
    image: mariadb:10.11
    command: |
      --default-authentication-plugin=mysql_native_password
      --innodb_buffer_pool_size=512M
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_unicode_ci
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: openemr
      MYSQL_USER: openemr
      MYSQL_PASSWORD: openemr
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3307:3306"
    restart: unless-stopped

  openemr:
    image: openemr/openemr:7.0.0
    ports:
      - "8300:80"
      - "8306:3306"
    environment:
      MYSQL_HOST: mysql
      MYSQL_ROOT_PASS: root
      MYSQL_USER: openemr
      MYSQL_PASS: openemr
      OE_USER: admin
      OE_PASS: pass
      OE_SITE: default
    volumes:
      - openemr_data:/var/www/html
    depends_on:
      - mysql
    restart: unless-stopped

volumes:
  mysql_data:
  openemr_data:
```

Run it:

```bash
docker compose up -d
```

## Enabling the REST API

1. Log in at `http://localhost:8300` with `admin` / `pass`
2. Go to **Admin > Globals > Connectors**
3. Enable **REST API** and **FHIR API**
4. Click **Save**
5. Restart the container: `docker restart openemr-openemr-1`

## Verifying

```bash
curl http://localhost:8300/apis/default/fhir/metadata -H "Accept: application/fhir+json"
```

## Official Documentation

For more details, refer to the official OpenEMR documentation:

- [OpenEMR Wiki](https://www.open-emr.org/wiki/)
- [OpenEMR API Documentation](https://github.com/openemr/openemr/blob/master/API_README.md)
- [Docker Setup Guide](https://docs.openemr.io/en/latest/development/docker.html)
