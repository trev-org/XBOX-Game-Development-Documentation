---
title: Acquire and upload age ratings for a game
description: Tutorial steps to use Partner Center to configure and acquire age ratings for a game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/9/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
zone_pivot_groups: gpg-program-selection
---

# Acquire and upload age ratings for a game

This article describes how to complete the **Age ratings** page in Partner Center.

Age ratings are classifications that are applied to a game based on the content and functionality. You can apply for age ratings directly in Partner Center by completing the International Age Rating Coalition (IARC) questionnaire. You can also upload an age rating certificate, if you already have one. You must ensure you have valid age ratings for all platforms that your game supports.

## Prerequisites

:::zone pivot="xbox"

 - Enrollment as an XBOX creator. To learn more, see [Register as an XBOX creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your XBOX team.
 - Approved Game Concept for your product. To learn more, see [Submit game concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

:::zone-end

:::zone pivot="msow"

 - Enrollment as a Microsoft Store developer.
 - Active Partner Center account.
 - To learn more, see [Microsoft Store Developer Platform](https://storedeveloper.microsoft.com/home).

:::zone-end

## Navigate to the Age ratings page

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. Select **Age ratings** from the left navigation pane.

## Complete the IARC questionnaire

1. [Navigate to the **Age ratings** page](#navigate-to-the-age-ratings-page).
1. Indicate if you're ready to complete the questionnaire or already have a rating. If you don't have a rating yet, select **I'm ready to complete the International Age Rating Coalition (IARC) questionnaire**. If you already have a rating, skip the following steps and go to [Upload IARC or Global Rating ID Certificates](#use-an-iarc-certificate-id-or-global-rating-id) instead.
1. In the **App Type** section, select **Game**.
1. For each category, answer the questions accurately and provide the required information. If you select **Yes**, you might need to answer some more questions. If you require more information about a question, select the **(i)** icon.
1. If the game uses ratings obtained directly from a ratings board, select **Yes** for this question.
1. Select **Preview ratings**.
1. Review the age ratings, then select **Save draft** to complete this section. If you need to modify your answers, select **Edit** and make your changes.

### Use an IARC Certificate ID or Global Rating ID

If you already completed the IARC questionnaire for the game elsewhere, you can import your age ratings. 

1. [Navigate to the **Age ratings** page](#navigate-to-the-age-ratings-page)
1. Select **I have already completed the questionnaire for this app elsewhere and have an IARC Certificate ID or Global Rating ID.**.
1. Enter the IARC rating ID or the Global Rating ID (GRID) in **Import ratings** and select **Search**. 
1. If the game uses ratings obtained directly from a ratings board, select **Yes** for this question.
1. Select **Save draft** to complete this section. If you need to modify your answers, select **Edit** and make your changes.

### Upload rating obtained directly from a ratings board

1. [Navigate to the **Age ratings** page](#navigate-to-the-age-ratings-page)
1. If you completed the questionnaire previously, select **Edit**. If the questionnaire isn't complete already, [Complete the IARC questionnaire](#complete-the-iarc-questionnaire) or [Use an IARC Certificate ID or Global Rating ID](#use-an-iarc-certificate-id-or-global-rating-id).
1. Select **Yes** in response to the question **Will this game use ratings obtained directly from a ratings board, and/or will it be distributed on physical media in any region?**
1. For each ratings board that you obtain a rating directly from, use the dropdown menu to select an age rating.
1. If your age rating has addition descriptors, select these descriptors from the available options.
1. Upload the age rating certificate in **.pdf** format.
1. Select **Save draft**.

:::zone pivot="xbox"

> [!TIP]
> If you have multiple age rating certificates, for example one for PC and one for XBOX consoles, combine these certificates into a single pdf file before uploading.

:::zone-end

After completing this section, you'll be able to see your game's assigned ratings and can continue with the product configuration process.

## Next steps

* [Configure Store listings for a game](how-to-create-a-store-listing.md)
