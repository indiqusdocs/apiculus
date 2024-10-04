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
|Commercial Widgets|Y|N|Y|Y|N|Y|Y|
|**Accounts**|   |   |   |   |   |   |   |
|Accounts Dashboard|Y|Y|N|N|N|N|Y|
|Account Management|RW|RW|R|R|R|R|R|
|List of accounts|RW|RW|R|R|R|R|R|
|New account creation|RW|RW|N|N|N|N|N|
|Account details|RW|RW|N|N|R|R|R|
|Account actions|All|Partial|N|N|Partial|Partial|N|
|Account reports|Y|N|N|N|N|Y|Y|
|**Trials**||||||||
|Account Trials|RW|||||||
|Subscription Trials|RW|||||||
|**Services**||||||||
|Availability Zones|RW|||||||
|Cloud Collections|RW|||||||
|Default Services|RW|||||||
|Custom Catalogues|RW|||||||
|**Billing & Financial**|   |   |   |   |   |   |   |
|Billing Dashboard|Y|N|N|N|N|Y|Y|
|Subscriptions|RW|N|N|N|N|RW|R|
|Invoices|RW|N|N|N|N|RW|R|
|Credit Notes|RW|||||||
|Transactions|RW|N|N|N|N|RW|R|
|Tax Deductions|RW|||||||
|Unbilled Charges|RW|N|N|N|N|RW|R|
|Usage Feed|Y|N|N|N|N|Y|Y|
|**Marketplace**|   |   |   |   |   |   |   |
|Dashboard|Y|N|N|N|Y|N|Y|
|Quick Plans|RW|N|N|N|Y|N|Y|
|**Marketing**|   |   |   |   |   |   |   |
|Promotions|RW|||||||
|Coupons|RW|||||||
|**Support & Operations**|   |   |   |   |   |   |   |
|Utilisation Dashboard|Y|N|N|N|Y|N|Y|
|Resource Dashboard|Y|N|N|N|Y|N|Y|
|Support Dashboard|Y|N|N|N|Y|N|Y|
|Logs|Y|N|N|N|Y|N|Y|
|Requests|Y|Y|N|Y|Y|N|Y|
|**Administration > Platform Settings**|   |   |   |   |   |   |   |
|Profile|RW|N|N|N|N|N|N|
|Admin Users|RW|N|N|N|N|N|N|
|Passwords|RW|N|N|N|N|N|N|
|Signup|RW|N|N|N|N|N|N|
|Automation|RW|N|N|N|N|N|N|
|Reseller|RW|N|N|N|N|N|N|
|General|RW|N|N|N|N|N|N|
|Security|RW|N|N|N|N|N|N|
|Account Defaults|RW|N|N|N|N|N|N|
|**Administration > Financials and Business**|RW|N|N|N|N|N|N|
|Billing|RW|N|N|N|N|N|N|
|Tax Deduction|RW|N|N|N|N|N|N|
|Additional Fields|RW|N|N|N|N|N|N|
|Quick Plans|RW|N|N|N|N|N|N|
|Payment Gateways|RW|N|N|N|N|N|N|
|Currencies|RW|N|N|N|N|N|N|
|**Administration > Marketing & Communications**|RW|N|N|N|N|N|N|
|Email|RW|N|N|N|N|N|N|
|SMS|RW|N|N|N|N|N|N|
|Links|RW|N|N|N|N|N|N|
|Content|RW|N|N|N|N|N|N|
|Brand Assets|RW|N|N|N|N|N|N|
|Restricted Domains|RW|N|N|N|N|N|N|
|**Administration > Extensions**|RW|N|N|N|N|N|N|
|Google|RW|N|N|N|N|N|N|
|AWS|RW|N|N|N|N|N|N|
|Custom Scripts|RW|N|N|N|N|N|N|

Y = Yes / Visible  
N = No / Not visible  
R = Read / Option visible but in disabled state  
RW = Read & Write / Option visible and can take action  
Partial = Limited access available  

:::note
the above blueprint only applies to the **Admin Console** and not to any other **ISV consoles** .
:::