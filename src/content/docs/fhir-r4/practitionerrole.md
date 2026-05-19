---
title: PractitionerRole (FHIR)
description: FHIR R4 PractitionerRole resource operations — Search, Read
---

## Search PractitionerRole

```bash
curl "$BASE_URL/apis/default/fhir/PractitionerRole" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by practitioner:

```bash
curl "$BASE_URL/apis/default/fhir/PractitionerRole?practitioner=Practitioner/{practId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by organization:

```bash
curl "$BASE_URL/apis/default/fhir/PractitionerRole?organization=Organization/{orgId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by specialty:

```bash
curl "$BASE_URL/apis/default/fhir/PractitionerRole?specialty=cardiology" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read PractitionerRole

```bash
curl "$BASE_URL/apis/default/fhir/PractitionerRole/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
