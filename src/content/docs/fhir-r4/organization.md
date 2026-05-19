---
title: Organization (FHIR)
description: FHIR R4 Organization resource operations — Search, Read
---

## Search Organization

```bash
curl "$BASE_URL/apis/default/fhir/Organization" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/fhir/Organization?name=General%20Hospital" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by identifier:

```bash
curl "$BASE_URL/apis/default/fhir/Organization?identifier=12345" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Organization

```bash
curl "$BASE_URL/apis/default/fhir/Organization/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
