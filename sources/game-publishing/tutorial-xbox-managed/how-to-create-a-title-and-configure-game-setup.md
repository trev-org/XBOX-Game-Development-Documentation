---
title: Create a game and configure game setup
description: Tutorial steps to use Partner Center to create and configure a new game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 3/6/2026
zone_pivot_groups: gpg-program-selection
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Create a game and configure game setup

:::zone pivot="xbox"

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

This article describes how to create an XBOX game and configure the **Game setup** page in Partner Center.

## Prerequisites

 - Enrollment as an XBOX creator. To learn more, see [Register as an XBOX creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your XBOX team.
 - Approved Game Concept for your product. To learn more, see [Submit game concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

:::zone-end

:::zone pivot="msow"

This article describes how to use Partner Center to create a game for use with the Game Development Kit (GDK) and configure the **Game setup** page.

## Prerequisites

 - Enrollment as a Microsoft Store developer.
 - Active Partner Center account.
 - To learn more, see [Microsoft Store Developer Platform](https://storedeveloper.microsoft.com/home).

:::zone-end

:::zone pivot="xbox"

## Create a Game product

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select **+ New product** and then select **Game**.
1. In **Create your game by reserving a name**, enter the name of your game in **Name**. Select the **Check availability** link to determine if the name is available. If the name is available, a green check mark appears. For more information, see [Create and reserve your game name](../concepts/name.md).
1. Select **Reserve product name**.
1. Partner Center automatically shows you the **Game setup** page.
1. Optionally, you can select **Enable limited XBOX services**. These services let you start developing your game by using the Game Development Kit (GDK), but you can't use certain features, such as XBOX achievements.

Before you can select **Enable full XBOX services**, you need to request product onboarding.
:::zone-end

:::zone pivot="msow"

## Create a GDK game product

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select **+ New product** and then select **GDK game**.
1. In **Create your game by reserving a name**, enter the name of your game in **Name**. Select the **Check availability** link to determine if the name is available. If the name is available, a green check mark appears.
1. Select **Reserve product name**.
1. Partner Center automatically shows you the **Game setup** page.

:::zone-end

> [!NOTE]
> If you can't reserve a name for which you hold the trademark or other legal right, or if you see another app in the Microsoft Store using that name, [contact Microsoft](https://www.microsoft.com/info/cpyrtInfrg.html).

### Device family availability

The **Device family availability** section lets you control which devices your game support. By default, only the **Desktop** device family is active. 

 - **Retail** is required for publishing to the RETAIL sandbox. If you select this option, the system automatically selects the sandboxes option.
 - **Sandboxes** is required for publishing to a development sandbox.
 - For more information, see [Sandboxes](../concepts/sandboxes.md).

:::zone pivot="xbox"

For XBOX games, the XBOX device family is active only after you enable XBOX services. Configure this section after you request product onboarding.

## Request product onboarding

XBOX creators need to send the Store ID for new game products to their XBOX contacts for onboarding. This process grants access to full XBOX services and features in Partner Center.

1. Go to the **Game setup** page for your game.
1. In the **Identity details** section, select **Show details**.
1. Copy the **Store ID** value.
1. To request product onboarding, send an email to your XBOX contacts.
   - **Subject** Product onboarding request: &lt;Product name&gt;&mdash;&lt;Store ID&gt;&mdash;&lt;Creator name&gt;
   - **Body** I'd like to request product onboarding for the following product: <br />&lt;Product name&gt;<br />&lt;Store ID&gt;
 
## Configure Game setup

If you're already on the **Game setup** page, go to step 5.

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
1. On the **Apps and games | Overview** page, use **Search** to find and select your game.
1. Select **Game setup** from the left navigation pane.
1. Select **Enable full XBOX services**.
1. In the **Device family availability** section, select **Sandboxes** for each device family your game supports. You can also select **Retail** now, or select it later when you want to publish the game to the RETAIL sandbox.
   - Select **Desktop** if you're developing an XBOX on PC game.
   - Select **XBOX** if you're developing an XBOX console game.
1. In the **Primary XBOX services development sandbox** section, select a development sandbox.
   - If you need to create a new development sandbox, first select **Manage sandboxes**.
   - For more information, see [Sandboxes](../concepts/sandboxes.md).
1. Select **Show details** in the **Identity details** section.
1. Note the identifiers and links. The **Store ID**, **Package manifest values**, and **Package family values** are especially important since they identify the title and build by the Store. They're also used to license your game. To learn more about the identifiers, select the information icon next to it.
1. After configuring and reviewing the Game setup page, select **Save draft**.

Full XBOX services are enabled for the game. After a few minutes, **XBOX services** is available on the page navigation. Refresh your browser page to see the new menu options.

### Enabling XBOX Play Anywhere (XPA) Unified Entitlement for XBOX games on PC and Console

If you're developing an XBOX Play Anywhere game, select both the **XBOX** and **Desktop** device families in the **Device family availability**. When a customer purchases your game, they automatically get the entitlement to download and play the game on XBOX consoles and XBOX on PC. This entitlement is called **XBOX Unified Entitlement**. Don't create separate games for PC and Console if you're supporting XPA.

:::zone-end

:::zone pivot="msow"

### Enable XBOX services (Optional)

XBOX services are a collection of micro-services that expose features such as profile, friends and presence, stats, leaderboards, achievements, multiplayer, and matchmaking. XBOX services aren't required if you only want to publish a game to the Microsoft Store on Windows.

To use XBOX services and publish XBOX games, you must first enroll as an XBOX partner. To get started, register for the ID@XBOX program at [XBOX Developer Programs](https://developer.microsoft.com/games/publish/).

## Save game identity details

Your game has a unique identity, assigned by the Microsoft Store. When you package your game by using the GDK, you need to use the values displayed in the **Identity details** section of the **Game setup** page. Note the following values to use when packaging your game.
 - Game name
 - Package/Identity/Name
 - Package/Identity/Publisher
 - Package/Properties/PublisherDisplayName
 - Store ID

:::zone-end

## Next steps

* [Create and upload a game package](how-to-create-a-package.md)
