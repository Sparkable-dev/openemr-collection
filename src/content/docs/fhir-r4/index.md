---
title: FHIR R4 Operations
description: Overview of FHIR R4 resources available in OpenEMR
---

This folder contains **58 requests** for interacting with OpenEMR's FHIR R4 API. These endpoints follow the HL7 FHIR R4 specification.

## Base Path

All FHIR requests use:

```
{BASE_URL}/apis/default/fhir/{ResourceName}
```

## Common Headers

Every FHIR request requires:

| Header | Value |
|--------|-------|
| `Authorization` | `Bearer $TOKEN` |
| `Accept` | `application/fhir+json` |

Create/Update requests also require:

| Header | Value |
|--------|-------|
| `Content-Type` | `application/fhir+json` |

## Standard Operations

| Operation | HTTP Method | Path |
|-----------|-------------|------|
| **Search** | `GET` | `/apis/default/fhir/{Resource}` |
| **Read** | `GET` | `/apis/default/fhir/{Resource}/{id}` |
| **Create** | `POST` | `/apis/default/fhir/{Resource}` |
| **Update** | `PUT` | `/apis/default/fhir/{Resource}/{id}` |

## Search Parameters

Most search endpoints support:

- `_id={id}` — Search by resource ID
- `name={name}` — Search by name (Patient, Practitioner, etc.)
- `identifier={value}` — Search by identifier
- `patient={id}` — Search by patient reference
- `date={date}` — Search by date range
- `status={status}` — Search by status
- `_count={n}` — Limit results
- `_sort={field}` — Sort results

## Available Resources

| # | Resource | Operations |
|---|----------|------------|
| 1 | Patient | Search, Read, Create, Update |
| 2 | Practitioner | Search, Read, Create, Update |
| 3 | Encounter | Search, Read |
| 4 | Observation | Search |
| 5 | Condition | Search, Read |
| 6 | AllergyIntolerance | Search, Read |
| 7 | MedicationRequest | Search |
| 8 | Medication | Search, Read |
| 9 | MedicationDispense | Search, Read |
| 10 | Immunization | Search, Read |
| 11 | DiagnosticReport | Search, Read |
| 12 | Procedure | Search, Read |
| 13 | CarePlan | Search |
| 14 | CareTeam | Search, Read |
| 15 | Coverage | Search |
| 16 | Device | Search, Read |
| 17 | DocumentReference | Search |
| 18 | Goal | Search, Read |
| 19 | Location | Search, Read |
| 20 | Organization | Search, Read |
| 21 | PractitionerRole | Search, Read |
| 22 | Person | Search, Read |
| 23 | Provenance | Search, Read |
| 24 | Appointment | Search, Read |
| 25 | RelatedPerson | Search, Read |
| 26 | ServiceRequest | Search, Read |
| 27 | Specimen | Search |
| 28 | ValueSet | Search |
| 29 | Questionnaire | Search |
| 30 | QuestionnaireResponse | Search |
| 31 | Media | Search |
| 32 | OperationDefinition | Search |
