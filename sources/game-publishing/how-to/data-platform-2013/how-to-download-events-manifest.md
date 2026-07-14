---
title: Download the Events Manifest file from Partner Center
description: Procedures for downloading the Events Manifest file from Partner Center.
services: gaming
author: joannaleecy
ms.author: erbergst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: Events Manifest, download, publish
ms.localizationpriority: medium
permissioned-type: private
---


# Download the Events Manifest file from Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This topic describes the procedure for downloading the Events Manifest file from Partner Center. The Events Manifest file is an XML document that contains information about your configuration for the selected sandbox. You can use the manifest, along with the **Xbox Common Events Tool**, to create header files that contain function definitions that your title can use to send events.

After defining or modifying your title's events, you must publish them to your Xbox Live sandbox or retail and use the following steps to download the Events Manifest file from Partner Center.

1. Sign in with your account in [Partner Center](https://developer.microsoft.com/dashboard/windows/overview).

2. Select your title, and then go to **Services** > **Xbox Live**.

3. Select the link to **Stat rules**.

4. On the **Events & Stat Rules** page, select **Download published events manifest**.  

    The downloaded manifest contains only the configurations published to the sandbox most recently. Any unpublished changes you made aren't included.

5. On the **Confirm** dialog, select **Download event manifest** to confirm your download; otherwise, select **Cancel**.

## See also

* [Xbox service configuration](/gaming/gdk/_content/gc/live/test-release/portal-config/live-service-config-ids-mp)
