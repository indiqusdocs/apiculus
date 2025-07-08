---
sidebar_position: 8
---
# Changing Resource Limits for Subscribers

Subscriber accounts are created with default global resource limits that are defined in the Apache CloudStack orchestrator. These limits can be adjusted for subscriber accounts by navigating into the target account and selecting the **Limits** sub-section. These limits are vary for each cloud region that's configured to deliver services.

The following resource limits can be modified:

- Virtual machines (count)
- Volumes (count)
- Virtual routers (count)
- Snapshots (count)
- Templates (count)
- vCPU cores (count)
- RAM (MB/GB)
- Primary storage (MB/GB)
- Secondary storage (MB/GB)

:::note
Limits and QoS policies for non-CloudStack services (such as object storage, bare metal etc.) must be configured on the connected ISV portal.
:::





