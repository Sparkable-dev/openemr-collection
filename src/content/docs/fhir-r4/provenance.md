---
title: Provenance (FHIR)
description: FHIR R4 Provenance resource operations — Search, Read
---

## Search Provenance

```bash
curl "$BASE_URL/apis/default/fhir/Provenance" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by target:

```bash
curl "$BASE_URL/apis/default/fhir/Provenance?target=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by agent:

```bash
curl "$BASE_URL/apis/default/fhir/Provenance?agent=Practitioner/{practId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Provenance

```bash
curl "$BASE_URL/apis/default/fhir/Provenance/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
