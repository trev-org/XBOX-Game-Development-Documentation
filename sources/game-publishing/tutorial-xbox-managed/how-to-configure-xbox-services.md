---
title: Configure XBOX services for a game
description: Tutorial steps to use Partner Center to configure XBOX services for a game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/4/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
zone_pivot_groups: gpg-program-selection
---

# Configure XBOX services for a game

:::zone pivot="xbox"

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

This article describes how to configure the XBOX settings and XBOX services gameplay settings for your game.

## Prerequisites

 - Enrollment as an XBOX creator. To learn more, see [Register as an XBOX creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your XBOX team.
 - Approved Game Concept for your product. To learn more, see [Submit game concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).
 - XBOX services enabled for your product. If XBOX services aren't enabled yet, see [Create a game and configure game setup](how-to-create-a-title-and-configure-game-setup.md).

## Configure XBOX services - XBOX settings

XBOX settings lets you configure basic information about your game for the XBOX network.

### Navigate to XBOX settings

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
1. On the **Apps and games | Overview** page, select your game from the list or use **Search** to find and select your game.
1. Select **XBOX settings** from the left navigation pane.

### Configure Title Names

Title names are the localized strings displayed to users in various XBOX services such as Achievements, Game Invites and Presence.

1. [Navigate to XBOX settings](#navigate-to-xbox-settings).
2. In the **Title Names** section, en-US is added by default. Check that the string in the **Name** column is accurate.
3. To add localized title names, select **Add localized title**.
4. In the **Locale** column, add the language code, for example **en** for English.
5. In the **Name** column, enter the localized title name.
6. If you change your mind, you can delete a localized title name by selecting the **Delete** option for any locale. You can't delete the default en-US string.
7. Select **Save** to save your configuration for this section.

### Configure Data Platform Setting

1. [Navigate to XBOX settings](#navigate-to-xbox-settings).
2. Scroll to the **Data Platform Setting** section.
3. In the **Stats configuration system** section, select **Event-Based Stats** or **Title-Managed Stats**. For more information, see [Event-based vs title-managed Stats](/gaming/gdk/_content/gc/live/features/player-data/stats-leaderboards/live-stats-eb-vs-tm).
4. In the **Achievements configuration system** section, select **Event-based Achievements** or **Title-managed Achievements**. For more information, see [Event-based vs title-managed Achievements](/gaming/gdk/_content/gc/live/features/player-data/achievements/live-achievements-eb-vs-tm).
5. In the **Publish Achievements to Retail?** section, select **Yes I will be publishing Achievements**.
6. Select **Save** to save your configuration for this section.

### Configure Device families

The Devices families configuration enables you to limit the types of device on which your product can access XBOX services. By default, all device families are enabled. You can leave this configuration unchanged. If you want to limit the types of devices, follow these steps.

1. [Navigate to XBOX settings](#navigate-to-xbox-settings).
2. Scroll to the **Device families** section.
3. Select the checkbox in the **Allowed** column for each **Platform** your game supports.
6. Select **Save** to save your configuration for this section.

### Configure Embargo date

Embargo provides protections to help limit the product's social data exposure in the RETAIL sandbox via service calls or in the XBOX UI. Only the product or its custom access policies are able to make calls to get the embargoed data. Users playing a product during the embargo period don't show any content related to the product that is covered by Embargo until the specified embargo date and time is reached. For more information about the content that is covered by Embargo, see [Configuring XBOX services in Partner Center](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup#embargo-date).

1. [Navigate to XBOX settings](#navigate-to-xbox-settings).
2. Scroll to the **Embargo date** section.
3. Select **Set embargo date** and enter a date and time (UTC) for the embargo to end.
4. If you want to allow multiplayer invites during the embargo period, select **Allow Multiplayer Invites in Embargo**.
6. Select **Save** to save your configuration for this section.

## Configure XBOX services - Gameplay settings

In **XBOX services - Gameplay settings**, you configure various elements of your game's XBOX services including Achievements, Rich Presence, and Multiplayer services. To configure your XBOX services - Gameplay settings, follow these steps.

1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
2. On the **Apps and games | Overview** page, select your game from the list or use **Search** to find and select your game.
3. Select **Gameplay settings** from the left navigation pane.
4. Complete each section of your **Gameplay settings**, for example **Achievements**, **Rich Presence**, and **Multiplayer**.
5. When you're ready to test your changes, **Publish** your XBOX services - Gameplay settings to your development sandbox.

For full information about configuring XBOX services - Gameplay settings, see [XBOX services overview](/gaming/gdk/_content/gc/live/get-started/live-xbl-overview).

## Publish XBOX services

After you configure your XBOX services, you must publish them for your changes to take effect. XBOX services are published to each sandbox individually. For example, if you're developing your game in ABCDEF.1, publish your XBOX services to ABCDEF.1 each time you make a change to your **XBOX services - Gameplay settings** or **XBOX services - Settings**. To publish your XBOX services, follow these steps.

1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
2. On the **Apps and games | Overview** page, select your game from the list or use **Search** to find and select your game.
3. Select **Gameplay settings** from the left navigation pane.
4. Select **Publish** from the top navigation pane. The **Publish gameplay settings** window appears.
5. Select a **source** and **destination** sandbox.
   - The source is the sandbox where you configured your gameplay settings changes.
   - The destination is the sandbox where you want your changes published.
6. Select **Publish**. The page will display a confirmation message after your changes are published.

> [!IMPORTANT]
> After you release your game, make sure to publish any XBOX services changes to the RETAIL sandbox when you're ready for them to go live to players of your game. Some changes can't be rolled back after you publish them to RETAIL. Be sure that you're ready for your changes to be released before publishing.

For more information, see [XBOX services overview](../concepts/XBOX-services.md).

:::zone-end

:::zone pivot="msow"

XBOX services are a collection of micro-services that expose features such as profile, friends and presence, stats, leaderboards, achievements, multiplayer, and matchmaking. XBOX services aren't supported if you only want to publish a game to the Microsoft Store on Windows.

To use XBOX services and publish XBOX games, you must first enroll as an XBOX partner. To get started, register for the ID@XBOX program at [XBOX Developer Programs](https://developer.microsoft.com/games/publish/).

:::zone-end

## Next steps

 - [Certify a game](how-to-certify-a-game.md)
 - [Create and publish add-ons](how-to-create-use-publish-add-ons.md)

:::zone pivot="xbox"

## See also

 - [XBOX services overview](../concepts/XBOX-services.md)

:::zone-end
