---
title: Prerelease testing options
description: Detailed guidance for prerelease testing options in the RETAIL sandbox.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 2/6/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Prerelease testing options

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Use prerelease testing to ensure that your product is of high quality, its service interactions are robust, and it's ready for release. 

## Overview of prerelease testing options
You can test your product in your own sandboxes or in the RETAIL (production) sandbox. The following options are available.

 - **Sideloading** (Console)/**Local Install** (PC): Manually install your product on your PC or console in a development sandbox by using the Game Development Kit (GDK) development tools. You can install a package generated with makepkg or deploy loose files.
   - [PC install instructions](/gaming/gdk/_content/gc/tools-pc/launching-on-pc)
   - [Console install instructions](https://developer.microsoft.com/games/xbox/docs/gdk/deployment)

 - **Development sandbox download**: Publish a package to your development sandbox using Partner Center. Make the package available for download from the Microsoft Store app using an XBOX development kit or a PC configured with user access to the sandbox.

 - **Closed beta**: Publish your game to the RETAIL sandbox in a hidden state. It can only be acquired from the Microsoft Store by redeeming a promotional code.

 - **Open beta**: Publish your game to the RETAIL sandbox in a discoverable state. It can be acquired for free and downloaded from the Microsoft Store.

 - **XBOX Insider Program**: The XBOX Insider Program lets you distribute a beta product securely by using the XBOX Insider Hub app, and only to the audiences you define. By using the program, you can also gather feedback and bug reports that help you prepare for the full release of your game.

For full definitions, requirements, and restrictions for game betas on any Microsoft platform, review the XBOX Games Store Policy, available from the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide).

## Sideloading (Console) and Local Install (PC)

Use sideloading (for XBOX console games) or local installation (for PC games) to immediately deploy XBOX packages that are created with an **/LU** or **/LT** flag. There's no need to publish this package by using your Partner Center product because the package is deployed directly to your device. You can deploy your content by using the GDK Tools.
 - [PC install instructions](/gaming/gdk/_content/gc/tools-pc/launching-on-pc)
 - [Console install instructions](https://developer.microsoft.com/games/xbox/docs/gdk/deployment)

Sideloading offers the fastest iteration time but might be less scalable than other options.

| Advantages | Disadvantages |
| ---------- | ------------- |
| Build deployment is directly in the hands of the development team. | An XBOX Development Kit is required for console games. |
| Builds can be deployed immediately after a build is completed, and there's no need to wait for publishing or for uploads to Partner Center. | Audience's scope is limited to users with development kits, development tools, and access to your development sandbox. |
| Debugging tools are functional in development environments. These tools make it easier to troubleshoot issues with game clients. | The Microsoft Store download process can't be tested for the base game or for Content Updates.

## Developer sandbox download

You can upload packaged builds to your product in Partner Center, and published these builds to your development sandboxes. Published builds can be downloaded directly from the Microsoft Store app on your devkit or PC. This approach enables deployment to larger audiences, and it more accurately simulates the end-user experience compared to sideloading.

To maintain a high level of security, you must have an [XBOX test account](/gaming/xbox-live/test-release/test-accounts/live-test-accounts) that has permissions to access the sandbox you’re using, and you must have access to the title itself.

Each Partner Center account has its own specific set of sandboxes and options for configuring access to these sandboxes. A sandbox name consists of a publisher's moniker of four or six characters, followed by a number from **.0** to **.99** (for example, **XDKS.1**). You can choose from any of these sandboxes for your development and testing needs. For more information, see [Sandboxes](/gaming/gdk/_content/gc/live/test-release/sandboxes/live-sandboxes-nav). 

For more information about publishing to your development sandbox, see [Review and Publish](../../concepts/modular-submission.md).

| Advantages | Disadvantages |
| ---------- | ------------- |
| The development team controls user management and build deployment. XBOX test accounts can be created or deactivated quickly and easily, and in bulk. | This option is available only to internal individuals and to groups with access to development consoles and your development sandbox. |
| Builds can be uploaded and published via Partner Center, and they're available for download within a few hours. | For console games, this option requires a development kit–enabled console. | 
| Build iteration can be accomplished quickly, by uploading and publishing a new build in Partner Center. This process also you to accurately test Content Update and Intelligent Delivery downloads. | How quickly and often you can publish package updates depends on the upstream bandwidth and integrity of your internet connection, and the ingestion and processing time in Partner Center. |
| Debugging tools are functional in development environments. These tools make it easier to troubleshoot issues with game clients. | |

## Testing of beta products in RETAIL

PC and Console games can be configured for two types of beta releases: closed to a curated audience, and open to the public. The audience type and size of your audience determines the limitations, distribution types, and [XBOX Requirements (XRs)](/gaming/gdk/_content/gc/policies/certification-requirements-beta-game-preview) that apply.

A beta should be a separate product from the full game release, with its own XBOX services, pricing and availability configuration, and Microsoft Store Product Details Page (PDP). In some scenarios, you might be able to use your full game product. For more information, speak to your XBOX contacts.

The XBOX Insider Program complements your beta release and can be used as both a distribution and a feedback platform. More information about this program is provided in the following sections.

### Closed beta

A closed beta is available only to players you select.

 - Work with your XBOX contacts to entitle players based on ownership of another product (for example to offer access to a beta product as part of a pre-order).
 - Create and distribute Promotional Codes, which can be generated directly through Partner Center or by the Microsoft Token Specialist. For more information, see [Ordering promotional codes](publishing-processes-promo-codes.md).
     - Tokens must be distributed in accordance with the XBOX Games Store Policy, available for download from the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide). 

