---
title: RelatedPerson (FHIR)
description: FHIR R4 RelatedPerson resource operations — Search, Read
---

## Search RelatedPerson

```bash
curl "$BASE_URL/apis/default/fhir/RelatedPerson" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/RelatedPerson?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/fhir/RelatedPerson?name=Doe" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read RelatedPerson

```bash
curl "$BASE_URL/apis/default/fhir/RelatedPerson/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
