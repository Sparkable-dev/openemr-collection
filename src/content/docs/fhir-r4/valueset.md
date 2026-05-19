---
title: ValueSet (FHIR)
description: FHIR R4 ValueSet resource — Search
---

## Search ValueSet

```bash
curl "$BASE_URL/apis/default/fhir/ValueSet" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/fhir/ValueSet?name=AdministrativeGender" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by identifier:

```bash
curl "$BASE_URL/apis/default/fhir/ValueSet?identifier=http://hl7.org/fhir/ValueSet/administrative-gender" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
