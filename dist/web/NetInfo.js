"use strict";
/**
 * Video.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform Video abstraction.
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
var Types = require("../common/Types");
var Interfaces = require("../common/Interfaces");
var NetInfo = /** @class */ (function (_super) {
    __extends(NetInfo, _super);
    function NetInfo() {
        var _this = _super.call(this) || this;
        var onEventOccuredHandler = function () {
            _this.connectivityChangedEvent.fire(navigator.onLine);
        };
        // Avoid accessing window if it's not defined (for test environment).
        if (typeof (window) !== 'undefined') {
            window.addEventListener('online', onEventOccuredHandler);
            window.addEventListener('offline', onEventOccuredHandler);
        }
        return _this;
    }
    NetInfo.prototype.isConnected = function () {
        return Promise.resolve(navigator.onLine);
    };
    NetInfo.prototype.getType = function () {
        return Promise.resolve(Types.DeviceNetworkType.Unknown);
    };
    return NetInfo;
}(Interfaces.NetInfo));
exports.NetInfo = NetInfo;
exports.default = new NetInfo();
