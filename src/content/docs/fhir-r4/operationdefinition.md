---
title: OperationDefinition (FHIR)
description: FHIR R4 OperationDefinition resource — Search
---

## Search OperationDefinition

```bash
curl "$BASE_URL/apis/default/fhir/OperationDefinition" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/fhir/OperationDefinition?name=everything" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by kind:

```bash
curl "$BASE_URL/apis/default/fhir/OperationDefinition?kind=operation" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
