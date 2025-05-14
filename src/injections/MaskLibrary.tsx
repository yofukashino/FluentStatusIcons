import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import FluentMasks from "../Components/FluentMasks";

export default (): void => {
  const replacements = [
    {
      predicate: SettingValues.get("OnlineIcon", defaultSettings.OnlineIcon),
      id: Modules.MaskManager.MaskIDs.STATUS_ONLINE,
      element: <FluentMasks.online id={Modules.MaskManager.MaskIDs.STATUS_ONLINE} />,
    },
    {
      predicate: SettingValues.get("PhoneIcon", defaultSettings.PhoneIcon),
      id: Modules.MaskManager.MaskIDs.STATUS_ONLINE_MOBILE,
      element: <FluentMasks.phone id={Modules.MaskManager.MaskIDs.STATUS_ONLINE_MOBILE} />,
    },
    {
      predicate: SettingValues.get("IdleIcon", defaultSettings.IdleIcon),
      id: Modules.MaskManager.MaskIDs.STATUS_IDLE,
      element: <FluentMasks.idle id={Modules.MaskManager.MaskIDs.STATUS_IDLE} />,
    },
    {
      predicate: SettingValues.get("DNDIcon", defaultSettings.DNDIcon),
      id: Modules.MaskManager.MaskIDs.STATUS_DND,
      element: <FluentMasks.dnd id={Modules.MaskManager.MaskIDs.STATUS_DND} />,
    },
    {
      predicate: SettingValues.get("OfflineIcon", defaultSettings.OfflineIcon),
      id: Modules.MaskManager.MaskIDs.STATUS_OFFLINE,
      element: <FluentMasks.offline id={Modules.MaskManager.MaskIDs.STATUS_OFFLINE} />,
    },
    {
      predicate: SettingValues.get("StreamingIcon", defaultSettings.StreamingIcon),
      id: Modules.MaskManager.MaskIDs.STATUS_STREAMING,
      element: <FluentMasks.stream id={Modules.MaskManager.MaskIDs.STATUS_STREAMING} />,
    },
    {
      predicate: SettingValues.get("TypingIcon", defaultSettings.TypingIcon),
      id: Modules.MaskManager.MaskIDs.STATUS_TYPING,
      element: <FluentMasks.typing id={Modules.MaskManager.MaskIDs.STATUS_TYPING} />,
    },
  ];

  PluginInjector.after(
    Modules.MaskManager.MaskLibrary,
    "type",
    (_args, res: React.ReactElement) => {
      for (const replacement of replacements)
        Utils.replaceMask({ ...replacement, masks: res.props.children });
      return res;
    },
  );
};
