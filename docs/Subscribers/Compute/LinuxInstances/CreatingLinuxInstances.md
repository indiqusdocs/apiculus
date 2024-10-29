---
sidebar_position: 1
---
# Creating Linux Instances

Before creating a Linux instance, it is important to plan the architecture, networking and access to the Linux Instances. 

To create a Linux instance on a basic/flat networking zone, follow the below steps:

1. Navigate to **Compute > Linux Instances**.
   ![Create Linux Instance](img/CreatingLinuxInstances1.png)
2. Click on the **_+_ NEW LINUX INSTANCE** from the top right.
    ![Create Linux Instance](img/CreatingLinuxInstances2.png)
3. Choose an **Availability Zone**, which is the geographical region where your Instance will be deployed. The chosen option should be the Basic/Flat/EC type networking zones from all available Availability Zones.
4. Select the **Destination** and then the **Network** from the drop-downs.
5. **Choose an OS Image** to run on your Instance.
6. **Choose a Compute Pack** from the available compute collections.
9. **Choose Disk Configuration** from the available **SSD**/**HDD** disk packs, or you can use the free size option to specify the root disk.
10. Select the option to **Protect this Instance**.
11. **Choose an Authentication Method**: 
    - **Use SSH key pair**: Clicking on the Use SSH key pair option, all the SSH key pairs present in your account will be listed; if your account doesn’t have any SSH key pair, then you can click the **Generate a new key pair** option or upload the key pair by clicking the **Upload a key pair** option. 
    - **Use root user password**: On selecting Use root user password, **Also email me the password** option is displayed. If you select this option, the password, along with the details, for instance, will be emailed to your registered email ID.
11. In the **Name Your Linux Instance** field, enter the desired name for your Linux instance. Instance name must only contain alphanumeric characters, underscore, dots and hyphens. 
12. Verify the Estimated Cost of your Linux Instance based on the specifications you have chosen from the Summary and Estimated Costs section (Here both Hourly and Monthly Prices summary will be displayed).
14. To confirm, click on the check box after going through the policies mentioned by your cloud service provider.
15. Clicking on the **BUY HOURLY** or **BUY MONTHLY** button, the Confirm Instance Purchase window appears, and the price summary is displayed along with the discount codes if you have any in your account. 
    1. You can apply any of the discount codes listed by clicking on the **APPLY** button. 
    2. You can also remove the applied discount code by clicking the **REMOVE** button. 
    3. Clicking on the **CANCEL** button, this action will be canceled.
16. Click on the **CONFIRM** to create the Linux Instance..

:::note
It might take up to 5-8 minutes for the Linux instance to get created. You may use the CloudConsole during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you’ll be notified of this purchase on your email address on record. The newly created Linux Instances can be accessed from **Compute >** **Linux Instances** on the main navigation panel.