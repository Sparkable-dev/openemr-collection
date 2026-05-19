---
title: Appointments
description: Custom OpenEMR appointment endpoints — Search, Create, Delete
---

## Search Appointments (Patient)

Search appointments for a specific patient:

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/appointment" \
  -H "Authorization: Bearer $TOKEN"
```

## Search All Appointments

Search all appointments across the system:

```bash
curl "$BASE_URL/apis/default/api/appointment" \
  -H "Authorization: Bearer $TOKEN"
```

With date filters:

```bash
curl "$BASE_URL/apis/default/api/appointment?date_from=2024-01-01&date_to=2024-12-31" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Appointment

```bash
curl -X POST "$BASE_URL/apis/default/api/patient/{patientId}/appointment" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2024-04-20",
    "time": "14:30",
    "reason": "Annual physical",
    "provider_id": "{providerId}",
    "facility_id": "{facilityId}"
  }'
```

## Delete Appointment

```bash
curl -X DELETE "$BASE_URL/apis/default/api/appointment/{id}" \
  -H "Authorization: Bearer $TOKEN"
```
