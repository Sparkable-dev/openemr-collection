---
title: Appointment (FHIR)
description: FHIR R4 Appointment resource operations — Search, Read
---

## Search Appointment

```bash
curl "$BASE_URL/apis/default/fhir/Appointment" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Appointment?actor=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by status:

```bash
curl "$BASE_URL/apis/default/fhir/Appointment?status=booked&actor=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by date:

```bash
curl "$BASE_URL/apis/default/fhir/Appointment?date=ge2024-01-01&actor=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Appointment

```bash
curl "$BASE_URL/apis/default/fhir/Appointment/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
