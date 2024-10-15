---
sidebar_position: 6
---
# Configuring Virtual Firewall Instances

Follow these steps to configure Virtual Firewall Instances:

1. Navigate to **Services** > **Default Services**.
2. Under **Networking**, select **Virtual Firewall**.
3. Turn on the toggle switch at the top to make this service available as part of the default services. This action will enable all associated sections.
4. Under **Availability Zones**, select the availability zone from which you want to offer the service, then click **Save and Update**.
![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances1.png)

5. Under the **Billing** section, select the **Billing Options**.
	- **Prorate on Entry**: Purchases will be pro-rated at the time of purchase of services.
	- **Prorate on Exit**: Removals will be pro-rated at the time of removal of services.
6. Select the **Billing Cycle** to be displayed to the subscribers: **Hourly**, **Monthly**, or **Both**.
![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances2.png)

6. To provision, Virtual Firewall Instances to an approval-based system, navigate to **Provisioning** and turn on the **Approval Required** toggle button. Additionally, you can send custom instructions to end-users upon approval and attach up to five files, each up to three MB.

![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances3.png)

The PRICING options include the following:

- Navigate to the **Configuration** section, select the **Availability Zone**, and enable the desired compute packs for the end-users.
![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances4.png)

- Navigate to the **Providers** section, select the **Availability Zone**, and activate both providers—**pfSense and Fortinet** based on your requirement. Specify the descriptions and then establish the pricing accordingly.
![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances5.png)

- Navigate to the **Root Disks** section, select the **Availability Zone** and enable packs for the designated collection.
![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances6.png)

- Navigate to the **Gateway** section, select the **Availability Zone**, and and define the pricing for the NAT gateway and IPv4 address.
![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances7.png)

Finally, return to Default Services and click on **PUBLISH DEFAULT CATALOGUE**.
![Configuring Virtual Firewall Instances](img/rhel.png)