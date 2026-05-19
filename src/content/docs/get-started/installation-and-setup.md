---
title: Installation and Setup
description: How to run OpenEMR with Docker and enable the REST API
---

## Running OpenEMR with Docker

The easiest way to get started is using the official OpenEMR Docker image:

```bash
docker run --name openemr -d \
  -p 8300:80 \
  -p 8306:3306 \
  -e MYSQL_ROOT_PASS=root \
  -e OE_USER=admin \
  -e OE_PASS=pass \
  -e OE_SITE=default \
  openemr/openemr:7.0.0
```

This starts OpenEMR with:

| Port | Service |
|------|---------|
| `8300` | Apache web server (OpenEMR) |
| `8306` | MySQL database |

### Docker Compose (Production-like)

```yaml
version: '3.8'
services:
  openemr:
    image: openemr/openemr:7.0.0
    ports:
      - "8300:80"
      - "8306:3306"
    environment:
      MYSQL_ROOT_PASS: root
      OE_USER: admin
      OE_PASS: pass
      OE_SITE: default
    volumes:
      - openemr_data:/var/www/html
      - openemr_mysql:/var/lib/mysql

volumes:
  openemr_data:
  openemr_mysql:
```

## Enabling the REST API

After OpenEMR is running, you must enable the API:

1. Log in to OpenEMR at `http://localhost:8300`
2. Navigate to **Admin > Globals**
3. Click the **Connectors** tab
4. Enable the following settings:
   - **REST API** → enable (`ON`)
   - **FHIR API** → enable (`ON`)
   - **Cross-Origin Requests (CORS)** → enable (`ON`) if accessing from a browser
5. Click **Save**
6. Restart the Docker container:
   ```bash
   docker restart openemr
   ```

## Verifying the API

Run a health check to confirm the API is running:

```bash
curl http://localhost:8300/apis/default/fhir/metadata \
  -H "Accept: application/fhir+json"
```

You should receive a JSON response with the FHIR CapabilityStatement.
