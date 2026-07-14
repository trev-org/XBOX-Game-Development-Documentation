---
title: Configure achievements in Partner Center
description: Procedures for adding and changing achievements.
services: gaming
author: joannaleecy
ms.author: erbergst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: Configure Achievements Service Configuration, achievements, create, change, configure, modify, add, remove, delete
ms.localizationpriority: medium
permissioned-type: private
---


# Configure achievements in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This topic describes how to use Xbox Achievements (also known as Xbox Live Achievements 2013) to add and change achievements in the Partner Center service configuration for a title. Achievements are unlocked according to the logic you define in the service configuration. This logic is based on the values of player stats in the service. When the player stats meet the specific requirements for an achievement, it's unlocked automatically.

For an introduction to Xbox service configuration, see [Service configuration](/gaming/gdk/_content/gc/live/test-release/portal-config/live-service-config-ids-mp). For an introduction to Data Platform 2013, see the XDK topic **How the Xbox Live data platform 2013 works**.

You can use Achievements 2017 rather than Achievements 2013, even if you use Stats 2013. Achievements 2017 provides a simpler configuration experience but doesn't support challenges, and it requires that titles manage unlocking achievements.

<a id="ID4EYB"></a>

## How Xbox achievements work on Xbox devices

An achievement represents a specific goal set for the player by the title's developers. In Xbox Data Platform 2013 (also known as Xbox Live Data Platform 2013), the service uses the values of specific player stats to determine whether the player has achieved the goal. The values are defined in the service configuration.

For a new player, achievements are *locked*. When the player meets the conditions required to meet an achievement's goal, the service grants the achievement by *unlocking* it. The player receives a reward in the form of Gamerscore, but the title might grant additional rewards, such as art or in-game items.

Achievements can be based on a single player stat or multiple player stats. For example, an achievement might require that a player who has reached the Advanced Level use Orange Arrows to defeat three Blue Dragons in the Western Province.  

Achievements can be hidden from the player until they are achieved, or they can be made visible in a list of possible achievements.  

Planning the events and stat rules needed to unlock achievements often requires a top-down approach.

1. Decide what achievements and player experiences you want to present in your game.
2. Create the stat rules and events to power those experiences.


<a id="ID4E5L"></a>

## Configure an achievement

