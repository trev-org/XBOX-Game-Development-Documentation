---
title: Recommendations for testing in the RETAIL sandbox
description: Recommendations for XBOX creators needing to test content in the RETAIL sandbox.
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

# Recommendations for testing in the RETAIL sandbox

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

We recommend that you test your products in the RETAIL sandbox before they're released to players. Use the guidance in this topic to learn more about configuring your device for testing, and for suggestions about how to test different types of product.

## Configuring your device for the RETAIL sandbox

To test your products, you need a device connected to the XBOX network and configured for the RETAIL sandbox. 

 - For Console products, you can access the RETAIL sandbox using either a shop-bought XBOX console, or an XBOX Development Kit that isn't currently configured for Developer mode. For more information about how to switch to and from Developer and Retail mode, see [Changing your Development Kit from Retail Mode to Developer Mode](/gaming/gdk/docs/gdk-dev/console-dev/dev-kits/settings/change-dev-kit-mode).
 - For PC products, you can switch the sandbox to RETAIL using the [PC Sandbox Switcher](/gaming/gdk/_content/gc/live/test-release/tools/live-pc-sandbox-switcher).

After configuring your device to access the RETAIL sandbox, redeem a Promo Code (for Console or PC) or insert a test disc into your console to begin the installation of your game (Console only).

> [!NOTE]
> If you don't already have promotional codes, order them now. For more information, see [Ordering promotional codes](publishing-processes-promo-codes.md).

## Testing disc and digital base games

We recommend that all base game products are tested in the RETAIL sandbox before they're released, both for physical disc releases and digital downloads. This list shows the basic things that we recommend you check for. This list isn't exhaustive, and there could be other things you should be checking. You're best suited to know how your game behaves.

- Ensure that you're testing the correct package. For information about how to check the package version, see [How to check which package is downloaded](#how-to-check-which-package-is-downloaded) later in this article. These instructions apply to installing from a disc or installing from the Microsoft Store via a Promo Code or purchase.

- While you're connected to the XBOX network, launch the game. Ensure that you don't see the *We couldn't get your latest save data.* error message. If you see this message, check that the correct XBOX services Gameplay Settings were published to the RETAIL sandbox. If you continue to experience issues, contact your XBOX contacts.

- If you have your own publisher services, ensure that you can connect to these services in-game.

