"use strict";
/**
 * NetInfo.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Native implementation of network information APIs.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetInfo = void 0;
var RNNetInfo = require("@react-native-community/netinfo");
var Types = require("../common/Types");
var Interfaces = require("../common/Interfaces");
var NetInfo = /** @class */ (function (_super) {
    __extends(NetInfo, _super);
    function NetInfo() {
        var _this = _super.call(this) || this;
        var onEventOccurredHandler = function (state) {
            _this.connectivityChangedEvent.fire(state.isConnected);
        };
        RNNetInfo.addEventListener(onEventOccurredHandler);
        return _this;
    }
    NetInfo.prototype.isConnected = function () {
        return RNNetInfo.fetch()
            .then(function (state) { return state.isConnected; })
            .catch(function () { return Promise.reject('NetInfo.isConnected.fetch() failed'); });
    };
    NetInfo.prototype.getType = function () {
        return RNNetInfo.fetch().then(function (state) { return NetInfo._getNetworkTypeFromConnectionInfo(state); });
    };
    NetInfo._getNetworkTypeFromConnectionInfo = function (state) {
        if (state.type === RNNetInfo.NetInfoStateType.cellular) {
            if (state.details === null || state.details.cellularGeneration === null) {
                return Types.DeviceNetworkType.Unknown;
            }
            else if (state.details.cellularGeneration === '2g') {
                return Types.DeviceNetworkType.Mobile2G;
            }
            else if (state.details.cellularGeneration === '3g') {
                return Types.DeviceNetworkType.Mobile3G;
            }
            else if (state.details.cellularGeneration === '4g') {
                return Types.DeviceNetworkType.Mobile4G;
            }
        }
        else if (state.type === RNNetInfo.NetInfoStateType.wifi) {
            return Types.DeviceNetworkType.Wifi;
        }
        else if (state.type === RNNetInfo.NetInfoStateType.ethernet) {
            return Types.DeviceNetworkType.Wifi;
        }
        else if (state.type === RNNetInfo.NetInfoStateType.wimax) {
            return Types.DeviceNetworkType.Wifi;
        }
        else if (state.type === RNNetInfo.NetInfoStateType.none) {
            return Types.DeviceNetworkType.None;
        }
        return Types.DeviceNetworkType.Unknown;
    };
    return NetInfo;
}(Interfaces.NetInfo));
exports.NetInfo = NetInfo;
exports.default = new NetInfo();
