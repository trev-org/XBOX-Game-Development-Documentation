---
title: Configure challenges in Partner Center
description: Procedures for adding and changing challenges.
services: gaming
author: joannaleecy
ms.author: erbergst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: Configure Challenges, Xbox Service Configuration, challenges, create, change, configure, modify, add, remove, delete
ms.localizationpriority: medium
permissioned-type: private
---


# Configure challenges in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This topic describes the procedures for adding and changing Xbox Challenges in the Partner Center service configuration for a title. Challenges are similar to achievements but can be unlocked only during a specified period of time. Like achievements, challenges are unlocked according to the logic you define in the service configuration. This logic is based on player stat values in the service, and the challenge is unlocked automatically when the player stats meet the specific requirements during the specified period of time.

For an introduction to Xbox service configuration, see [Service configuration](/gaming/gdk/_content/gc/live/test-release/portal-config/live-service-config-ids-mp). For an introduction to Data Platform 2013, see the XDK topic **How the Xbox Live data platform 2013 works**.

<a id="ID4EYB"></a>

## How challenges work on Xbox devices  

Challenges are achievements available only during a specified period of time. For example, you might want to create an achievement available only on three consecutive days that begin and end at midnight. Because of the time limitation, this achievement would be considered a challenge.  

Like achievements, challenges can be either visible (in the list of possible achievements) or hidden.  

<a id="ID4E5M"></a>

## Configure a challenge

1. Sign in with your account on [Partner Center](https://developer.microsoft.com/dashboard/windows/overview).

2. Select your title, and then go to **Services** > **Xbox Live**.

2. Select the link to the **Challenges** page.

3. On **Challenges**, create and manage the challenges for your title.



<a id="ID4EJC"></a>

## Create a challenge

1. On the **Challenges** page, select the **New challenge** button. This will take you to the **New challenge** page.

2. In the **Challenge name** field, provide the name to be shown to players. The maximum length of the string is 44 characters.

3. In the **Locked description** field, provide the description to be shown to players when the challenge is locked. The maximum length of the string is 100 characters. If the **Secret** option is selected, then this description won't be displayed in the list of achievements.

4. In the **Image icon** field, provide the achievement icon that will serve as the visual representation ("badge") of the challenge. Ensure that the icon is formatted as a PNG file and is 1920 x 1080 pixels in size.

    The icon will be visible to users. Xbox will automatically scale it to a thumbnail size when a user is viewing the list of the achievements. However, selecting any individual achievement will set the icon as the background image. If the **Hidden** checkbox is selected, then the icon won't be displayed in the list until the user unlocks it.

    While developing your title, you can select **use placeholder image** to use a default Xbox icon until your final art is ready to replace it.

5. In the **Promo icon** field, specify the promotional icon. It must be 424 x 424 pixels in size and formatted as 1:1 PNG.

    While developing your title, you can select **use placeholder image** to use a default Xbox icon until your final art is ready to replace it.

6. Under **Time frame**, specify the **Start time** and **End time** of the challenge. The challenge can only be unlocked during the period of time specified here. The end date can't be later than three months after the start date. Note that times are based on Greenwich Mean Time (GMT).

7. Under **How should the details be treated?**, select from the following options.

    * **Public**  
    Indicates that the challenge and its details are visible to all players.  

    * **Secret**
   Indicates that the challenge and its details are visible only to players who have unlocked the challenge. This is useful for avoiding plot spoilers and rewarding players for experimenting.


8. Optional: In the **Challenge deep link** field, specify the in-game location where players will be redirected to attempt this challenge immediately. For example, in `ms-xbl-11aa99ff://default?trackId=18`, `11aa99ff` is the TitleId and `default?trackId=18` is the code that your game will understand and use to redirect players to the particular location in the game.

9. To grant an additional reward (art or in-game) for unlocking the achievement, do the following:

    1. Select the **Add reward** button.

    2. On the **Achievement rewards** page, select **Art** or **In-game**.

    3. In the **Display name** field, provide the reward's name to be shown to players.

    4. In the **Description** field, provide the reward's description to be shown to players. The description can't be longer than 90 characters. Include details such as the reward's duration (if applicable) and instructions for redeeming the reward. 

    5. Perform the following according to the reward type you selected:  
       
       * If you selected the reward type **Art**, then use the **Art** field to specify the art reward that the player will get upon unlocking the challenge. The reward must be 1920 x 1080 pixels in size and formatted as a PNG file. While developing your title, you can select **use placeholder image** to use a default Xbox image until your final art is ready to replace it.

        * If you selected the reward type **In-game**, then 

          1. Use the **Image** field to specify an image that represents the reward that the player will get upon unlocking the challenge. While developing your title, you can select **use placeholder image** to use a default Xbox image until your final art is ready to replace it.
        
          2. Use the **In-game value** to specify a value or code passed to your game. Ensure that your game can use this code to unlock a reward.

    6. Select **Add** to add the reward to the challenge or select **Cancel** to cancel and return to the **New challenge** page.


10. Select an **Unlock logic** that will determine how a challenge will be unlocked.

    * **Do something with incremental progress**  
    Select a single player stat. When the player stat meets the specified criteria, the challenge will be unlocked. Players will be able to see their progress toward unlocking of the challenge.  
    
        To meet the criteria, a stat must be equal to or greater than the specified value. This doesn't apply to a stat configured with the **min** operator. Such a stat must be less than or equal to the specified value.

    * **Do multiple things, cumulatively**  
    Select multiple player stats configured with the **sum** operator. When all the player stats you selected meet the specified criteria, the challenge will be unlocked.


    * **Min/max one of several things**  
    Select multiple player stats that have been configured with the **max** or **min** operator. When at least one player stat requirement is met, the challenge will be unlocked.

     * **Do something once**  
    Select a player stat. When its instance is created as a result of triggering of a stat rule, the challenge will be unlocked.

    * **Custom logic**  
        To create a complex condition for unlocking the challenge, select the **Add stat** button and add a stat condition to the current condition. To add a new condition clause, select the **Add condition** button. 
        
         * All stats in a single condition clause must be of the same operator type and must meet the same criteria for satisfying the condition.
         * If the stats use the **min** or **max** operator, the clause uses the OR logic to meet the condition. 
         * If the stats use the **sum** operator, the clause uses the AND logic to meet the condition.  
                
        When all conditions are met, the challenge will be unlocked.

11. Select **Save** to save the challenge or select **Cancel** to cancel and return to the **Challenges** page.

<a id="ID4EXC"></a>

## Change an existing achievement or challenge rule 

> [!IMPORTANT]
> After a title passes Final Certification, existing achievements in that title can no longer be changed or deleted.

   1. In the list of challenges on the **Challenges** page, select the **Name** for the challenge you want to change. This will open a page whose title is the name of the challenge. 
 
   2. Make the changes to the challenge.   

   3. Select **Save** to save the challenge or click **Cancel** to cancel and return to the **Challenges** page.

<a id="ID4E5D"></a>

## Delete a challenge  

> [!IMPORTANT]
> After a title passes Final Certification, existing achievements and challenges in that title can no longer be changed or deleted.

1. In the list of challenges on the **Achievements** page, select **Delete** next to the challenge you want to remove.

2. In the **Confirmation** dialog, select **Delete** to confirm the deletion; otherwise, select **Cancel**.
