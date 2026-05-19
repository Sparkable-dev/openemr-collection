---
title: Observation (FHIR)
description: FHIR R4 Observation resource — Search
---

The Observation resource captures measurements, vital signs, laboratory results, and other clinical data.

## Search Observation

```bash
curl "$BASE_URL/apis/default/fhir/Observation" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Observation?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by category (e.g., vital-signs):

```bash
curl "$BASE_URL/apis/default/fhir/Observation?category=vital-signs&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by code:

```bash
curl "$BASE_URL/apis/default/fhir/Observation?code=8480-6" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by date range:

```bash
curl "$BASE_URL/apis/default/fhir/Observation?date=ge2024-01-01&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
