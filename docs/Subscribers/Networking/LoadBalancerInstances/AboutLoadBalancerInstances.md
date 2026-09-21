---
sidebar_position: 1
---
# About Load Balancer Instances

The Apiculus Load Balancer Instances (LBI) Service allows Cloud Console users to create load balancer appliances, which are Linux Instances pre-loaded with a [Citrix NetScaler VPX](https://www.netscaler.com/platform/vpx-virtual-machine) image. LBI can be used with VPC networks to [achieve various traffic management features](/docs/ServicesandSystemRequirements/LoadBalancerInstances/About) that are not possible using the standard VPC-based load balancing.

## Public Load Balancer
A Public Load Balancer is used to manage traffic that comes from the internet. It comprises a public IP address, allowing users or external systems to access your application from outside your network.

### Use Cases
- Select this option if your application or service needs to be accessed from the public internet.
- It is ideal for websites, public APIs, or any system where users connect directly from browsers or apps.
### Placement
- It is placed in the web tier, which is a public subnet in your VPC.
- It can forward traffic to backend instances located in either public or private subnets using routing rules.

## Internal Load Balancer
It works only inside your VPC. It has a private IP address, which means it is not accessible from the internet. It is used for managing traffic between internal services, like from your web tier to your application tier.

### Use Cases
- Select this option when your services do not need public access but need to communicate within your VPC.
- Useful in a multi-tier setup, where one layer of your application communicates to another.

### Placement
- It is placed in the application or internal tier, which is a private subnet.
- It routes traffic to backend services or internal logic components.

![Lb](img/Lb.png)

The following management features are supported on Apiculus Cloud Console:

- [Creating Load Balancer Instance inside a VPC](CreatingaLoadBalancerInstance)
- [Activating the NetScaler VPX Control Panel](ActivatingtheNetScalerVPX)





