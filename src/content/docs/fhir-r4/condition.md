---
title: Condition (FHIR)
description: FHIR R4 Condition resource operations — Search, Read
---

The Condition resource represents a clinical condition, problem, diagnosis, or other event.

## Search Condition

```bash
curl "$BASE_URL/apis/default/fhir/Condition" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Condition?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by clinical status:

```bash
curl "$BASE_URL/apis/default/fhir/Condition?clinical-status=active&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Condition

```bash
curl "$BASE_URL/apis/default/fhir/Condition/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
