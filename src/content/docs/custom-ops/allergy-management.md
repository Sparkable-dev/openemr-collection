---
title: Allergy Management
description: Custom OpenEMR allergy management endpoints — Search, Create, Read, Update, Delete
---

## Search Allergies

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/allergy" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Allergy

```bash
curl -X POST "$BASE_URL/apis/default/api/patient/{patientId}/allergy" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Penicillin",
    "severity": "moderate",
    "reaction": "Rash, hives",
    "notes": "Patient developed rash after course of amoxicillin",
    "status": "active"
  }'
```

## Read Allergy

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/allergy/{id}" \
  -H "Authorization: Bearer $TOKEN"
```

## Update Allergy

```bash
curl -X PUT "$BASE_URL/apis/default/api/patient/{patientId}/allergy/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "severity": "severe",
    "notes": "Updated: now includes anaphylaxis risk",
    "status": "active"
  }'
```

## Delete Allergy

```bash
curl -X DELETE "$BASE_URL/apis/default/api/patient/{patientId}/allergy/{id}" \
  -H "Authorization: Bearer $TOKEN"
```
