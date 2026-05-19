---
title: Location (FHIR)
description: FHIR R4 Location resource operations — Search, Read
---

## Search Location

```bash
curl "$BASE_URL/apis/default/fhir/Location" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/fhir/Location?name=Main%20Clinic" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by type:

```bash
curl "$BASE_URL/apis/default/fhir/Location?type=hospital" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by address:

```bash
curl "$BASE_URL/apis/default/fhir/Location?address=123%20Main%20St" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Location

```bash
curl "$BASE_URL/apis/default/fhir/Location/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
