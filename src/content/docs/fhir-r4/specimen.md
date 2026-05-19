---
title: Specimen (FHIR)
description: FHIR R4 Specimen resource — Search
---

## Search Specimen

```bash
curl "$BASE_URL/apis/default/fhir/Specimen" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Specimen?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by type:

```bash
curl "$BASE_URL/apis/default/fhir/Specimen?type=122555007" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by date collected:

```bash
curl "$BASE_URL/apis/default/fhir/Specimen?collected=ge2024-01-01" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
