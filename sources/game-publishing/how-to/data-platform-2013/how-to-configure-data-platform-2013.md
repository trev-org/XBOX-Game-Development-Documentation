---
title: Configure Xbox data platform 2013 in Partner Center
description: Procedures for configuring the data platform 2013 service in Partner Center.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 11/11/2023
keywords:  Configure Xbox data platform, Xbox Service Configuration, data platform, create, change, configure, modify, add, remove, delete
ms.localizationpriority: medium
permissioned-type: private
---

# Configure Xbox data platform 2013 in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This topic provides procedures for configuring data platform (also known as Xbox Live data platform 2013 and Xbox data platform 2013) in the Partner Center service configuration for a title.

> [!TIP]
> If you're using Data Platform 2017, follow the documentation available the in GDK at [Xbox services](/gaming/gdk/docs/services/xbox-services-index).

## What is Xbox data platform 2013?  

The Xbox Live data platform 2013 is a RESTful service, which means that the service runs in the cloud. Your game or app can send data, in the form of *events*, to the service, which then processes the data to create user statistics, achievements, leaderboards, challenges, and a variety of other data-based information, according to rules that you have defined. These rules are known as a *service configuration*, and they let the Xbox Live data platform know how to process the event data from your title.

For more information, see [How data platform 2013 works](https://developer.microsoft.com/games/xbox/docs/xdk/how-data-platform-works).

For an introduction to Xbox service configuration, see [Service configuration](/gaming/gdk/_content/gc/live/test-release/portal-config/live-service-config-ids-mp)

## In this section

| Topic | Description |
| --- | --- |
| [Events](how-to-configure-events-2013.md)  | Configure events that power data platform 2013.  |
| [Player stats](how-to-configure-stats.md)   | Configure rules for player stats based on your events.  |
| [Featured stats](how-to-configure-featured-stats.md)   | Configure which stats are featured stats.  |
| [Stat change notifications](how-to-configure-stat-notifications.md)   | Configure real-time activity (RTA) change notifications for stats.  |
| [Leaderboards](how-to-configure-leaderboards-2013.md)   | Configure leaderboards.  |
| [Achievements](how-to-configure-achievements-2013.md)  | Configure achievements for data platform 2013.  |
| [Challenges](how-to-configure-challenges.md)  | Configure challenges, which are time-limited achievements.  |
| [Event manifest](how-to-download-events-manifest.md)   | Download the event manifest file for your service configuration.  |
