---
title: Register Client
description: Register an OAuth2 client to obtain client ID and secret
---

Before you can obtain tokens, you must register an OAuth2 client. This only needs to be done once.

## Register OAuth2 Client

```bash
curl -X POST "$BASE_URL/oauth2/default/register" \
  -H "Content-Type: application/json" \
  -d '{
    "client_name": "OpenEMR API Client",
    "redirect_uris": ["http://localhost:8300"],
    "grant_types": ["password", "refresh_token", "authorization_code"],
    "token_endpoint_auth_method": "client_secret_basic",
    "scope": "openid email profile fhirUser launch launch/patient patient/*.* user/*.* offline_access"
  }'
```

**Response:**

```json
{
  "client_id": "abc123-client-id",
  "client_secret": "def456-client-secret",
  "client_id_issued_at": 1700000000,
  "client_secret_expires_at": 0,
  "registration_access_token": "...",
  "registration_client_uri": "http://localhost:8300/oauth2/default/register/abc123-client-id"
}
```

## Save Your Credentials

After registration, set these environment variables:

```bash
export CLIENT_ID=abc123-client-id
export CLIENT_SECRET=def456-client-secret
```

**Note:** Store these securely. The `client_secret` is shown only once during registration.
