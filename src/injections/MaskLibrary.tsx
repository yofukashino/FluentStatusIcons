import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import FluentMasks from "../Components/FluentMasks";

export default (): void => {
  PluginInjector.after(
    Modules.MaskManager.MaskLibrary,
    "type",
    (_args, res: React.ReactElement) => {
      const masks = res.props.children;
      if (SettingValues.get("OnlineIcon", defaultSettings.OnlineIcon)) {
        const OnlineStatusMask = masks.findIndex(
          (mask: React.ReactElement) => mask.props.id === Modules.MaskManager.MaskIDs.STATUS_ONLINE,
        );
        masks[OnlineStatusMask] = (
          <FluentMasks.online id={Modules.MaskManager.MaskIDs.STATUS_ONLINE} />
        );
      }
      if (SettingValues.get("PhoneIcon", defaultSettings.PhoneIcon)) {
        const OnlineMobileStatusMask = masks.findIndex(
          (mask: React.ReactElement) =>
            mask.props.id === Modules.MaskManager.MaskIDs.STATUS_ONLINE_MOBILE,
        );
        masks[OnlineMobileStatusMask] = (
          <FluentMasks.phone id={Modules.MaskManager.MaskIDs.STATUS_ONLINE_MOBILE} />
        );
      }
      if (SettingValues.get("IdleIcon", defaultSettings.IdleIcon)) {
        const IdleStatusMask = masks.findIndex(
          (mask: React.ReactElement) => mask.props.id === Modules.MaskManager.MaskIDs.STATUS_IDLE,
        );
        masks[IdleStatusMask] = <FluentMasks.idle id={Modules.MaskManager.MaskIDs.STATUS_IDLE} />;
      }
      if (SettingValues.get("DNDIcon", defaultSettings.DNDIcon)) {
        const DNDStatusMask = masks.findIndex(
          (mask: React.ReactElement) => mask.props.id === Modules.MaskManager.MaskIDs.STATUS_DND,
        );
        masks[DNDStatusMask] = <FluentMasks.dnd id={Modules.MaskManager.MaskIDs.STATUS_DND} />;
      }
      if (SettingValues.get("OfflineIcon", defaultSettings.OfflineIcon)) {
        const OfflineStatusMask = masks.findIndex(
          (mask: React.ReactElement) =>
            mask.props.id === Modules.MaskManager.MaskIDs.STATUS_OFFLINE,
        );
        masks[OfflineStatusMask] = (
          <FluentMasks.offline id={Modules.MaskManager.MaskIDs.STATUS_OFFLINE} />
        );
      }
      if (SettingValues.get("StreamingIcon", defaultSettings.StreamingIcon)) {
        const StreamingStatusMask = masks.findIndex(
          (mask: React.ReactElement) =>
            mask.props.id === Modules.MaskManager.MaskIDs.STATUS_STREAMING,
        );
        masks[StreamingStatusMask] = (
          <FluentMasks.stream id={Modules.MaskManager.MaskIDs.STATUS_STREAMING} />
        );
      }
      if (SettingValues.get("TypingIcon", defaultSettings.TypingIcon)) {
        const StreamingStatusMask = masks.findIndex(
          (mask: React.ReactElement) => mask.props.id === Modules.MaskManager.MaskIDs.STATUS_TYPING,
        );
        masks[StreamingStatusMask] = (
          <FluentMasks.typing id={Modules.MaskManager.MaskIDs.STATUS_TYPING} />
        );
      }
      return res;
    },
  );
};
