---
sidebar_position: 2
---
# Creating and Updating Subscriber Accounts

## Creating New Subscriber Accounts

You can create new subscriber accounts by clicking the **+ New Account** button above the accounts listing.![Account Management Overview](img/AccountManagementOverview.png)

The general account creation flow is as follows: 

1. Draft
2. Awaiting Confirmation
3. Active 
4. Pending Profile Completion

:::note
Admins can create accounts from the Admin Console regardless of the [signup mode](/docs/GettingStarted/SignupConfigurations/SignupSettings) specified under platform configurations.
:::

### Managing Self-Signups

Self-signups are accounts that are created without admin intervention. The Apiculus system automates sending of the email verification code and only the subscriber needs to perform the required actions. Until the subscriber verifies their email, self-signup accounts will be visible under the **Awaiting Confirmation** section of account management. Admins can resend the verification email to these accounts.
:::note
Self-signup accounts treated as 'retail' accounts, are created with **R** in their account IDs and follow all the configurations and rules applied for self-signup accounts.  
:::

### Managing Admin-Assisted and Admin-Initiated Signups

The only difference between admin-assisted and admin-initiated signups is that, with admin-assisted signups, when the active [signup mode](/docs/GettingStarted/SignupConfigurations/SignupSettings), a form will be displayed to the subscriber who is signing up. This form will land in the **Drafts** queue as a semi-filled form. Admin-initiated signups, on the other hand, need to be started from scratch in the account management section.

:::note
Admin-assisted and admin-initiated accounts are treated as 'enterprise' accounts, are created with an **E** in their account IDs, and follow all the configurations and rules applied to admin-assisted accounts.
:::

## Creating Accounts Using the Apiculus Accounts API

Subscriber accounts can be created using the Apiculus Accounts API. These accounts bypass all verification steps and can be used to create subscriber accounts programmatically.

:::note
Accounts created using the API are treated as 'enterprise' accounts, are created with **E** in their account IDs and take all the configurations and rules applied for admin-assisted accounts.  
:::
## Updating Accounts

Account information can be updated, and other available actions can be performed by going into the target subscriber account in the Apiculus Admin Console.




