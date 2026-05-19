---
title: Questionnaire (FHIR)
description: FHIR R4 Questionnaire and QuestionnaireResponse resources — Search
---

## Questionnaire

### Search Questionnaire

```bash
curl "$BASE_URL/apis/default/fhir/Questionnaire" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by name:

```bash
curl "$BASE_URL/apis/default/fhir/Questionnaire?name=Patient%20Intake" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by status:

```bash
curl "$BASE_URL/apis/default/fhir/Questionnaire?status=active" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

## QuestionnaireResponse

### Search QuestionnaireResponse

```bash
curl "$BASE_URL/apis/default/fhir/QuestionnaireResponse" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by patient:

```bash
curl "$BASE_URL/apis/default/fhir/QuestionnaireResponse?patient=Patient/{patientId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```

Search by questionnaire:

```bash
curl "$BASE_URL/apis/default/fhir/QuestionnaireResponse?questionnaire=Questionnaire/{qId}" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/fhir+json"
```
