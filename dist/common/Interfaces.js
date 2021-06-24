"use strict";
/*
 * Interfaces.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Interface definition for cross-platform ReactXP plugin for gathering network/connectivity
 * info. This was extracted from the reactxp core
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetInfo = void 0;
var subscribableevent_1 = require("subscribableevent");
var NetInfo = /** @class */ (function () {
    function NetInfo() {
        this.connectivityChangedEvent = new subscribableevent_1.default();
    }
    return NetInfo;
}());
exports.NetInfo = NetInfo;
