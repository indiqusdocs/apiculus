---
sidebar_position: 2
---
# Creating Automated Snapshot Schedules

Apiculus Cloud Console users can create snapshot policies for their root and data disks. These schedules enable for strategic management of data retention policies and can be used as an alternative backup solution. To create or manage the Snapshot schedules, navigate to the **Schedules** section of disk details.

The following schedules are supported:

| Schedule | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| Hourly   | A snapshot will be taken at specified intervals past each hour       |
| Daily    | A snapshot will be taken every day at the specified time             |
| Weekly   | A snapshot will be taken every week on the specified day and time.   |
| Monthly  | A snapshot will be taken every month on the specified date and time. |

You can create automatic snapshot policies as per defined schedules. 

![Schedules](img/Schedules.png)

## Set Snapshot Schedule

While configuring snapshot schedules, the following points should be considered:

- Only one policy can exist per schedule. Creating a new policy of an existing schedule will override the previous one.
- All schedule options support time specifications in custom time zones.
- All schedule options include a **Snapshots to Keep** setting, which is a limit on how many snapshots to keep (or rotate after) as per the retention policy.
  
To create a Snapshot Schedule, click **Create Schedule**. The following dilog box appears.

![Set Snapshot Schedule](img/Schedules1.png)
Select the below details in the form to set the Snapshot Schedule.
- Frequency
- TimeZone
- Snapshots to Keep
:::note
	There can only be one policy per schedule; the new snapshot policy overrides the existing policy of the same frequency.
:::
