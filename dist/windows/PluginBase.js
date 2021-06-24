"use strict";
/*
 * PluginBase.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Base export for the Windows implementation of the plugin.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = exports.default = void 0;
var Types = require("../common/Types");
exports.Types = Types;
var NetInfo_1 = require("../native-common/NetInfo");
exports.default = NetInfo_1.default;
