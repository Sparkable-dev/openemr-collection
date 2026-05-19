---
title: Patient (FHIR)
description: FHIR R4 Patient resource operations — Search, Read, Create, Update
---

The Patient resource covers demographics and administrative information about a person receiving healthcare.

## Search Patient

```bash
curl "$BASE_URL/apis/default/fhir/Patient" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search with parameters:

```bash
curl "$BASE_URL/apis/default/fhir/Patient?name=Smith" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Read Patient

```bash
curl "$BASE_URL/apis/default/fhir/Patient/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Create Patient

```bash
curl -X POST "$BASE_URL/apis/default/fhir/Patient" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json" \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Patient",
    "name": [
      {
        "use": "official",
        "family": "Smith",
        "given": ["John"]
      }
    ],
    "gender": "male",
    "birthDate": "1980-01-15",
    "telecom": [
      {
        "system": "phone",
        "value": "555-1234",
        "use": "home"
      }
    ]
  }'
```

## Update Patient

```bash
curl -X PUT "$BASE_URL/apis/default/fhir/Patient/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json" \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Patient",
    "id": "{id}",
    "name": [
      {
        "use": "official",
        "family": "Smith",
        "given": ["John", "A."]
      }
    ],
    "gender": "male",
    "birthDate": "1980-01-15"
  }'
```
