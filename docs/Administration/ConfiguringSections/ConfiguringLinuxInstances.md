---
sidebar_position: 1
slug: ConfiguringLinuxInstances
authors:
  - Yogesh Sharma
---
# Configuring Linux Instances

Follow these steps to configure Linux Instances:

1. Navigate to the **Default Services** in the primary navigation menu.
![Configuring Linux Instances](img/rhel.png)
1. Under the **Compute** section, select **Linux Instances**.
2. Turn on the switch at the top to make this service available as part of the default services. This action will enable all associated sections.
3. Under the **Availability** section, choose the availability zone from which you want to offer the service, then click **Save and Update**.

![Configuring Linux Instances](img/linux1.png) 

5. Under the **Billing** section, select the **Billing Options**.
	- **Prorate on Entry**: Purchases will be pro-rated at the time of purchase of services.
	- **Prorate on Exit**: Removals will be pro-rated at the time of removal of services.
6. Select the **Billing Cycle** to be displayed to the subscribers: **Hourly**, **Monthly**, or **Both**.
![Configuring Linux Instances](img/linux2.png) 

7. You can provision the Linux Instances to an approval-based system within the **Provisioning** section. To do so, activate the **Approval Required** switch, which offers additional functionalities such as sending custom instructions to end-users upon approval and attaching up to five files, each up to three MB.

![Configuring Linux Instances](img/linux3.png)

7. Under **Pricing**, click on the **Operating System**. Then, click on the **Availability Zones**, and enable the desired packs inside the collections.

![Configuring Linux Instances](img/linux4.png)

8. Under the **Compute** section, click on the **Availability Zone**, and enable the compute pack of the collection you want to offer to the end user.

![Configuring Linux Instances](img/linux5.png)

9. In the **Root Disks** section, select the availability zone and enable packs for the designated collection.

![Configuring Linux Instances](img/linux6.png)

10. Under the **App Overlays** section, select all the apps that you want to provide as part of the default service to the end-users during the deployment of the Linux instance.

![Configuring Linux Instances](img/linux7.png)

11. Return to the **Default Services**, and click **PUBLISH DEFAULT CATALOGUE**.
    ![Configuring Windows Instances](img/rhel.png)
