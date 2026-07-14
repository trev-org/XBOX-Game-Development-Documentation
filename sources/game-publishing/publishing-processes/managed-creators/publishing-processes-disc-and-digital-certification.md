---
title: Submit game packages for Final Certification
description: Guidance for XBOX creators to submit games for Final Certification.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/8/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Submit game packages for Final Certification

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Use the steps and recommendations in this topic to successfully submit your packages and associated configuration to Final Certification. If you have issues or questions, speak to your XBOX contacts.

## Final Certification submission process

With modular publishing, it's possible to certify the **[Store Listings](../../concepts/store-listing.md)** and **[Pricing and availability](../../concepts/availability/availability-overview.md)** modules separately to the **[Packages](../../concepts/packages-overview.md)** module. **Store Listings** and **Pricing and availability** certification can be done before, after, or at the same time as the Packages. However, you can't publish to the RETAIL sandbox until all modules pass certification.

To submit to Final Certification, use the following steps within your Partner Center product.

### Submitting packages
 1. Complete the *Certification Questionnaire* under **Supplemental info** - **Certification.**
     - For more information, see [Supplemental info - Certification](../../concepts/certification/certification-supplemental-info.md#certification).

 2. Upload any other submission materials in the **Supplemental info** - **Files** section. Provide any documentation that might be useful for the test team, including:
     - Known issues
     - Achievements guide
     - Walkthrough
     - Previous Certification response report
     - For more information, see [Supplemental info - Files](../../concepts/certification/certification-supplemental-info.md#files).

 3. Complete the [**Properties**](../../concepts/properties-overview.md) module. Specifically, make sure that the **Basic Info** section is completed including providing a **Privacy Policy URL**.

 4. Complete the International Age Rating Coalition (IARC) questionnaire in the [**Age Ratings**](../../tutorial-xbox-managed/how-to-set-age-ratings.md) module. If you're releasing the game on physical discs, override the IARC rating, and upload your age rating certificate, for each disc market. IARC ratings can't be used for a disc release.

 5.  Upload your *Base Packages*, and any required *Market-Specific Packages*, in the [**Packages**](../../concepts/packages-overview.md) module.
     - After you upload your XVC, you must upload the matching **EKB** file.
     - You must upload a valid **Submission Validator log file** for each package you're submitting. Open the log file and confirm that there are no **failures** or unexpected **warnings**.
     - We recommend providing your .zip folder of **symbol files** for enhanced crash reporting.
     - Don't upload anything to the **Disc Layout** section unless your XBOX representative advises you to do so, based on the planned configuration of your product.

 7. When the **Status** field shows as **Complete** at the top of the **Packages** page, select [**Certify**](../../tutorial-xbox-managed/how-to-certify-a-game.md).

 8. On the Certify page, select the source you want for the XBOX services gameplay settings.
 
 9. **(Disc-based games only)** Select the checkbox for the **Intended for discs** option.
 
 10. Select **Submit to certification**.

### Updating XBOX services in CERT.DEBUG
If you're submitting your game for certification for the first time, or if you updated your XBOX services gameplay settings since your previous submission, manually publish the XBOX gameplay settings to the CERT.DEBUG sandbox.

 1. Go to the **XBOX services - Gameplay settings** page for your product. Select the source sandbox that you selected in the **Certify** workflow for the packages.

 2. Select **Review and Publish** to publish your XBOX services gameplay settings to the CERT.DEBUG sandbox destination.

### (Disc-based games only) Making a disc request

Games that are intended to release on physical discs must have test discs ordered and approved by the XBOX Certification team. Place a disc order after submitting the package to Final Certification. Test discs are manufactured and delivered to the recipients specified in the disc order.

> [!IMPORTANT]
> You must certify the **Store Listings** module before you can submit a disc request. Although Partner Center displays **Voice Title** and **Featured Promotional Square Art** as optional, these assets must be provided for all locales for any disc release.

 1. From the product page navigation, select **Request Management**, located under the **Discs** heading.
 2. Select **Create new request**, and then complete the form.
    1. Give the order a name that's clear for your future reference.
    1. Select a certified **Store listing**. If your intended listings aren't certified, submit the listings by using the **Certify** workflow before proceeding.
    1. If the disc is intended for release in China, select **This product will be sold in China**.
    1. If you aren't seeing the correct version in the **Packages** section, wait a while for the Packages submission to process further. If the correct version doesn't appear in the **Disc Request** UI within four hours, speak to your XBOX contacts.
    1. When you complete the test disc recipient section, write the *full* address, including company name and country/region.
 3. After completing the form, select **Order Disc**.

> [!IMPORTANT]
> If **This product will be sold in China** is selected in the disc request, the discs are only compatible with consoles sold in China. You can't create a single disc order to generate discs for use in both China and other countries/regions.

For more information, see [How-To Request and Manage Discs](../../how-to/how-to-request-and-manage-discs.md).

#### Creating compilation discs

If you need to include packages from multiple products on a single disc, you need to create a request for a compilation disc.

Before you submit a request for a compilation disc, you must:

 - Create a **Game bundle** in Partner Center and configure this bundle to include each of the products you want to include on the compilation disc.
 - Receive certification approval for all included content.

If you meet these requirements, create a new disc request within the bundle product using the steps in [Making a disc request](#disc-based-games-only-making-a-disc-request). If you have any questions, contact your XBOX team.

> [!Important]
> After you receive test discs and pass Final Certification, you must provide approval to release the disc binary for manufacturing to your XBOX contacts. For more information about the RTM process, see [Approve discs for manufacture](publishing-processes-rtm.md).

## Providing add-on content alongside your base package

To provide game add-ons for XBOX Certification for testing alongside the game, complete the following steps for each add-on that you want to include in the submission. You should also list each add-on in the **Notes to certification** section when you submit your game.

 1. Complete **Properties.**
 2. Complete **Age Ratings** for Durables.
 3. Complete **Store Listings** for at least one language.
 4. Select at least one market in the **Pricing and Availability** module. We recommend you select all of the markets that the game is available in.
 5. Select the **Certify** option when it appears at the top of the **Overview** page.

> [!NOTE]
> The base game package must be submitted to Certification by using the Certify workflow before any add-ons can be submitted.

## Receiving Certification reports

During and after the Certification process, you might receive updates from your XBOX contacts about the status of your submission. These updates might include:

 - Build Verification Test (BVT) pass/fail results
 - Hold notifications that are blocking testing from proceeding
 - General questions
 - Certification reports

Most in-test queries are sent via email. Your Certification reports might be provided in a .docx format via email, and in all cases are available directly in Partner Center. Issues that must be fixed in your next submission will be marked as **CFR** (Condition for Resubmission) or **Pass with required fix**.

## Next steps

With your game packages Certified, you can publish to the RETAIL sandbox, submit updates for your game for Certification, or support your game with post-release content.

 - [RETAIL publishing and testing](publishing-processes-retail-publishing-and-testing.md)
 - [Supporting released games](publishing-processes-post-release-lifecycle.md)

## See also

 - [Certification step-by-step guide](../../concepts/certification/certification-guide.md)





