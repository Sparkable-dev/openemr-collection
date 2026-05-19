---
title: Medical Problems
description: Custom OpenEMR medical problem endpoints — Search, Create, Delete
---

## Search Medical Problems

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/problem" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Medical Problem

```bash
curl -X POST "$BASE_URL/apis/default/api/patient/{patientId}/problem" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Type 2 Diabetes",
    "diagnosis_date": "2023-06-15",
    "status": "active",
    "notes": "Controlled with metformin",
    "code": "E11.9",
    "code_system": "ICD-10"
  }'
```

## Delete Medical Problem

```bash
curl -X DELETE "$BASE_URL/apis/default/api/patient/{patientId}/problem/{id}" \
  -H "Authorization: Bearer $TOKEN"
```
