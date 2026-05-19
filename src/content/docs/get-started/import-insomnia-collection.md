---
title: Import Insomnia Collection
description: How to import the 112+ API requests into Insomnia for GUI-based testing
---

[Insomnia](https://insomnia.rest/) is a powerful API client that lets you browse, test, and debug REST APIs. The OpenEMR Collection can be imported as an Insomnia collection for a visual, organized experience.

## Download the Collection

Download the Insomnia export file from the repository:

```bash
curl -O https://raw.githubusercontent.com/your-org/openemr-collection/main/insomnia-collection.json
```

## Import into Insomnia

1. Open **Insomnia**
2. Click **Import** (top-left)
3. Select **Import from File**
4. Choose the downloaded `insomnia-collection.json`
5. The collection will appear in the sidebar with all 3 folders:
   - **Basic Operation and Auth** (9 requests)
   - **FHIR R4 Operations** (58 requests)
   - **Custom Operations** (45 requests)

## Set Environment Variables

1. In Insomnia, go to **Environments** (top-left)
2. Select **Manage Environments**
3. Add a **Base Environment** with:

```json
{
  "base_url": "http://localhost:8300",
  "site": "default",
  "oe_user": "admin",
  "oe_pass": "pass",
  "client_id": "your_client_id",
  "client_secret": "your_client_secret",
  "token": "your_access_token"
}
```

4. Use `{{ base_url }}` and `{{ token }}` in your requests

## Using Variables in Requests

All requests use these Insomnia template tags:

- `{{ base_url }}` — replaces `$BASE_URL`
- `{{ token }}` — replaces `$TOKEN`
- `{{ site }}` — replaces `$SITE`

This makes it easy to switch between environments (local, staging, production) by changing just the environment variables.
