---
sidebar_position: 2
---
# Working with Instance Volumes

Each Instance on Apiculus (Linux or Windows) includes a 'root' disk or volume. This is the primary disk partition on the Instance, where the operating system, data, components and files reside on the root disk.

Further, Instances can have add-on or data disks attached to them which act as additional disk partitions. These data disks are modular and can be moved between multiple Instances.

Apart from this, there is no difference between a root disk and a data disk. Both types of Volumes are managed using the **Block Volumes** service. However, based on the volume type, certain operations may not be available.

| Operations                    | Root Disks                      | Data Disks |
| ----------------------------- | ------------------------------- | ---------- |
| Overview & Volume Information | Available                       | Available  |
| Snapshot Management           | Available                       | Available  |
| Recurring Snapshot Schedules  | Available                       | Available  |
| Resizing Volumes              | Available (via parent Instance) | Available  |
| Volume Operations             | Not Available                   | Available  |


