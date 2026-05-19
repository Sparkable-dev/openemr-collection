import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'OpenEMR Collection',
      description: 'Developer API reference for OpenEMR — 112+ API requests for interacting with OpenEMR via cURL',
      favicon: '/favicon.svg',
      social: {
        github: 'https://github.com/your-org/openemr-collection',
      },
      sidebar: [
        { label: 'Introduction', link: '/' },
        {
          label: 'Get Started',
          items: [
            { label: 'Prerequisites', link: '/get-started/prerequisites/' },
            { label: 'Installation and Setup', link: '/get-started/installation-and-setup/' },
            { label: 'Environment Variables', link: '/get-started/environment-variables/' },
            { label: 'Import Insomnia Collection', link: '/get-started/import-insomnia-collection/' },
          ],
        },
        {
          label: 'cURL Operations',
          items: [
            {
              label: 'Basic Operations and Auth',
              items: [
                { label: 'Overview', link: '/basic-ops-and-auth/' },
                { label: 'Health Check', link: '/basic-ops-and-auth/health-check/' },
                { label: 'SMART Configuration', link: '/basic-ops-and-auth/smart-configuration/' },
                { label: 'Register Client', link: '/basic-ops-and-auth/register-client/' },
                { label: 'Get Token', link: '/basic-ops-and-auth/get-token/' },
                { label: 'Introspect Token', link: '/basic-ops-and-auth/introspect-token/' },
              ],
            },
            {
              label: 'FHIR R4 Operations',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/fhir-r4/' },
                { label: 'Patient', link: '/fhir-r4/patient/' },
                { label: 'Practitioner', link: '/fhir-r4/practitioner/' },
                { label: 'Encounter', link: '/fhir-r4/encounter/' },
                { label: 'Observation', link: '/fhir-r4/observation/' },
                { label: 'Condition', link: '/fhir-r4/condition/' },
                { label: 'AllergyIntolerance', link: '/fhir-r4/allergyintolerance/' },
                { label: 'Medication', link: '/fhir-r4/medication/' },
                { label: 'Immunization', link: '/fhir-r4/immunization/' },
                { label: 'DiagnosticReport', link: '/fhir-r4/diagnosticreport/' },
                { label: 'Procedure', link: '/fhir-r4/procedure/' },
                { label: 'CarePlan and CareTeam', link: '/fhir-r4/careplan-and-careteam/' },
                { label: 'Coverage', link: '/fhir-r4/coverage/' },
                { label: 'Device', link: '/fhir-r4/device/' },
                { label: 'DocumentReference', link: '/fhir-r4/documentreference/' },
                { label: 'Goal', link: '/fhir-r4/goal/' },
                { label: 'Location', link: '/fhir-r4/location/' },
                { label: 'Organization', link: '/fhir-r4/organization/' },
                { label: 'PractitionerRole', link: '/fhir-r4/practitionerrole/' },
                { label: 'Person', link: '/fhir-r4/person/' },
                { label: 'Provenance', link: '/fhir-r4/provenance/' },
                { label: 'Appointment', link: '/fhir-r4/appointment/' },
                { label: 'RelatedPerson', link: '/fhir-r4/relatedperson/' },
                { label: 'ServiceRequest', link: '/fhir-r4/servicerequest/' },
                { label: 'Specimen', link: '/fhir-r4/specimen/' },
                { label: 'ValueSet', link: '/fhir-r4/valueset/' },
                { label: 'Questionnaire', link: '/fhir-r4/questionnaire/' },
                { label: 'Media', link: '/fhir-r4/media/' },
                { label: 'OperationDefinition', link: '/fhir-r4/operationdefinition/' },
              ],
            },
            {
              label: 'Custom Operations',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/custom-ops/' },
                { label: 'Patient Management', link: '/custom-ops/patient-management/' },
                { label: 'Encounter Management', link: '/custom-ops/encounter-management/' },
                { label: 'SOAP Notes', link: '/custom-ops/soap-notes/' },
                { label: 'Allergy Management', link: '/custom-ops/allergy-management/' },
                { label: 'Medication Management', link: '/custom-ops/medication-management/' },
                { label: 'Medical Problems', link: '/custom-ops/medical-problems/' },
                { label: 'Surgery and Dental', link: '/custom-ops/surgery-and-dental/' },
                { label: 'Appointments', link: '/custom-ops/appointments/' },
                { label: 'Insurance', link: '/custom-ops/insurance/' },
                { label: 'Practitioners', link: '/custom-ops/practitioners/' },
                { label: 'Facilities and Drugs', link: '/custom-ops/facilities-and-drugs/' },
                { label: 'Messaging', link: '/custom-ops/messaging/' },
              ],
            },
          ],
        },
        {
          label: 'Self Hosting OpenEMR',
          items: [
            { label: 'Overview', link: '/self-hosting/' },
            { label: 'Live Demo', link: '/self-hosting/live-demo/' },
          ],
        },
        { label: 'MCP Integration', link: '/mcp-integration/' },
        { label: 'Managed Services', link: '/managed-services/' },
      ],
    }),
  ],
});
