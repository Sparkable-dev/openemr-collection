---
title: Environment Variables
description: Required environment variables for the OpenEMR API collection
---

The cURL examples in this collection use shell variables. Export these before running any commands:

## Base Configuration

```bash
# OpenEMR server URL
export BASE_URL=http://localhost:8300

# OpenEMR site (usually "default")
export SITE=default
```

## Admin Credentials

```bash
# OpenEMR admin username
export OE_USER=admin

# OpenEMR admin password
export OE_PASS=pass
```

## OAuth2 Client Credentials

After [registering a client](/basic-ops-and-auth/register-client/), you will receive a client ID and secret:

```bash
# OAuth2 client ID (from registration)
export CLIENT_ID=your_client_id

# OAuth2 client secret (from registration)
export CLIENT_SECRET=your_client_secret
```

## Access Token

After [getting a token](/basic-ops-and-auth/get-token/):

```bash
# Bearer token for API requests
export TOKEN=your_access_token
```

## Complete Setup

Run all exports together:

```bash
export BASE_URL=http://localhost:8300
export SITE=default
export OE_USER=admin
export OE_PASS=pass
export CLIENT_ID=your_client_id
export CLIENT_SECRET=your_client_secret
export TOKEN=your_access_token
```

For convenience, add these to a `.env` file and source it:

```bash
source .env
```
