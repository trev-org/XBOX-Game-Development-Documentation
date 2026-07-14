---
title: Submitting to XBOX certification in Partner Center
description: Guidance for publishers to submit their packages and associated content to XBOX certification in Partner Center.
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

# Submitting to XBOX certification in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

All products releasing on XBOX consoles or PC must be certified before they can release. Some components of your product, such as [Store listings](../../concepts/store-listing.md) and [Pricing and availability](../../concepts/availability/availability-overview.md), are reviewed and approved through the Certify process in Partner Center. Your game's [Packages](../../concepts/packages-overview.md) are subject to testing by the XBOX certification team.

For more information on submitting via the Certify workflow, see [Certification Process](../../concepts/certification/certification-overview.md).

## XBOX Requirements

Depending on your product and the stage in your release lifecycle, different XBOX Requirements (XRs) and testing processes might apply. For more information, follow the appropriate link for your product type and platform.

 - [XBOX Requirements for XBOX Console Games](/gaming/gdk/_content/gc/policies/console/certification-requirements)
 - [XBOX Requirements for Open Betas and Game Previews](/gaming/gdk/_content/gc/policies/certification-requirements-beta-game-preview)
 - [XBOX Requirements and Store Policies for PC, Mobile, and Creators Program](/gaming/gdk/_content/gc/policies/pc/live-policies-pc)

## Scheduling appointments

You aren't required to schedule certification appointments before submitting packages for testing. However, for all submission types, inform your XBOX contacts before you submit. Informing your XBOX contacts about upcoming submissions ensures that:

 - Pricing and Purchase Order (PO) information can be provided for [Certification Paid Services](../../concepts/certification/certification-paid-services.md), for example **Optional Submissions**. 
 - Feedback can be provided on the required submission materials.
 - Any pending XR Exception Requests can be addressed.
 - Any changes made in your submission and release schedule can be addressed.
 - Submission workflows can be monitored.

## Submitting Exceptions and Challenges

If you have concerns about a game's compliance with the XRs exactly as they're written, contact your Microsoft contacts early to determine whether there's sufficient justification for an XR Exception request. Similarly, if your game fails certification with any *Conditions For Resubmission* (CFR), you might have sufficient justification for a CFR Challenge so that you can address a CFR in a future update.

Exceptions and Challenges are subject to XBOX review. Your XBOX contacts inform you of the outcome of the review.

To submit an Exception Request or a CFR Challenge, fill out and send the relevant request form to your Microsoft contacts. The latest form can be requested from your Microsoft contacts.

## Certification questionnaire and submission materials

Before any submission to certification, you must complete the certification questionnaire. Select **Supplemental info** &gt; **Certification** from your Partner Center product's page navigation. The XBOX certification team uses your answers to understand the features and configuration that your product supports.

In addition to the certification questionnaire, use the **Files** area of your product to provide in-depth information or supplemental documentation for the XBOX certification team. For example, an achievement guide, a walkthrough, or a key-features summary.

For more information, see [Supplemental info](../../concepts/certification/certification-supplemental-info.md).

## Certification stages and Service Level Agreements (SLAs)

The XBOX certification process has the following main steps.

 - **Submission Checks** cover Submission Validator review and antivirus scanning.
 - **Build Verification Testing (BVTs)** are performed to verify that the game is in a sufficiently testable state and that any previously issued CFRs are resolved.
 - **XBOX Requirements Testing** is performed to verify that the game is compliant with all applicable test cases for each XBOX Requirement.
 - **Reporting** is the final step in the certification process and provides you with full information about any issues that were identified during the certification review. There are different types of issues that might be included in your report.
    - **CFR** issues result in certification failure and must be fixed in your next submission.
    - **Pass with required fix** issues don't fail the current submission but must be fixed in your next submission.
    - **Standard Reporting Issues (SRI)** and **Issues of Note (IoN)** are included for your awareness. They don't fail the submission and you aren't required to fix them. It might be beneficial for you to investigate them or to implement a fix in a future submission.

Alongside these test stages, your XBOX contacts complete extra checks. These checks let your XBOX contacts validate the Submission Validator output for each package, and review your product configuration before it releases.

