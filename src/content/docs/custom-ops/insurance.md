---
title: Insurance
description: Custom OpenEMR insurance management endpoints — Search, Update, types, companies
---

## Search Insurance

Search insurance records for a patient:

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/insurance" \
  -H "Authorization: Bearer $TOKEN"
```

## Update Primary Insurance

```bash
curl -X PUT "$BASE_URL/apis/default/api/patient/{patientId}/insurance/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "provider_name": "Blue Cross Blue Shield",
    "policy_number": "BCBS-98765",
    "group_number": "GRP-001",
    "plan_name": "Silver PPO",
    "subscriber_name": "John Smith",
    "subscriber_relationship": "self",
    "effective_date": "2024-01-01",
    "expiration_date": "2024-12-31"
  }'
```

## Get Insurance Types

```bash
curl "$BASE_URL/apis/default/api/insurance/type" \
  -H "Authorization: Bearer $TOKEN"
```

## Search Insurance Companies

```bash
curl "$BASE_URL/apis/default/api/insurance/company" \
  -H "Authorization: Bearer $TOKEN"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/api/insurance/company?search=Blue%20Cross" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Insurance Company

```bash
curl -X POST "$BASE_URL/apis/default/api/insurance/company" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aetna Health",
    "cms_id": "12345",
    "phone": "800-123-4567",
    "address": "100 Health Way",
    "city": "Hartford",
    "state": "CT",
    "zip": "06101"
  }'
```
