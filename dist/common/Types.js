"use strict";
/*
 * Types.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Type definitions to support the plugin.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceNetworkType = void 0;
var DeviceNetworkType;
(function (DeviceNetworkType) {
    DeviceNetworkType[DeviceNetworkType["Unknown"] = 0] = "Unknown";
    DeviceNetworkType[DeviceNetworkType["None"] = 1] = "None";
    DeviceNetworkType[DeviceNetworkType["Wifi"] = 2] = "Wifi";
    DeviceNetworkType[DeviceNetworkType["Mobile2G"] = 3] = "Mobile2G";
    DeviceNetworkType[DeviceNetworkType["Mobile3G"] = 4] = "Mobile3G";
    DeviceNetworkType[DeviceNetworkType["Mobile4G"] = 5] = "Mobile4G";
})(DeviceNetworkType = exports.DeviceNetworkType || (exports.DeviceNetworkType = {}));
