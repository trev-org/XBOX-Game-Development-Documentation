---
title: Use Review and Publish to publish a game
description: Tutorial steps to use Review and Publish in Partner Center to publish a game to the Microsoft Store.
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

# Use Review and Publish to publish a game to RETAIL

:::zone pivot="xbox"

After passing Certification, making your game available to customers by publishing it to the RETAIL sandbox.

## Prerequisites

 - Enrollment as an XBOX creator. To learn more, see [Register as an XBOX creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your XBOX team.
 - Approved Game Concept for your product. To learn more, see [Submit game concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

## Request revenue SKU creation

XBOX products use the [Reseller](../concepts/availability/managed-creators/reseller-pricing.md) pricing model. Before you can publish to the RETAIL sandbox, these products must have a **revenue SKU**. You can't publish XBOX products to the RETAIL sandbox without a revenue SKU, but you can still publish them to development sandboxes or submit them for certification. To request revenue SKU configuration, send the **Store ID** for your product to your [XBOX contacts](../resources/managed-support/overview-microsoft-representatives-and-contacts.md).

>[!NOTE]
> A revenue SKU is required for all XBOX products, including games, bundles, and add-ons. Make sure you request a revenue SKU before you publish to the RETAIL sandbox. An error is displayed if a revenue SKU isn't configured.

:::zone-end

:::zone pivot="msow"

Publish your game to the RETAIL sandbox to make it available to customers.

## Prerequisites

 - Enrollment as a Microsoft Store developer.
 - Active Partner Center account.
 - To learn more, see [Microsoft Store Developer Platform](https://storedeveloper.microsoft.com/home).

:::zone-end

## Submit your game for publishing

> [!NOTE]
> Only packages, pricing and availability information, and Store listings in the **Main** branch can be published to the RETAIL sandbox. You can't use content from other branches. Use the **Import** functionality where available to copy your configuration to the **Main** branch.

:::zone pivot="xbox"

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. On the **Game overview** page, select **Review and publish** near the page title.
1. On the **Game title | Review and publish** page, go to the **Publish to** dropdown, and select **RETAIL**. **Publish from** is unavailable because only the **Main** branch can be used as the source.
   - If you can't select the **RETAIL** sandbox and see **(Requires concept approval)**, you need to submit your game for [Game Concept](../publishing-processes/managed-creators/publishing-processes-game-concepts.md) approval before you can proceed. All games that use full XBOX services must receive concept approval before they can be published to RETAIL.
1. Review the status of the different modules. All modules need to show a checkmark before you can publish. If any modules are incomplete, go to the individual pages to complete them.
    * [Packages](how-to-create-a-package.md)
    * [Properties](how-to-configure-properties.md)
    * [Age ratings](how-to-set-age-ratings.md)
    * [Store listings](how-to-create-a-store-listing.md)
    * [Pricing and availability](how-to-configure-pricing-and-availability.md)
    * [Gaming metadata](how-to-add-metadata.md)
    * [XBOX Gameplay Settings](how-to-configure-xbox-services.md)

1. For **Submission notification audience**, select **Click here** to view or change who can receive submission status notifications for this product.
1. Select **Publish** to submit your game for publishing. Each stage in the publishing process must be completed before the game can advance to the next stage. The following timelines provide estimated durations for each stage.
    - **Processing:** < 6 hours
    - **Certification:** < 5 days - Products need to be certified before they can be published to the Microsoft Store. For details see [Certification](../concepts/certification/certification-overview.md). 
    - **Publishing:** < 6 hours

> [!NOTE]
> If any modules aren't certified before you start publishing, the process submits them for Certification before the publish proceeds. If Certification fails, resolve any issues before you try to publish again.

:::zone-end

:::zone pivot="msow"

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. On the **Game overview** page, select **Review and publish** near the page title.
1. On the **Game title | Review and publish** page, go to the **Publish to** dropdown, and select **RETAIL**. **Publish from** is unavailable because only the **Main** branch can be used as the source.
1. Review the status of the different modules. All modules need to show a checkmark before you can publish. If any modules are incomplete, go to the individual pages to complete them.
    * [Packages](how-to-create-a-package.md)
    * [Properties](how-to-configure-properties.md)
    * [Age ratings](how-to-set-age-ratings.md)
    * [Store listings](how-to-create-a-store-listing.md)
    * [Pricing and availability](how-to-configure-pricing-and-availability.md)

1. For **Submission notification audience**, select **Click here** to view or change who can receive submission status notifications for this product.
1. Select **Publish** to submit your game for publishing. Each stage in the publishing process must be completed before the game can advance to the next stage. The following timelines provide estimated durations for each stage.
    - **Processing:** < 6 hours
    - **Certification:** < 3 business days
    - **Publishing:** < 6 hours

:::zone-end

> [!TIP]
> Use the **Review and publish** page to help you track the items that need to be completed before publishing.

## Acquire your game in the RETAIL sandbox

After you publish the game to the RETAIL sandbox, acquire it by using a [Promotional Code](../publishing-processes/managed-creators/publishing-processes-promo-codes.md). To get started, go to the **Apps and games** workspace in Partner Center, and then select **Promotional codes**. If you configured **Private audience** in your game's **Pricing and availability** page, you need to be a member of the selected private audience groups before you can view the game in the Microsoft Store or redeem a promotional code.

:::zone pivot="xbox"

If your game has a public audience configuration, or the private audience restrictions end, your game is available for customers to purchase starting on the **Release** date you configured in the **Pricing and availability**.

:::zone-end

:::zone pivot="msow"

If your game has a public audience configuration, or the private audience restrictions end, your game is available for customers to purchase immediately after it publishes to the RETAIL sandbox. The game's discoverability in the Microsoft Store depends on the **Discoverability** setting you selected in the **Pricing and availability page**.

:::zone-end

:::zone pivot="xbox"

## Test your game in RETAIL

Test all games in the RETAIL before their release. For information about recommended tests to complete, see [Recommendations for testing in RETAIL](../publishing-processes/managed-creators/publishing-processes-recommendations-for-testing-in-retail.md).

:::zone-end

## Update your game
Submit updates for any module by making changes in Partner Center and then publishing them to the RETAIL sandbox. This process includes updating the game packages to release new features or fix problems, changing Store listings assets to keep your Microsoft Store page fresh, or changing the price. Some changes, like updating your game packages or changing your price, might require certification review and approval before they can be published to RETAIL.

## Next steps

* [Create and publish add-ons](how-to-create-use-publish-add-ons.md)
