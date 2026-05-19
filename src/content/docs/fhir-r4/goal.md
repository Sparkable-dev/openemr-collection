---
title: Goal (FHIR)
description: FHIR R4 Goal resource operations — Search, Read
---

## Search Goal

```bash
curl "$BASE_URL/apis/default/fhir/Goal" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Goal?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Goal

```bash
curl "$BASE_URL/apis/default/fhir/Goal/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
