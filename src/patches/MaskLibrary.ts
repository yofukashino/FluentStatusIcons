import { PluginInjector, SettingValues } from "../index";
import { MaskLibrary } from "../lib/requiredModules";
import * as FluentMasks from "../Components/FluentMasks";
import * as Types from "../types";
export const patchMaskLibrary = (): void => {
  PluginInjector.after(MaskLibrary.MaskType, "type", (_args, res: Types.ReactElement) => {
    const masks = res.props.children;
    const OnlineStatusMask = masks.findIndex(
      (mask: Types.ReactElement) => mask.props.id === "svg-mask-status-online",
    );
    const OnlineMobileStatusMask = masks.findIndex(
      (mask: Types.ReactElement) => mask.props.id === "svg-mask-status-online-mobile",
    );
    const IdleStatusMask = masks.findIndex(
      (mask: Types.ReactElement) => mask.props.id === "svg-mask-status-idle",
    );
    const DNDStatusMask = masks.findIndex(
      (mask: Types.ReactElement) => mask.props.id === "svg-mask-status-dnd",
    );
    const OfflineStatusMask = masks.findIndex(
      (mask: Types.ReactElement) => mask.props.id === "svg-mask-status-offline",
    );
    const StreamingStatusMask = masks.findIndex(
      (mask: Types.ReactElement) => mask.props.id === "svg-mask-status-streaming",
    );
    if (SettingValues.get("OnlineIcon")) masks[OnlineStatusMask] = FluentMasks.Online;
    if (SettingValues.get("PhoneIcon")) masks[OnlineMobileStatusMask] = FluentMasks.Phone;
    if (SettingValues.get("IdleIcon")) masks[IdleStatusMask] = FluentMasks.Idle;
    if (SettingValues.get("DNDIcon")) masks[DNDStatusMask] = FluentMasks.DND;
    if (SettingValues.get("OfflineIcon")) masks[OfflineStatusMask] = FluentMasks.Offline;
    if (SettingValues.get("StreamingIcon")) masks[StreamingStatusMask] = FluentMasks.Stream;
    return res;
  });
};
