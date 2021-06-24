/**
 * NetInfo.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Native implementation of network information APIs.
 */
import * as Types from '../common/Types';
import * as Interfaces from '../common/Interfaces';
export declare class NetInfo extends Interfaces.NetInfo {
    constructor();
    isConnected(): Promise<boolean>;
    getType(): Promise<Types.DeviceNetworkType>;
    private static _getNetworkTypeFromConnectionInfo;
}
declare const _default: NetInfo;
export default _default;
