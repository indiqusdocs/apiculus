---
sidebar_position: 9
---
# Configuring Virtual Firewall Instances
Apiculus offers Virtual Firewall Instances as integrations with **pfSense®** and **FortiGate** VM.

You can monetise the service with the following components:
- Firewall provider
- Appliance config
- Public IPv4
- Additional IPv4
- Public Gateway

To configure Virtual Firewall Instances, follow these steps:

1. Navigate to **Services** > **Default Services**.
2. Under **Networking**, click **Virtual Firewall**.
   ![Configuring Linux Instances](img/DefaultServices.png)
4. Turn on the toggle switch at the top to make this service available as part of the default services. This action will enable all associated sections.
5. Under the **Availability** section, select the availability zone from which you want to offer the service, then click **Save and Update**.![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances1.png)
5. Under the **Billing** section, select the **Billing Options**.
	- **Prorate on Entry** - Purchases will be pro-rated at the time of purchase of services.
	- **Prorate on Exit** - Removals will be pro-rated at the time of removal of services.
6. Select the **Billing Cycle** to be displayed to the subscribers: **Hourly**, **Monthly**, or **Both**.![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances2.png)
6. To provision Virtual Firewall Instances to an approval-based system, navigate to **Provisioning** and turn on the **Approval Required** toggle button. Additionally, you can send custom instructions to end-users upon approval and attach up to five files, each up to three MB.![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances3.png)
7. Navigate to the **Configuration** section, select the **Availability Zone**, and enable the desired compute packs for the end-users.![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances4.png)
8. Navigate to the **Providers** section, select the **Availability Zone**, and activate both providers—**pfSense and Fortinet** based on your requirement. Specify the descriptions and then establish the pricing accordingly.![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances5.png)
9. Navigate to the **Root Disks** section, select the **Availability Zone** and enable packs for the designated collection.![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances6.png)
10. Navigate to the **Gateway** section, select the **Availability Zone**, and and define the pricing for the NAT gateway and IPv4 address.![Configuring Virtual Firewall Instances](img/ConfiguringVirtualFirewallInstances7.png)
11. Finally, return to Default Services and click on **PUBLISH DEFAULT CATALOGUE**.
	![Configuring Virtual Firewall Instances](img/DefaultServices.png)




