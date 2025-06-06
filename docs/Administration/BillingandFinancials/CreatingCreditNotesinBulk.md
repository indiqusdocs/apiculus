---
sidebar_position: 8
---
# Creating Credit Notes in Bulk

Apiculus offers the means to upload credit notes in bulk (generate unique credit notes based on multiple linked invoices). 

Navigate to **Billing and Financials > Credit Notes**. Then, click the **Add Credit Notes** button. ![Creating Credit Notes in Bulk](img/CreatingCreditNotesinBulk2.png)

You can create credit notes in bulk in two steps:
1. Download the credit notes spreadsheet template available as .ods and .xlsx files. 
2. Upload the correctly filled file(s). ![Creating Credit Notes in Bulk](img/CreatingCreditNotesinBulk1.png)

:::note
Each row of the file(s) being uploaded should have a unique combination of column cells; there should be no empty cells in the file being uploaded, except for tax amount and tax name. For invoices where multiple line items need to be credited against, the exact number of rows should be created.
:::
### Example
![Creating Credit Notes in Bulk](img/CreatingCreditNotesinBulk.png)
This will generate two credit notes:

- **ADCINV341-C** with the line items:
    - Product model 1-1
    - Product model 1-2
- **ADCINV329-C** with the line items:
    - Product model 2-1
    - Product model 2-2
    - Product model 2-3

Upon creation, the account owners of the linked invoices will be notified of the credit note(s).




