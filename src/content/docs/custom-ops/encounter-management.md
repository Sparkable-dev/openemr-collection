---
title: Encounter Management
description: Custom OpenEMR encounter management endpoints — Search, Create, Read, Update
---

## Search Encounters

```bash
curl "$BASE_URL/apis/default/api/encounter" \
  -H "Authorization: Bearer $TOKEN"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/api/encounter?patient_id={patientId}" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Encounter

```bash
curl -X POST "$BASE_URL/apis/default/api/encounter" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "patient_id": "{patientId}",
    "encounter_type": "office_visit",
    "date": "2024-03-15",
    "reason": "Follow-up checkup",
    "facility_id": "{facilityId}",
    "provider_id": "{providerId}"
  }'
```

## Read Encounter

```bash
curl "$BASE_URL/apis/default/api/encounter/{id}" \
  -H "Authorization: Bearer $TOKEN"
```

## Update Encounter

```bash
curl -X PUT "$BASE_URL/apis/default/api/encounter/{id}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "reason": "Updated reason for visit",
    "encounter_type": "follow_up"
  }'
```
