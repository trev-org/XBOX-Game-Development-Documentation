---
title: Configure leaderboards in Partner Center
description: Procedures for configuring leaderboards.
services: gaming
author: joannaleecy
ms.author: erbergst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: Configure leaderboards, Xbox Service Configuration, leaderboards, create, change, configure, modify, add, remove, delete
ms.localizationpriority: medium
permissioned-type: private
---

# Configure leaderboards in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This topic describes the procedures for configuring leaderboards in the Partner Center service configuration for a title that's using data platform 2013. For information on leaderboards that use data platform 2013, see the XDK topic **Leaderboards**. For an introduction to Xbox service configuration, see [Service configuration](/gaming/gdk/_content/gc/live/test-release/portal-config/live-service-config-ids-mp).

## What is a global leaderboard?

The Xbox Leaderboards is a service that provides the capability for storing and retrieving global leaderboards for Xbox titles. Each leaderboard score is automatically updated by the Xbox data platform to reflect the appropriate values of the score's underlying stat instances. Multiple leaderboards can be maintained for each title.

## Configure leaderboards

1. Sign in with your account on [Partner Center](https://developer.microsoft.com/dashboard/windows/overview).

1. Select your title, and then go to **Services** > **Xbox Live**.

1. Select the link to **Leaderboards**.

1. On the **Leaderboards** page, create and manage global leaderboards for your title.

## Create a leaderboard

1. On the **Leaderboards** page, select the **New leaderboard** button. This will take you to the **New leaderboard** page.
1. In the **Leaderboard name** box, provide your leaderboard's name, which must not exceed 100 characters. The name won't be visible to your players but can be used in your code to reference the leaderboard.
1. In the dropdown list **Player Stat to rank with**, select the stat on which the leaderboard is ranked. To create a new player stat, start by selecting **Create a new player stat**, which will open the **Events and stat rules** page in a new tab.
1. If you select a stat whose name contains fields, you must specify the values for the fields.
1. Under **Sort order**, select the applicable option in the dialog. **Higher values are better** is a good choice for stats like *kill count* and *coins collected*. **Lower values are better** is a good choice for stats like *race times* and *least attempts at a level*.
1. Select **Save** to save your changes or select **Cancel** to discard them.

Your new leaderboard is now listed on the **Leaderboards** page.

## Change a leaderboard

> [!IMPORTANT]
> There's no support for changing or deleting a leaderboard that's been published. This means you'll have to create a new leaderboard with a different leaderboard ID. Changing the sort order or the underlying instance of a leaderboard's stat might cause loss of data. Avoid reusing leaderboard IDs that have already been configured and published.  

1. On the **Leaderboards** page, select the name of the leaderboard that you want to change.

2. Make your changes to the leaderboard's details.

3. Select **Save** to save your changes or select **Cancel** to discard them.

## Delete a leaderboard

> [!IMPORTANT]
> There's no support for changing or deleting a leaderboard that's been published. This means you'll have to create a new leaderboard with a different leaderboard ID. Changing the sort order or the underlying instance of a leaderboard's stat might cause loss of data. Avoid reusing leaderboard IDs that have already been configured and published.  

1. On the **Leaderboards** page, select **Delete** next to the leaderboard that you want to delete.

2. In the **Confirmation** dialog, select **Delete** to confirm the deletion; otherwise, select **Cancel**.
