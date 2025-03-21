---
sidebar_position: 1
---
# Overview

The Billing and Financials section is designed to give complete details of the Apiculus billing system. This section gives administrators of Apiculus complete access to customers’ billing records, invoices, transactions, and other financial items supported on Apiculus.

:::note
All sections allow downloading of data as a .csv file.
:::

## Subscriptions

This section shows records of all customers’ subscriptions. A subscription is created whenever a resource is purchased (or service is activated) on the Apiculus Cloud Console.

Available actions:

- [Deactivating a Subscription](DeactivatingaSubscription)
- [Updating Subscription Charges](UpdatingSubscriptionCharges)
- [Adding One-time Charges and Discounts](AddingOne-timeChargesandDiscounts.md)

![Billing and Financials Overview](img/Overview1.png)

## Invoices

Invoices are generated on Apiculus for the previous month’s usage on the 1st of each new month. These invoices are automatically generated and emailed to customers.

Available actions:

- [Viewing and Downloading Invoices](ViewinganddownloadingInvoices.md)
- [Resending an Invoice](AboutInvoice.md)
- [Creating a Credit Note Against an Invoice](CreatingaCreditNoteAgainstanInvoice)

![Billing and Financials Overview](img/Overview2.png)

:::note
The invoice template is customisable via a support request to the Apiculus (By Yotta) Support team. However, certain information, such as the prefix for the invoice numbering, payment period, and dunning rules are customisable from the Apiculus Admin Console.
:::

## Credit Notes

Unlike invoices that are generated automatically, a credit note is a supplementary invoice that needs to be manually created. The Credit Notes section lists all such manually created supplementary invoices, along with offering a way for admins to create these credit notes.

Available actions:

- [Creating Credit Notes in Bulk](/docs/Administration/BillingandFinancials/CreatingCreditNotesinBulk)
- [Viewing and Downloading Credit Notes](/docs/Administration/BillingandFinancials/ViewingandDownloadingCreditNotes)
- [Resending Credit Notes](/docs/Administration/BillingandFinancials/ResendingCreditNotes)

:::note
A credit note can be created by downloading the .xls or .ods template and uploading it back to the UI.
:::

![Billing and Financials Overview](img/Overview3.png)

## Transactions

All customer transaction records (successful, failed, and pending) are displayed in the Transactions section. For transactions made using an online payment gateway via Apiculus, records are automatically fetched.

Available actions:

- [Recording Transactions and Offline Payments](/docs/Administration/BillingandFinancials/RecordingTransactionsandOfflinePayments)
- [Viewing Transaction Details](/docs/Administration/BillingandFinancials/ViewingTransactionDetails)
- [Reversing Transactions](/docs/Administration/BillingandFinancials/ReversingTransactions)
- [Viewing Receipts and Acknowledgments](/docs/Administration/BillingandFinancials/ViewingReceiptsandAcknowledgments)

![Billing and Financials Overview](img/Overview4.png)

## Tax Deductions

Apiculus supports recording quarterly tax deductions for all customer invoices. The Tax Deductions section lists all such tax deductions and allows for adding new items. The Tax Deductions feature is optional and must be enabled from the global settings, where admins also get the ability to define their country’s fiscal period and quarters.

Available actions:

- [Recording Tax Deductions](RecordingTaxDeductions)
- [Viewing Tax Deductions](ViewingTaxDeductions)

![Billing and Financials Overview](img/Overview5.png)

## Unbilled Charges

The Unbilled Charges show details of the current month’s billing, i.e., all the billing data from the generation of the previous invoice till the generation of the next invoice.

Available actions:

- None; list view-only

![Billing and Financials Overview](img/Overview6.png)

Unbilled Charges may also show some negative line items, which indicate a pro-rated subscription exit, or credit or discount that’s applied for a customer. 

## Usage Feed

The Usage Feed shows the total units of each service or resource consumed in the previous month. This is a view-only section that shows each subscription line item, it's unit of measurement, charge type, and the total units consumed in the chosen billing cycle.

Available actions:

- None; list view-only

![Billing and Financials Overview](img/Overview7.png)




