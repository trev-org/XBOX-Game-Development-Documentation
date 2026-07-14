---
title: Register for Partner Center
description: Step 6 of ID@XBOX onboarding. Accept the App Developer Agreement, complete enrollment in the Windows and Xbox program, and share your Seller ID with the ID@XBOX team.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 6/16/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Step 6: Register for Partner Center

After your [agreements with Microsoft are fully executed](onboarding-sign-agreements.md), you're ready to open your Partner Center account. Partner Center is the portal you use to create and manage your XBOX games.

> [!TIP]
> If you created a Partner Center account before enrolling for an XBOX developer program, [**ID Setup**](../resources/managed-support/overview-microsoft-representatives-and-contacts.md) can link your existing account to your XBOX registration. Send your account's Seller ID to ID Setup. Don't create a new account, even if the XBOX Onboarding Hub prompts you to do so.

## Start your enrollment

1. Go to the [XBOX Onboarding Hub](https://developer.microsoft.com/games/publish/id/welcome), sign in with your Microsoft account (MSA), and continue your application to ID@XBOX.
2. On the **Welcome** page, review the **App Developer Agreement (ADA)** guidance and agreement in full.
3. When you're ready to proceed, select the checkbox to **accept the ADA**, and then select **Start enrollment**.

## Verify your business identity

On the next screen, you see the **Dun & Bradstreet (DUNS) Number** you provided during ID@XBOX registration.

- If you provided a DUNS Number, confirm the details.
- If you didn't provide a DUNS Number, select and upload a type of **business document** for business identity verification.

When you're ready to proceed, select **Send information**.

> [!NOTE]
> When you enroll in a new program or change your legal details, Microsoft verifies the information you provide. Verification usually takes **3–5 business days**. You can monitor the status under **Account settings** > **Legal info** in Partner Center. During this process, we might email your primary contact with a request for more information.

## Complete your account setup

What you see next depends on whether XBOX can create your Partner Center account automatically.

### If your account is created automatically

If XBOX can create a Partner Center account using the information you provided, your **Seller ID** is displayed. You're now ready to proceed to Partner Center and create a new game product. You don't need to send any other Partner Center account information to the ID@XBOX team for account onboarding.

### If your account isn't created automatically

If XBOX can't create your account automatically, finish account creation manually.

1. Select **Go to Partner Center**.
2. When prompted to **Choose account type**, select **Company**.
3. Enter all required information as prompted by the account creation wizard.

After you create your account, email your **Seller ID** to [**ID Setup**](../resources/managed-support/overview-microsoft-representatives-and-contacts.md). This information enables ID@XBOX to grant your account the permissions required for XBOX game development.

> [!TIP]
> You can find your Seller ID in Partner Center under **Account settings** > **Legal info** > **Developer**.

The ID@XBOX team confirms that your account onboarded successfully. You're then ready to create a new game product in Partner Center.

## (Optional) Create or link a Microsoft Entra ID tenant to manage account users and permissions

Before you can grant other studio members access to your Partner Center account and its games, you need to create or link an Entra ID (formerly Azure Active Directory) tenant. Members of your studios also need a user account associated with Partner Center before they can access secure XBOX resources, including private documentation and secure XBOX Game Development Kit (GDK) downloads.

### If your studio already has an Entra ID tenant

If your studio already has an Entra ID tenant, you can associate it with your Partner Center account.

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard), select the gear icon (near the upper-right corner of the dashboard), and select **Account settings**.
2. On the **Settings** menu, select **Tenants**.
3. Select **Associate Microsoft Entra ID**.
4. On the **sign in** page, enter the credentials for the tenant you want to associate.
5. On the confirmation page, review the domain name for your Entra ID tenant.
6. To complete the tenant association, select **Confirm**.
7. If the tenant association is successful, you can now manage account users in Partner Center.

### If your studio doesn't have an Entra ID tenant

If your studio doesn't have an Entra ID tenant already, you can create one in Partner Center.

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard), select the gear icon (near the upper-right corner of the dashboard), and select **Account settings**.
2. On the **Settings** menu, select **Tenants**.
3. Select **Create Microsoft Entra ID**.
4. Enter an **email address**. This address is used to create the new Entra ID tenant.
5. Enter all required information as prompted by the tenant creation wizard.
6. After the tenant is created, a confirmation dialog appears. It displays your sign-in email and tenant ID.
7. You can now manage account users in Partner Center.

For more information about managing account users, see [Manager users in your Partner Center account](/windows/apps/publish/partner-center/manage-users-in-partner-center).

## Next step

 - [Complete your onboarding](onboarding-complete-setup.md)

## Get help

For questions about Partner Center access and enrollment, contact [**ID Setup**](../resources/managed-support/overview-microsoft-representatives-and-contacts.md#idxbox-contacts). If your account verification takes longer than 5 business days, or your verification is rejected and you'd like to appeal, contact [**ID Account Management**](../resources/managed-support/overview-microsoft-representatives-and-contacts.md#idxbox-contacts).
