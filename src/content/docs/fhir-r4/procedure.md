---
title: Procedure (FHIR)
description: FHIR R4 Procedure resource operations — Search, Read
---

## Search Procedure

```bash
curl "$BASE_URL/apis/default/fhir/Procedure" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Procedure?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by date:

```bash
curl "$BASE_URL/apis/default/fhir/Procedure?date=ge2024-01-01&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Procedure

```bash
curl "$BASE_URL/apis/default/fhir/Procedure/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
