---
title: Custom Operations
description: Overview of OpenEMR-specific custom REST API operations
---

This folder contains **45 requests** for OpenEMR-specific REST API endpoints. These are not FHIR-standardized — they are custom endpoints specific to OpenEMR's practice management features.

## Base Path

All custom operations use:

```
{BASE_URL}/apis/default/api/{endpoint}
```

## Headers

All requests require:

| Header | Value |
|--------|-------|
| `Authorization` | `Bearer $TOKEN` |
| `Accept` | `application/json` |

Write operations (POST, PUT) also require:

| Header | Value |
|--------|-------|
| `Content-Type` | `application/json` |

## Operation Groups

| Group | Requests | Description |
|-------|----------|-------------|
| Patient Management | 4 | List, Read, Create, Update patients |
| Encounter Management | 4 | Search, Create, Read, Update encounters |
| SOAP Notes | 2 | Read, Create clinical notes |
| Allergy Management | 5 | Search, Create, Read, Update, Delete allergies |
| Medication Management | 3 | Create, Read, Update medications |
| Medical Problems | 3 | Search, Create, Delete problems |
| Surgery and Dental | 6 | Search, Create surgeries and dental issues |
| Appointments | 3 | Search, Create, Delete appointments |
| Insurance | 5 | Search, Update insurance, types, companies |
| Practitioners | 4 | Search, Read, Create practitioners |
| Facilities and Drugs | 4 | Facilities, drugs, prescriptions, immunizations |
| Messaging | 2 | Search transactions, create messages |
