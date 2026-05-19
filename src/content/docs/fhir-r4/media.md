---
title: Media (FHIR)
description: FHIR R4 Media resource — Search
---

## Search Media

```bash
curl "$BASE_URL/apis/default/fhir/Media" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Media?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by type:

```bash
curl "$BASE_URL/apis/default/fhir/Media?type=image" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by date:

```bash
curl "$BASE_URL/apis/default/fhir/Media?created=ge2024-01-01&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
