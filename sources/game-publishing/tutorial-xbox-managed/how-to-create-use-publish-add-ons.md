---
title: Create and publish add-ons for a game
description: Create and publish add-ons for a game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/5/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
zone_pivot_groups: gpg-program-selection
---

# Create and publish add-ons for a game

This article describes how to create and publish game add-ons.

Add-ons are used to make new content for your game, like game expansions, character skins, or virtual currencies, available to customers. An add-on must be associated with a game that you create in Partner Center.

:::zone pivot="xbox"

## Prerequisites

 - Enrollment as an XBOX creator. To learn more, see [Register as an XBOX creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your XBOX team.
 - Approved game concept for your product. To learn more, see [Submit game concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

:::zone-end

:::zone pivot="msow"

## Prerequisites

 - Enrollment as a Microsoft Store developer.
 - Active Partner Center account.
 - To learn more, see [Microsoft Store Developer Platform](https://storedeveloper.microsoft.com/home).

:::zone-end

## Create an add-on associated with a game in Partner Center

Game add-ons are configured within your game in Partner Center. Navigate to your game and then use the **Add-ons** page within the title to start the process of creating add-ons.

:::zone pivot="xbox"

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. In the **Home** page, select **Apps and games**.
1. In the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. Select **Add-ons** from the left navigation pane.
1. In the **Add-ons** page, select **+ Create a new...** and select the type of add-on to create. XBOX creators can create different types of add-ons including: Consumable (Developer-managed), Consumable (Microsoft Store-managed), Durable, Durable with Packages, and Add-on Bundle. For more information, see [Add-ons](../concepts/add-ons.md).
1. Specify a unique value as the product ID for your add-on. For example, consumable_001. This ID is used in code and in Partner Center to identify the add-on.
1. Select **Create**.

:::zone-end

:::zone pivot="msow"

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. In the **Home** page, select **Apps and games**.
1. In the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. Select **Add-ons** from the left navigation pane.
1. In the **Add-ons** page, select **+ Create a new...** and select the type of add-on to create. You can create different types of add-ons including: Consumable (Developer-managed), Consumable (Microsoft Store-managed), and Durable. For more information, see [Add-ons](../concepts/add-ons.md).
1. Specify a unique value as the product ID for your add-on. For example, consumable_001. This ID is used in code and in Partner Center to identify the add-on.
1. Select **Create**.

:::zone-end

## Configure add-on properties

Add-on properties are similar to the properties of a base game.

Each add-on type has different properties that you need to configure. For example, **Durables** have a different list of properties from **Consumables**. For more information, see [Partner Center sections to configure for add-ons](../concepts/add-ons.md#partner-center-sections-to-configure-for-add-ons).

## Use the add-on in your game

Add-ons are identified using values in the **Identity details** section of the add-on setup page. Use the product ID to associate the item in your game. For more information, see [Commerce - Getting Started](/gaming/gdk/_content/gc/commerce/getting-started/getting-started-nav) in the Game Development Kit.

:::zone pivot="xbox"

## Submit add-ons for certification

When all the required information needed is completed, you can move forward and submit the add-on for certification. Your add-on's **Pricing** and **Store listings** configurations might need to be approved.

Use the **Certify** option on the add-on's **Overview** page to begin the certification process. For more information, see [Certify](../concepts/certification/certification-overview.md).

> [!Note]
> You can't submit an add-on for certification until the base game has been submitted for certification.

:::zone-end

## Publish add-ons

Add-ons can only be published to the RETAIL sandbox after passing certification. However, since add-ons must be associated with a base game, the base game must pass certification and be published to the RETAIL sandbox before the add-on can be published.

You can submit both the base game and add-on for certification at the same time. In the event where the add-on passes certification but not the base game, you can't publish the add-on until the base game passes certification.

Similar to a base game, configurations made in the **Pricing and availability** section of the add-on determine when the add-on is visible and available to customers in the RETAIL sandbox.

## See also

* [Add-ons](../concepts/add-ons.md)
* [Configure a Durable add-on for a game](how-to-configure-a-durable.md)
