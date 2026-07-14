---
title: Certify a game
description: Tutorial steps to use Partner Center to submit a game for certification.
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

# Certify a game

This article describes how to submit a game for certification. During certification, your game's packages are tested and the product configuration is validated. Before you can publish to the RETAIL (production) sandbox, the **Store listings**, **Pricing and availability** and **Packages** pages must be certified. If you make updates to these pages after certifying them, follow these steps to submit them for certification again.

:::zone pivot="xbox"

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

## Prerequisites

 - Enrollment as an XBOX creator. To learn more, see [Register as an XBOX creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your XBOX team.
 - Approved Game Concept for your product. To learn more, see [Submit game concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).
 - Completed [Store listings](how-to-create-a-store-listing.md), [Pricing and availability](how-to-configure-pricing-and-availability.md), and [Packages](how-to-create-a-package.md) pages.

:::zone-end

:::zone pivot="msow"

## Prerequisites

 - Enrollment as a Microsoft Store developer.
 - Active Partner Center account.
 - To learn more, see [Microsoft Store Developer Platform](https://storedeveloper.microsoft.com/home).
 - Completed [Store listings](how-to-create-a-store-listing.md), [Pricing and availability](how-to-configure-pricing-and-availability.md), and [Packages](how-to-create-a-package.md) pages.

## Submit your game for certification

Certification review is triggered automatically when you publish to the RETAIL [sandbox](../concepts/sandboxes.md). For more information, see [Publish a game to the RETAIL sandbox](how-to-publish-a-base-game.md).

If your game fails certification, you receive a certification report. This report can be viewed by selecting **View report** on the **Game overview** page after the certification process is complete. Make changes to fix each issue included in your report, then publish your game to the RETAIL sandbox again to resubmit for review.

If you pass certification, the publishing workflow continues and your game is published to the Microsoft Store.

:::zone-end

:::zone pivot="xbox"

## Complete the Certification questionnaire

Before submitting the product for Certification, ensure that you complete the **Certification questionnaire**. The questionnaire provides information about your product to the test team.

1. Sign in to **Partner Center**
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your game. Or, enter your game's name in the search bar and then select your game.
1. Select **Certification** from the left navigation pane.
1. Answer the questions in the multiple-choice questionnaire and provide accurate information about your game.
1. Select **Save** to save your answers.
1. If necessary, select **Files** from the left navigation pane and upload any supporting files that the test team might need.

## Certify Packages

The XBOX Certification team tests packages to verify compliance with the [Policies and XBOX Requirements (XRs)](/gaming/gdk/_content/gc/policies/gc-policies-nav). For information about the XBOX certification process, see [Certification step-by-step guide](../concepts/certification/certification-guide.md).

1. Sign in to Partner Center.
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your game. Or, enter your game's name in the search bar and then select your game.
1. Select **Packages** from the left navigation pane.
1. Select the **Main** branch, or the branch where your packages requiring certification are uploaded.
1. Confirm that the Submission Validator xml log file is uploaded with your package. If the log file contains any errors or warnings, verify that these issues are expected and if necessary, have an approved exception. If you think you require an exception, speak to your XBOX contacts.
1. Select **Certify** near the top of the page.
1. On the **Certify** page, the **Packages**, **Age Ratings**, and **Properties** modules are included automatically.
1. Select a source sandbox for the XBOX services for your product. You should select the source that has the correct configuration that is intended to be tested with your package.
1. If you're submitting for Optional Certification, select **Optional certification (feedback only)**. If you're submitting for Final Certification, leave this box unchecked.
1. If you're submitting for Final Certification and the package is intended for distribution on physical discs, select **Intended for discs**.
1. Enter any notes for certification into the text box.
1. Select **Submit to Certification**.
1. The XBOX Certification team receives your package for review. The amount of time it takes to test the package varies depending on the type of submission and the platform being tested. For more information, see [Submit for Certification](../publishing-processes/managed-creators/publishing-processes-submitting-to-certification.md).

After testing is complete, you get certification results in the form of a **Certification Report**. You can view this report from the **Game overview** page, which can be selected from the left navigation pane. If you pass Certification, you see a green banner indicating this result in the branch of the **Packages** page that you submitted for Certification.

## Certify Store listings

The Store Certification and XBOX Artwork Certification teams reviewed your Store listings.

1. Sign in to Partner Center.
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your game. Or, enter your game's name in the search bar and then select your game.
1. Select **Store listings** from the left navigation pane.
1. Select the **Main** branch, or the branch where the Store listings requiring certification are prepared.
1. Select **Certify** near the top of the page.
1. On the **Certify** page, the **Store listings**, **Age Ratings**, and **Properties** modules are included automatically.
1. Enter any notes for certification into the text box.
1. Select **Submit to Certification**.
1. The certification teams receive your Store listings for review. It generally takes around one business day to review your Store listings.

After testing is complete, you get certification results in the form of a Certification Report. You can view this report from the **Store listings** page. If you pass certification, you see a green banner indicating this result in the branch of the **Store listings** page that you submitted for certification.

## Certify Pricing and availability

The XBOX Store team reviews your pricing.

1. Sign in to Partner Center.
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your game. Or, enter your game's name in the search bar and then select your game.
1. Select **Pricing and availability** from the left navigation pane.
1. Select the **Main** branch, or the branch where the pricing requiring certification is prepared.
1. Select **Certify** near the top of the page.
1. On the **Certify** page, enter any notes for certification into the text box.
1. Select **Submit to Certification**.
1. The certification team receives your pricing for review. It generally takes around five business days to review your pricing.

After testing is complete, you'll get certification results in the form of a Certification Report. You can view this report from the **Pricing and availability** page. If you pass certification, you see a green banner indicating this result in the branch of the **Pricing and availability** page that you submitted for certification.

:::zone-end

## Next steps

 - [Publish a game to RETAIL](how-to-publish-a-base-game.md)
