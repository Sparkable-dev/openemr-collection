---
title: DocumentReference (FHIR)
description: FHIR R4 DocumentReference resource — Search
---

## Search DocumentReference

```bash
curl "$BASE_URL/apis/default/fhir/DocumentReference" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/DocumentReference?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by type:

```bash
curl "$BASE_URL/apis/default/fhir/DocumentReference?type=34133-9" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by date:

```bash
curl "$BASE_URL/apis/default/fhir/DocumentReference?date=ge2024-01-01&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