All closed betas must comply with the [Certification Requirements for Betas](/gaming/gdk/_content/gc/policies/certification-requirements-beta-game-preview), and receive a Microsoft review. XBOX certification testing isn't always required.
 - XBOX Certification doesn't test closed betas distributed to fewer than 10,000 players.
 - XBOX Certification tests closed betas distributed to 10,000 or more players, except those betas distributed by using the XBOX Insider Program.
 - Closed betas in the XBOX Insider Program can be distributed to up to 50,000 players before they require testing by XBOX Certification.

For information about the policies that apply to a closed beta, including policies about monetization and availability of the beta product, refer to the XBOX Games Store Policy in the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide).

### Open beta

An open beta is distributed as a free offer through the Microsoft Store, and must be available to everyone for download and play. All open betas are subject to testing of the [Certification Requirements for Betas](/gaming/gdk/_content/gc/policies/certification-requirements-beta-game-preview) by XBOX Certification. The beta must pass Certification before it can be released to the public. Except for Free-to-Play games, an open beta must be created as a **Game Demo** in Partner Center and be separate from your full game product.

For information about the policies that apply to an open beta, including those policies for monetization and availability of the beta product, refer to the XBOX Games Store Policy in the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide).

### XBOX Insider Program: Testing in RETAIL

You can start using the XBOX Insider Program as soon as you have a package that can be published to the RETAIL sandbox. This process is referred to as *flighting*. The packages you use don't need to pass Certification before they can be used with the XBOX Insider Program unless you exceed the thresholds described in the Certification Requirements for Betas. Flighting can be used for base game products or for Content Updates (CUs). It's a convenient and secure way to test your product in the RETAIL sandbox.

