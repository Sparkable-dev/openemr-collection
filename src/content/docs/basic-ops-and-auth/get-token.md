---
title: Get Token
description: Obtain an access token using the password grant and refresh an expired token
---

## Get Token — Password Grant

Exchange your OpenEMR admin credentials for an access token.

```bash
curl -X POST "$BASE_URL/oauth2/default/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=password" \
  -d "client_id=$CLIENT_ID" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "username=$OE_USER" \
  -d "password=$OE_PASS" \
  -d "scope=openid email profile fhirUser launch launch/patient patient/*.* user/*.* offline_access"
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "eyJhbGciOiJSUzI1NiIs...",
  "scope": "openid email profile fhirUser launch launch/patient patient/*.* user/*.* offline_access",
  "id_token": "eyJhbGciOiJSUzI1NiIs..."
}
```

Save the token:

```bash
export TOKEN=eyJhbGciOiJSUzI1NiIs...
```

## Refresh Access Token

When the access token expires (usually after 1 hour), use the refresh token to get a new one.

```bash
curl -X POST "$BASE_URL/oauth2/default/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=refresh_token" \
  -d "client_id=$CLIENT_ID" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "refresh_token=eyJhbGciOiJSUzI1NiIs..."
```

**Response:**

```json
{
  "access_token": "new-access-token...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "new-refresh-token..."
}
```

Update your token:

```bash
export TOKEN=new-access-token...
```

## Using the Token

Include the token in all API requests:

```bash
curl "$BASE_URL/apis/default/fhir/Patient" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
