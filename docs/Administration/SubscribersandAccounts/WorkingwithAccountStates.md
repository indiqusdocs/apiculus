---
sidebar_position: 3
---
# Working with Account States

Apiculus enables customer life cycle management using states depending on where the relationship with individual customers stands in their life cycle. The following states are supported:

- **Active** - These are accounts that are active and have no special restrictions applied to their usage of cloud services. Active accounts can freely use the cloud to create and manage their resources, work with payments and invoices, maintain their team and profiles, and manage support interactions in the usual manner. 
	:::note
	Credit limits, resource limits, and other general availability restrictions apply as usual.
	:::
- **Restricted** - These are accounts that can operate existing resources but are not allowed to purchase any new resources. This restriction is forced and supersedes any general usage or availability restrictions. Restricted accounts can be reactivated.
- **Disabled** - These are accounts that can neither operate existing resources nor can they purchase new ones. This is similar to a 'soft-shutdown' or 'suspension' where the only permitted action is to make a payment to reactivate access to the cloud services. No resource belonging to a disabled account are deleted. Disabled accounts can be reactivated manually from the Admin Console.
- **Terminated** - These accounts typically signify an end-of-life (EoL) state. In such cases, all the account's resources are deleted and non-recoverable. Terminated or EoL accounts can not be reactivated, as termination is an irreversible action.

## Changing Account States from Admin Console

Account states can be changed by going into the target account and selecting the appropriate action from the ellipsis (...) menu at top of the account details pane, next to the **Impersonate** button.

## Changing Account States using Automation

Most automation policies created on Apiculus provide the option to automatically change account states whenever a specified trigger condition is met. This can be used to automate scenarios like dunning, trial expiry, or disabling access for unverified accounts. These automated state changes can be configured using the Automation section, either globally or at the account level. Automated state changes can be overridden (unless terminated automatically) manually.

:::caution
It is recommended that an automated termination action be used with utmost caution, as there will be no way to reverse the action.
:::

## Changing Account States using API

The Apiculus Accounts API provides options to manage account states programmatically. Programmatic state changes can be overridden (unless terminated) manually.

:::note
It is recommended that programmatic termination be used with utmost caution, as there will be no way to reverse the action.
:::