Some benefits of the XBOX Insider Program include:

 - **Security:** Make your product available only to select audiences. Grant access to the product using Promo Codes that are redeemed through the XBOX Insider Hub app such that the code is never shown to the user. You can also keep flights private using Private Audience.

 - **Flexibility:** Target audiences as small as your development team or studio, or invite millions of XBOX Insiders to participate in your flight. With Partner Center, you can also flight multiple builds simultaneously, at any time and to anyone you choose. Scale or change your offering as you need to. For more information about publishing Content Updates and multiple builds, see [Updating your title in the RETAIL sandbox](#updating-your-title-in-the-retail-sandbox) later in this topic.

  - **Custom reporting:** Gather feedback and bugs from XBOX Insiders by using _Surveys_ and _Report a Problem_ options available in the XBOX Insider Hub app, and receive summary reports regularly.
  
For example, you can use this option to conduct take-home test sessions among members of your studio, without having to bring your office development kit consoles home. To join, use separate production Microsoft Accounts. Use a combination of Private Audience (see [Visibility - Audiences](../../concepts/availability/visibility-audiences.md)) and [XBOX services Embargo](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup) to keep your product and XBOX services configuration hidden from other users.

With the XBOX Insider Program, you can test with small audiences during early development, and expand your audience in your beta phases. This approach helps you keep your testing streamlined and methodical as your product matures and gets ready for testing by more users.

For more information about the XBOX Insider Program and onboarding:
 - Contact your XBOX representative or the XBOX Insider Program team.
 - View the steps to get started at [XBOX Insider Program flighting](publishing-processes-xbox-insider-flighting.md).

| Advantages | Disadvantages |
| ---------- | ------------- |
| Involves little or no console configuration. Uses retail consoles, or development kits with developer mode disabled. | Iteration is slower, because all updates are submitted through the standard release pipeline (including Certification if applicable). |
| Hides Promo Codes, preventing users giving them away or selling them. | Debugging tools aren't supported in RETAIL. |
| Reduced XBOX Certification testing (up to 50,000 invited players). |  |
| Exercises production services from end to end. |  |
| Lets you securely target a wider audience than is possible with sideloading or development sandbox downloads. In some scenarios, audiences can be targeted according to the developer-designated criteria, such as playing a previous game in a franchise. |  |
| Offers optional, ready-made feedback mechanisms. |  |

### Comparing beta distribution options

This table shows the differences between the various methods of testing and distributing your beta title.

| **Feature** | **Closed Beta** | **Open Beta** | **Insider Program Closed Beta** | **Insider Program Open Beta** | **XBOX Game Preview** |
|-|------------------------|----------------------|---------------------------------|-------------------------------|-----------|
| **Participation** | Limited <br />- Invitation-only friends and family <br />- Selected public participants <br />- Might require a non-disclosure agreement (for example, click-through) <br />- Might be capped to a finite number of participants <br />- Might be bound to preorder or other bounty | Everyone |- Limited audience, such as friends and family, or select member of the public <br />- Criteria for selecting an audience automatically are available and involve the console type, engagement level, and existing entitlement's ownership <br />- Common Terms of Use available <br />- Can be capped to a specified number of participants <br />- Can be bound to a preorder or other bounty <br />- Can be monitored for leaks and leak vectors.<br /> | Everyone | Everyone |
| **Distribution** | Promo codes or hidden offers | Microsoft Store app via a publicly available offer | Secure assignment and redemption of promo codes via the XBOX Insider Hub app | Secure assignment and redemption of promo codes via the XBOX Insider Hub app | Microsoft Store app via a publicly available offer |
| **Monetization** | Not permitted | Not permitted | Not permitted | Not permitted | Permitted in line with the policies defined in the XBOX Games Store Policy and XBOX Game Preview program documentation available in the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide). |
| **XBOX Certification**  | < 10,000 users: Microsoft review <br/> >= 10,000 users: Microsoft review and Beta XBOX Requirements | Microsoft review and Beta XBOX Requirements | < 50,000 users: Microsoft review <br/> >= 50,000 users: Microsoft Review and Beta XBOX Requirements | Microsoft review and Beta XBOX Requirements | Microsoft review and Game Preview Requirements |
| **Product** | Separate beta product. Entitlement can't be revoked. | Separate beta product. Entitlement can't be revoked. | Separate beta product unless an agreement to the contrary is reached with your Microsoft representative and XBOX Games Store Policies are adhered to. | Separate beta product unless an agreement to the contrary is reached with your Microsoft representative and XBOX Games Store Policies are adhered to. | Same product as a full release. |
| **Feedback Mechanisms** | None provided by Microsoft. Must be self-managed. | None provided by Microsoft. Must be self-managed. | Available built-in announcements, surveys, and bug filing. Daily summarization of surveys and bug reports. | Available built-in announcements, surveys, and bug filing. Daily summarization of surveys and bug reports. | None provided |

## Securing the visibility and distribution of your title

The following sections explain how you can use features in Partner Center to ensure that your title is only discoverable and accessible by the players you choose.

