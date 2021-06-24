import SubscribableEvent from 'subscribableevent';
import * as Types from './Types';
export declare abstract class NetInfo {
    abstract isConnected(): Promise<boolean>;
    abstract getType(): Promise<Types.DeviceNetworkType>;
    connectivityChangedEvent: SubscribableEvent<(isConnected: boolean) => void>;
}
export interface PluginInterface {
    Types: typeof Types;
    default: NetInfo;
}
