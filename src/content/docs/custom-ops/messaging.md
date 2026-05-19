---
title: Messaging
description: Custom OpenEMR messaging and referral endpoints — Search transactions, Create messages
---

## Search Transactions/Referrals

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/transaction" \
  -H "Authorization: Bearer $TOKEN"
```

Search by type:

```bash
curl "$BASE_URL/apis/default/api/patient/{patientId}/transaction?type=referral" \
  -H "Authorization: Bearer $TOKEN"
```

## Create Message

```bash
curl -X POST "$BASE_URL/apis/default/api/patient/{patientId}/message" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "recipient_id": "{providerId}",
    "subject": "Referral for Cardiology",
    "body": "Please review patient for potential cardiac consultation. Recent ECG shows abnormal findings.",
    "type": "clinical",
    "priority": "normal"
  }'
```
