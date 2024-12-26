---
sidebar_position: 2
---
# Role-based Access on Admin Console

Apiculus admin console offers role-based access control (RBAC) for all admin users. The system ships with default roles, with rights and privileges as outlined in this article.

## Admin Roles

The Apiculus system ships with the following default admin roles:

- Admin
- Accounts & Orders (AOM)
- Product
- Marketing
- Service
- Finance
- User (read-only)

:::note
To create new roles or modify any of the existing ones, a ticket may be raised to IndiQus Support. The ability to manage roles on the admin console UI is under development.
:::

## RBAC Details

The system follows the RBAC blueprint as below:

||Admin|AOM|Product|Marketing|Service|Finance|User|
|---|---|---|---|---|---|---|---|
|**Dashboard**|   |   |   |   |   |   |   |
|Utilisation Widgets|Y|N|N|N|Y|N|Y|
|Commercial Widgets|Y|N|Y|Y|N|RW|Y|
|**Accounts**|   |   |   |   |   |   |   |
|Accounts Dashboard|Y|Y|N|N|N|N|Y|
|Account Management|RW|RW|R|R|R|R|R|
|List of Accounts|RW|RW|R|R|R|R|R|
|New Account Creation|RW|RW|N|N|N|N|N|
|Account Details|RW|RW|N|N|R|R|R|
|Account Actions|All|Partial|N|N|Partial|Partial|N|
|Account Reports|Y|N|N|N|N|N|Y|
|**Trials**||||||||
|Account Trials|RW|RW|R|R|R|R|R|
|Subscription Trials|RW|RW|R|R|R|R|R|
|**Services**||||||||
|Availability Zones|RW|R|RW|R|R|R|R|
|Cloud Collections|RW|R|RW|R|R|R|R|
|Default Services|RW|R|RW|R|R|R|R|
|Custom Catalogues|RW|R|RW|R|R|R|R|
|**Billing & Financial**|   |   |   |   |   |   |   |
|Billing Dashboard|Y|N|N|N|N|Y|Y|
|Subscriptions|RW|N|N|N|N|RW|R|
|Invoices|RW|N|N|R|N|RW|R|
|Credit Notes|RW|N|N|N|N|RW|R|
|Transactions|RW|N|N|N|N|RW|R|
|Tax Deductions|RW|N|N|N|N|RW|R|
|Unbilled Charges|RW|N|N|N|N|RW|R|
|Usage Feed|Y|N|N|N|N|Y|Y|
|**Marketplace**|   |   |   |   |   |   |   |
|Dashboard|Y|N|N|N|N|N|Y|
|Quick Plans|RW|R|N|R|R|R|Y|
|**Marketing**|   |   |   |   |   |   |   |
|Promotions|RW|Partial|Partial|RW|R|R|R|
|Coupons|RW|Partial|Partial|RW|R|R|R|
|**Support & Operations**|   |   |   |   |   |   |   |
|Utilisation Dashboard|Y|N|N|N|Y|N|Y|
|Resource Dashboard|Y|N|N|N|Y|N|Y|
|Support Dashboard|Y|N|N|N|N|N|Y|
|Logs|Y|N|N|N|Y|N|Y|
|Requests|Y|Y|N|Y|Y|N|Y|
|**Administration > Platform Settings**|   |   |   |   |   |   |   |
|Profile|RW|R|R|R|R|R|R|
|Admin Users|RW|R|R|N|R|R|R|
|Passwords|RW|R|R|R|R|R|R|
|Signup|RW|N|R|R|R|R|R|
|Automation|RW|R|R|R|R|R|R|
|Reseller|RW|R|R|R|R|R|R|
|General|RW|R|R|N|R|R|R|
|Security|RW|R|R|R|R|R|N|
|Account Defaults|RW|R|R|R|R|R|R|
|**Administration > Financials and Business**||||||||
|Billing|RW|R|R|R|R|R|N|
|Tax Deduction|RW|N|R|N|N|N|N|
|Additional Fields|RW|N|R|N|R|N|N|
|Quick Plans|RW|R|R|N|R|N|N|
|Payment Gateways|RW|R|R|N|N|N|N|
|Currencies|RW|R|R|R|R|R|R|
|**Administration > Marketing & Communications**||||||||
|Email|RW|N|R|N|N|N|N|
|SMS|RW|N|R|N|N|N|N|
|Links|RW|R|R|R|N|R|R|
|Content|RW|R|R|R|N|R|R|
|Brand Assets|RW|R|R|R|N|R|R|
|Restricted Domains|RW|R|R|R|N|R|N|
|**Administration > Extensions**||||||||
|Google|RW|N|R|N|N|N|N|
|AWS|RW|N|R|R|N|N|N|
|Custom Scripts|RW|N|R|R|N|N|N|

Y = Yes/Visible  
N = No/Not visible  
R = Read/Option visible but in disabled state  
RW = Read & Write/Option visible and can take action  
Partial = Limited access available  

:::note
the above blueprint only applies to the **Admin Console** and not to any other **ISV consoles** .
:::




