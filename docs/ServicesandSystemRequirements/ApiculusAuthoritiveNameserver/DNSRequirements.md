---
sidebar_position: 3
---
# DNS Requirements

Since A53 is a nameserver system, enabling the Service requires certain prerequisites to be handled at the domain level.

- There should be at least two nameserver records (ns1.your.cloud, ns2.your.cloud, etc.) configured on your domain's DNS.
- The records should be registered as nameserver records on your domain provider's system - these may need to be created as A records as well 
	:::note
	Each domain name provider will offer a different means of handling this - it is recommended to check your domain name provider's documentation for this purpose).
	:::
- Nameserver records should point to a public IPv4 with port 53 open and propagated all the way through to the VM where PowerDNS is installed; multiple nameservers may point to the same IPv4.