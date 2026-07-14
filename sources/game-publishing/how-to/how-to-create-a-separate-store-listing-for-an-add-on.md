---
title: Create a separate Store listing for an add-on
description: Create a separate Store listing for an add-on.
services: gaming
author: joannaleecy
ms.author: aarathin
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: bundles
ms.localizationpriority: medium
permissioned-type: private
---

# Create a separate Store listing for an add-on

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

For games and certain other cases, you might want your add-ons to have their own listing in the Microsoft Store, also known as a Store Product Details Page (PDP). The following types of add-ons support separate Store listings.

* Consumable (Microsoft Store-managed)
* Consumable (Developer-managed)
* Durable
* Durable with packages
* Add-on bundle
* Season Pass

Furthermore, Season Passes, add-on bundles, and durables with packages *require* separate Store listings. For details, see [Add-ons](../concepts/add-ons.md).

If you want to make a separate Store listing only for an add-on, navigate to the add-on **Setup** page; for example, **Durable Setup** for a durable product. Select the option for **Has its own Microsoft Store listing**. 

If your add-on has its own Store listing, use the **Pricing and availability** page to specify how the Store PDP can be accessed by customers.

In the **Visibility&mdash;Discoverability** section:
 - Select **Discoverable in the Microsoft Store through searching and browsing** if the Store PDP will be discoverable by searching and browsing. Selecting this option will also enable you to configure the add-on's **Schedule** for specifying a release date and a discoverable date.
 - Select **Accessible only by direct link** if the Store PDP won't be discoverable by searching and browsing.
   - **Note:** The direct link can be discovered via “web scraping” (or data scraping) technology. Use the **Private Audience** or **Disable store presence** options to protect your product’s listing up until the first scheduled date.

## Reserve a name for your add-on

For an add-on to have its own Store listing, you must reserve a unique name for it. You can do this in a few different ways.

When you create a durable with packages, add-on bundle, or Season Pass, you must specify an **Add-on title** on the **Create a new add-on** page because each one of these types of add-ons requires a separate Store listing. Select **Check availability** to check if anyone else has already reserved that name. If no one has, a green check mark will appear. This is much the same as when you [Create new products](how-to-create-new-products.md).

You can also reserve add-on names after creating the add-on&mdash;for instance, if the add-on type isn't a durable with packages or a Season Pass, but you still want it to have its own Store listing. You can do this on the **Manage product names** page. Select it from the add-on's navigation menu on the left. You can also reserve more names when configuring the Store listings page.

Enter a name, check its availability, and then select **Reserve product name**. 

Under **Names for this product**, you can view the names you've reserved for the add-on and the **Status** and any **Action** you can take on each name.

## Considerations

When creating a separate Store listing for an add-on, keep the following in mind.

* You can configure the **Device family availability** of an add-on by navigating to that page from the **Setup** page for the add-on. The device families you select here are where your add-on's Store listing will be available.
  
* If you decide to configure a Store listing for an add-on, you must publish the parent product to the destination sandbox before you can publish the add-on.

## See also

* [Add-ons](../concepts/add-ons.md)

