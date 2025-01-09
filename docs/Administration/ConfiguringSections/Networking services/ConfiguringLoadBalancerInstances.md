---
sidebar_position: 9
---
# Configuring Load Balancer Instances

To configure DNS, follow these steps:

1. Navigate to the **Default Services**.   
   ![Configuring Linux Instances](img/DefaultServices.png)
2. Under **Networking**, select **Load Balancer Instances**.
3. Activate the switch at the top, indicating the availability of this service as part of the default services. All associated sections will become enabled.
4. Proceed to the **Availability section**. Select the desired availability zones from which you want to deliver the service to the end user, then click **Save and Update.**   
	![Available](img/LoadBalancer1.png)
5. Under the **Billing** section, select the **Billing Options**.
   - **Prorate on Entry** - Purchases will be pro-rated at the time of purchase of services.
   - **Prorate on Exit** - Removals will be pro-rated at the time of removal of services.
   ![Billing](img/LoadBalancer2.png)
 6. Navigate to the **Load Balancer**, edit the price/**monthly** and price/**onetime** and click **SAVE AND UPDATE.**
    :::note
    Load Balancer Instances are created with a NetScaler VPX Standard license. If you wish to offer license upgrade options. Use Quick plan to configure other available licenses for the Load Balancer Instances service.
    :::
	![Load Balancer](img/LoadBalancer3.png)
7. Navigate to the **Compute**, edit the **Instance Compute Pricing** and click **SAVE AND UPDATE**.
	 ![Compute](img/LoadBalancer4.png)
8. Navigate to the **Root Disk**, edit the **Instance Root Disk Pricing** and click **SAVE AND UPDATE**.
	![Root Disk](img/LoadBalancer5.png)
9. Finally, return to Default Services and click **PUBLISH DEFAULT CATALOGUE.**
	![Configuring IPv4 Addresses](img/ConfiguringIPv4Addresses5.png)




