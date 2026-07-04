---
author: edigonzales
title: "Error codes"
description: "Constant definitions for the Microsoft Game Development Kit (GDK) error code values, declared in XGameErr.h."
kindex:
  - Error codes
  - HRESULT
  - XGameErr.h
ms.author: edigonzales
ms.topic: reference
edited: 06/23/2026
applies-to: pc-gdk
ms.date: '06/23/2026'
permissioned-type: public
---

# Error codes

Constant definitions for the Microsoft Game Development Kit (GDK) error code values, declared in XGameErr.h.

This overview is organized by subsystem, and each table is sorted by increasing `HRESULT` value to make numeric lookup easier.

For comprehensive tool and platform `HRESULT` coverage, including launch, deployment, and diagnostics tool scenarios, see [Error Lookup (xberror.exe)](../tools/tools-console/commandlinetools/xberror.md).

## Game runtime

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_GAME_MISSING_GAME_CONFIG | 0x87E5001F | This app is missing a required MicrosoftGame.Config file. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Add a valid MicrosoftGame.config to the package, then rebuild/redeploy. |
| E_GAMERUNTIME_NOT_INITIALIZED | 0x89240100 | The game runtime is not initialized. | [XGameRuntime](system/xgameruntimeinit/xgameruntimeinit_members.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_DLL_NOT_FOUND | 0x89240101 | The game runtime DLL was not found. | [XGameRuntime](system/xgameruntimeinit/xgameruntimeinit_members.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_VERSION_MISMATCH | 0x89240102 | The game runtime DLL does not support this version of the GDK. | [XGameRuntime](system/xgameruntimeinit/xgameruntimeinit_members.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_WINDOW_NOT_FOREGROUND | 0x89240103 | The operation requires the application window to be in the foreground. | | Bring the app window to the foreground, then retry the operation. |
| E_GAMERUNTIME_SUSPENDED | 0x89240104 | The game runtime is in a suspended state. | [Xbox Game Lifecycle](../gdk-dev/console-dev/overviews/xbox-game-life-cycle.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_UNINITIALIZE_ACTIVEOBJECTS | 0x89240105 | The game runtime has active objects at XGameRuntimeUninitialize. | [XGameRuntimeUninitialize](system/xgameruntimeinit/functions/xgameruntimeuninitialize.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_MULTIPLAYER_NOT_CONFIGURED | 0x89240106 | No multiplayer activity is set on the service for this user on this title. | [Xbox Services Multiplayer](../services/multiplayer/overviews/live-multiplayer-intro.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_OPTIONS_MISMATCH | 0x89240109 | The runtime was already initialized with a different set of options. Uninitialize before reinitializing with new options. | [XGameRuntimeUninitialize](system/xgameruntimeinit/functions/xgameruntimeuninitialize.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_OPTIONS_NOT_SUPPORTED | 0x8924010A | The options passed are not compatible with the game's package. The game config information must match the package. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_GAMECONFIG_BAD_FORMAT | 0x8924010B | The game config passed to Initialize cannot be parsed. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Validate runtime init/uninit order, package compatibility, and app state before retrying. |
| E_GAMERUNTIME_INVALID_HANDLE | 0x8924010C | Handles are not valid for use across runtime initializations. | | Validate runtime init/uninit order, package compatibility, and app state before retrying. |

## Game user

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_GAMEUSER_MAX_USERS_ADDED | 0x89245100 | Cannot add this user because the maximum number of users has been reached. | [XUserAddAsync](system/xuser/functions/xuseraddasync.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_SIGNED_OUT | 0x89245101 | Cannot perform the operation because the user is signed out. | [XUserAddAsync](system/xuser/functions/xuseraddasync.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_RESOLVE_USER_ISSUE_REQUIRED | 0x89245102 | UI is required to resolve an issue with this user. | [XUserResolveIssueWithUiAsync](system/xuser/functions/xuserresolveissuewithuiasync.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_DEFERRAL_NOT_AVAILABLE | 0x89245103 | Not an appropriate time to request deferral. | [XUserGetTokenAndSignatureAsync](system/xuser/functions/xusergettokenandsignatureasync.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_USER_NOT_FOUND | 0x89245104 | User matching the ID was not found. | | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_NO_TOKEN_REQUIRED | 0x89245105 | No token is required for this call. | | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_NO_DEFAULT_USER | 0x89245106 | No current default user. If you get this error, call XUserAddAsync again without AddDefaultUserSilently. | [XUserAddAsync](system/xuser/functions/xuseraddasync.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_FAILED_TO_RESOLVE | 0x89245107 | Failed to resolve the given privilege. | | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_NO_TITLE_ID | 0x89245108 | An Xbox Live TitleId must be configured. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_UNKNOWN_GAME_IDENTITY | 0x89245109 | The game identity is not recognized. The MSAAppId and TitleId do not match the ones associated to the game. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_NO_PACKAGE_IDENTITY | 0x89245110 | A package identity must be configured. | [Partner Center initial configuration](../store/commerce/getting-started/xstore-initial-configuration-in-partner-center.md#1-reserving-a-name) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_FAILED_TO_GET_TOKEN | 0x89245111 | The token request failed. | | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_INVALID_APP_CONFIGURATION | 0x89245112 | The MSAAppId in the game config is invalid or not configured for the authentication stack. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_MALFORMED_MSAAPPID | 0x89245113 | The MSAAppId in the game config does not match the expected format (16 character string or GUID). | | Verify sign-in/default user/title identity configuration, then retry the user flow. |
| E_GAMEUSER_INCONSISTENT_MSAAPPID_AND_TITLEID | 0x89245114 | The MSAAppId and TitleId in the game config do not match the ones associated to the game. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Verify sign-in/default user/title identity configuration, then retry the user flow. |

## Game package

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_GAMEPACKAGE_APP_NOT_PACKAGED | 0x89245200 | The game is not packaged in a container. | | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_NO_INSTALLED_LANGUAGES | 0x89245201 | The game uses Intelligent Delivery to selectively install languages, but none are installed. | [Intelligent Delivery languages](../features/common/packaging/intelligentdelivery-language.md) | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_NO_STORE_ID | 0x89245202 | The StoreId attribute must be set in the application's game config. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_INVALID_SELECTOR | 0x89245203 | A chunk selector was provided that does not resolve to a chunk in the package. | [Chunk element reference](../features/common/packaging/deployment/deployment-element-chunk.md) | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_DOWNLOAD_REQUIRED | 0x89245204 | One or more required chunks must be downloaded to mount the package on this device. | | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_NO_TAG_CHANGE | 0x89245205 | Change installed chunks in this package using Features, not tags. | [Intelligent Delivery recipes](../features/common/packaging/intelligentdelivery-features-recipes.md) | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_DLC_NOT_SUPPORTED | 0x89245206 | Game does not support the DLC package. Ensure correct DLC compatibility in the game config. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_DUPLICATE_ID_VALUES | 0x89245207 | The package contains more than one executable mapping to the same 'ID' attribute. Check for duplicate 'ID' attributes in the 'Executable' elements. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_NO_PACKAGE_IDENTIFIER | 0x89245208 | Could not resolve an identifier for the package. The package might not be installed. | | Validate package installation/content state and retry after redeploying required assets. |
| E_GAMEPACKAGE_CONFIG_NO_ROOT_NODE | 0x89245209 | Could not find a root <Game> node in the MicrosoftGame.config file. Check that the file is properly formatted. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Correct MicrosoftGame.config schema/values, then rebuild/redeploy the package. |
| E_GAMEPACKAGE_CONFIG_ZERO_VERSION | 0x8924520A | The 'Version' attribute in the 'Identity' node in MicrosoftGame.config cannot be 0.0.0.0. Increment or remove this attribute. If no version is specified, the default is 1.0.0.0. | | Correct MicrosoftGame.config schema/values, then rebuild/redeploy the package. |
| E_GAMEPACKAGE_CONFIG_NO_MSAAPPID_NOTITLEID | 0x8924520B | The 'MSAAppId' or 'TitleId' element in MicrosoftGame.config is missing. Both must be specified when using configVersion >= 1. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Correct MicrosoftGame.config schema/values, then rebuild/redeploy the package. |
| E_GAMEPACKAGE_CONFIG_DEPRECATED_PC_ENTRIES | 0x8924520C | The DesktopRegistration entries "modFolder", "enableWritesToPackageRoot", "disableRegistryWriteVirtualization", and "disableFilesystemWriteVirtualization" are deprecated in configVersion >= 1. | | Correct MicrosoftGame.config schema/values, then rebuild/redeploy the package. |
| E_GAMEPACKAGE_CONFIG_SUM_REQUIRES_MSAAPPID | 0x8924520D | The 'MSAAppId' and 'TitleId' elements are required when using the Simplified User Model (AdvancedUserModel element) and configVersion >= 1. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Correct MicrosoftGame.config schema/values, then rebuild/redeploy the package. |
| E_GAMEPACKAGE_CONFIG_NO_CODE_CLOUD_SAVES_REQUIRES_MSAAPPID | 0x8924520E | The 'MSAAppId' and 'TitleId' elements are required when using No Code Cloud Saves (NoCodePCRoot element) and configVersion >= 1. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Correct MicrosoftGame.config schema/values, then rebuild/redeploy the package. |
| E_GAMEPACKAGE_CONFIG_MSAAPPID_OR_TITLEID_IS_DEFAULT | 0x8924520F | The 'MSAAppId' or 'TitleId' element is a default value. If NoCodePCRoot or AdvancedUserModel is specified, both TitleId and MSAAppId must be valid IDs from Partner Center when using configVersion >= 1. | [MicrosoftGame.config element reference](system/microsoftgameconfig/elements/gc-microsoftgameconfig-toc.md) | Correct MicrosoftGame.config schema/values, then rebuild/redeploy the package. |

## Game store

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_GAMESTORE_LICENSE_ACTION_NOT_APPLICABLE_TO_PRODUCT | 0x89245300 | The game requested a license for a product that cannot be licensed. | [XStore overview](../store/commerce/getting-started/xstore-overview.md) | Verify store connectivity, entitlement/license state, then retry the request. |
| E_GAMESTORE_NETWORK_ERROR | 0x89245301 | The game failed to communicate with the store network. | [XStore overview](../store/commerce/getting-started/xstore-overview.md) | Verify store connectivity, entitlement/license state, then retry the request. |
| E_GAMESTORE_SERVER_ERROR | 0x89245302 | The game received a bad response from the store server. | [XStore overview](../store/commerce/getting-started/xstore-overview.md) | Verify store connectivity, entitlement/license state, then retry the request. |
| E_GAMESTORE_INSUFFICIENT_QUANTITY | 0x89245303 | The user does not have enough of this consumable to use the requested amount. | [XStore overview](../store/commerce/getting-started/xstore-overview.md) | Verify store connectivity, entitlement/license state, then retry the request. |
| E_GAMESTORE_ALREADY_PURCHASED | 0x89245304 | The user already owns this product. | [XStore overview](../store/commerce/getting-started/xstore-overview.md) | Verify store connectivity, entitlement/license state, then retry the request. |
| E_GAMESTORE_LICENSE_ACTION_THROTTLED | 0x89245305 | The game excessively queried a license for the product and is now throttled. Limit is 30 licensing attempts within 10 minutes for the same product. | [XStore overview](../store/commerce/getting-started/xstore-overview.md) | Verify store connectivity, entitlement/license state, then retry the request. |

## Game streaming

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_GAMESTREAMING_NOT_INITIALIZED | 0x89245400 | The XGameStreaming runtime is not initialized. Call XGameStreamingInitialize before calling other APIs. | [XGameStreamingInitialize](system/xgamestreaming/functions/xgamestreaminginitialize.md) | Ensure streaming is initialized and client/session context is valid, then retry. |
| E_GAMESTREAMING_CLIENT_NOT_CONNECTED | 0x89245401 | The specified client is not connected. | | Ensure streaming is initialized and client/session context is valid, then retry. |
| E_GAMESTREAMING_NO_DATA | 0x89245402 | The requested data is not available. The data might be available later. | | Ensure streaming is initialized and client/session context is valid, then retry. |
| E_GAMESTREAMING_NO_DATACENTER | 0x89245403 | The current machine is not running in a datacenter. | | Ensure streaming is initialized and client/session context is valid, then retry. |
| E_GAMESTREAMING_NOT_STREAMING_CONTROLLER | 0x89245404 | The current reading did not come from a streaming controller. | | Ensure streaming is initialized and client/session context is valid, then retry. |

## Game save

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_GS_INVALID_CONTAINER_NAME | 0x80830001 | The name of the container is invalid. Valid container name characters include uppercase/lowercase letters, digits, underscores, and forward slashes. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_NO_ACCESS | 0x80830002 | The operation failed because the title does not have access to the container storage spaces. Check that the SCID and TitleId are configured correctly. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_OUT_OF_LOCAL_STORAGE | 0x80830003 | The device does not have enough storage capacity to save the game. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_USER_CANCELED | 0x80830004 | The user canceled the download of their save games. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_UPDATE_TOO_BIG | 0x80830005 | The size of the save update is too large. The total size of an XGameSave update must be smaller than GS_MAX_BLOB_SIZE (16 MB). | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_QUOTA_EXCEEDED | 0x80830006 | The title's storage quota for this user has been exceeded. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_PROVIDED_BUFFER_TOO_SMALL | 0x80830007 | The buffer provided to the API was too small. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_BLOB_NOT_FOUND | 0x80830008 | The specified blob cannot be found. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_NO_SERVICE_CONFIGURATION | 0x80830009 | The title is not properly configured for connected storage. Check that the SCID is correct and the title is configured in Partner Center. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_CONTAINER_NOT_IN_SYNC | 0x8083000A | The container is not synchronized yet. Ensure the XGameSave container is synchronized before submitting updates. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_CONTAINER_SYNC_FAILED | 0x8083000B | The synchronization of the container failed. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_USER_NOT_REGISTERED_IN_SERVICE | 0x8083000C | The user's MSA is not yet an Xbox services account. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_HANDLE_EXPIRED | 0x8083000D | The handle used by the function expired and must be reacquired. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_ASYNC_FUNCTION_REQUIRED | 0x8083000E | This synchronous function is being called on a time-sensitive thread and risks deadlocks. Use the async implementation instead. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |
| E_GS_PROVIDER_MISMATCH | 0x8083000F | The game is mixing XGameSave and XGameSaveFiles calls, which is not supported. | [XGameSave](system/xgamesave/xgamesave_members.md) | For detailed troubleshooting guidance, see [Game Saves Debugging](../features/common/game-save/game-saves-debugging.md). |

## Global

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| S_OK | 0x00000000 | Operation completed successfully. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | No action required. |
| E_PENDING | 0x8000000A | The operation has started but has not completed yet. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Wait for completion, then query the async result again. |
| E_BOUNDS | 0x8000000B | A supplied index or range is outside valid bounds. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Validate index and range bounds before retrying. |
| E_NOTIMPL | 0x80004001 | This functionality is not implemented. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Use a supported API path for this platform and runtime. |
| E_NOINTERFACE | 0x80004002 | The requested interface is not available on this object. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Verify interface availability/version before querying this interface. |
| E_POINTER | 0x80004003 | A required pointer is null or invalid. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Validate all pointers/handles and object lifetimes before calling. |
| E_ABORT | 0x80004004 | The operation was aborted before completion. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Check cancellation/shutdown state and rerun when stable. |
| E_FAIL | 0x80004005 | The operation failed with an unspecified error. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Review logs for the preceding failure and retry after correcting inputs/state. |
| E_UNEXPECTED | 0x8000FFFF | An unexpected internal error occurred. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Capture diagnostics, restart the scenario, and escalate if reproducible. |
| E_ACCESSDENIED | 0x80070005 | Access to the requested resource or operation is denied. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Verify permissions, capabilities, and user/account context, then retry. |
| E_OUTOFMEMORY | 0x8007000E | The operation failed because memory allocation could not be satisfied. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Reduce memory pressure, free allocations, and retry. |
| E_NOT_SUPPORTED | 0x80070032 | This operation is not supported in the current context. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Use a supported operation for the current context. |
| E_INVALIDARG | 0x80070057 | One or more arguments are invalid. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Validate argument values and required combinations before retrying. |
| E_NOT_SUFFICIENT_BUFFER | 0x8007007A | The provided buffer is too small for the requested data. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Query required size, resize the buffer, and retry. |
| E_TIME_CRITICAL_THREAD | 0x800701A0 | The call is not allowed on a time-critical thread. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Move this call off time-critical threads; use async patterns when available. |
| E_NO_TASK_QUEUE | 0x800701AB | No task queue was provided or available for the operation. | [Xbox Live HRESULT Error Codes (Global)](live/xbl-hresult-error-codes.md#global) | Provide a valid task queue before invoking this operation. |

## HTTP Client

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| HTTP_E_STATUS_UNEXPECTED | 0x80190001 | HTTP client encountered an unexpected protocol/status condition. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_UNEXPECTED_SERVER_ERROR | 0x80190005 | Server returned an unexpected error condition. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_AMBIGUOUS | 0x8019012C | HTTP response indicates an ambiguous resource match. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_MOVED | 0x8019012D | HTTP redirect indicates the resource has moved. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_REDIRECT | 0x8019012E | HTTP redirect response received. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_REDIRECT_METHOD | 0x8019012F | HTTP redirect that requires a method change. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_NOT_MODIFIED | 0x80190130 | HTTP 304: resource has not changed since conditional request. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_USE_PROXY | 0x80190131 | HTTP request must be made through a proxy. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_REDIRECT_KEEP_VERB | 0x80190133 | HTTP redirect that preserves the original method/verb. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_BAD_REQUEST | 0x80190190 | HTTP 400: the request is malformed or invalid. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_DENIED | 0x80190191 | HTTP 401: request is unauthorized or denied. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_PAYMENT_REQ | 0x80190192 | HTTP 402: payment is required for this request. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_FORBIDDEN | 0x80190193 | HTTP 403: access is forbidden for this resource. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_NOT_FOUND | 0x80190194 | HTTP 404: requested resource was not found. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_BAD_METHOD | 0x80190195 | HTTP method is not valid for this endpoint. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_NONE_ACCEPTABLE | 0x80190196 | HTTP 406: no acceptable representation available. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_PROXY_AUTH_REQ | 0x80190197 | HTTP 407: proxy authentication is required. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_REQUEST_TIMEOUT | 0x80190198 | HTTP 408: server timed out waiting for the request. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_CONFLICT | 0x80190199 | HTTP 409: request conflicts with current server state. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_GONE | 0x8019019A | HTTP 410: requested resource is no longer available. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_LENGTH_REQUIRED | 0x8019019B | HTTP 411: Content-Length is required. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_PRECOND_FAILED | 0x8019019C | HTTP 412: request precondition failed. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_REQUEST_TOO_LARGE | 0x8019019D | HTTP 413: request payload is too large. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_URI_TOO_LONG | 0x8019019E | HTTP 414: request URI is too long. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_UNSUPPORTED_MEDIA | 0x8019019F | HTTP 415: media type is not supported. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_RANGE_NOT_SATISFIABLE | 0x801901A0 | HTTP 416: requested range cannot be satisfied. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_EXPECTATION_FAILED | 0x801901A1 | HTTP 417: the server could not meet request expectations. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| FGRL (Rate Limit) Exceeded | 0x801901AD | Request was throttled because the rate limit was exceeded. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Reduce request rate and retry after cooldown with exponential backoff. |
| HTTP_E_STATUS_SERVER_ERROR | 0x801901F4 | HTTP 500: server encountered an internal error. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_NOT_SUPPORTED | 0x801901F5 | HTTP capability requested is not supported. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_BAD_GATEWAY | 0x801901F6 | HTTP 502: received an invalid response from an upstream server. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_SERVICE_UNAVAIL | 0x801901F7 | HTTP 503: service is temporarily unavailable. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_GATEWAY_TIMEOUT | 0x801901F8 | HTTP 504: upstream server timed out. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| HTTP_E_STATUS_VERSION_NOT_SUP | 0x801901F9 | HTTP version is not supported by the server. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Inspect HTTP status/response body, fix request/auth/config, and retry with backoff for transient failures. |
| ONL_E_ACTION_REQUIRED | 0x8086000C | User or title action is required before the operation can continue. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Complete the required user/title action indicated by the service, then retry. |
| WEB_E_UNEXPECTED_CONTENT | 0x83750005 | The response content did not match the expected format. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Validate response format/content-type and service contract, then retry. |
| WEB_E_INVALID_JSON_STRING | 0x83750007 | The JSON payload is invalid or malformed. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Validate JSON payload schema/encoding before sending or parsing. |
| E_HC_NOT_INITIALISED | 0x89235001 | HTTP Client runtime is not initialized. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Initialize HTTP Client runtime before issuing requests. |
| E_HC_PERFORM_ALREADY_CALLED | 0x89235003 | This HTTP operation has already been executed. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Create a new request object for another perform call. |
| E_HC_ALREADY_INITIALISED | 0x89235004 | HTTP Client runtime is already initialized. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Avoid duplicate initialization; initialize once per process lifecycle. |
| E_HC_CONNECT_ALREADY_CALLED | 0x89235005 | Connect has already been called for this WebSocket/session. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Reuse active connection/session or create a new one instead of reconnecting. |
| E_HC_NO_NETWORK | 0x89235006 | No network connectivity is currently available. | [Xbox Live HRESULT Error Codes (HTTP Client)](live/xbl-hresult-error-codes.md#http-client) | Restore network connectivity and retry. |

## Auth Manager (AM)

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| AM_E_XSTS_UNEXPECTED | 0x87DD0006 | The NSAL target is configured, but the relying-party certificate is not yet trusted by Xbox services. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |
| AM_E_NOT_AUTHORIZED | 0x87DD0009 | The user is not authorized to request an XSTS token for the current TitleId and SandboxId configuration. | [Troubleshoot sandbox setup](../services/develop/troubleshooting/live-troubleshoot-sandboxes.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |
| AM_E_UNKNOWN_TARGET | 0x87DD000B | The requested token target was not found in the title's NSAL configuration. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |
| AM_E_TITLE_NOT_AUTHENTICATED | 0x87DD000D | The title is not authenticated for the current service configuration (for example, TitleId, SCID, or sandbox setup issues). | [Troubleshoot sandbox setup](../services/develop/troubleshooting/live-troubleshoot-sandboxes.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |
| AM_E_USER_NOT_FOUND | 0x87DD0013 | User object is no longer signed in or is unknown. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |
| AM_E_XSTS_TIMEOUT | 0x87DD0019 | Timeout limit hit when trying to retrieve the X-token. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |
| AM_E_NO_TOKEN_REQUIRED | 0x87DD0021 | No token is required for the requested endpoint because it is not configured as a token target in NSAL. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |
| AM_E_XTITLE_TIMEOUT | 0x87DD0022 | Timeout limit hit when trying to retrieve the title token. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |
| AM_E_XSTS_SERVICE_UNAVAILABLE | 0x87DD0033 | The X token service is unavailable. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Verify sandbox, NSAL target, TitleId/SCID config, and reacquire token. |

## XUser token and signature

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| WININET_E_NAME_NOT_RESOLVED | 0x80072EE7 | The server name or address couldn't be resolved. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Check network/DNS/proxy connectivity and retry token acquisition. |
| WININET_E_CANNOT_CONNECT | 0x80072EFD | A connection with the server couldn't be established. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Check network/DNS/proxy connectivity and retry token acquisition. |
| WININET_E_CONNECTION_ABORTED | 0x80072EFE | The connection with the server was terminated abnormally. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Check network/DNS/proxy connectivity and retry token acquisition. |
| WININET_E_DECODING_FAILED | 0x80072F8F | Content decoding failed. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Check network/DNS/proxy connectivity and retry token acquisition. |
| XO_E_GAME_USAGE_BY_USER_EXCEEDED | 0x8015DBFF | User exceeded their allotted time allowed to play the game (parental controls). | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Resolve account/system policy restrictions, then retry token acquisition. |
| XO_E_SYSTEM_UPDATE_REQUIRED | 0x8015DC01 | System must be updated before being allowed to grant X-tokens. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Resolve account/system policy restrictions, then retry token acquisition. |
| XO_E_ACCOUNT_COUNTRY_NOT_AUTHORIZED | 0x8015DC0B | Title trying to be used in a country/region it isn't authorized for. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Resolve account/system policy restrictions, then retry token acquisition. |
| XO_E_DEVICE_COUNT_FOR_TITLE_EXCEEDED | 0x8015DC1E | You are already playing this game on another device. Close that game to play it here. Single Point of Presence (SPoP / XR-115) enforcement. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Resolve account/system policy restrictions, then retry token acquisition. |
| ONL_E_FORCESIGNIN | 0x80860006 | To help protect the account, the user must sign in again. | [XUserGetTokenAndSignatureResult](system/xuser/functions/xusergettokenandsignatureresult.md) | Prompt user to sign in again, then retry the request. |

## XAL

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_XAL_NOTINITIALIZED | 0x89235001 | XAL is not initialized. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Initialize XAL before using XAL-dependent APIs. |
| E_XAL_ALREADYINITIALIZED | 0x89235101 | XAL has already been initialized. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Avoid duplicate XAL initialization in the same lifecycle. |
| E_XAL_USERSETNOTEMPTY | 0x89235102 | The target user set is not empty. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_USERSETFULL | 0x89235103 | The user set has reached its maximum capacity. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_USERSIGNEDOUT | 0x89235104 | The target user is signed out. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_DUPLICATEDUSER | 0x89235105 | The user is already present in the user set. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_NETWORK | 0x89235106 | A network error occurred while processing the request. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_CLIENTERROR | 0x89235107 | A client-side error occurred in XAL. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_UIREQUIRED | 0x89235108 | User interaction is required to complete the operation. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_HANDLERALREADYREGISTERED | 0x89235109 | A required handler was already registered. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_UNEXPECTEDUSERSIGNEDIN | 0x8923510A | A different or unexpected user signed in during the operation. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_NOTATTACHEDTOJVM | 0x8923510B | XAL is not attached to the Java VM when required. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_DEVICEUSER | 0x8923510C | The operation is not valid for the current device user context. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_DEFERRALNOTAVAILABLE | 0x8923510D | A deferral cannot be requested at this time. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_MISSINGPLATFORMEVENTHANDLER | 0x8923510E | A required platform event handler is missing. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_USERNOTFOUND | 0x8923510F | The specified user could not be found. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_NOTOKENREQUIRED | 0x89235110 | No token is required for this request. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_NODEFAULTUSER | 0x89235111 | No default user is currently available. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |
| E_XAL_FAILEDTORESOLVE | 0x89235112 | XAL could not resolve the requested privilege or identity state. | [Xbox Live HRESULT Error Codes (XAL)](live/xbl-hresult-error-codes.md#xal) | Validate XAL user-set/session state and retry in the expected call sequence. |

## XSAPI

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_XBL_RUNTIME_ERROR | 0x89235200 | A generic Xbox Live runtime error occurred. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Verify XSAPI initialization, auth token availability, and service state, then retry. |
| E_XBL_RTA_GENERIC_ERROR | 0x89235201 | A generic Real-Time Activity (RTA) error occurred. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Verify XSAPI initialization, auth token availability, and service state, then retry. |
| E_XBL_RTA_SUBSCRIPTION_LIMIT_REACHED | 0x89235202 | The RTA subscription limit was reached. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Verify XSAPI initialization, auth token availability, and service state, then retry. |
| E_XBL_RTA_ACCESS_DENIED | 0x89235203 | Access to RTA functionality was denied. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Verify XSAPI initialization, auth token availability, and service state, then retry. |
| E_XBL_AUTH_UNKNOWN_ERROR | 0x89235204 | An unknown authentication error occurred. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Verify XSAPI initialization, auth token availability, and service state, then retry. |
| E_XBL_AUTH_RUNTIME_ERROR | 0x89235205 | Authentication failed due to a runtime error. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Verify XSAPI initialization, auth token availability, and service state, then retry. |
| E_XBL_AUTH_NO_TOKEN | 0x89235206 | No authentication token is available. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Verify XSAPI initialization, auth token availability, and service state, then retry. |
| E_XBL_ALREADY_INITIALIZED | 0x89235207 | Xbox Live services are already initialized. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Avoid duplicate Xbox services initialization calls. |
| E_XBL_NOT_INITIALIZED | 0x89235208 | Xbox Live services are not initialized. | [Xbox Live HRESULT Error Codes (XSAPI)](live/xbl-hresult-error-codes.md#xsapi) | Call XblInitialize before invoking Xbox services APIs. |
| E_XBL_RTA_NOT_ACTIVATED | 0x89235209 | The Real-Time Activity service isn't activated. Call XblRealTimeActivityActivate to activate the Real-Time Activity service. | [Error Lookup (xberror.exe)](../tools/tools-console/commandlinetools/xberror.md) | The Real-Time Activity service isn't activated. Call XblRealTimeActivityActivate to activate the Real-Time Activity service. (0x89235209) |

## Console tools and transport

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_APP_USER_TERMINATE_REQUEST | 0x87E1001D | A user explicitly requested app termination. | [Error Lookup (xberror.exe)](../tools/tools-console/commandlinetools/xberror.md) | A user explicitly requested app termination. (0x87E1001D) |
| E_DSTORAGE_XVD_DEVICE_NOT_SUPPORTED | 0x89240004 | The specified XVD isn't on a supported NVMe device. | [Error Lookup (xberror.exe)](../tools/tools-console/commandlinetools/xberror.md) | The specified XVD isn't on a supported NVMe device. |
| E_COULD_NOT_CONNECT | 0x8C110303 | Failed to connect to the specified devkit. | [XTF transport errors](../tools/tools-console/commandlinetools/xtf-transport-errors.md) | No connection could be made to the target console. Verify the specified HostName or IP address. Check the firewall, the network settings, and the ability to ping the console. |
| E_XTFAPP_APPLICATION_EXITED_BEFORE_ACTIVATION_COMPLETE | 0x8D160122 | The application exited or crashed before completing activation. | [XTF transport errors](../tools/tools-console/commandlinetools/xtf-transport-errors.md) | None. |
| E_XTFAPP_DIRECTORY_NOT_FOUND | 0x8D16018D | The provided directory was not found. | [XTF transport errors](../tools/tools-console/commandlinetools/xtf-transport-errors.md) | Please ensure that the directory exists. |

## Xbox PC Remote Iteration

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| E_PROCESSNOTFOUND | 0x8C114002 | Process not found. Verify the process ID matches an active target process. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Verify the process id of the target process by checking the list of running processes; Provide a valid process id of an active process |
| E_INVALIDPROCESSID | 0x8C114003 | Invalid process ID. Provide a numeric process ID. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Provide a valid process id containing only numbers |
| E_INVALIDPIN | 0x8C114004 | PIN is not in the expected format. Enter a valid 6-character PIN. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Input the correct pin on the client device |
| E_INVALIDSSHKEY | 0x8C114005 | SSH key is not in expected form. Use a valid public key and retry pairing. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Generate a valid SSH public key; Execute the pairing again providing the path to the valid key |
| E_PAIRINGTIMEOUT | 0x8C114006 | Pair mode exceeded maximum time. Restart pairing and enter the PIN within 2 minutes. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Restart pin pairing process; Input pin on client device before timeout (2 min) |
| E_TOOMANYFAILURES | 0x8C114007 | Too many failed PIN attempts. Restart pairing and enter the correct PIN. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Restart pin pairing process; Input correct pin on client device |
| E_CLIENTNOTAUTHORIZED | 0x8C114008 | Device rejected client. Complete pairing successfully, then retry the connection. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Complete pin pairing process successfully; Execute the connection request again |
| E_SERVERNOTAUTHORIZED | 0x8C114009 | Client rejected device. Complete pairing successfully, then retry the connection. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Complete pin pairing process successfully; Execute the connection request again |
| E_SSHKEYTOOLARGE | 0x8C11400A | SSH key is too large. Generate a supported key type/size and retry with that key. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Generate a new SSH key using a supported algorithm and size (e.g., ED25519 or RSA‑2048); Ensure the correct key is specified for the RIT connection |
| E_GAMENOTSUSPENDED | 0x8C11400B | Specified process cannot be resumed. Verify the process is suspended before calling resume. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Verify the process state before resuming; Ensure no other tool has already resumed or terminated the process |
| E_GAMENOTRUNNING | 0x8C11400C | No game process is running. Launch the game before calling game-process operations. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Verify processes currently running; Launch the game before exercising game-process dependent API. |
| E_GAMEOVERSUSPENDED | 0x8C11400D | Thread suspend count is not zero. Resume until the suspend count returns to zero, or restart the process. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Resume the thread repeatedly until suspend count reaches zero, or restart the process to reset thread state.; Alternatively restart the process to reset thread state |
| E_GAMESTILLRUNNING | 0x8C11400E | Only one game may run at a time. Stop the currently running game before launching another. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Ensure there is no previous game process running; Terminate the currently running game (if any) before launching another; Retry launching the game process |
| E_GAMEEXITABANDONED | 0x8C11400F | Wait for game exit was abandoned. Verify PID/TID and retry termination. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Check if the game process is still running; Verify if the right process id and thread id were provided for termination; Retry to terminate the process |
| E_GAMEFILEPATHNOTEXIST | 0x8C114010 | Game file path does not exist. Validate the remote path and confirm deployment succeeded. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Validate the path exists on the remote device; Confirm deployment succeeded |
| E_SERVERTOOOLD | 0x8C114011 | Server version is too old for this client. Update `wdEndpoint` on the remote machine. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Update the wdEndpoint on the remote machine to the latest version |
| E_NAMERESOLUTIONFAILED | 0x8C114012 | Could not resolve remote machine name. Verify hostname and DNS, or test with IP address. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Verify hostname spelling, DNS configuration, and network connectivity.; Use IP address to isolate name resolution issues. |
| E_INVALIDADDRESS | 0x8C114013 | Invalid address. Correct the address format and use a valid IPv4 address. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Confirm the right IP address; Correct the address format and ensure it uses a IPv4 protocol |
| E_CONNECTIONERROR | 0x8C114014 | Connection failed. Check network/firewall/service availability and retry. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Check network connectivity, firewall rules, service availability on the remote machine; Check visibility between devices, they should be able to ping each other; Retry the connection with logging enabled. |
| E_LISTENERALREADYRUNNING | 0x8C114015 | Another listener is active. Stop the existing endpoint instance or reuse it. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | - Stop the existing running instance of the endpoint before launching a new one; Alternatively, use the instance of the endpoint already running instead of launching a new one |
| E_ADMIN_REQUIRED | 0x8C114016 | Administrator privileges required. Run the endpoint as Administrator. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Re-run the endpoint as Administrator |
| E_INVALIDTHREADID | 0x8C114017 | Invalid thread ID. Provide a numeric thread ID. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Provide a valid thread id containing only numbers |
| E_INVALIDPIDTID_PAIR | 0x8C114018 | Process ID is not associated with thread ID. Re-query threads for that process and retry. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Re‑query thread list from the process; Ensure IDs are not cached or stale.; Validate that the thread ID was obtained from the correct process context. |
| E_THREADNOTFOUND | 0x8C114019 | Thread not found. Re-query current thread IDs and retry with a non-stale ID. | [Xbox PC Remote Iteration API Error Codes](remoting/error-codes.md) | Re‑query thread list from the process; Ensure IDs are not cached or stale.; Validate that the thread ID was obtained from the correct process context. |

## XAPU

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| XAPU_E_QUEUE_FULL | 0x8AC81000 | XAPU command queue is full. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | XAPU command queue is full. |
| XAPU_E_PENDING_RESULTS | 0x8AC81001 | No result available at the moment. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | No result available at the moment. |
| XAPU_E_INVALID_COMMAND | 0x8AC81002 | Invalid XAPU command value. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | Invalid XAPU command value. |
| XAPU_E_INVALID_STREAM_INDEX | 0x8AC81003 | Invalid stream index in the submitted XAPU command. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | Invalid stream index in the submitted XAPU command. |
| XAPU_E_NO_DEVICE_RESOURCES | 0x8AC81004 | Not enough resources on the system to support the requested number of streams. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | Not enough resources on the system to support the requested number of streams. |
| XAPU_E_ALREADY_ACTIVE | 0x8AC81005 | The stream is already active. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | The stream is already active. |
| XAPU_E_BUFFER_TOO_SMALL | 0x8AC81006 | Output buffer is too small to fit the data. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | Output buffer is too small to fit the data. |
| XAPU_E_PROCESSING_ERROR | 0x8AC81007 | The hardware failed to process the command. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | The hardware failed to process the command. |
| XAPU_E_BAD_OPUS_PACKET | 0x8AC81008 | The hardware encountered errors when decoding an Opus packet. Please check for any errors in encoding. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | The hardware encountered errors when decoding an Opus packet. Please check for any errors in encoding. |
| XAPU_E_DEVICE_FAULT | 0x8AC81050 | An unrecoverable firmware crash has occurred. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | An unrecoverable firmware crash has occurred. |
| XAPU_E_DEVICE_TIMEOUT | 0x8AC81051 | The hardware did not respond in a timely manner. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | The hardware did not respond in a timely manner. |
| XAPU_E_DEVICE_FATAL_ERROR | 0x8AC81052 | The hardware has encountered an error and the connection needs to be re-established. | [XAPU Errors](audio/xapu/enums/xapuerrors.md) | The hardware has encountered an error and the connection needs to be re-established. |

## XDSP

| Code | Value | Description | Source | Troubleshooting |
| --- | --- | --- | --- | --- |
| XDSP_E_QUEUE_FULL | 0x8AC810A0 | The command queue is full. Please wait a sufficient amount of time for the hardware to finish processing the current submitted commands before submitting more. | [XDSP Errors](audio/xdspaudio/enums/xdsperrors.md) | The command queue is full. Please wait a sufficient amount of time for the hardware to finish processing the current submitted commands before submitting more. |
| XDSP_E_PENDING_RESULTS | 0x8AC810A1 | The XDspStream was deactivated before all results from submitted commands were received. Please wait a sufficient amount of time for the hardware to finish processing the submitted commands of the stream before deactivating the stream. | [XDSP Errors](audio/xdspaudio/enums/xdsperrors.md) | The XDspStream was deactivated before all results from submitted commands were received. Please wait a sufficient amount of time for the hardware to finish processing the submitted commands of the stream before deactivating the stream. |
| XDSP_E_NO_DEVICE_RESOURCES | 0x8AC810A2 | No XDSP device resources are available to service your request. | [XDSP Errors](audio/xdspaudio/enums/xdsperrors.md) | No XDSP device resources are available to service your request. |
| XDSP_E_DEVICE_FATAL_ERROR | 0x8AC810A3 | A fatal error has occurred (eg. crash/hang) for the currently processed command. Please check the [XDspStatus](audio/xdspaudio/structs/xdspstatus.md) structure to understand which command sequence has failed. The hardware has an auto-recovery mechanism that will allow subsequent commands to continue being processed. | [XDSP Errors](audio/xdspaudio/enums/xdsperrors.md) | A fatal error has occurred (eg. crash/hang) for the currently processed command. Please check the [XDspStatus](../structs/xdspstatus.md) structure to understand which command sequence has failed. The hardware has an auto-recovery mechanism that will allow subsequent commands to continue being processed. |
| XDSP_E_NOT_ALL_HANDLES_DEACTIVATED | 0x8AC810A4 | [XDspDisconnect](audio/xdspaudio/functions/xdspdisconnect.md) was called on an XDspClient before all XDspStream objects associated with the client have been deactivated. | [XDSP Errors](audio/xdspaudio/enums/xdsperrors.md) | [XDspDisconnect](../functions/xdspdisconnect.md) was called on an XDspClient before all XDspStream objects associated with the client have been deactivated. |
| XDSP_E_MAX_CLIENTS_EXCEEDED | 0x8AC810A5 | The maximum number of XDspClients have already been created. | [XDSP Errors](audio/xdspaudio/enums/xdsperrors.md) | The maximum number of XDspClients have already been created. |
| XDSP_E_MAX_AGGREGATE_IMPULSE_RESPONSE_EXCEEDED | 0x8AC810A6 | The current [XDspConnect](audio/xdspaudio/functions/xdspconnect.md) call will cause XDSP to exceed the maximum supported aggregate impulse response length, and is therefore invalid. | [XDSP Errors](audio/xdspaudio/enums/xdsperrors.md) | The current [XDspConnect](../functions/xdspconnect.md) call will cause XDSP to exceed the maximum supported aggregate impulse response length, and is therefore invalid. |
| XDSP_E_INVALID_IMPULSE_RESPONSE_LENGTH | 0x8AC810A7 | [XDspActivate](audio/xdspaudio/functions/xdspactivate.md) was called with an impulse response length that is either too large or too small. | [XDSP Errors](audio/xdspaudio/enums/xdsperrors.md) | [XDspActivate](../functions/xdspactivate.md) was called with an impulse response length that is either too large or too small. |

## Related reference

[API reference](gc-reference-toc.md)
