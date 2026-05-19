---
title: DiagnosticReport (FHIR)
description: FHIR R4 DiagnosticReport resource operations — Search, Read
---

## Search DiagnosticReport

```bash
curl "$BASE_URL/apis/default/fhir/DiagnosticReport" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/DiagnosticReport?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by category:

```bash
curl "$BASE_URL/apis/default/fhir/DiagnosticReport?category=LAB&patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read DiagnosticReport

```bash
curl "$BASE_URL/apis/default/fhir/DiagnosticReport/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
