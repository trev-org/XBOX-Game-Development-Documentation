---
title: Configure pricing and availability for a game
description: Tutorial steps to use Partner Center to configure pricing and availability for a game.
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

# Configure Pricing and availability for a game

This article describes how to complete the **Pricing and availability** module in Partner Center.

---
:::zone pivot="xbox"

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

## Prerequisites

 - Enrollment as an XBOX creator. To learn more, see [Register as an XBOX creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your XBOX team.
 - Approved Game Concept for your product. To learn more, see [Submit game concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

:::zone-end

:::zone pivot="msow"

> [!IMPORTANT]
> The product configuration described in this article can be accessible via web scraping (or data scraping) technology before the first scheduled date. If this configuration isn't your intent, utilize **Private Audience** to protect your product’s listing up until the first scheduled date.
>
> With **Private Audience**, your Product Details Page (PDP) is only visible to a user group of your choosing, and it offers the ability to schedule when the product’s availability transitions from private to public. For more information, see [Visibility - Audiences](/gaming/game-publishing/concepts/availability/visibility-audiences).

## Prerequisites

 - Enrollment as a Microsoft Store developer.
 - Active Partner Center account.
 - To learn more, see [Microsoft Store Developer Platform](https://storedeveloper.microsoft.com/home).

:::zone-end

---

## Access the Pricing and availability module

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your title, or search for it.
1. On the **Game overview** page, select **Pricing and availability**.

The instructions in this article assume you use the **Main** branch. For more information, see [Branches](../concepts/branches.md).

---

:::zone pivot="xbox"

## Considerations for Xbox Play Anywhere games

If you configure **Pricing and availability** for an Xbox Play Anywhere game, the same settings apply to Xbox consoles and Xbox on PC. For example, the **Release date** and **Price** are shared across both device families. You can't configure these settings separately.

:::zone-end

---

## Markets

1. In **Markets**, select from the following options:
   - **All worldwide markets** (selected by default).
   - **Restrict to specific markets**.
   - Select **Show options** to modify specific markets.
1. Select or clear **Make my product available in any future market at the base price and general availability date** checkbox as needed.
1. Select **Save draft**.

---

## Visibility

The **Visibility** section controls how and when players can discover and acquire your game. It includes **Audience**, **Discoverability**, and **Advanced discoverability**.

### Audience

1. In **Visibility**, **Enable private audience** is deselected by default. If needed, select **Enable private audience** to restrict access to the product details page (PDP). Only users you specify can view the PDP.
1. Select **Save draft**.
1. Select **Create a new group**. Partner center opens the **Create a new group** page.
1. Enter a **Group name**, select **Known user group**, and add the email address for each group member.
1. Select **Save**.
1. Return to the **Pricing and availability** page and select the new group in the **Private audience** configuration.
1. Select **Save draft**.

For more information about private audience, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).

> [!IMPORTANT]
> To make your game publicly visible, select **Make this product public on** and set a date and time. After this point, the PDP becomes public and can't be restricted again.

### Discoverability

1. In **Discoverability**, select **Make this product available and discoverable in the Microsoft Store**.
1. Select **Save draft**.

After the game is published, players can discover it based on the configured [Schedule](#configure-schedule).

:::zone pivot="xbox"

### Advanced discoverability

If your game doesn't use the **Private audience** setting, you can select **Disable store presence (no promotional codes, no deeplink), prior to the first scheduled date** to hide the PDP until the first configured date in the [Schedule](#configure-schedule). Nobody can access the PDP before this point.

---

## Schedule and Display release date

The **Schedule** controls when your game is released and discoverable in the Microsoft Store.

> [!NOTE]
> You can't configure **Schedule** dates if **Make this product available but not discoverable in the Microsoft Store** is selected in the **Discoverability** section.

### Configure Schedule

1. In **Schedule**, select **Show options**.
1. Configure the following options:
   - **Release**: Select **at** and then set your game's release date and time.
      - **UTC**: The game is available in all markets at the same Coordinated Universal Time (UTC).
      - **Local**: The game is available at the local time you configure for each market. Markets that have multiple time zones use a single time zone for product availability. For more information, see [Global Time Zones](/windows/apps/publish/publish-your-app/release-schedule?pivots=store-installer-msix#global-time-zones).
   - **Discoverable in the Microsoft Store:** Select **at Release**.
      - The product is discoverable via search when the game is released.
   - **Stop acquisition:** Select **never**.
   - **No longer discoverable in the Microsoft Store:** Select **never**.
1. Select **Save draft**.

To customize dates by market, select **Customize for specific markets**. Configure the schedule for each market as needed.

### Display release date

To show a different release date on the PDP, select **Show options**, enable **Display release date**, and specify the date (UTC).

:::zone-end

:::zone pivot="msow"

---

## Schedule

The product is available to customers as soon as possible. This means that when you publish the game to the RETAIL sandbox, it's accessible in the Microsoft Store immediately after it publishes.

To control the exact date and time that the game is available, enable **Private audience**, select **Make this product public on**, and configure the date and time that the product becomes publicly accessible.

:::zone-end

---

## Pricing

Use the **Pricing** section to define your game's price. Select **Show options** to begin configuring pricing.

### Configure price

The **Base price** sets the suggested price across all markets. Partner Center automatically converts this price to local currencies. You can override pricing for specific markets if needed.

:::zone pivot="xbox"

1. Select the primary platform (**Xbox** or **Desktop**).
1. Set the **Base price** and **currency**.

The price selected is the **Suggested** price. After selecting a price, review the corresponding wholesale price for the product. Microsoft reserves the right to change the retail price without notice.

:::zone-end

:::zone pivot="msow"

1. Select the **Currency**.
1. Set the **Retail price**.

:::zone-end

To override the base price for specific markets, select **Create new market group**, select the required markets, and configure the price. Create more market groups as needed.

### Currency conversion rates

If you don't configure market-specific pricing, Partner Center converts the base price using currency exchange rates.

:::zone pivot="xbox"

 - Conversion rates may change over time based on market conditions.
 - Existing wholesale and suggested retail prices don't update automatically. *You must configure any required adjustments*.
 - New price selections use the latest conversion rates.

:::zone-end

Before publishing, select **Review price per market** to validate pricing for all markets.

---

## Free trial

You can offer a free trial to attract players and allow them to try your game.

Different trial types are available:
 - Time-limited
 - Usage-limited
 - Unlimited

For more information, see [Trials overview](../concepts/availability/trials.md).

1. In **Free trial**, select **Show options**.
1. Select a trial type.
1. Configure trial settings, including **Starts on** and **Ends on** dates.
1. If needed, select **Customize for specific markets**.
1. Select **Save draft**.

---

:::zone pivot="xbox"

## Sale pricing and Free to use

Only Microsoft can configure **Sale pricing** and **Free to use** scenarios for game products. For more information, see [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md).

:::zone-end

:::zone pivot="msow"

## Sale pricing

Select **Show options** to configure sale pricing for your game.

1. Select **New sale**.
2. Select the **markets** that receive the sale pricing.
3. Configure the sale details:
   - Discount type, such as **price** or **percentage**.
   - Discount **value**.
   - Who the discount is **Offered to**.
   - The date and time the discount **Starts on**.
   - The date and time the discount **Ends on**.
4. Select **Save draft**.

:::zone-end

## Next steps

* [Configure Gaming metadata](how-to-add-metadata.md)
