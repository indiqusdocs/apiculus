---
sidebar_position: 3
---
# Using Remote Access VPN with VPC

To use a VPN client to connect to your VPC, follow these steps:

1. Navigate to  **Networking > Virtual Private Clouds** from the main navigation panel and select the VPC that you wish to connect to using your VPN client.
   ![VPC](img/VPCIpv4.png)
2. Inside the VPC, navigate to the **IPv4 ADDRESSES** section and click the **Manage VPN access**. After this, click on the **Remote Access (L2TP)**  option and enable the switch for the Remote Access VPN.
   ![Enable IPSEC](img/VPCIpv4Connection.png)
   ![L2TP](img/L2TP.png)
3. This will also enable the **Remote Access VPN** button for the VPC’s default IP. Click on the button to copy the pre-shared key (PSK) and the IP range from the dialog box to use in your VPN client.
   ![Presharedkey](img/PreSharedkey.png)
4. Additionally, you’ll need to add VPN user credentials here.

To test this configuration, you can open the VPN client on your local system and try connecting to the VPC.

## Configuring VPN on Windows

To  configure a VPN Connection on Windows using Native VPN client, follow these steps:

1. Open the **Control Panel**, navigate to **Network and Internet**.![Network and Sharing Center](img/ConfigureVPN1.png)
2. Select **Network and Sharing Center**.
    ![Network and Sharing Center](img/ConfigureVPN2.png)
2. Under **Change your networking settings**, click **Set up a new network connection or network**.
   ![Set up a new connection or network](img/ConfigureVPN3.png)
3. The following window appears. Select **Connect to a workplace**, and click **Next**.
   ![Connect to a workplace](img/ConfigureVPN4.png)
4. Select the **Use my Internet connection(VPN)** option.
   ![Use my Internet Connection](img/ConfigureVPN5.png)
5. The following window appears. Enter the **Internet address** (**IPv4 Address** associated with your VPC, as mentioned above).	   ![Internet Address](img/ConfigureVPN6.png)
6. Select the **Remember my credentials** option, and click **Create**.
7. To configure VPN settings, open **Network and Sharing Center**, and click **Change adapter settings**.
   ![Adapter Settings](img/ConfigureVPN7.png)
8. Navigate back to **Network and Internet**, then select **Network Connections**.
   ![Configure VPN](img/ConfigureVPN8.png)
9. Locate your **VPC network**, right-click on it, and select **Properties**.
   ![Properties](img/ConfigureVPN9.png)
10. The Properties window appears:![Properties](img/ConfigureVPN10.png)
11. In the **Properties** window, navigate to the **Security** tab.
	- Under **Type of VPN**, select **L2TP/IPsec**.
	- In the **Data Encryption** field, choose **Require encryption**.
	- Select the **Allow these protocols** option.
	- Select **Microsoft CHAP Version 2(MS-CHAP v2)**.
12. Click the **Advanced settings** button. The following window appears:![Advance Settings](img/ConfigureVPN11.png)
13. Select the **Use pre-shared key for authentication** option, and enter the key that was shared with you earlier.
14. Click **OK** to save your settings.    
15. To initiate the VPN connection, navigate to **Network > Connection Settings**, then click **Connect**.
    ![Connection Settings](img/ConfigureVPN12.png)
    
16. Enter your **Username** and **Password**, click **OK**.
    ![Username and password](img/ConfigureVPN13.png)


 The configuration is successful.
![Connected](img/ConfigureVPN14.png)
