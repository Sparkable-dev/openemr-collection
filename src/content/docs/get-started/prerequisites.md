---
title: Prerequisites
description: What you need before using the OpenEMR Collection
---

Before you begin using the OpenEMR API collection, ensure you have the following:

## Required Software

- **OpenEMR instance** — running and accessible (local or remote)
- **curl** — command-line tool for making HTTP requests
  ```bash
  curl --version
  ```
- **jq** (optional) — for pretty-printing JSON responses
  ```bash
  jq --version
  ```

## Access Credentials

You will need administrator credentials for your OpenEMR instance:

- **Username** — typically `admin`
- **Password** — set during OpenEMR installation
- **Site ID** — usually `default`

## Network

- OpenEMR must be accessible at `http://localhost:8300` (default Docker setup)
- Port `8300` must not be blocked by a firewall
- For remote instances, replace `localhost` with your server's IP or domain

## Docker (Recommended)

If you don't have OpenEMR running yet, you'll need Docker installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac)
- [Docker Engine](https://docs.docker.com/engine/install/) (Linux)

See the [Installation and Setup](/get-started/installation-and-setup/) guide to get OpenEMR running.
