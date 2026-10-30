---
sidebar_position: 7
---
# Managing Load Balance Instance Operations
You can manage the lifecycle of load balancer by restarting, force stopping, renaming, or deleting. These operations help you maintain service availability, resolve operational issues, organize resources, and manage your cloud infrastructure efficiently.

Apiculus Cloud provides the following operations on load balancer instances:
- [Restarting an Instance](#restarting-an-instance)
- [Force Stopping an Instance](#force-stopping-an-instance)
- [Renaming an Instance](#renaming-an-instance)
- [Deleting an Instance](#deleting-an-instance)

## Restarting an Instance
Restart a load balancer instance to refresh its operating state, apply configuration changes, or resolve temporary issues without changing its existing settings. This action helps restore normal operation, improve service reliability, and ensure efficient traffic distribution across backend resources.

To restart an instance, follow these steps:

1. Navigate to the **Networking > Load Balancer Instance**. The following screen appears:![img](img/home.png)
2. Click on your created load balancer instance name from the list, and click **Operations**.
3. Click the **Restart Instance** button. The following screen appears:![img](img/restart.png)
4. Click the **Yes** button.

## Force Stopping an Instance
Force stop a load balancer instance to immediately terminate its operations when it becomes unresponsive or cannot be shut down through a normal stop operation. This action helps recover from critical issues, restore control of the instance, and prepare it for troubleshooting or restart.

To force stop an instance, follow these steps:

1. Navigate to the **Networking > Load Balancer Instance**. The following screen appears:![img](img/home.png)
2. Click on your created load balancer instance name from the list, and click **Operations**.
3. Click the **Force Stop Instance** button. The following screen appears:![img](img/forcestop.png)
4. Click the **Yes** button.

## Renaming an Instance
Rename a load balancer instance to assign a more meaningful or recognizable name without affecting its configuration or functionality. This action helps improve resource identification, simplifies instance management, and makes it easier to locate the instance in cloud environment.

To rename an instance, follow these steps:

1. Navigate to **Networking > Load Balancer Instance**. The following screen appears:![img](img/home.png)
2. Click on your created load balancer instance name from the list, and click **Operations**.
3. Click the **Rename Instance** button. The following screen appears where you can update the LBI name in Instance Name.![img](img/rename.png)
4. Click the **Done** button.

## Deleting an Instance
Delete a load balancer instance when it is no longer required to remove it permanently from cloud environment. This action helps free up resources, reduce unnecessary costs, and keep your infrastructure organized by eliminating unused instances.

:::warning
You can schedule deletion to continue using the resource until the end of the current billing cycle and cancel the deletion before it takes effect. Alternatively, you can delete the resource immediately, which is permanent and cannot be undone.
:::

To delete an instance, follow these steps:

1. Navigate to the **Networking > Load Balancer Instance**. The following screen appears:![img](img/home.png)
2. Click on your created load balancer instance name from the list, and click **Operations**.
3. Click the **Delete Instance** button. The following screen appears, where you can choose to delete the LBI instantly or schedule it to be deleted at a later stage:![img](img/delete.png)
	- To delete the LBI instantly, enter **DELETE** and click the **Delete Now** button. The LBI is deleted.
	- To schedule the LBI to be deleted at a later stage, enter **DELETE** and click the **Schedule Deletion** button.