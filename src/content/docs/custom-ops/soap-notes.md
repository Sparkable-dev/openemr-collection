---
title: SOAP Notes
description: Custom OpenEMR SOAP note endpoints — Read, Create
---

SOAP notes are clinical documentation following the Subjective, Objective, Assessment, Plan structure.

## Read SOAP Note

Retrieve the SOAP note for a specific encounter:

```bash
curl "$BASE_URL/apis/default/api/encounter/{encounterId}/soap_note" \
  -H "Authorization: Bearer $TOKEN"
```

## Create SOAP Note

```bash
curl -X POST "$BASE_URL/apis/default/api/encounter/{encounterId}/soap_note" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "subjective": "Patient reports headache for 3 days, pain level 5/10",
    "objective": "BP 120/80, HR 72, Temp 98.6F",
    "assessment": "Tension headache, likely stress-related",
    "plan": "Rest, hydration, acetaminophen 500mg PRN, follow up in 1 week if no improvement"
  }'
```
