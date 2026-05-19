---
title: Person (FHIR)
description: FHIR R4 Person resource operations — Search, Read
---

## Search Person

```bash
curl "$BASE_URL/apis/default/fhir/Person" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/fhir/Person?name=Smith" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by identifier:

```bash
curl "$BASE_URL/apis/default/fhir/Person?identifier=SSN|123-45-6789" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Person

```bash
curl "$BASE_URL/apis/default/fhir/Person/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
