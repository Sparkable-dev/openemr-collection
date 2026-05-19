---
title: Device (FHIR)
description: FHIR R4 Device resource operations — Search, Read
---

## Search Device

```bash
curl "$BASE_URL/apis/default/fhir/Device" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/Device?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by type:

```bash
curl "$BASE_URL/apis/default/fhir/Device?type=4688003" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Device

```bash
curl "$BASE_URL/apis/default/fhir/Device/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
