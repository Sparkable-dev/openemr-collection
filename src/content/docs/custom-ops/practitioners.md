---
title: Practitioners
description: Custom OpenEMR practitioner endpoints — Search, Read, Create
---

## Search Practitioners (Standard API)

```bash
curl "$BASE_URL/apis/default/api/provider" \
  -H "Authorization: Bearer $TOKEN"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/api/provider?search=Jones" \
  -H "Authorization: Bearer $TOKEN"
```

## Read Practitioner (Standard API)

```bash
curl "$BASE_URL/apis/default/api/provider/{id}" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Practitioner (Standard API)

```bash
curl -X POST "$BASE_URL/apis/default/api/provider" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "fname": "Sarah",
    "lname": "Jones",
    "specialty": "Cardiology",
    "npi": "1234567890",
    "phone": "555-9876",
    "email": "sarah.jones@clinic.com"
  }'
```
