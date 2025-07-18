---
sidebar_position: 3
---
# Activating the NetScaler VPX Control Panel

The following steps can be used for activating the NetScaler VPX control panel and accessing it after activation:

1. Navigate to **Networking > Load Balancer Instances** and click the LBI whose control panel needs to be activated.
   ![Load Balancer Instances](img/LoadBalancerInstances1.png)
2. In the LBI details, click the **Console** button to access the Instance's console interface. One-by-one, use the following commands:

```
set ns config -IPAddress <VM_private_IP_address> -netmask <VM_tier_netmask>
add route 0 0 <gateway_IP_address_for_tier>
save config
reboot
```


:::note
All the required details can be found in the parent VPC and/or on the LBI details sections of Apiculus Cloud Console.
:::

Once the above steps are completed, the NetScaler VPX UI can be accessed by using the **LAUNCH LOAD BALANCER MANAGEMENT INTERFACE** button in the **Access** section of LBI details.





