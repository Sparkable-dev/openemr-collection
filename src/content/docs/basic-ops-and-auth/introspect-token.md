---
title: Introspect Token
description: Validate an access token and check its metadata
---

## Introspect Token

Check whether an access token is valid, along with its metadata (scopes, expiration, client ID, etc.).

```bash
curl -X POST "$BASE_URL/oauth2/default/introspect" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "token=$TOKEN" \
  -d "client_id=$CLIENT_ID" \
  -d "client_secret=$CLIENT_SECRET"
```

**Response (active token):**

```json
{
  "active": true,
  "scope": "openid email profile fhirUser launch launch/patient patient/*.* user/*.* offline_access",
  "client_id": "abc123-client-id",
  "username": "admin",
  "token_type": "Bearer",
  "exp": 1700003600,
  "iat": 1700000000,
  "sub": "admin",
  "iss": "http://localhost:8300"
}
```

**Response (expired/invalid token):**

```json
{
  "active": false
}
```

## End Session (Logout)

Invalidate the current session and revoke the access token.

```bash
curl -X GET "$BASE_URL/oauth2/default/logout" \
  -H "Authorization: Bearer $TOKEN"
```

After logout, the token is no longer valid. You will need to obtain a new token to continue making API requests.
