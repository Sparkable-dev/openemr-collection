---
title: Medication Management
description: Custom OpenEMR medication management endpoints — Create, Read, Update
---

## Create Medication

```bash
curl -X POST "$BASE_URL/apis/default/api/patient/{patientId}/medication" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "drug_name": "Lisinopril",
    "dosage": "10 mg",
    "route": "oral",
    "frequency": "once daily",
    "prescribed_date": "2024-03-01",
    "prescriber_id": "{providerId}",
    "notes": "For hypertension"
  }'
```

## Read Medication

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/medication/{id}" \
  -H "Authorization: Bearer $TOKEN"
```

## Update Medication

```bash
curl -X PUT "$BASE_URL/apis/default/api/patient/{patientId}/medication/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "dosage": "20 mg",
    "frequency": "once daily",
    "notes": "Dosage increased per latest visit"
  }'
```
