---
sidebar_position: 1
---
# About Firewall Instances

Currently, VFI is an experimental Service on Apiculus and there are a few limitations to it:

1. A user can have only one VFI per Availability Zone.
2. VFI-based networks only support a single VLAN.
3. Only Instances with a special Linux OS can be added to VFI-based networks.
4. VFI needn't inherit Apiculus-level RBAC for users.

As the VFI and the VFI-based network are created, Cloud Console users can view the enabled Virtual Firewall in the Networking > Virtual Firewall section. The following details will be displayed in this section:
- Name of the Virtual Firewall
- Public IPv4
- Number of instances associated with each Virtual Firewall
- Created

![Viewing VFI Network Details](img/ViewingVFINetworkDetails1.png)

To view a list of section and the various operations or actions you can perform by going inside the particular section, click on the instance name. Below the Instance name, there is an informational view where you can find the following details:

- Configuration
- Availability Zone
- Public IPV4 (L2 WAN)
- Created 

On the top right corner, two quick options are available, one to **LAUNCH CONSOLE** and the other to **POWER OFF/ON** the Instance.

![Viewing VFI Network Details](img/ViewingVFINetworkDetails2.png)

Details about Virtual Firewall operations and actions can be found in their respective sections.

- [Overview](docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Overview.md)
- [Viewing Graphs and Utilisation](ViewingGraphsandUtilization.md)
- [Configuring Alerts](ConfiguringAlerts.md)
- [Volume Management](VolumeManagement.md)
- [Networking Management](NetworkingManagement.md)
- [Snapshots](docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Snapshots.md)
- [Reconfiguring Virtual Firewall](ReconfiguringVirtualFirewall.md)
- [Operations](docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Operations.md)


