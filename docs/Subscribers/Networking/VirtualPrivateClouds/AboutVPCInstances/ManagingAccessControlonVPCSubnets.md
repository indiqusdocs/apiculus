---
sidebar_position: 7
---
# Managing Access Control on VPC Subnets
This section describes how to manage Access Control List (ACL) on VPC. An ACL is a set of rules for controlling and filtering incoming and outgoing network traffic and reducing network attacks.
## 1. Use cases 
The following are the use cases of ACL:
- **Allow web traffic**: Permit HTTP (80) and HTTPS (443) traffic to web servers.
- **Restrict SSH access**: Allow SSH only from specific IP addresses.
- **Block unwanted traffic**: Deny access from suspicious or unauthorized IP ranges.
- **Control subnet communication**: Allow or restrict traffic between public and private subnets.
- **Enhance network security**: Add an extra layer of protection beyond instance-level security controls.
You can create Access Control Policies by defining traffic rules that specify which inbound and outbound network traffic is allowed or denied. After that, you can apply the policies to any tier within the VPC to control network access.


