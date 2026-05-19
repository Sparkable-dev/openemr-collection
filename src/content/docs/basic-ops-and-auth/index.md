---
title: Basic Operations and Auth
description: Overview of authentication and basic operations for OpenEMR API
---

This folder contains **9 requests** for authentication and basic health checks. The authentication flow follows the SMART on FHIR / OAuth 2.0 standard:

## Authentication Flow

1. **Register Client** — Register an OAuth2 client to get `client_id` and `client_secret`
2. **Get Token** — Exchange credentials for an access token using the password grant
3. **Use Token** — Include the token as a Bearer header in all subsequent API calls
4. **Refresh Token** — When the access token expires, refresh it
5. **End Session** — Log out and invalidate the token

## Base Paths

| Endpoint Type | Base Path |
|---------------|-----------|
| Auth endpoints | `/oauth2/default/` |
| FHIR endpoints | `/apis/default/fhir/` |

## Environment Variables

All examples use:

```bash
export BASE_URL=http://localhost:8300
export SITE=default
export OE_USER=admin
export OE_PASS=pass
export CLIENT_ID=your_client_id
export CLIENT_SECRET=your_client_secret
export TOKEN=your_access_token
```

## Available Requests

| # | Request | Method | Path |
|---|---------|--------|------|
| 1 | Health Check — FHIR Capability Statement | GET | `/apis/default/fhir/metadata` |
| 2 | Health Check — API Version | GET | `/apis/default/version` |
| 3 | SMART on FHIR Configuration | GET | `/.well-known/smart-configuration` |
| 4 | OpenID Connect Discovery | GET | `/.well-known/openid-configuration` |
| 5 | Register OAuth2 Client | POST | `/oauth2/default/register` |
| 6 | Get Token — Password Grant | POST | `/oauth2/default/token` |
| 7 | Introspect Token | POST | `/oauth2/default/introspect` |
| 8 | Refresh Access Token | POST | `/oauth2/default/token` |
| 9 | End Session (Logout) | GET | `/oauth2/default/logout` |
