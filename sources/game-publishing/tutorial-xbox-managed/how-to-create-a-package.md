---
title: Create a game package and upload it in Partner Center
description: Tutorial steps to create a game package by using the GDK, and upload the package in Partner Center.
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

# Create a game package and upload it in Partner Center

:::zone pivot="xbox"

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

:::zone-end

This article describes how to create a game package by using the Game Development Kit (GDK), and upload it in Partner Center.

:::zone pivot="xbox"

## Prerequisites

 - Enrollment as an XBOX creator. To learn more, see [Register as an XBOX creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your XBOX team.
 - Approved Game Concept for your product. To learn more, see [Submit game concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

:::zone-end

:::zone pivot="msow"

## Prerequisites

 - Enrollment as a Microsoft Store developer.
 - Active Partner Center account.
 - To learn more, see [Microsoft Store Developer Platform](https://storedeveloper.microsoft.com/home).

:::zone-end

---

## Install the Game Development Kit (GDK)

:::zone pivot="xbox"

Begin by installing the GDK. XBOX creators can download the GDK, samples, and tools from [XBOX Secure Downloads](https://aka.ms/gdkdl).

:::zone-end

:::zone pivot="msow"

Begin by installing the GDK. Developers can download the GDK from [Game Development Kit - GitHub](https://aka.ms/gdk).

:::zone-end

For more information, see [Access Microsoft Game Development Kit (GDK) Development Resources](/gaming/gdk/docs/gdk-dev/development-downloads/access-resources).

---

## Create a game package

When you prepare your game for release, combine the executable (.exe) and all required content into a single package. To create packages, use the [MakePkg](/gaming/gdk/_content/gc/packaging/deployment/makepkg) tool (MakePkg.exe) included in the GDK.

:::zone pivot="xbox"

Game packages must use the correct format:
 - Console games use the **XVC** format.
 - PC games use the **MSIXVC** format.
 - Other package types aren't supported.

> [!IMPORTANT]
> **XBOX Play Anywhere**
>
> If you're creating an XBOX Play Anywhere game, create both an **XVC** package and an **MSIXVC** package.

For detailed guidance, see:

* [Getting started with packaging for PC games](/gaming/gdk/_content/gc/packaging/overviews/packaging-getting-started-for-pc).
* [Getting started packaging titles for XBOX consoles](/gaming/gdk/_content/gc/packaging/overviews/packaging-getting-started-for-console).
* [GDK Development and Tools](/gaming/gdk/_content/gc/tools-console/gc-tools-toc).

:::zone-end

:::zone pivot="msow"

Packages for PC games published in the Microsoft Store on Windows use the **MSIXVC** format. For detailed instructions, see [Getting started with packaging for PC games](/gaming/gdk/_content/gc/packaging/overviews/packaging-getting-started-for-pc).

:::zone-end

### Packaging tools embedded in game engines

Some game engines, such as Unity and Unreal Engine, include built-in packaging tools. Implementation varies by engine, so refer to your engine's documentation for guidance.

---

## Upload a game package

### Prerequisites

Before you upload a package, make sure you have:

:::zone pivot="xbox"

 - A valid package:
   - **MSIXVC** for XBOX on PC.
   - **XVC** for XBOX consoles.
   - Includes the executable (.exe) and all required content.ny other content that the game needs.
   - For **XBOX Play Anywhere**, prepare both package formats.
 - An **EKB (Escrow Key Blob)** file for each package.
 - A **Symbols** (.zip) file for each package.
 - A **Submission Validator** (.xml) file for each package.
   - For more information, see [Submission validator introduction](/gaming/gdk/_content/gc/packaging/subval/submissionvalidator).

:::zone-end

:::zone pivot="msow"

 - A valid MSIXVC package
   - Includes the executable (.exe) and all required content.
 - An **EKB (Escrow Key Blob)** file for each package.
 - A **Symbols** (.zip) file for each package.
 - A **Submission Validator** (.xml) file for each package.
   - For more information, see [Submission validator introduction](/gaming/gdk/_content/gc/packaging/subval/submissionvalidator).

:::zone-end

### Package upload process

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your game, or search for it.
1. Select **Packages**.
1. Select **Upload package** in the **Main** branch. For more information, see [Packages](../concepts/game-package-management.md).
1. Select **Browse your files**, then select the package to upload.
1. When prompted, upload the **EKB (Escrow Key Blob)** file.
1. Upload the **Symbols** (.zip) file generated during packaging.
1. Upload the **Submission Validator** (.xml) log file generated during packaging.
1. Select **Save draft**.

---

## Next steps

* [Configure properties for a game](how-to-configure-properties.md)
