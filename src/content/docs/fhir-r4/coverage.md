---
title: Coverage (FHIR)
description: FHIR R4 Coverage resource — Search
---

## Search Coverage

```bash
curl "$BASE_URL/apis/default/fhir/Coverage" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by beneficiary (patient):

```bash
curl "$BASE_URL/apis/default/fhir/Coverage?beneficiary=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by payor:

```bash
curl "$BASE_URL/apis/default/fhir/Coverage?payor=Organization/{orgId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by status:

```bash
curl "$BASE_URL/apis/default/fhir/Coverage?status=active" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