For more information about security and confidentiality when flighting with the XBOX Insider Program, see [XBOX Insider Program flighting](publishing-processes-xbox-insider-flighting.md).

### Private Audience
The [Pricing and Availability](../../concepts/availability/availability-overview.md) module in Partner Center enables you to specify either a Public or Private Audience for your product. With Private Audience, your Microsoft Store Product Details Page (PDP) is only visible to user groups of your choosing. If you're flighting with the XBOX Insider Program, the groups are managed automatically.

For more information about Private and Public audience, see [Visibility - Audiences](../../concepts/availability/visibility-audiences.md).

### Hiding XBOX services information on the XBOX network
For any closed beta products you publish to the RETAIL sandbox, consider configuring XBOX Embargo. XBOX Embargo prevents elements of your XBOX services Gameplay Settings, such as achievements and presence, from access and display outside the game. For example, achievements aren't displayed in the XBOX shell UI or your XBOX user profile. For more information, see [Configuring XBOX services](../../concepts/xbox-services.md).

### Creating and distributing promotional codes
Promotional codes are also known as *promo codes* or *tokens*. They're a 25-character sequence that's used to redeem content in the Store. To provide access to a closed beta product, you must distribute tokens to your intended audience.

 - If you're testing or flighting without the XBOX Insider Program, you distribute promo codes directly to your intended audience. The downside to this method is that the promo codes are visible to the user, who might publicly display or redistribute them.
 - If you’re flighting with the XBOX Insider Program, promo codes can be systematically and securely distributed through the XBOX Insider Hub. This system grants the entitlement to users without ever displaying the promo code and eliminates the risk of the code being displayed or redistributed.

> [!NOTE]
> If you don’t need your product to be hidden, for example, if you're distributing an open beta, you can offer it to all players for free. Configure this setup by using your product's **Pricing and availability** in Partner Center. For more information, see [Create and release products that are visible and purchasable in the Microsoft Store](../../how-to/how-to-visible-release.md).

## Updating your title in the RETAIL sandbox

After you release your game in the RETAIL sandbox, you update it using Content Updates (CUs). You can test these updates in RETAIL before you make them available to the General Audience (GA).

> [!NOTE]
> All CUs require certification approval before they can be published to GA. Speak to your XBOX contacts about the certification requirements for your product.

### Standard Content Update (CU) publishing

After your update receives certification approval, proceed with publishing the update to RETAIL when you're ready. Publishing the update makes it available to all players that have access to your product. Any players with the previous package installed can update to the new package. Anyone who installs the product for the first time downloads the updated package.

### Package flights

Use package flights to deliver specific packages to selected users or devices without affecting the experience for other customers. Only the packages are different; the Microsoft Store PDP is the same for all players. If you're creating a package flight for a console game, you can publish it to a **Known Device Group**. If you're creating a package flight for a PC game, you can publish it to a **Known User Group**. You can manage these groups via the **Engage** > **Customer Groups** UI, accessible from the Apps and Games dashboard. If you're flighting with the XBOX Insider Program, the XBOX Insider Program team works with you to populate these groups systematically through the XBOX Insider Hub.

> [!NOTE]
> A considerable benefit of package flighting is that you can flight different packages to different groups of players simultaneously. If you're participating in the XBOX Insider Program, players receive the package that's available to their group, and can provide build-specific feedback. 

For more information, see [How to configure package flights for game packages](../../how-to/how-to-package-flights-for-xvc-packages.md).

## Retail Test Environments (RTEs)

An RTE is a separate version of a game, created as a **Game Demo** in Partner Center, that is released after the full release of the game. RTEs let customers test and provide feedback on content and features that are in development, before they become available to the public. Speak to your XBOX contacts if you're considering an RTE for your product.

For full information about the requirements to distribute an RTE, see the XBOX Games Store Policy in the [XBOX Publisher Guide](https://aka.ms/xboxpublisherguide).

## Prerelease testing of base game products
After your game passes Final Certification, test it in the RETAIL sandbox by using promo codes and test discs (if your title supports a physical release). For more information, see [RETAIL Publishing and Testing](publishing-processes-retail-publishing-and-testing.md) or reach out to your XBOX contacts.

