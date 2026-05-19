---
title: Immunization (FHIR)
description: FHIR R4 Immunization resource operations — Search, Read
---

## Search Immunization

```bash
curl "$BASE_URL/apis/default/fhir/Immunization" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Immunization?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by date:

```bash
curl "$BASE_URL/apis/default/fhir/Immunization?date=ge2024-01-01" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Immunization

```bash
curl "$BASE_URL/apis/default/fhir/Immunization/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
