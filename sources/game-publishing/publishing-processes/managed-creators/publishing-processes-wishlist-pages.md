---
title: Game wishlist pages
description: Overview of setting up an XBOX creator's game to have wishlist availability in the Microsoft Store.
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

# Game wishlist pages

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Wishlist pages can be a valuable marketing opportunity, enabling you to direct customers to your products in the Microsoft Store before they're available to purchase. After your product is published to the Microsoft Store with a publicly visible configuration, customers can add it to their wishlist. The wishlist enables customers to keep track of their most-wanted products and be notified when they release or when they're included in a sale. 

If you'd like to configure a wishlist page for your product, begin by informing your XBOX contacts.

---

## Setting up a wishlist page

After you create your game in Partner Center and inform your XBOX contacts of your wishlist plans, you need to complete the minimum information to be ready for publishing. To publish a wishlist page for an XBOX game, you need to complete the **Age Ratings**, **Store listings**, **Pricing and availability**, **Properties**, **XBOX settings**, and **Supplemental info > Certification** modules. You can also publish a wishlist page for other product types, like durables and bundles. These products don't have XBOX settings or Supplemental Info to complete. For all products, you also need to request a **Revenue SKU** configuration.

> [!IMPORTANT]
> If you previously submitted packages for certification using the **Main** branch, or if you're not releasing your game on the XBOX One family of devices, you must complete the **Packages** module. Speak to your XBOX contacts for guidance about creating stub files.

### Revenue SKU request

All products must have a valid Revenue SKU configured. Send the *Store ID* of your product to your XBOX contacts and request Revenue SKU setup while you're working on the rest of your product configuration. Revenue SKU setup can take 1-3 business days. 

### Age ratings

Complete the International Age Rating Coalition (IARC) questionnaire for your product in Partner Center. If you're planning to release your game on physical discs in any region, or if you're considering pre-orders, review [XR-017: Title Ratings](/gaming/gdk/_content/gc/policies/xr/xr017) for further guidance about any rating overrides that are required.

### Store listings

Your Store listings should be prepared in all required languages as defined in the XBOX Games Store Policy, available in the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide). For full guidance on completing the Store listings for Games and associated products, see [Store listings](../../concepts/store-listing.md).

After your Store listings are complete, submit them for review by selecting **Certify** and following the workflow. For more information, see [Certify](../../concepts/certification/certification-overview.md).

### Pricing and availability

Your Pricing and availability configuration defines when and where the wishlist page is available to customers. For detailed steps on configuring the Pricing and availability page for a wishlist page, see [Configure products to be visible but not purchasable in the Microsoft Store](../../how-to/how-to-visible-only-pdp.md).

> [!NOTE]
> If your game is configured for pre-order or release, it's still possible for customers to add it to their wishlist. The visible-only configuration is intended for products that aren't yet available for purchase.

After your configuration is complete, submit it for review by selecting **Certify** and following the workflow. For more information, see [Certify](../../concepts/certification/certification-overview.md).

### Properties

Your Properties module should be completed with features that you're committed to having available when the game releases. If you're unsure whether you support a specific feature, don't select it at this time. You can update your Properties at any time and publish the changes for them to take effect in the Microsoft Store. For more information, see [Properties](../../concepts/properties-overview.md).

### XBOX settings

When publishing a wishlist page for a Game, don't publish your XBOX services to the RETAIL sandbox. Your XBOX services configuration might not be final and some changes, like removal of achievements, aren't possible after you publish them. Your XBOX contacts grant permissions during product onboarding that enable you to publish your game without XBOX services. Choose **Select source** in the dropdown list for XBOX services source selection during the **Review and Publish** workflow when you publish your game to the RETAIL sandbox.

> [!IMPORTANT]
> If you're unable to publish your game after choosing **Select source** as the source for XBOX services, don't proceed with publishing. Speak to your XBOX contacts for support.

As a safeguard to protect your product information if you test your game in the RETAIL sandbox before it releases, configure an XBOX Embargo date in the **XBOX settings** page for your product. Embargo ensures your achievements and other XBOX settings are embargoed before the configured date. For more information, see [Configuring XBOX services setup](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup).

### Supplemental info - Certification

The certification questionnaire must be completed before you can publish a wishlist page for a Game. Complete the information with as much information as you can accurately provide. If you enter any placeholder information, be sure to update this information before submitting your game for Optional or Final Certification. For more information, see [Supplemental info](../../concepts/certification/certification-supplemental-info.md).

---

## Wishlist notifications

Customers can configure their notification preferences for products they add to their wishlist. Notifications are delivered:
 - As emails.
 - As system notification on XBOX consoles, the XBOX app on PC, and the XBOX mobile app.

The following notification options are available.

  - **Wish list items go on sale:** Notifies the customer when the wishlisted product is configured with a strike-through discount. If multiple wishlisted items are discounted at the same time, notifications are consolidated into one system toast notification and email.
  - **Wish list items are released:** Notifies the customer when the wishlisted product goes from a **pre-order** state to a **released** state.
  - **Wish list items are in Game Pass:** Notifies the customer when the wishlisted product is added to the Game Pass catalog.
  - **Wish list items are free to play:** Notifies the customer when the wishlisted product temporarily enters into the **Free Play Days** program.
  
---

## Wishlist data

Once your product is available to customers for wishlisting, you can review data such as the number of wishlists, which storefront was used to wishlist the product, and whether customers converted their wishlist to a purchase (when available). Wishlist data is provided in the *Wishlist* dataset available via the **Downloads Hub** in Partner Center. For more information about creating a report using this data, see [Downloads Hub Datasets - Wishlist](/partner-center/insights/downloads-hub-datasets#wishlist).

---

## Preparing for pre-order or release

If your product is available for wishlisting, speak to your XBOX contacts before you publish a final **Pricing and availability** configuration for pre-order or release. They provide you with guidance about how to publish securely to avoid unintended exposure of your release date, pricing, or other information.



