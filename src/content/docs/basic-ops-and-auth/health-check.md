---
title: Health Check
description: Verify OpenEMR API is running with FHIR Capability Statement and version endpoints
---

Use these endpoints to verify that OpenEMR and its API are running correctly.

## FHIR Capability Statement

Returns the FHIR R4 CapabilityStatement describing the server's capabilities.

```bash
curl "$BASE_URL/apis/default/fhir/metadata" \
  -H "Accept: application/fhir+json"
```

**Response:** A FHIR `CapabilityStatement` resource listing supported resources, interactions, and operations.

## API Version

Returns the current OpenEMR version.

```bash
curl "$BASE_URL/apis/default/version" \
  -H "Accept: application/json"
```

**Response:**

```json
{
  "version": "7.0.0",
  "site": "default",
  "api_version": "v1"
}
```

## Quick Test

Run both health checks together:

```bash
echo "=== FHIR CapabilityStatement ===" && \
curl -s "$BASE_URL/apis/default/fhir/metadata" \
  -H "Accept: application/fhir+json" | jq . && \
echo "=== API Version ===" && \
curl -s "$BASE_URL/apis/default/version" \
  -H "Accept: application/json" | jq .
```
