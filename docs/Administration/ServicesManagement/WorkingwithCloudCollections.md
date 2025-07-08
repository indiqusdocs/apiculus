---
sidebar_position: 2
---
# Working with Cloud Collections
A Cloud Collection (CC) on Apiculus is a grouping of repeating components (called Collection Items) that can be published to offer options/configurations for subscribers to choose from when purchasing a cloud resource. Apiculus CC can be based on a variety of factors, some examples of which are listed below:

| Type of Collection     | Collection Title (Example)                                                              | Collection Items (Example)                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Compute Packs          | General Compute                                                                         | Compute configurations with a vCPU:RAM ratio of 1:2 or 1:4, ranging from 1c2r to 8c32r                     |
| Memory Dense           | Compute configurations with a vCPU:RAM ratio of 1:6 or 1:8, ranging from 2c12r to 8c64r |                                                                                                            |
| Operating Systems      | Free Linux                                                                              | All free Linux distributions with multiple supported versions. For example, Ubuntu 20.04 and Ubuntu 22.04. |
| Commercially Supported | Linux distros with commercial support. For example, RHEL.                               |                                                                                                            |
| Virtual Routers        | Standard                                                                                | VR configurations (1c2r, 2c4r etc.) with unlimited throughput                                              |
| Limited                | VR configurations (1c1r, 1c2r etc.) with restricted throughput                          |                                                                                                            |
| Disk Packs             | High Performance                                                                        | SSD options (25GB, 50GB etc.) with higher IOPS                                                             |
| Standard Performance   | SSD options (25GB, 50GB etc.) with standard IOPS                                        |                                                                                                            |

## Creating a New Collection
1. To create a new collection, navigate to **Services > Cloud Collections**.![Cloud Connection](img/CC1.png)
2. Click on the **CREATE NEW COLLECTION** button.![Cloud Connection](img/CC2.png)
3. On the Create New Collection screen, enter the following details:
	- **COLLECTION NAME** – The name you want to call this collection.
	- **COLLECTION TYPE** – Choose any one of the collection types. The following are the major types of collection available:
		- **Operating Systems**
		- **Compute**
		- **Disk**
		- **Virtual Routers**
	- **OS TYPE**: If you selected **Operating Systems** as the **COLLECTION TYPE**, the **OS TYPE** list appears, that shows the following options:
		- **Linux**
		- **Windows**
		- **RHEL**
	- **AVAILABILITY ZONE** – Choose an availability zones from the list.
	- **DISPLAY TITLE** – Describe the title by which you want to show this collection.
	- **COLLECTION PREFIX** – Specify the prefix here, which is prepended to any item purchased from this collection.
1. Click on the **CREATE COLLECTION** button to create the particular collection. The Connection Details screen appears:![Cloud Connection](img/CC3.png)
2. Click on **SAVE AND UPDATE**.
:::note
Cloud Collections are dependent on Availability Zones, which means that the same collection needs to be created for each AZ to make it available across multiple AZs.
:::
## Adding Collection Items
Once a Cloud Collection is created, you can add Collection Items by going into the collection's details and choosing from the upload options. Each collection 'type' has its own specific item types and the Apiculus Admin Console UI lists the sections accordingly. There are two ways of creating Collection Items:
- **Upload Using Template** – This option gives a way to bulk-upload Collection Items; useful for adding multiple items together, but prone to error as data entered manually to the spreadsheet/template is only validated at the time of upload.
- **Add Using UI** – This option gives a way to create Collection Items individually; useful as chances of misconfigurations are low since the UI shows a list of available options to choose from.
## Publishing and Managing Collections
Collections may be published after all required details and items have been added. Publishing a collection makes it available for use in catalogues. Below are some considerations while working with published Collections:

- A Collection Item can be reverted to draft mode, which will keep it in the system but make it unavailable to all catalogues using it.
- Any edits to Collection details and Collection Items must be published, without which, the changes will not propagate to catalogues.
- Deleting a Collection will remove it from all catalogues using it.
- The Availability Zone - Cloud Collection mapping can not be modified after a collection is created.

:::note
If any resource in the underlying ISV is recreated, the corresponding Collection Item must be updated in Apiculus failing which, any resource purchase action that uses this Collection Item will fail.
:::




