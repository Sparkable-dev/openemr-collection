---
title: SMART Configuration
description: SMART on FHIR and OpenID Connect discovery endpoints
---

These endpoints provide configuration metadata for OAuth2 and OpenID Connect.

## SMART on FHIR Configuration

Returns the SMART on FHIR configuration, including supported scopes, authorization endpoints, and capabilities.

```bash
curl "$BASE_URL/.well-known/smart-configuration" \
  -H "Accept: application/json"
```

**Response:**

```json
{
  "authorization_endpoint": "http://localhost:8300/oauth2/default/authorize",
  "token_endpoint": "http://localhost:8300/oauth2/default/token",
  "token_endpoint_auth_methods_supported": ["client_secret_basic", "client_secret_post"],
  "scopes_supported": ["openid", "email", "profile", "fhirUser", "launch", "launch/patient", "patient/*.*", "user/*.*", "offline_access"],
  "response_types_supported": ["code", "token", "id_token", "code token", "code id_token", "token id_token"],
  "capabilities": ["launch-standalone", "client-public", "client-confidential-symmetric", "sso-openid-connect", "permission-offline"]
}
```

## OpenID Connect Discovery

Returns OpenID Connect discovery metadata.

```bash
curl "$BASE_URL/.well-known/openid-configuration" \
  -H "Accept: application/json"
```

This provides the full OIDC configuration including issuer, JWKS URI, supported claims, and grant types.
