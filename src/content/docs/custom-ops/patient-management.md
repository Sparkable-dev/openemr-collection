---
title: Patient Management
description: Custom OpenEMR patient management endpoints — List, Read, Create, Update
---

These are the OpenEMR-specific patient endpoints (not FHIR R4).

## Get Patient List

```bash
curl "$BASE_URL/apis/default/api/patient" \
  -H "Authorization: Bearer $TOKEN"
```

Optional search parameters:

```bash
curl "$BASE_URL/apis/default/api/patient?search=Smith&limit=10&offset=0" \
  -H "Authorization: Bearer $TOKEN"
```

## Read Patient (Standard API)

```bash
curl "$BASE_URL/apis/default/api/patient/{id}" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Patient (Standard API)

```bash
curl -X POST "$BASE_URL/apis/default/api/patient" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "fname": "John",
    "lname": "Smith",
    "mname": "A",
    "dob": "1980-01-15",
    "sex": "Male",
    "street": "123 Main St",
    "city": "Portland",
    "state": "OR",
    "postal_code": "97201",
    "phone": "555-1234",
    "email": "john.smith@example.com"
  }'
```

## Update Patient (Standard API)

```bash
curl -X PUT "$BASE_URL/apis/default/api/patient/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "fname": "John",
    "lname": "Smith-Jones",
    "sex": "Male",
    "phone": "555-5678"
  }'
```
