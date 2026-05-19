---
title: Facilities and Drugs
description: Custom OpenEMR facility and drug endpoints — Facilities, Drugs, Prescriptions, Immunizations
---

## Get Facilities

```bash
curl "$BASE_URL/apis/default/api/facility" \
  -H "Authorization: Bearer $TOKEN"
```

## Search Drugs

```bash
curl "$BASE_URL/apis/default/api/drug" \
  -H "Authorization: Bearer $TOKEN"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/api/drug?search=Lisinopril" \
  -H "Authorization: Bearer $TOKEN"
```

## Search Prescriptions

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/prescription" \
  -H "Authorization: Bearer $TOKEN"
```

## Get Immunizations

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/immunization" \
  -H "Authorization: Bearer $TOKEN"
```
