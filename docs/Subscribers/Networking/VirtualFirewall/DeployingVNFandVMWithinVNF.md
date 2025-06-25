---
sidebar_position: 4
---
# Deploying VNF and VM Within VNF

This section provides a step-by-step guide for deploying a Virtual Network Function (VNF)—specifically a virtual firewall—and provisioning a Virtual Machine (VM) behind it using the Apiculus Cloud platform. This setup allows users to route VM traffic through the VNF, enabling secure and segmented network environments. 

It is ideal for use cases requiring:
- Advanced traffic control
- Isolation
- Policy enforcement. 
  
  This section outlines all the steps required for deploying VNF and VM within VNF. Here are the following steps listed below.
  
- [Creating The New Virtual Firewall](#creating-the-new-virtual-firewall)
- [Configuration Options For Virtual Firewall](#configuration-options-for-virtual-firewall)
- [Deploying Virtual Firewall](#deploying-virtual-firewall)
- [Viewing Firewall Details](#viewing-firewall-details)
- [Viewing LAN and WAN Tiers](#viewing-lan-and-wan-tiers)
- [Accessing Pfsense Firewall GUI](#accessing-pfsense-firewall-gui)
- [Deploying A Linux VM Under Pfsense Firewall](#deploying-a-linux-vm-under-pfsense-firewall)
- [Creating The New Linux Instance](#creating-the-new-linux-instance)
- [Choosing A Root Disk](#choosing-a-root-disk)
- [Authentication Method](#authentication-method)
- [Confirming Instance Purchase](#confirming-instance-purchase)
- [Checking VM Console And Internet Connectivity](#checking-vm-console-and-internet-connectivity)
  
## Creating the New Virtual Firewall

To enhance your network security within the Apiculus Cloud environment, you can deploy a virtual firewall that manages and filters traffic between your virtual resources. This firewall acts as a protective layer, enforcing rules and access controls based on your configuration.

The following steps walk you through the process of navigating to the correct section, initiating the firewall creation, and completing its configuration:

1. In the left-hand menu, go to **Virtual Firewalls** under the **Networking** section.
2. On the Virtual Firewalls page, click the **NEW VIRTUAL FIREWALL** button.
3. Follow the prompts to configure and create the virtual firewall.
![virtualapiculus](img/virtualapiculus.png)
### Configuration Options for Virtual Firewall

To configure the new virtual firewall in the Apiculus Cloud Portal, you need to define a few key options such as the zone, compute size, firewall provider, and access rules. These settings ensure the firewall is tailored to your deployment needs.

The following steps guide you through selecting configuration options like availability zone, compute configuration, firewall provider, and traffic rules before finalizing the setup:

1. **Choose Availability Zone**: Select your preferred availability zone (for example **GCC Chennai**, **GCC Bhubaneswar**, or **Hybrid Chennai**) based on your location and network needs.
2. **Choose Compute Configuration**: Pick a compute option that matches your performance requirements, such as:
    - `2C4R`: 2 vCPU, 4 GB RAM
    - `2C8R`: 2 vCPU, 8 GB RAM
    - `2C16R`: 2 vCPU, 16 GB RAM
3. **Select Firewall Provider**: Choose a firewall provider from the dropdown (e.g., **pfsense Plan**)    
4. **Set Incoming Traffic Rule**: Select the desired ACL rule, such as **Allow All**, from the dropdown menu.
5. **Name Your Virtual Firewall**: Enter a name for your virtual firewall (e.g., **Gaurav-Test**). Use only letters, numbers, hyphens, or dots.
6. **Review Estimated Costs**: Check the summary and pricing before proceeding.
![newvapiculus1](img/newvapiculus1.png)
![newvapiculus2](img/newvapiculus2.png)
### Deploying Virtual Firewall

After completing the configuration and deployment steps, the newly created virtual firewall appears in the Virtual Firewalls section. This interface provides a summary of key details such as the firewall's name, compute configuration, provider, zone, public IP address, instance count, and deployment status.

The following steps guide you through accessing the Virtual Firewalls section and verifying that your newly deployed firewall is active and correctly configured:

1. Navigate to the **Virtual Firewalls** section from the left-hand menu. 
2. See a list of deployed virtual firewalls. 
3. The newly created firewall (e.g., `ACP-E244-1-Gaurav-Test`) appears with:
    - Name
    - vCPU and RAM details
    - Firewall provider
    - Availability zone
    - Public IPv4 address
    - Instance count
    - Creation time 

A green status icon confirms that the firewall is active and running.
![firewalltest](img/firewalltest.png)
### Viewing Firewall Details

To check the configuration and operational status of your deployed virtual firewall, you can access its detailed view in the Apiculus Cloud Portal. This section provides essential system specifications, network settings, and real-time status indicators.

The following steps guide you through viewing the full details of your virtual firewall instance, including public IP, provider, and availability zone:

1. From the Apiculus Cloud dashboard:
    - Navigate to the **Virtual Firewalls** section in the left-hand menu.
    - Locate and click on the **ACP-E244-1-Gaurav-Test** firewall instance to open its configuration page.
2. On the firewall **Overview** page, you can view key details such as:
    - **Configuration**: vCPU, RAM, and OS details.
    - **Availability Zone**: For example `GCC Chennai`.
    - **Firewall Provider**: For example `PFSENSE-VNF`.
    - **Public IPv4 (L2-WAN)**: Note down the public IP (e.g., `164.164.197.178`) which is used for SSH access.
    - **Status**: Ensure the firewall is in **Running** state.
    - **Additional Sections**: You can also explore tabs like Graphs, Alerts, Utilisation, and Networking for further information.
![overviewapiculus](img/overviewapiculus.png)
### Viewing LAN and WAN Tiers

To understand the network configuration, navigate to the **Networking** section where you can view both **LAN** and **WAN** tiers. This helps identify how instances are connected and how traffic flows between internal and external networks.

The following steps guides you through accessing the Networking section and identifying the WAN and LAN tiers connected to your firewall:

1. Open the Firewall Instance: From the Apiculus Cloud dashboard, navigate to the **Virtual Firewalls** section and open the required firewall instance (e.g., `ACP-E244-1-Gaurav-Test`).
2. Click on the **Networking** option: In the left-side menu, under the opened firewall instance, click on the **Networking** tab. This section displays all networks linked to the selected firewall.
3. Identify the **WAN Tier**: Look for the network labeled as `ISOLATED_NETWORK`. This is the WAN Tier (e.g., `ACP-E244-1-Gaurav-Test_ISOLATED_NETWORK`), typically connected to external/public networks.
4. Identify the **LAN Tiers**: All networks labeled as `LAN_TIER_X` (where X is a number) represent LAN tiers used for internal communications. For example:
    - `ACP-E244-1-Gaurav-Test_L2_LAN_TIER_1`
    - `ACP-E244-1-Gaurav-Test_L2_LAN_TIER_2`
![networkapiculus](img/networkapiculus.png) 
### Accessing pfsense Firewall GUI

To manage and configure the pfsense firewall, you can access its web-based Graphical User Interface (GUI). This interface allows you to perform tasks such as monitoring network traffic, updating firewall rules, and managing network settings. The GUI can be accessed securely using the public IP address assigned to the firewall. 

The following steps helps you access the pfsense firewall GUI from your browser using the public IP address:

1. Copy the Public IP Address: From the firewall details page in Apiculus Cloud, note down the Public IPv4 (L2-WAN) address (e.g., `164.164.197.178`).
2. Open a Web Browser: Launch any web browser like Chrome, Firefox, or **Edge**.
3. Paste the IP address in the address bar (e.g., `https://164.164.197.178`) and press Enter.
4. Ignore the Security Warning: If a warning appears, it is because of a self-signed certificate. Just click **Advanced** and then **Proceed** to continue.
5. Accept the License: A blue screen with license information appears. Click the **Accept** button.
![pfsense](img/pfsense.png)
### Deploying a Linux VM under pfsense Firewall

To deploy a Linux virtual machine (VM) behind the pfsense firewall in Apiculus Cloud, begin by navigating through the dashboard and accessing the compute section. This allows you to view existing Linux instances or initiate the creation of the new under the desired network configuration.

The following steps guides you through deploying the new Linux VM under the pfsense firewall:

1. From the Apiculus Cloud dashboard, navigate to the left sidebar.
2. Under the Networking section, click on Virtual Firewalls.
3. On the Virtual Firewalls page, click the NEW VIRTUAL FIREWALL button.
4. Choose Availability Zone: Select a zone for example `GCC Chennai` (or as per your requirement).
5. Select Compute Configuration: Choose a VM configuration for example`2C4R` (2 vCPU, 4 GB RAM).
6. Click Selected to confirm the compute pack.
7. Select Firewall Provider: Choose `pfSense Plan` from the dropdown.
8. Select Incoming Traffic Rule: Choose `Allow All` (or set rules as needed).
9. Name Your Virtual Firewall: Provide a name (for example `Gaurav-Test`).
10. After filling in all details, proceed with the deployment.

Once you deploy it, you see your firewall listed under Virtual Firewalls. The listing show details like name, configuration, zone, and public IP.
![pfsensefirewall](img/pfsensefirewall.png)

## Creating the New Linux Instance

To create the new Linux instance in Apiculus Cloud, you need to configure parameters such as the zone, network, and operating system image. These options help ensure the VM is deployed in the correct environment and connected to the appropriate virtual network and firewall.

The following steps walks you through the process of creating the new Linux instance based on your setup requirements:

1. Select **Availability Zone**: Choose the availability zone nearest to your location. The following are the available options:
    - GCC Chennai (selected)
    - GCC Bhubaneswar
    - Hybrid Chennai
    - Hybrid Bhubaneswar
2. **Select Network Destination**: Pick a VPC network with a subnet or a VNF Appliance that has already been created in the chosen availability zone.
    - **VPC:** ACP-E244-1-Gaurav-Test
    - **VNF:** ACP-E244-1-Gaurav-Test_L2_LAN_TIER_1
3. **Choose an OS Image**: Select an available OS image or use a custom image if necessary. Some images may be chargeable.
    - **UBUNTU:** Ubuntu Server 22.04 LTS
![zoneapiculus](img/zoneapiculus.png)
### Choosing a Root Disk
   
When deploying a Linux VM in Apiculus Cloud, selecting the right root disk is a key step in defining your VM’s storage capacity and performance. The root disk serves as the primary storage where the operating system and essential files are installed. You can choose from predefined disk packs or specify a custom size based on your needs.
   
The following steps guide you through choosing a root disk option that best fits your storage needs and budget:
   
1. Navigate to the **Root Disk** selection section: The Following are the three available disk options under the SSD tab:
    - **Freesize**: Custom size (default 25 GB)
    - **RD 50**: 50 GB at INR 257.5000/Month
    - **RD 100**: 100 GB at INR 515.0000/Month (Selected)
2. Click on **Select Pack** for your desired option. For Example:
     - **RD 100** (100 GB) is selected.
     - Optionally, you can enable **Standard Protection** (INR 5.0000/Month), but it is shown as **OFF** here.
       
:::note
A message indicates that the selected OS image is **incompatible with the Instance protection service**.
:::
   
![rootapiculus](img/rootapiculus.png)
### Authentication Method

To ensure secure access to your Linux instance, selecting the right authentication method is crucial. The Following options: 

- Using an SSH key pair for enhanced security (recommended)
- Opting for a root user password, which is less secure but may be necessary for certain setups.  

Make your choice based on your organization's security needs.
   
The following steps guide you through the configuration and final review before launching your instance:
   
1. **Choose an Authentication Method**:
    - **Use SSH key pair (Recommended)**
    - **Use root user password** (Root passwords are less secure than SSH-based access). 
      
:::note
If you choose this method, ensure that **Also email me the password**
:::
   
2. **Name Your Linux Instance**:
    - **Gaurav-Test-VM** (Instance name can only contain alphanumeric characters, underscores, dots, and hyphens).
3. **Summary and Estimated Costs**:
    - Before creating this Linux instance, you can review all the selected options and their corresponding prices. Once you are done reviewing, you can proceed with your choice. 
4. **SELECTIONS**:
    - Availability Zone: **GCC Chennai**
    - HOURLY: **INR 0.0000/hr**
    - MONTHLY: **INR 0.0000/mo**
![authenticationapi](img/authenticationapi.png)
### Confirming Instance Purchase 

Once you are finalized all configuration details for your Linux VM in Apiculus Cloud, the platform prompts you to confirm the instance purchase. This is your final opportunity to review costs and apply any available discount codes before deployment.
   
The following steps guide you through the confirmation process:
   
1. After reviewing the instance details, a confirmation pop-up appears.
2. The window displays the **monthly charge**: `INR 1,887.5000`.
3. A discount code option is available (e.g., **Diwali10off - 10% off on all purchases**).
4. Click the **CONFIRM** button to proceed with the instance purchase.
5. If you do not want to proceed, click **CANCEL**.
![purchaseapi](img/purchaseapi.png)
### Checking VM Console and Internet Connectivity

After deploying a Linux VM under the pfsense firewall in Apiculus Cloud, it is important to verify that the instance is running correctly and has internet access. This ensures successful configuration and network functionality.
 
 The following steps helps you check the VM console and test internet connectivity:

1. Open the VM console from the cloud portal.
2. Log in to the VM and set a new password if asked.
3. Run `ip a` to check the VM's IP address.
4. Run `ping 1.1.1.1` to test internet connectivity.
5. If you get a reply with 0% packet loss, the internet is working.
6. Once the VM is deployed, access its console and check the internet connectivity by running network diagnostic commands.
![connectapi](img/connectapi.png)

 