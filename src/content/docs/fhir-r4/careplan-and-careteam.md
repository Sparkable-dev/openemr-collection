---
title: CarePlan and CareTeam (FHIR)
description: FHIR R4 CarePlan and CareTeam resource operations — Search, Read
---

## CarePlan

### Search CarePlan

```bash
curl "$BASE_URL/apis/default/fhir/CarePlan" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/CarePlan?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by status:

```bash
curl "$BASE_URL/apis/default/fhir/CarePlan?status=active&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## CareTeam

### Search CareTeam

```bash
curl "$BASE_URL/apis/default/fhir/CareTeam" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/CareTeam?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

### Read CareTeam

```bash
curl "$BASE_URL/apis/default/fhir/CareTeam/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