- Ensure that achievements unlock as expected when the criteria are met. If you have Embargo configured in the product's Partner Center **XBOX settings**, you don't see achievements in the XBOX shell UI or XBOX app on PC. For more information, see [RETAIL embargo](#retail-embargo).

- If your game supports multiplayer, confirm that you can access the services, join sessions, and send and receive invites as expected. If you have Embargo enabled and didn't choose to allow game invites, you don't receive system-level game invites. For more information, see [Configuring XBOX services setup in Partner Center](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup).

- Check that you can access any leaderboards, and that they populate correctly.

- Create game save data and make sure that it loads as expected after terminating and relaunching the game. If possible, sign in to your account on another device and ensure that your data syncs correctly from the XBOX network.

- Check different languages and locales by changing the language/region settings on your device.

- Validate the behavior of your game on all platforms and console devices that are supported. Do so to ensure that no unexpected performance or compatibility issues are present that weren't seen in your development environment.
  
- View the game's Product Details Page (PDP) in the Microsoft Store app on your device. Check that all images, marketing text, capabilities, and gaming metadata display as expected. Repeat this step with different language and region settings on your device.
  - If you didn't configure the game to be *Discoverable* in the **Schedule** section of your **Pricing and Availability** page in Partner Center, use a direct link to access the PDP. The direct link is available in the **Game Setup** page of your product in Partner Center. Enter the Microsoft Store app URI into a browser on your PC or console.

- If your game is being distributed on physical discs and you place a disc order, the designated recipients receive a quantity of test discs. For more recommended test cases for disc products, see [Media Validation Test Steps](../../concepts/certification/certification-media-validation-test-steps.md).

  - You might receive your test discs before you publish your product to RETAIL. If you do, you can't use them while your console is connected to the XBOX network. If you disconnect your console from the XBOX network, you can install the disc's package and access offline game features.
    - Ensure that your console is oriented correctly. Incorrect orientation of the console might cause a disc-read error.

### Sending release approval

After you complete your checks, confirm with your XBOX contacts that everything works as expected. Provide your confirmation of release approval.

**Digital games**

- Send confirmation of your completed checks in an email to your XBOX contacts.

**Disc-based games**

- Send an email to your XBOX contacts confirming your approval to Release to Manufacture (RTM) your disc binary. This approval confirms that you tested your discs and that you approve them for release to your selected Authorized Replication (AR) sites for manufacture. Review the steps in the [Approve discs for manufacture](publishing-processes-rtm.md) when you're ready to RTM. 

## Testing add-on and bundle products

Add-on products, including Durables and Consumables, and bundles, including Game Bundles and Season Passes, can be tested in RETAIL using Promo Codes in the same way as Game product can.

- Ensure that all add-on products function with the game as expected.
- View the PDP for all add-on products, and then check that all images and marketing text is displayed as expected. Repeat this process for different languages and regions.
- If you have pre-order and launch bundles that include add-on products, redeem a promo code for each bundle and validate that the correct products are granted. Use a different account to redeem each bundle, and install the products on a device that doesn't already have these products installed. This process ensures that you can simulate the final player experience.

## Testing Content Updates (CUs)

After your Content Update (CU) passes certification, publish it to RETAIL via a [Package Flight](../../how-to/how-to-package-flights-for-xvc-packages.md) before you publish it to General Availability (GA) via the *Main* branch. This process is sometimes called *Selective Publishing*. Package Flights for XBOX console products require a *Known Device Group* to be configured. PC Package Flights require a *Known User Group*. Each of these groups can be created and modified via the **Engage** - **Customer Groups** area of your Partner Center account.

> [!NOTE]
> Updates to XBOX services Gameplay Settings can't be selectively published, nor can they be scheduled to release at a specific date and time. Ensure you publish updates to your XBOX services at the date and time you want them to be released.

After your CU is published to a Package Flight, verify that the user experience is as expected. The following tests are examples of things you should check.

- Ensure that the updated package is installed.

- Check that the update's download and install size is as you expect.

  - To ensure that you're able to check the update size, you should clear the **"Keep my games &amp; apps up to date** checkbox in **System settings**. Alternatively, customize your console's power option to prevent updates from installing automatically during specific hours.

  - If you see an unexpectedly large download size, contact your XBOX contacts.

- Ensure that game data from the previous version of your game works with the new version.

- Validate any changes or fixes in the CU function as expected.

- Ensure that basic game functions such as multiplayer and matchmaking work as expected.

- If your CU adds support for downloadable content (DLC), ensure that the add-on product is published. Use Promo Codes to acquire and install the DLC for testing alongside your CU. Ensure that any existing DLC still works as expected.

## Device and account recommendations when testing

- Use specific Microsoft accounts (MSAs) for testing before the game officially releases.

- Ensure that your accounts use restricted privacy and security settings. These settings help ensure that information, such as achievements, isn't exposed via your account's XBOX profile if you don't use XBOX services Embargo.

- For CU testing, consider excluding at least one console from your Known Device Group so that you can always easily install the currently available package in RETAIL.

## Appendices

### How to check which package is downloaded

#### Console

 1.	Go to **My Games and Apps.**
 2.	If you're checking a Game, go to **Games.** If you're checking an App, go to **Apps.**
 3.	Select the product that you want to check.
 4.	To go to the **Manage** UI, press the **View** button (overlapping rectangles) on the controller.
 5.	The version number appears alongside the base game information.

#### PC

 1. Open the **Start** menu.
 2. Find the installed game. Right-click it and select **App Settings.**
 3. The package version number appears in the **Apps and Features** UI.

> [!NOTE]
> If you have market-specific packages, download the game in one country/region for each of the market-specific packages that you have. 

### Ensure that you're checking the correct discs

When you receive your test discs, make note of the Binary ID. This identifier is printed on the label of each test disc and is also printed near the center of the underside of the disc (it might only be seen in certain light conditions). After your discs complete certification and a report is issued, check that the Binary ID on your discs matches the Binary ID listed at the top of the certification report.

We recommend that you review the [Media Validation Test Steps](../../concepts/certification/certification-media-validation-test-steps.md).

### How to view the Product Details Page (PDP) of your game in the Microsoft Store if it isn't Discoverable

 1. After you download the game, go to **My Games and apps** and then select it.
 2. To go to the **Manage** UI, press the **View** button on the controller.
 3. Select **See in Microsoft Store.**

Alternatively, use the direct link to the Store page. The direct link can be found in the **Game Setup** page of your product in Partner Center.

### RETAIL Embargo

For details about Embargo, see [Configuring XBOX services](../../concepts/xbox-services.md).

If you're testing the game in RETAIL while Embargo is enabled:

 - You can't see information about achievements in the **Achievements** section of the XBOX UI, or in your XBOX profile. However, you still see system notifications when you unlock achievements. Stats and Rich Presence aren't visible on your profile.

 - Screenshots, game clips, and broadcasting don't work. You can capture screenshots and game clips locally but you can't share them.

 - You can't see other players' scores in any leaderboards.

 - Game invites work only via the XBOX shell. Invites don't work if they're not enabled in the Embargo configuration for your game.

## Next steps

With your game published to RETAIL and tested, you're ready for release. You might want to support your game with new content, submit updates for your game to certification, or prepare to release a new product.

 - [Supporting released games](publishing-processes-post-release-lifecycle.md)
 - [Submitting to XBOX certification in Partner Center](publishing-processes-submitting-to-certification.md)
 - [Submit a Game Concept](publishing-processes-game-concepts.md)



