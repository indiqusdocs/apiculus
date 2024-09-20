---
sidebar_position: 10
---

# Frequently Asked Questions

### What are the recommended sizes for branding assets?
We recommend the following specifications for [branding the cloud platform](/docs/GettingStarted/BrandingandContent/CustomisingBrandandGraphicAssets):

|Asset|Aspect Ratio|Min. Size|File Format|Any Other Consideration(s)|
|---|---|---|---|---|
|Logo|4:1, 5:2 or 16:9|Min. 128px height|.jpg or .png|_Use same specs for any alternate versions_|
|Favicon|1:1 (square)|Min. 32px X 32px|.png, .jpg or .ico|-|
|Banner|16:9|Min. 1200px width|.png or .jpg|_Leave 5% 'safe' visual margins from all four sides_|
|Font|-|-|.woff|_Any font with a native bold/strong weight_|

### How are data durability and redundancy achieved with block volumes?
Data redundancy is achieved at the storage level by design as the storage layer replicates Block Volume data across multiple storage devices and Availability Zones.

### What Linux distributions are supported on Apiculus CloudConsole?
Apiculus supports a range of popular Linux distributions such as Ubuntu, CentOS, Rocky, Oracle, Debian, Alma and OpenSUSE.

Further, any commercially supported Linux distros, e.g., RHEL, Ubuntu Enterprise etc.. are also supported. Apiculus, however, does not include licenses for enterprise Linux distributions and those need to be procured by service providers separately in a SPLA or similar model.

### Can the cloud platform URL be changed?
Yes, the platform URL can be changed, but it needs to be performed as a planned activity with adequate downtime to ensure all systems can be accessed via the new URL.

It is also recommended that customers be informed well in advance before changing the main platform access URL.

### How does BYOL work with Windows Instances?
You can deliver Windows Instances in a BYOL (bring your own license) model by publishing evaluation Windows OS Images and simultaneously publishing QuickPlans for Windows licenses.

### Is it possible to customise the invoice to show non-standard information?
Yes, invoice templates are 100% customisable. While there are 'standard' data rows that will be printed on the invoice, everything else is customisable. Some of the customisations include:

- Printing regulatory and compliance information;
- Printing static instructions, e.g., payment transfer details;
- Printing branding and organisational information;
- Printing custom columns based on data available to the system.

### What is the difference between Block Volumes and Object Storage and which ones are supported on Apiculus?
**Block Storage:** Storage such as hard disk drives and solid-state drives, use block-level access protocols like iSCSI and Fibre Channel to read and write data. This storage method is ideal for low-latency, high-performance environments where data access speed is crucial. [Block Volumes](/docs/Subscribers/Storage/BlockVolumes/AboutBlockVolumes) is a core cloud Service on Apiculus.  
  
**Object Storage:** It is a technology that manages data as objects. All data is stored in one large repository, which may be distributed across multiple physical storage devices instead of being divided into files or folders. Object Storage is a service based on the S3 protocol. It allows you to store objects, i.e., documents, images, videos, etc. Apiculus offers [object storage as a service (AS3)](/docs/ServicesandSystemRequirements/ApiculusObjectStorage/AboutApiculusObjectStorage) as an integration with the Cloudian Hyperstore. Service providers can offer this service through Apiculus CloudConsole.

### Why can I see more Instances for some customers than specified in the limits?
If there are Instance provisioning failures, these failed provisionings would be counted in the limits, till the "Scavenger thread" runs and cleans up the failures. Once this is done, you will see the limits being restored to what is normal.

### Can terminated user accounts be reactivated?
No, terminated accounts can neither be recovered, nor recreated using the same email ID. Terminated accounts also stay 'in the system' because they have financial reporting information attached to them (e.g., past invoices).

### Is multi-factor authentication (MFA) supported on Apiculus?
MFA is available as an [OTP-enhanced login feature](/docs/GettingStarted/LoginConfigurations/LoginSecurityand2FA) and can be enabled for all subscribers, all admins or all subscribers and admins.

:::note
It is not currently possible to configure MFA/2FA for individual customer accounts.
:::