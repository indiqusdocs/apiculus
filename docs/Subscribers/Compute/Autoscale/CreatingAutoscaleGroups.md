---
sidebar_position: 3
---
# Creating Autoscale Groups

To create Autoscale Groups, follow these steps:
1. Navigate to **Compute > Autoscale Groups** in the navigation menu.
2. Click the **NEW AUTOSCALE GROUP** button.
3. Select an **Instance Category**.
![instanceauto](img/instanceauto.png) 
4. Select the **Availability Zone** that represents the geographic region for the deployment of your Autoscaled Instance.
5. **Select VPC Network**, choose the appropriate tier in **Select a Network Tier**, and then select a load balancer from the options in the **Select Load Balancer** dropdown.
6. Select the **OS Image**.
![osauto](img/osauto.png)
7. Select the **Compute pack** from the available compute collections.
8. Select the **Root disk** from the available Disk packs. You can use the free size option to define the size of the Root Disk.
9. Configure the **Autoscale group** as per your requirement; these options need to be specified.
	- **Min. Group Limit:** This is the minimum number of members in the Autoscale Group. The number of instances in the group will be equal to or more than this number.
    - **Max. Group Limit:** This is the maximum number of members in the Autoscale Group. The number of instances in the group will be equal to or more than this number.
    - **Expunge VM grace period:** This defines how long before a scale-down is executed should the app/user connections to an Instance be removed.
    - **Polling Interval:** This defines at what interval should the Autoscale Group check your policy conditions and execute the relevant Scale or Scale-down configurations.
![configauto](img/configauto.png)
10. Define the **Scale Up policy** (Multiple policies can be configured; if multiple conditions are specified, all of them need to be met for the Autoscale Group to execute). You need to specify the following:
	- **Policy Name**: Specify the name for your policy.
	- **Duration (in mins):** This is the duration in which the conditions have to be true before action is taken.
	- **Quiet Time (in mins):** The cool-down period in which the policy should not be evaluated after the action has been taken.
	- **Parameter:** Name of the counter for which the policy will be evaluated.
	    - **Parameters:** The performance parameters expose the state of the monitored Instances. As of now, there are five new parameters to work with that feature:
		- **VM CPU Percentage** - average percentage
		- **VM Memory** - average percentage
		- **Public Network** - mbps received per VM
		- **Public Network** - mbps transmit per VM
		- **Load Balancer** - average connections per VM
	- **Breach:** Relational Operator to be used with threshold. This will be Greater Than by default.
	- **Threshold:** This is the value for which the Counter will be evaluated with the Operator selected.
![defineauto](img/defineauto.png)
11. Click **ADD CONDITION** to add the policy. If you want to add more policies, click the **ADD NEW** button present beside the Policy name.
12.  Define the **Scale Down Policy**; the parameters are similar to the Scale UP policy. Only the breach parameter will be greater than by default.
![scaledownauto](img/scaledownauto.png)
13. Next is to set up the SSH Key. if your account doesn’t have any SSH key pair, then you can use the **Generate a new key pair** option, and you can also upload the key by selecting **Upload a key pair**.
![sshauto](img/sshauto.png)
14. If you want to notify your users or custom email addresses upon the execution of this Autoscale Group, then you can select the appropriate option available under Notify on email. i.e., Notify to account users, Notify to comma-separated email addresses.<br/>
15. Specify the name of your Autoscale group. <br/>
16. Click the **PUBLISH THIS AUTOSCALE GROUP** button for publishing the Autoscale group.!!




