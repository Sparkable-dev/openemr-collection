---
title: ServiceRequest (FHIR)
description: FHIR R4 ServiceRequest resource operations — Search, Read
---

## Search ServiceRequest

```bash
curl "$BASE_URL/apis/default/fhir/ServiceRequest" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/ServiceRequest?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by status:

```bash
curl "$BASE_URL/apis/default/fhir/ServiceRequest?status=active&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by code:

```bash
curl "$BASE_URL/apis/default/fhir/ServiceRequest?code=12345" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read ServiceRequest

```bash
curl "$BASE_URL/apis/default/fhir/ServiceRequest/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
