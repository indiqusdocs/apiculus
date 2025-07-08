---
sidebar_position: 2
---
# Connecting to a Linux Instance

You can connect to Linux Instances via SSH sessions using passwords (less secure) or [SSH key pairs](/docs/Subscribers/ToolsandUtilities/ManagingSSHKeysandKeyPairs) (most secure)
## Connect from a Windows Machine

To connect to your Linux Instance from a Windows machine, you will need to use a small application called PuTTy, an SSH client.

1. [Download and install PuTTy.](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
2. Launch PuTTy on your computer.
3. Enter your Instance’s IP address in the **Host Name (or IP Address)** field.
   ![putty1](img/putty1.png)
4. Navigate to **Connection** > **SSH** > **Auth**.
   ![putty2](img/putty2.png)
5. Click the **Browse** button and select the previously generated private key file.
6. To open a connection to the Instance, click **Open** at the bottom of the screen. PuttY prompts you to allow the connection to the host.
7. Click **OK** to confirm and the terminal window will be displayed.
8. Enter the default root user name (typically **ubuntu** for Ubuntu images and **root** for all other Linux OS images) and press **Enter** to authenticate against the server with your SSH key.

You are now connected to your Instance.
## Connect from a macOS or Linux Machine

1. Open any terminal program.
2. Enter the following command below into the terminal. 
   
   :::important 
   Make sure you replace `<your_private_key>` with the filename of your private key; `<your_instance_ip>` with the IP address of your Instance; and `<username>` with the default root user name (typically **ubuntu** for Ubuntu images and **root** for all other Linux OS images).
   :::

	```
	ssh -i ~/.ssh/<your_private_key> <username>@<your_instance_ip>
	```

3. If/when prompted, allow connection to the host by typing **yes**, then press **Enter**.

	```
	The authenticity of host 'myhost.ext (212.47.206.34)' can't be established.  
	RSA key fingerprint is 4f:ba:65:cf:14:64:a7:1e:b6:07:7c:00:71:95:21:fa.
	Are you sure you want to continue connecting (yes/no)?
	
	You are now connected to your Instance.
	```





