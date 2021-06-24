/**
 * Video.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform Video abstraction.
 */
import * as Types from '../common/Types';
import * as Interfaces from '../common/Interfaces';
export declare class NetInfo extends Interfaces.NetInfo {
    constructor();
    isConnected(): Promise<boolean>;
    getType(): Promise<Types.DeviceNetworkType>;
}
declare const _default: NetInfo;
export default _default;
