---
title: XBOX game publishing overview
description: An overview of the XBOX game publishing process.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/18/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# XBOX game publishing overview

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

> [!IMPORTANT]
> This documentation is continually evolving based on hardware and software innovations and policy updates.
> If there's a conflict between the information on this website and any agreement you signed with Microsoft, including the policies in those agreements, the agreements and policies take precedence.  

This guide helps XBOX creators understand and navigate the end-to-end process used to release games for XBOX consoles and XBOX on PC. XBOX creators have a dedicated XBOX account team or are registered with ID@XBOX.

Use this guide in addition to the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide). The XBOX Publisher Guide contains useful documents and forms related to processes detailed throughout this guide. To access the XBOX Publisher Guide, sign in by using the account you use for Partner Center. If you have trouble signing in, speak to your XBOX contacts.

For detailed XBOX contact information, see [Who are your XBOX contacts?](../../resources/managed-support/overview-microsoft-representatives-and-contacts.md).

## 1. Register as a new XBOX creator

Before you can develop games with full XBOX services and publish to the XBOX Store, you need to register for an XBOX developer program, for example, ID@XBOX. Start the sign-up process at [XBOX Developer Programs](https://developer.microsoft.com/games/publish). If you're already working with XBOX, follow the guidance provided by your XBOX contacts.

During the sign-up process, you sign a non-disclosure agreement (NDA), tell Microsoft about your game, receive necessary agreements for game development by using the [XBOX Game Development Kit](/gaming/gdk) (GDK), and create an account for [Partner Center](https://partner.microsoft.com/dashboard/home). Partner Center is the portal you use to create, configure, and publish your products for XBOX. You can also manage user access to your account and products.

For step-by-step guidance, see [XBOX onboarding overview](../../onboarding/overview.md).

## 2. Submit your game concept

Game concepts provide XBOX with information about your game, such as what it is, who's developing and publishing it, and the expected release date. If you're a new XBOX creator, you submit your first game concept during XBOX registration. Before receiving concept approval, you only have access to a limited set of XBOX services in Partner Center, and you can’t publish your game to XBOX consoles. To unlock full XBOX services and XBOX console publishing, submit your game concept for approval through the [XBOX Onboarding Hub](https://aka.ms/xboxgsf).

After you submit your concept, XBOX reviews it. If the concept is approved, you might need to sign a publishing agreement, also called a licensing agreement, before full XBOX services are enabled for your game. If so, you'll receive full instructions after you receive concept approval.

For more information, see [Submitting game concepts](publishing-processes-game-concepts.md).

## 3. Plan your XBOX products

Whether you're planning to release an XBOX Play Anywhere game or a game only for XBOX consoles, product planning is an important step in the process as you decide how and where you release your game. It helps you understand the products that you need to create in Partner Center, and the way you need to configure them. You might decide that you make multiple editions (SKUs) of your game available to players, like a standard edition and a deluxe edition, with each containing different products. You might also have plans for a wishlist page, or a pre-order. Share this product planning information with your XBOX contacts as early as possible. They can review your plans, provide feedback, and request other approvals if they're needed.

For more information, see [SKU planning](publishing-processes-sku-planning.md).

## 4. Create and configure XBOX products in Partner Center

By using Partner Center, you can create any products that you might need at any time. In general, after you confirm your SKU plan, it's a good time to make sure you have each of the products created. You might need to create a game, game bundle, game demo, or add-ons such as durables, consumables, or a Season Pass.

Depending on the type of product you need to create, you might have to reserve a product name or request product onboarding by XBOX. For example, games, demos, and bundles products always require onboarding. Share the Store ID with your XBOX contacts so that appropriate permissions can be applied.

After you create a new product, work through each of the modules in Partner Center, such as **Age ratings**, **Store listings**, **Pricing and availability**, and **Gaming metadata**, to provide the necessary information, assets, and availability configuration for your product to release.

For more information, see [Set up XBOX products in Partner Center](publishing-processes-product-onboarding-and-configuration.md).

## 5. Develop your game with XBOX services

When developing an XBOX game by using the [Game Development Kit](/gaming/gdk), you need to integrate XBOX services. When you create a new game in Partner Center, XBOX services are disabled. Use the [Game setup](../../concepts/game-setup-overview.md) page to enable XBOX services. If your game doesn't have an approved [game concept](publishing-processes-game-concepts.md), or if it has an approved game concept but it isn't approved to use full XBOX services, you can only **Enable limited XBOX services**. Limited XBOX services let you get started with development using the GDK, but they can only be used in development sandboxes and you don't have access to features like XBOX achievements. After you receive game concept approval, you can **Enable full XBOX services**.

For more information, see [XBOX services](../../concepts/xbox-services.md).

## 6. Submit XBOX products for certification

Before you can publish to the RETAIL sandbox (the environment where customers access your products), you must submit your game for certification. Certification applies to your **Store listings**, **Pricing and availability**, **Packages**, and **Gaming metadata**.

You can submit some modules, such as **Store listings** and **Pricing and availability**, for certification as soon as you configure the required information. Submit the **Packages** module for certification only after you have a valid game package intended for testing by XBOX. This testing validates your game's compliance with the XBOX Requirements (XRs) before release. You can submit a package for either Optional Certification or Final Certification. Depending on the type of product and the supported platforms, different requirements apply. If you're distributing a game for XBOX consoles on physical discs, you need to take extra steps in certification. For any product, if you submit a package before it's ready for testing, it might be rejected from certification.

For more information about the submission process, see [Submitting for certification](publishing-processes-submitting-to-certification.md). For more information about XBOX Certification testing, see [Certification overview](../../concepts/certification/certification-guide.md).

For more information about the XBOX Requirements, see [Policies and Xbox Requirements](/gaming/gdk/_content/gc/policies/gc-policies-nav).

## 7. Configure XBOX products for pre-order and release

After you pass certification, you're almost ready for release. Before you publish a product to the RETAIL sandbox, ensure that all modules in Partner Center have the final configuration intended for players. Use your product's **Pricing and availability** module to configure the markets, visibility, availability, and price as required before you publish.

If you intend to make a product available for pre-order, which allows customers to purchase but not play it before release, see [Configuring pre-order products](publishing-processes-configuring-pre-orders.md). This article provides information about submitting a pre-order plan for approval, configuring pre-order bundles, and testing your pre-order before release.

> [!NOTE]
> If you want to make your game available for wishlisting, you can do so without submitting packages for certification. For more information, see [Game wishlist pages](publishing-processes-wishlist-pages.md).

## 8. Publish your products to RETAIL

Publishing to the RETAIL sandbox is the final step in making your product available to players. You can complete this step only after you receive game concept approval and pass certification. Before you publish, check each of your product's modules in Partner Center to ensure you have everything configured as you intend for customers. Confirm that you enabled any features to restrict visibility of your product, such as [Private Audience](../../concepts/availability/visibility-audiences.md). Some changes aren't possible after you publish to the RETAIL sandbox. For a detailed checklist to review, see [XBOX game publishing readiness checklist](publishing-processes-game-publishing-readiness-checklist.md).

When you're certain that everything is configured as required, use the **Review and publish** option in Partner Center and follow the steps to publish your product to the RETAIL sandbox. 

For more information, see [Publishing to RETAIL](publishing-processes-retail-publishing-and-testing.md).

## 9. Test your products in RETAIL

After you publish your product to the RETAIL sandbox, test it in that environment. To acquire the product for testing, use [Promo Codes](publishing-processes-promo-codes.md). If your product is released on disc, you can also test it by using test discs provided during the certification process. You can test your product on any device configured to access the RETAIL sandbox. For XBOX on PC games, use a suitable PC. For XBOX console games, use an XBOX Development Kit with Developer Mode turned off, or a retail XBOX console that you purchased from a store.

For some general recommendations about what to test for your products, see [Recommendations for testing in RETAIL](publishing-processes-recommendations-for-testing-in-retail.md). This guide isn't exhaustive&mdash;as the publisher or developer, you know your game best, and understand what tests are most applicable.

You might also want to test unreleased products in the RETAIL sandbox or run beta testing. For more information about methods of testing in the RETAIL sandbox, see [Prerelease testing options](publishing-processes-prerelease.md).

## 10. Support your game with post-release updates

After your game releases, you can support it in many ways. For example, you can provide Content Updates (CUs), add-on releases (downloadable content (DLC)), participation in managed programs, sale pricing, new XBOX achievements, and region expansions. If you have plans to use these support mechanisms, speak to your XBOX contacts for guidance and recommendations.

For more information, see [Supporting released games](publishing-processes-post-release-lifecycle.md) and [Post-sale monetization](publishing-processes-post-sale-monetization.md).
