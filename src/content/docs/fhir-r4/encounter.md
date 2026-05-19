---
title: Encounter (FHIR)
description: FHIR R4 Encounter resource operations — Search, Read
---

The Encounter resource represents a patient interaction with healthcare services.

## Search Encounter

```bash
curl "$BASE_URL/apis/default/fhir/Encounter" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Encounter?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by date range:

```bash
curl "$BASE_URL/apis/default/fhir/Encounter?date=ge2024-01-01&date=le2024-12-31" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Encounter

```bash
curl "$BASE_URL/apis/default/fhir/Encounter/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
