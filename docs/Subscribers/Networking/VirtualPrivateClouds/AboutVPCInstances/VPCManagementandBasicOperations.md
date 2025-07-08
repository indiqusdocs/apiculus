---
sidebar_position: 9
---
# VPC Management and Basic Operations

VPC management offers the following operations. These are basic VPC management actions and don't have any impact on the actual network configurations.

## Powering ON/OFF the Virtual Router

Switching the VPC power state is possible using the **power status** button on top. This is usually <span class="green">**green**</span> if the VPC is powered ON, and <span style={{ color: 'grey' }}>greyed</span> out if powered OFF.

To restart the VPC, navigate to the  **Operations** tab and click the **RESTART VIRTUAL ROUTER** option. This performs quick reboot and no data is lost.

![VPC Management and Basic Operations](img/VPCManagement2.png)

## Deleting a VPC

To delete a VPC, navigate to the **Operations** Section and click the **DELETE VPC NETWORK** button. Deleting a VPC removes it permanently.

:::note
Before attempting to delete this VPC, ensure that all Tiers, IPv4 Addresses, and Instances are removed from this VPC. This action is irreversible, and you may not be able to recover any data for this VPC.
:::





