---
title: Practitioner (FHIR)
description: FHIR R4 Practitioner resource operations — Search, Read, Create, Update
---

## Search Practitioner

```bash
curl "$BASE_URL/apis/default/fhir/Practitioner" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/fhir/Practitioner?name=Jones" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Practitioner

```bash
curl "$BASE_URL/apis/default/fhir/Practitioner/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Create Practitioner

```bash
curl -X POST "$BASE_URL/apis/default/fhir/Practitioner" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json" \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Practitioner",
    "name": [
      {
        "use": "official",
        "family": "Jones",
        "given": ["Sarah"]
      }
    ],
    "identifier": [
      {
        "system": "http://hospital.example.org/provider-id",
        "value": "P12345"
      }
    ],
    "active": true
  }'
```

## Update Practitioner

```bash
curl -X PUT "$BASE_URL/apis/default/fhir/Practitioner/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json" \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Practitioner",
    "id": "{id}",
    "name": [
      {
        "use": "official",
        "family": "Jones",
        "given": ["Sarah", "M."]
      }
    ],
    "active": true
  }'
```
