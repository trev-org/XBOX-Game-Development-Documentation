---
title: Configure featured stats in Partner Center
description: Procedures for configuring featured stats.
services: gaming
author: joannaleecy
ms.author: erbergst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: Configure featured stats, Xbox Service Configuration, featured stats, create, change, configure, modify, add, remove, delete
ms.localizationpriority: medium
permissioned-type: private
---

# Configure featured stats in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This topic describes the procedures for adding and changing the featured stats in the Partner Center service configuration for a title. For an introduction to Xbox service configuration, see [Service configuration](/gaming/gdk/_content/gc/live/test-release/portal-config/live-service-config-ids-mp).

<a id="featured-stat"></a>

## What is a featured stat?

A featured stat is a player stat that's displayed in various kinds of Xbox UI, most notably in a player's activity hub and in a player-to-player comparison of progress in the game.

For each title, you can select up to 20 of the title's most representative user stats. These custom-defined metrics are used to highlight a player's progress, compare it with the progress of other players, and drive players back into the game.

Each featured stat includes a localizable display name, a sort order, and a sequence number for prioritizing a set of featured stats.

## Configure featured stats

1. Sign in with your account on [Partner Center](https://developer.microsoft.com/dashboard/windows/overview).
1. Select your title, and then go to **Xbox services** > **Gameplay settings**.
1. Select the link to **Featured stats**.
1. Designate new featured stats or reorder existing featured stats.

## Create a featured stat

You must create a stat rule before you can create a featured stat. For details, see [Configure Xbox stats and stat rules in Partner Center](how-to-configure-stats.md).

1. On the **Featured stats** page, select **New featured stat**.

2. In the box under **Display name**, provide a new, localizable display name for the featured stat. The maximum length of the string is 40 characters.

3. In the dropdown list under **Select a player stat to rank players with**, select the player stat instance to be featured. The stats should be easy to sort.

4. In the dropdown list under **Format**, select the format for the presented stat data: integer, decimal, percentage, short time-span, or long time-span.

    If you selected a short or long time-span, select the unit of time to be displayed: milliseconds, seconds, minutes, hours, or days.

5. Under **How should we aggregate this stat when comparing to other players?**, select from these three options.
   * Tier  
    A tiered level of achievement for a player's progress in the game

    * Best  
    The current best score a player has posted

    * Cumulative  
    An indication that this value can be added to other players' values in the calculation of the total cumulative value


6. Under **How should we sort this stat when comparing to other players?**, select from these two options.
    * Higher values are better
    * Lower values are better


7. Select **Save** to save the featured stat or select **Cancel** to cancel it.



## Reorder featured stats

All titles automatically display three built-in featured stats before any title-specific featured stats. The built-in stats are GamerScore, achievements earned, and time played.

By default, title-specific featured stats are ordered according to the sequence in which you create them. Each featured stat has an associated number that represents the stat's display order in the UI. Make sure that the most important and representative stats have lower order numbers, with 1 being the first featured stat displayed.

To change the order of the featured stats:

1. On the **Featured stats** page, select **Reorder featured stats**.

2. Change the value in the **Order** column. You can't assign the same number to more than one featured stat.

3. Select **Confirm**.

## Change a featured stat

1. On the **Featured stats** page, select the **Display name** of the featured stat you want to change.

2. Make the changes on the page that shows the details of the featured stat.

3. Select **Save**.

## Delete a featured stat

> [!IMPORTANT]
> Deletion of a featured stat is permanent and irreversible.

1. On the **Featured stats** page, select **Delete** in the row of the featured stat you want to delete.

2. In the **Confirmation** dialog, select **Delete**.