The time it takes to test packages depends on the platform and the type of submission. For details about the XBOX certification Service Level Agreement (SLA), see [XBOX certification: Step-by-Step Guide](../../concepts/certification/certification-guide.md).

## Optional Certification

[Optional Certification](../../concepts/certification/certification-optional-submissions.md) is a paid service offered by XBOX certification that enables you to get early feedback on the XR compliance of your product. There are three tiers of Optional Certification: Optional Full, Optional Light, and Optional Plus. For more information, see [Certification Paid Services](../../concepts/certification/certification-paid-services.md).

Each platform, for example XBOX on PC and XBOX Series X|S, is treated as an individual paid service. If your game supports multiple platforms, indicate which platform you would like to submit for testing. You can pay for testing on multiple platforms if necessary.

For information about the process of submitting your build for Optional Certification, see [Submitting for Optional Certification](publishing-processes-optional-certification.md).

## Final Certification

Final Certification is for games that are complete and ready for release. Your game is tested against the latest [test cases](/gaming/gdk/_content/gc/policies/console/console-certification-requirements-and-tests) for each XR. Games that pass all test cases are deemed compliant and ready for release.

Before submitting your game for Final Certification, confirm that any CFR issues from a previous Optional or Final submission are resolved. The issues might be fixed, or you might have valid exceptions for them. You should also open the [Submission Validator log file](/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator) for the packages you intend to submit for certification and confirm that no failures or unexpected warnings are reported. If the product was submitted to Optional or Final Certification previously, ensure that you increment the package's version number above the previously submitted version.

For all submissions, confirm that your XBOX services, Properties, and Age Ratings configurations in Partner Center are complete. These modules are submitted alongside your Packages. If you intend to release your game on physical discs, confirm that your **Store Listings** module is complete and certified with final assets. These listings are required when you request a disc order. In addition, be sure to select the **Intended for discs** checkbox in the **Certify** workflow.

For more information about submitting a disc-based or digital-only game for Final Certification, see [Submit games for Final Certification](publishing-processes-disc-and-digital-certification.md). 

For more information about the latest XBOX Requirements, see [XBOX Requirements for XBOX console games](/gaming/gdk/_content/gc/policies/console/certification-requirements) and [XBOX Requirements and Store Policies for PC](/gaming/gdk/_content/gc/policies/pc/live-policies-pc).

## Submitting add-on content

Games that support Durable and Consumable add-ons must have at least one product for each type of supported downloadable content (DLC) submitted for testing with the game. For example, a racing game that supports track packs, car packs, and packs of virtual currency would need to certify at least one track, one car, and one virtual currency pack add-on.

Add-on content can be published to the certification sandboxes via the **Certify** UI. It's available on the **Overview** page for any add-on product in Partner Center. It's not possible to certify individual modules for add-on products. All modules are submitted for certification together. If any module isn't already certified, the certification workflow triggers the appropriate reviews.

> [!NOTE]
> Your game must be submitted for certification before you can submit your add-on content.

For more information about add-ons, see [Choosing the Right Product Type](/gaming/gdk/_content/gc/commerce/getting-started/xstore-choosing-the-right-product-type).

## Pre-order packages

Pre-orders for XBOX games require a certified package. If you're interested in starting a pre-order earlier before you're ready to submit your game for Final Certification, discuss using a pre-order stub file with your Microsoft contacts. Approval might be required before you can submit stub files.

> [!IMPORTANT]
> When submitting a pre-order stub file, select the **Contains placeholder package(s) to enable pre-order** checkbox in the **Package** module's options in Partner Center. This checkbox indicates your intent to the XBOX certification team and enables you to configure an expected final game size for players.

For more information about configuring a pre-order, see [Configuring pre-order products](publishing-processes-configuring-pre-orders.md).

For information about submitting a pre-order stub file for certification, see [Submit games for Final Certification](publishing-processes-disc-and-digital-certification.md).

## Next steps

For full guidance on submitting to certification, see the following articles.

 - [Submitting to Optional Certification](publishing-processes-optional-certification.md)
 - [Submitting disc and digital products to Final Certification](publishing-processes-disc-and-digital-certification.md)


