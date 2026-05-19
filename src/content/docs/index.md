---
title: Introduction
description: What is OpenEMR Collection and how it helps developers interact with OpenEMR
hero:
  tagline: 112+ API requests • 3 operation categories • cURL-based
  actions:
    - text: Get Started
      link: /get-started/prerequisites/
      icon: right-arrow
    - text: View on GitHub
      link: https://github.com/your-org/openemr-collection
      icon: external
      variant: minimal
---

## What is OpenEMR Collection?

**OpenEMR Collection** is a developer API reference for [OpenEMR](https://www.open-emr.org/) — the popular open-source electronic health record (EHR) system. This collection documents **112+ API requests** organized across **3 folders** that developers can use to interact with OpenEMR via cURL commands.

Whether you're building a healthcare integration, automating clinical workflows, or learning about FHIR-based EHR APIs, this collection provides ready-to-use cURL examples for every endpoint.

## What is OpenEMR?

OpenEMR is a free and open-source electronic health records and medical practice management application. It features:

- **FHIR R4** API support for standardized healthcare data exchange
- **RESTful** APIs for custom operations
- **OAuth2** authentication with SMART on FHIR
- Full patient management, clinical decision support, and billing

## API Categories

| Category | Requests | Description |
|----------|----------|-------------|
| **Basic Operations and Auth** | 9 | Health checks, OAuth2, SMART on FHIR configuration, token management |
| **FHIR R4 Operations** | 58 | Standardized FHIR resources — Patient, Practitioner, Encounter, Observation, and more |
| **Custom Operations** | 45 | OpenEMR-specific REST endpoints for practice management |

## Quick Start

```bash
export BASE_URL=http://localhost:8300
export TOKEN=your_access_token

# Health check
curl "$BASE_URL/apis/default/fhir/metadata" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## Video Walkthrough

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: 8px;">
  <iframe src="https://www.youtube.com/embed/placeholder" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allowfullscreen></iframe>
</div>

## Tech Stack

| Component | Technology |
|-----------|------------|
| EHR Platform | OpenEMR 7.0+ |
| API Standard | FHIR R4 (HL7) |
| Record Storage | Medplum |
| Auth Protocol | OAuth 2.0 / SMART on FHIR |
| Documentation | Astro Starlight |
| Demo Environment | Docker Compose |

## Project Structure

```
openemr-collection/
├── Basic Operation and Auth/     # 9 requests
├── FHIR R4 Operations/           # 58 requests
└── Custom Operations/            # 45 requests
```
