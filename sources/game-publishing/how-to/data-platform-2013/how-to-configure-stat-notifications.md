---
title: Configure stat change notifications in Partner Center
description: Procedures for configuring stat change notifications.
services: gaming
author: joannaleecy
ms.author: erbergst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: Configure stat change notifications, Xbox Service Configuration,stat change notifications, create, change, configure, modify, add, remove, delete
ms.localizationpriority: medium
permissioned-type: private
---

# Configure stat change notifications in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This topic describes the procedures for subscribing to stat change notifications in the Partner Center service configuration.

Stat change notifications are issued by using the Real-Time Activity (RTA) feature. Because constantly polling the service for the value of a player stat is inefficient, RTA is used to notify a title when a subscribed stat value has changed.

For an introduction to Xbox services, see [Xbox services overview](/gaming/gdk/_content/gc/live/test-release/portal-config/live-service-config-ids-mp). For information about RTA, see [Real-Time Activity Service](/gdk/_content/gc/live/features/general/rta/live-real-time-activity-service-overview).

<a id="featured-stat"></a>

## What is a stat change notification?

When a player stat is updated, it can be sent as a real-time update to any client subscribed to it. In this context, the user stat is considered an RTA. This reporting capability eliminates tracking and updating your code and easily synchronizes this user-statistic data across multiple screens.

Stat change notifications are especially useful in multiplayer games where a scoreboard tracks stats for each player and needs to be updated as quickly as possible.

## Configure stat change notifications

1. Sign in with your account on [Partner Center](https://developer.microsoft.com/dashboard/windows/overview).

1. Select your title, and then go to **Xbox services** > **Gameplay settings**.

1. Select the link to **Stat change notifications**.

1. On the **Stat change notifications** page, enable stats for stat change notifications.

You must create player stats before you can enable them for stat change notifications. For details, see [Configure Xbox stats and stat rules in Partner Center](how-to-configure-stats.md).

## Enable stat change notifications

1. Open the **Stat change notifications** page, which contains a list of any stats enabled for stat change notifications.

2. Select the dropdown list **Select a stat**, and then select an existing stat to be registered for stat change notifications. You can also select **Create a new player stat**, which will open the **Events and stat rules** page in a new tab. You can then create a new player stat.

3. If you select a stat whose name contains fields, you must specify values for the fields.

4. When you're done adding the stat change notifications, select **Save** to save your changes or select **Cancel** to discard them.

For your title to handle stat change notifications, you must add code to subscribe to the stat change notification by using the RTA service. For more information, see [Programming the Real-Time Activity Service](/gaming/gdk/_content/gc/live/features/general/rta/how-to/live-programming-rta).

## Modify stat change notifications

> [!IMPORTANT]
> After a title passes Final Certification, existing real-time activities in that title can no longer be changed or deleted.

1. On the **Stat change notifications** page, select the stat instance that you want to change.

2. In the dropdown list, select the stat instance that you want to change the notification for.

3. Select **Save** to save your changes or select **Cancel** to discard them.

## Delete a stat change notification

> [!IMPORTANT]
> After a title passes Final Certification, existing RTAs in that title can no longer be changed or deleted.

1. On the **Stat change notifications** page, select **Delete** next to the stat change notification that you want to remove.

2. Click **Save** to save your changes or select **Cancel** to discard them.
