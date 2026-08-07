---
sidebar_position: 5.1
---
# Generating a Proforma Invoice and Adding a Transaction

A Proforma Invoice (PI) is a preliminary invoice issued before the final invoice and is typically used to facilitate advance payments for added services. If you require specific services or resources, you can submit your requirements to the admin. 

Based on the requested services, estimated charges, and duration the admin generates a proforma invoice. While adding the advance payment, the transaction can be made against open PIs. Admins can add transactions that have been made by the subscriber against a PI or multiple PIs 

This section covers the following topics: 
- [Generating a PI](#generating-a-pi) 
- [Adding a Transaction](#adding-a-transaction)

## Generating a PI

To generate a PI, follow these steps: 

1. Navigate to **Billing and Financial > Proforma Invoice**. The following screen appears: ![Billing and Financial](img/ProformaInvoice1.png)
2. Click the **Generate PI** button. The following screen appears:![Generate Proforma Invoice Screen](img/GenerateProformaInvoiceScreen1.png)
3. Provide the following details: 
	- Select the **Customer Name** from the dropdown menu. 
	- Select the **PI Date**.
	- Select the **PI Duration** from the dropdown menu (1 month, 3 months, 6 months, 9 months, and 12 months). 
4. Click the **Add Services** button. The following screen appears: ![Add Service Screen](img/AddServiceScreen1.png)
5. Provide the following details: 
	- Enter the **Product Family**.
	- Enter the **HSN/SAC Code**. 
	- Select the **Charge Type** (Fixed, Usage, or One-time). 
	- Enter the **Quantity**. 
	- Enter the **Monthly Price**. 

	:::note
	The duration is fixed and is applied uniformly to all the services included in the proforma invoice. It cannot be modified for individual services.
	:::
6. Click the **Confirm** button. After the confirmation, the details get added as shown in the following screen:
	![Add Services](img/AddServiceScreen2.png)
7. To add additional services to the proforma invoice, click **Add Services**. You can also modify an existing service by clicking the **Edit** icon. 
8. Review the **PI Summary** and click the **Submit PI** button. The following screen appears:
	![Confirmation Screen](img/ConfirmationScreen.png)
9. Click the **Submit** button.

The PI is generated successfully.

![Added PI](img/AddedPI.png)

### Downloading Proforma Invoice

To download the PI, click the download icon (highlighted in red).

![Download Highlighted](img/Downloadhighlighted.png)


### Resending Proforma Invoice

To resend the PI, follow these steps: 

1. Click the resend proforma invoice icon (highlighted in red). ![Resending Proforma Invoice](img/ResendingProformaInvoice1.png)
	The following screen appears:![Resending Proforma Invoice](img/ResendingProformaInvoice2.png)
2. Click the **Yes** button.


## Adding a Transaction

You can add a transaction against a single or multiple PIs in a single payment. To do this, follow these steps: 

1. Click the **Add Transaction** button. The following screen appears:![Adding Transaction](img/AddTransaction.png)
2. Provide the following details: 
	- Select the **Customer Name** from the dropdown menu. 
	- Select the **Posting Date.**
	- Enter the **Amount Received**. 
	- Select the **Transaction Date**. 
	- Select the **Payment Mode**.
	- Enter the **Transaction Reference**. 
	- Enter the **Narration**, if required.
3. An editable table is displayed, allowing you to modify the distribution of the received amount across one or more PIs. 
4. If any amount remains undistributed after allocation to the PIs, it is automatically recorded as an Advance Payment. 
	:::note
		If there are no pending PIs then distributed table is not visible and you can add the entire amount to advance amount. 
	:::
5. Click the **Submit** button. The following screen appears:![Edit Screen](img/EditScreen.png)
6. Click the **Confirm** button. 


The transaction is added successfully, and accordingly, the amount due column is updated for each respective PI.