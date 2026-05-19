---
title: Surgery and Dental
description: Custom OpenEMR surgery and dental issue endpoints — Search, Create, Update, Delete
---

## Surgery

### Search Surgeries

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/surgery" \
  -H "Authorization: Bearer $TOKEN"
```

### Create Surgery

```bash
curl -X POST "$BASE_URL/apis/default/api/patient/{patientId}/surgery" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Appendectomy",
    "date": "2022-11-20",
    "notes": "Laparoscopic appendectomy, no complications",
    "code": "0DTJ4ZZ",
    "code_system": "ICD-10-PCS"
  }'
```

## Dental Issues

### Search Dental Issues

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/dental" \
  -H "Authorization: Bearer $TOKEN"
```

### Create Dental Issue

```bash
curl -X POST "$BASE_URL/apis/default/api/patient/{patientId}/dental" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Cavity Molar #19",
    "date": "2024-02-10",
    "status": "active",
    "notes": "Composite filling required"
  }'
```

### Update Dental Issue

```bash
curl -X PUT "$BASE_URL/apis/default/api/patient/{patientId}/dental/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "resolved",
    "notes": "Filling completed"
  }'
```

### Delete Dental Issue

```bash
curl -X DELETE "$BASE_URL/apis/default/api/patient/{patientId}/dental/{id}" \
  -H "Authorization: Bearer $TOKEN"
```
