---
title: Medication (FHIR)
description: FHIR R4 Medication and MedicationRequest resource operations — Search, Read
---

## Medication

### Search Medication

```bash
curl "$BASE_URL/apis/default/fhir/Medication" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by code:

```bash
curl "$BASE_URL/apis/default/fhir/Medication?code=12345" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

### Read Medication

```bash
curl "$BASE_URL/apis/default/fhir/Medication/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## MedicationRequest

### Search MedicationRequest

```bash
curl "$BASE_URL/apis/default/fhir/MedicationRequest" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/MedicationRequest?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by status:

```bash
curl "$BASE_URL/apis/default/fhir/MedicationRequest?status=active&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## MedicationDispense

### Search MedicationDispense

```bash
curl "$BASE_URL/apis/default/fhir/MedicationDispense" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/MedicationDispense?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

### Read MedicationDispense

```bash
curl "$BASE_URL/apis/default/fhir/MedicationDispense/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
