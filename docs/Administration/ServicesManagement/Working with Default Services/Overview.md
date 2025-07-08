---
sidebar_position: 1
---
# Overview

Default Services (DS) is the catalogue available to all subscribers, unless specified otherwise. In other words, the DS catalogue defines the default rules for availability of any supported Service via configurations of:

- Whether a Service should be available or not?
- What Availability Zone(s) should a Service be delivered from?
- Which Collections and Collection Items should be delivered as part of the containing Service?
- What prices to deliver the Service components at?
- What billing and provisioning logic should be followed?

Each Service in the DS catalogue has the following control levers:

- **Availability of Service as part of the DS catalogue** - This is a master switch that can be used in scenarios where a Service might be deliverable only to a select subset of customers and not to everyone by default. For example, Kubernetes may be available only to customers who have had one month of successful billing; or Metal Instances may only be available to high-end Enterprise customers.
- **Options to govern billing, delivery, and provisioning parameters** - Each Service in the DS catalogue has options to control billing pro-ration, the option to choose which AZs to enable, and whether the Service should follow a self-service provisioning model or need approval from the service provider admin; choosing an approval-based provisioning model presents other options around how to handle approvals.
- **Options to control pricing and availability of Collections and Collection Items** - For each AZ enabled as part of a Service in the DS catalogue, its mapped Collections and Collection Items will become available for configuring pricing and whether to deliver them or not.

## Publishing and Managing Default Services

The DS catalogue needs to be published before it can be made visible/available to the customers. This can be done by clicking on **PUBLISH DEFAULT CATALOGUE** on the **Services > Default Services** section of Apiculus Admin Console. Other points to consider while working with the DS catalogue are:

- Any new Collection or Collection Item published in the system will get added to the corresponding Service in the catalogue in a disabled state and needs to be manually enabled to be part of the catalogue.
- Any change made to the Availability Zones section (inside a Service in the DS catalogue) requires the catalogue to be updated for the AZ and its collection details to show up in the catalogue.
- The DS catalogue does not differentiate between self-service, admin-assisted or admin-initiated accounts.