1. Sign in with your account on [Partner Center](https://developer.microsoft.com/dashboard/windows/overview).

2. Select your title, and then go to **Services** > **Xbox Live**.

2. Select the link to **Achievements**.

1. On the **Achievements** page, create and manage the achievements for your title.


<a id="ID4EJC"></a>
## Create an achievement

1. On the **Achievements** page, select the **New achievement** button. This will take you to the **New achievement** page.

2. In the **Achievement name** field, provide the name to be shown to players. The maximum length of the string is 44 characters.

3. In the **Locked description** field, describe the circumstances under which the achievement will get locked. The maximum length of the string is 100 characters, and it will be shown to users. If the **Secret** option is selected, then this description won't be displayed in the list of achievements.

4. In the **Image icon** field, provide the achievement icon that will serve as the visual representation ("badge") of the achievement. Ensure that the icon is formatted as a PNG file and is 1920 x 1080 pixels in size. 

    The icon will be visible to users. Xbox will automatically scale it to a thumbnail size when a user is viewing the list of the achievements. However, selecting any individual achievement will set the icon as the background image. If the **Hidden** checkbox is selected, then the icon won't be displayed in the list until the user unlocks it.

    While developing your title, you can click **use placeholder image** to use a default Xbox icon until your final art is ready to replace it.

5. Under **What type of achievement is this?**, select from the following options.

    * **Base achievement**  
        The achievement will be available to players when the game is initially released.  

    * **Non-base achievement**  
        The achievement won't be available to players until after the game is launched.

6. In the **Gamerscore** field, indicate the amount of Gamerscore to be awarded when an achievement is unlocked. Specify a value greater than 0 and less than or equal to 200. Your title has a total of 1000 Gamerscore points that you can allocate among the base achievements.

7. Under **How should the details be treated?**, select from the following options.

    * **Public**  
    The achievement and its details will be visible to all players.  

    * **Secret**  
    The achievement and its details will be visible only to players who have unlocked the achievement. This is useful for avoiding plot spoilers and rewarding players for experimenting.


8. Optional: In the **Achievement deep link** field, specify the in-game location to which players will be redirected to attempt the achievement immediately. For example, in `ms-xbl-11aa99ff://default?trackId=18`, `11aa99ff` is the TitleId and `default?trackId=18` is the code that your game will understand and use to redirect players to the particular location in the game.

9.  Select an **Unlock logic** that will determine how an achievement will be unlocked.

    * **Do something with incremental progress**  
    Select a single player stat. When the player stat meets the specified criteria, the achievement will be unlocked. Players will be able to see their progress toward unlocking the achievement.  
    
        To meet the criteria, a stat must be equal to or greater than the specified value. This doesn't apply to a stat configured with the **min** operator. Such a stat must be less than or equal to the specified value.

    * **Do multiple things, cumulatively**  
    Select multiple player stats configured with the **sum** operator. When all the player stats you selected meet the specified criteria, the achievement will be unlocked.

    * **Min/max one of several things**  
    Select multiple player stats that have been configured with the **max** or **min** operator. When at least one player stat requirement is met, the achievement will be unlocked.

    * **Do something once**  
    Select a player stat. When its instance is created as a result of triggering a stat rule, the achievement will be unlocked.

    * **Custom logic**  
        To create a complex condition for unlocking the achievement, select the **Add stat** button and then add a stat condition to the current condition. To add a new condition clause, select the **Add condition** button. 
        
         * All stats in a single condition clause must be of the same operator type and must meet the same criteria for satisfying the condition.
         * If the stats use the **min** or **max** operator, the clause uses the OR logic to meet the condition. 
         * If the stats use the **sum** operator, the clause uses the AND logic to meet the condition.  
                
        When all conditions are met, the achievement will be unlocked.


10. Optional: To grant an additional reward (art or in-game) for unlocking the achievement, do the following:

    1. Select the **Add reward** button.

    2. On the **Achievement rewards** page, select **Art** or **In-game**.

    3. In the **Display name** field, provide the reward's name to be shown to players.

    4. In the **Description** field, provide the reward's description to be shown to players. The description can't be longer than 90 characters. Include details such as the reward's duration (if applicable) and instructions for redeeming the reward. 
   
    5. Perform the following according to the reward type you selected.  

        * If you selected the reward type **Art**, then use the **Art** field to specify the art reward that the player will get upon unlocking the achievement. The reward must be 1920 x 1080 pixels in size and formatted as a PNG file. While developing your title, you can select **use placeholder image** to use a default Xbox image until your final art is ready to replace it.

        * If you selected the reward type **In-game**, then 
          
          1. Use the **Image** field to specify an image that represents the reward that the player will get upon unlocking the achievement. While developing your title, you can select **use placeholder image** to use a default Xbox image until your final art is ready to replace it.
          
          2. Use the **In-game value** field to specify a value or code passed to your game. Ensure that your game can use this code to unlock a reward.

    1. Select **Add** to add the reward to the achievement or select **Cancel** to cancel and return to the **New achievement** page.

1.  Select **Save** to save the achievement or select **Cancel** to cancel and return to the **Achievements** page.


<a id="ID4EXC"></a>

## Change an achievement  

> [!IMPORTANT]
> After a title passes Final Certification, existing achievements in that title can no longer be changed or deleted.

1. In the list of achievements on the **Achievements** page, select the **Achievement name** for the achievement you want to change. This will open a page whose title is the name of the achievement.

2. Make the changes to the achievement.

3. Select **Save** to save the achievement or select **Cancel** to cancel and return to the **Achievements** page.

<a id="ID4E5D"></a>

## Delete an achievement  

> [!IMPORTANT]
> After a title passes Final Certification, existing achievements in that title can no longer be changed or deleted.  


1. In the list of achievements on the **Achievements** page, select **Delete** next to the achievement you want to remove.

2. In the **Confirmation** dialog, select **Delete** or **Cancel**.
