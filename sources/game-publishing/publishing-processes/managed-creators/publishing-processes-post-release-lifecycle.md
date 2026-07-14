---
title: Product changes and Content Updates
description: Guidance for the ongoing support of released games from XBOX creators.
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

# Product changes and Content Updates

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

The base release of your content and configuration is the first step in supporting the overall lifecycle of your game. Use Content Updates (CUs), configuration changes, and add-on content to support your game post-release.

## Updating games via Content Updates (CUs)

Updates, also known as _patches_, to XBOX games are called *Content Updates* (CUs). Each CU is uploaded to Partner Center as a complete package replacement, rather than using a separate update file that includes only the changes from the base game. After a CU passes certification and is published to the RETAIL sandbox, users will download only the new and updated files, minimizing the update size. There's no charge to submit and release CUs. Also, there's no limit to the number of updates that you can make over the life of your title.

When submitting CUs, pay close attention to the Identity section of the MicrosoftGame.config file. Set a version number that's higher than the version used in any builds submitted previously, and ensure that the IdentityName and IdentityPublisher values are unchanged. 

For detailed advice about building your packages, see [Packaging overview](/gaming/gdk/_content/gc/packaging/overviews/packaging).

### Testing Content Updates via Package Flight

We recommend that all CUs are tested in the RETAIL sandbox by using **Package Flights**, before you release them to the public. Testing in RETAIL enables you to validate that the CU functions as expected before you release it to players. This testing can be done before, during, or after certification.

For more information, see [Publishing and testing in the RETAIL sandbox](publishing-processes-retail-publishing-and-testing.md) and [How to configure package flights for game packages](../../how-to/how-to-package-flights-for-xvc-packages.md).

### Bypass testing and the Cert Bypass program

All games are eligible to qualify for the Cert Bypass program. If a game has no unfixed Conditions for Resubmission (CFRs), CUs submitted for certification after the game releases are eligible to bypass full XBOX Requirement (XR) testing. CUs for PC games must still complete [submission checks](../../concepts/certification/certification-guide.md#submission-checks), including malware scanning. Cert Bypass CUs should take no more than one business day to be processed.

You might choose to opt out of Bypass testing, or your XBOX contacts might recommend or require you to opt out. If opting out is required, inform your XBOX team before you submit your CU to certification. Common scenarios where you might need to opt out include:

 - Features being added to the game that require testing never previously completed, such as adding a new significant gameplay mode.
 - Updating from the Xbox One XBOX Development Kit (XDK) to the Game Development Kit (GDK).
 - Adding support for a new type of DLC that wasn't tested previously, for example, adding support for a game expansion if you previously only released cosmetic items.

> [!NOTE]
> If a CFR is found during testing after you opt out of Cert Bypass, your next CU isn't eligible for Cert Bypass and requires full testing until all CFRs are fixed.

After your game becomes eligible for Cert Bypass, the XBOX Certification team might audit it. Your XBOX contacts will let you know if any issues are found during this process that you need to fix in your next CU. This CU isn't eligible for Cert Bypass.

For more information, see the [Cert Bypass Program](../../concepts/certification/cert-bypass.md).

## Updates to XBOX services Gameplay Settings

Updates to XBOX services Gameplay Settings can be used to add new achievements, adjust title storage, add leaderboards, and more. All XBOX services Gameplay Settings validation is automated within Partner Center. These settings can be published to RETAIL directly and don't require testing by XBOX Certification. Contact your XBOX team if you experience any problems when publishing updated XBOX services Gameplay Settings.

## Region expansions

If a product is initially released to only a subset of markets, you might want to release it to more markets post-launch. If not provided via the International Age Rating Coalition (IARC) ratings system, appropriate age ratings must be acquired and configured in the product's **Age Ratings** module in Partner Center before you release to any new markets. 

 - For digital-only releases, markets can be configured by updating **Pricing and Availability** in Partner Center. 
 - For games released on disc, you might need to create an updated disc that includes the age ratings for the new markets. If the required age ratings are included in the original disc, it isn't necessary to create a new disc.

Before you expand to any new markets, contact your XBOX team for guidance. They can also validate your new configuration before you publish it.

## Releasing add-on content

Add-ons, or Downloadable content (DLC), are a great way to provide players with new content for games. The XBOX Requirements for add-on products are tested alongside your game if add-ons are provided when you submit the base game to certification. Make sure you submit at least one example of every type of add-on content that your game supports. If add-ons aren't provided at the time of base game certification, a CU must be submitted alongside the new content, before the add-on's release. Contact your XBOX team if you have plans for add-on content releases. For more information about creating add-ons in Partner Center, see [Set up XBOX products in Partner Center](publishing-processes-product-onboarding-and-configuration.md).

## Pricing promotions and waterfalls

Games and other products can be offered at a discounted price during a set time period or permanently. Temporary promotions and permanent waterfall price reductions can stimulate purchasing of products. For more information, see [Curated programs](publishing-processes-managed-programs.md#discounting-and-sales).

The process for initiating price reductions in the Microsoft Store depends on your goal for a product. Regardless of the goal, at least three weeks in advance, you must submit all promotional pricing plans and all discount and timing requests to your XBOX contacts. Your XBOX contacts submit the necessary request to the Microsoft Store team. After the request is approved, your XBOX contacts work with you to configure the promotional pricing.

For a permanent price reduction, you must schedule the price reduction start date and prepare the pricing within Partner Center. For more information, see [Availability - markets, pricing, release schedule](../../concepts/availability/availability-overview.md) and [How to make pricing changes](../../how-to/how-to-priceupdate.md).

You can also waterfall-price physical discs for remanufacturing. For more information, see [How to submit royalty tiers](../../how-to/how-to-submit-royalty-tiers.md).

## Delisting products from the Microsoft Store

If you're considering delisting (also referred to as _sunsetting_) a product from the Microsoft Store, start by reviewing the **XBOX Software Title Sunset Policy** in the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide). The policy provides detailed information about the required notice you must provide to Microsoft, and actions that you must take before delisting a product.

For more information about the Partner Center configuration to delist a product, see [How to delist a product from the Microsoft Store](../../how-to/how-to-delist-from-retail.md).


