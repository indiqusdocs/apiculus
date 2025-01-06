---
sidebar_position: 1
---
# Creating RHEL Instances
Before creating a RHEL instance, it is important to plan the architecture, networking and access to the RHEL Instances. 

To create a RHEL instance, follow these steps:

1. Navigate to **Compute > RHEL Instances**.
   ![RHEL Instances](img/RHEL3.png)
2. Click the **NEW RHEL INSTANCE** button. 
   ![RHEL Instances](img/RHEL2.png)
3. Choose an **Availability Zone**, which is the geographical region where your Instance will be deployed. 
4. Select the **Destination** and then the **Network** from the drop-downs.
5. Select the **OS Image** to run on your Instance.
6. Select the **Compute Pack** from the available compute collections.
   ![](img/RHEL6.png)
9. Select the **Disk Configuration** from the available **SSD**/**HDD** disk packs. You can use the free size option to specify the Root Disk size.
10. Select the option to **Protect this Instance**.
11. **Choose an Authentication Method**: 
    - **Use SSH key pair**: To view all the SSH key pairs present in your account, click the **Use SSH key pair** option. If your account doesn’t have any SSH key pair, then you can click the **Generate a new key pair** or upload the key pair by clicking the **Upload a key pair** option. 
    - **Use root user password**: On selecting Use root user password, **Also email me the password** option is displayed. If you select this option, the password, along with the details, for instance, will be emailed to your registered email ID.
      ![RHEL Instance Creation](img/RHEL7.png)
12. In the **Name Your RHEL Instance** field, enter the desired name for your RHEL instance.
13. Verify the Estimated Cost of your Windows Instance based on the chosen specifications from the Summary and Estimated Costs Section (Here, both Hourly and Monthly Prices summary are displayed).
14. Click on the check box after going through the policies mentioned by your cloud service provider.
15. Choose the BUY HOURLY or BUY MONTHLY option. A confirmation window appears and the price summary will be displayed along with the discount codes if you have any in your account. 
    - You can apply any of the discount codes listed by clicking on the **APPLY** button. 
    - You can also remove the applied discount code by clicking on the **REMOVE** button. 
    - You can cancel this action by clicking on the **CANCEL** button.
       ![RHEL Instance Creation](img/RHEL8.png)
16. Click **CONFIRM** to create the RHEL Instance.

:::note
It might take up to 5-8 minutes for the instance to create. You may use the Cloud Console during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you get notified of this purchase on your registered email address. To access the newly created RHEL Instances, navigate to **Compute >** **RHEL Instances**.




