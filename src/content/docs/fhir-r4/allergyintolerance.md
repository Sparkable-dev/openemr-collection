---
title: AllergyIntolerance (FHIR)
description: FHIR R4 AllergyIntolerance resource operations — Search, Read
---

## Search AllergyIntolerance

```bash
curl "$BASE_URL/apis/default/fhir/AllergyIntolerance" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/AllergyIntolerance?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by clinical status:

```bash
curl "$BASE_URL/apis/default/fhir/AllergyIntolerance?clinical-status=active&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read AllergyIntolerance

```bash
curl "$BASE_URL/apis/default/fhir/AllergyIntolerance/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
