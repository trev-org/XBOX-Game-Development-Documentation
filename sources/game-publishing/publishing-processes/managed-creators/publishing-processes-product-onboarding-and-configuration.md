---
title: Set up XBOX products in Partner Center
description: Guidance for XBOX creators about product creation and onboarding in Partner Center.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/5/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Set up XBOX products in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This article provides guidance about creating new products and requesting product onboarding.

Create all new game, demo, bundle, or add-on products in [Partner Center](https://partner.microsoft.com/dashboard).

If you're a new creator who wants to join an XBOX program, register for ID@XBOX before opening a Partner Center account. For more information, see [Register as an XBOX creator](publishing-processes-onboarding-new-creator.md). If you already release games on XBOX consoles or PC, you might already have a Partner Center account.

## Choose the right product type to create

The **Apps and Games** workspace in Partner Center offers several product types for Microsoft platforms, including **Games**, **Game Demos**, and **Game Bundles**.  

* Create a **Game** for full game products.
* Create a **Game demo** for betas or demos.
* Create a **Game bundle** for grouped offerings, such as multiple games or a game with add-ons.
* Create a **Product group** to organize all products associated with a single title. These groups only affect how the products are organized in Partner Center.

> [!NOTE]
> Create Durables, Consumables, Add-on Bundles, and Season Passes from the **Add-ons** section within a **Game**. For more information, see [Creating game add-ons](#create-game-add-ons).

To get started, see [How to create new products](../../how-to/how-to-create-new-products.md).

## Supported platforms

You can configure games, demos, bundles, and add-ons for PC, XBOX One consoles, and XBOX Series X|S. If you release on multiple platforms, decide how you want to structure your product offerings.

### Smart Delivery (XBOX consoles only)

A single product that supports XBOX One and XBOX Series X|S

* Upload separate packages for each console generation. Players automatically download the correct package for their device.
* Players own the product across both device families with one purchase.
* Use a single configuration for pricing, availability, and Store listings.
* Share XBOX services across console generations.
* If you also release on PC, combine Smart Delivery with XBOX Play Anywhere, Bound, or Unbound configurations.

### XBOX Play Anywhere (XPA)

A single product that supports both XBOX consoles and PC.

* Support XBOX One, XBOX Series X|S, or both.
* Enable cross-progression between XBOX console and XBOX on PC versions.
* Players receive XBOX Unified Entitlements, meaning they own the product both platforms with one purchase.
* Use a single configuration for pricing, availability, and Store listings.
* Share XBOX services across XBOX platforms.

For more information, review the **XBOX Play Anywhere Policy** in the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide).

### Separate Products (Bound)
Create one product per platform and link them through shared XBOX services.

* Bind products across platforms, such as XBOX One to XBOX Series X|S, or console to PC.
* You might need to support cross-progression. For details, see [XR-130](/gaming/gdk/_content/gc/policies/xr/xr130).
* Players only own the platform version they purchase.
* Configure pricing, availability, and Store listings separately for each platform.
* Configure XBOX services on a primary product and share them with a secondary product.

For more information, see [Game Binding](/gaming/gdk/_content/gc/live/concepts/game-binding/game-binding-overview).

### Separate Products (Unbound)

Create one independent per platform.

* You might need to support cross-progression. For more information, see [XR-130](/gaming/gdk/_content/gc/policies/xr/xr130).
* Configure XBOX services independently for each product.
* Players only own the platform version they purchase.
* Configure pricing, availability, Store listings, and XBOX services separately for each platform.

## Reserve a product name

When you create a **Game**, you must reserve a unique name. You can reserve other names later. 

This approach lets you use a code name during development and update it when the final name is confirmed. For more information, see [Create and reserve your game name](../../concepts/name.md).

> [!NOTE]
> The initial name you reserve becomes the display name in the Partner Center dashboard. It's also the **Identity name** for the game's packages. This name is visible to players after publishing to the **RETAIL** sandbox. Don't use a code name if players shouldn't see it later. You can't change **Identity details** after the game is created.

## Request product onboarding

All XBOX products, including games, bundles, and add-ons, require onboarding.

After creating a product, send the Store ID to your XBOX contacts and include:

* Supported platforms such as XBOX One, XBOX Series X|S, or PC.
* Planned participation in [curated programs](publishing-processes-managed-programs.md) such as XBOX Game Pass or Game Preview.
* Planned features such as Smart Delivery, XBOX Play Anywhere, or cross-generation bundles.

### Configure a revenue SKU

All XBOX products require a revenue SKU (rev SKU). After creating a product, send a request to your XBOX contacts with the product name and Store ID.

If you don't submit XBOX products for onboarding, you're blocked from publishing to the RETAIL sandbox. When you attempt to publish, an error is displayed and states that a revenue SKU is required.

## Complete Game setup

After you create a game, Partner Center opens the **[Game setup](../../concepts/game-setup-overview.md)** page. Here you:

 - Enable **XBOX services**.
 - Select **Device family availability**, either **Retail**, **Sandboxes**, or both, for each device family, such as PC and console.
 - Choose a **primary development [sandbox](../../concepts/sandboxes.md)**.
 - View **Identity details** and required identifiers for building XVC and MSIXVC packages.

### Enable XBOX features and services

XBOX services are disabled by default. If you configure the Game setup page before you [request product onboarding](#request-product-onboarding), you can only **Enable limited XBOX services**. With limited XBOX services, you can't:

 - Publish to the RETAIL sandbox.
 - Configure XBOX achievements.

After your [game concept](publishing-processes-game-concepts.md) is approved, request product onboarding. Your game is then approved and you can select **Enable full XBOX services**. 

For more information, see [XBOX services](../../concepts/xbox-services.md).

### Manage development sandboxes

Select a primary development sandbox during setup. You can use up to 100 sandboxes per Partner Center account. Two types are available:

* **Isolated Sandboxes:** Restricted to products you specify.
* **Shared Sandboxes:** Available to all products in your account.

You can create and manage sandboxes at any time. Use isolated sandboxes to limit visibility between teams, and shared sandboxes for broader access, such as QA.

For more information about configuring sandboxes in Partner Center, see [Sandboxes](../../concepts/sandboxes.md). For more information about accessing sandboxes on your device, see [XBOX services sandbox overview](/gaming/gdk/docs/services/fundamentals/sandboxes/live-setup-sandbox).

## Create game add-ons

Create add-ons from the **Add-ons** section within a **Game**. 

Supported types include:

* **Durable with packages** or **Durable** for downloadable content (DLC) and permanent in-game content such as maps, vehicles, or expansions.
  - Use **Durable with packages** when content is delivered separately from the main game.
  - Use **Durable** when content unlocks through entitlement checks. This content can't ship on physical discs.
* **Store-managed consumable** for items such as in-game currency.

For more information, see [Add-ons](../../concepts/add-ons.md) and [Choosing the right product type](/gaming/gdk/_content/gc/commerce/getting-started/xstore-choosing-the-right-product-type).

## Add platforms after release

You can add platforms after release through the product setup page, such as **Game setup**. 

Select **Sandboxes** or **Retail** for the new platform.

After selection:
 - Upload packages for the new platform.
 - Certify packages before publishing to the **RETAIL** sandbox.

> [!IMPORTANT]
> Only select **Retail** when you're ready for the platform to appear on the product details page in the Microsoft Store.

New platforms inherit pricing and availability from existing configurations. You can't remove a platform after publishing to **RETAIL**.

> [!IMPORTANT]
> If the release date configured in **Pricing and availability** is in the past, players who already own the product can access the new platform immediately after it publishes to the **RETAIL** sandbox. For example, adding PC support to a previously released console title gives existing players instant access on PC.

## Next steps

After creating your product:

 - Request product onboarding.
 - Complete all product modules, such as **Store listings**, **Age ratings**, and **Properties**.
 - Continue development with the Game Development Kit (GDK).
 - Integrate XBOX services, such as sign-in, achievements, and connected storage.

## See also

* [Get started with the Microsoft Game Development Kit](/gaming/gdk/_content/gc/getstarted/get-started-home)
* [Configuring XBOX services](../../concepts/xbox-services.md)
* [Product setup](../../concepts/game-setup-overview.md)
* [Configure properties for a game](../../concepts/properties-overview.md)
* [Age ratings](../../concepts/age-ratings.md)
* [Packages](../../concepts/packages-overview.md)
* [Availability - markets, pricing, release schedule](../../concepts/availability/availability-overview.md)
* [Store listing](../../concepts/store-listing.md)
* [Add-ons](../../concepts/add-ons.md)




