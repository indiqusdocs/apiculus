---
sidebar_position: 6
---
# Configuring Alerts on Windows Instances

To view the configured alerts or configure new ones, navigate to [Operating Windows Instances](AboutWindowsInstances), select a Windows Instance and access the **Alerts** tab .

Alerts get triggered whenever a configured condition is met. You can create multiple alerts on an instance. Alerts are sent to recipients that you can define and manage.

Subscribers can configure alerts for instances running on the Apiculus cloud console. Subscribers can define alerts for Instances and configure the email recipients for these alerts using a straightforward and easy-to-use interface.

# Instance Alerts

The Alerts tab can be accessed from the instances details. It shows the alerts already configured for that particular VM with following details:
- ID
- Alert Name
- Parameter
- Trigger
- Value
- Reading Duration
# Adding an Alert

Subscribers can create or add alerts simply by clicking on the **Add Alert** button. The following screen will open up, and the subscriber needs to describe the details of the alert.
![alertcreation](img/alertcreation.png)

The various fields of the add alert page are described below:

- **Name** - You can define the name for your alert.
- **Choose parameter** - This option allows you to define what parameter needs to be monitored to trigger the alert email. Apiculus cloud supports CPU, RAM, Disk, 1-min Load Average, 5-min Load Average, 15-min Load Average parameters.
- **Trigger when** - This set of options lets you define whether to trigger above or below a custom value.
- **Value** - You can define the Value. 
- **Reading duration** - This option lets you define the breach window, i.e., the duration for which the breach has to be consistent to trigger the alert email.
- **Send email to** - Email ids can be added here, or also you can add them by using the configure recipients.
- **1-min Load Average** - How many processes were active, executed, or awaiting execution at the last minute.
- **5-min Load Average** - How many processes were active, executed, or awaiting execution in the last five minutes.
- **15-min Load Average** - How many processes were active, executed, or awaiting execution in the last fifteen minutes.
# Configuring Recipients

This will list and display all the email IDs already configured for the alerts. You can delete the existing ids and add other email ids by following these steps:

1. Click on the **Configure Recipients** button.
2. Click on **+ Add More Recipients** button.
3. Add the email ids; multiple ids can be added and separated by (,).
4. Click the **+** icon.
5. Then click **Update**, and update the recipient's list.
![recepient](img/recepient.png)

:::note
	All the recipients configured will receive all the setup alerts. If no email ID is configured or added, then no email will be sent for the already configured alerts.
:::





