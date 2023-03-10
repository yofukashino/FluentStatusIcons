import { components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import * as Types from "../types";
const { SwitchItem } = components;
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = () => {
  return (
    <div>
      <SwitchItem
        {...{
          note: "Fluent Phone Icon",
          ...util.useSetting(SettingValues, "PhoneIcon", defaultSettings.PhoneIcon),
        }}>
        Phone Icon
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Fluent Online Icon",
          ...util.useSetting(SettingValues, "OnlineIcon", defaultSettings.OnlineIcon),
        }}>
        Online Icon
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Fluent Idle Icon",
          ...util.useSetting(SettingValues, "IdleIcon", defaultSettings.IdleIcon),
        }}>
        Idle Icon
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Fluent Do Not Disturb Icon",
          ...util.useSetting(SettingValues, "DNDIcon", defaultSettings.DNDIcon),
        }}>
        DND Icon
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Fluent Offline Icon",
          ...util.useSetting(SettingValues, "OfflineIcon", defaultSettings.OfflineIcon),
        }}>
        Offline Icon
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Fluent Streaming Icon",
          ...util.useSetting(SettingValues, "StreamingIcon", defaultSettings.StreamingIcon),
        }}>
        Streaming Icon
      </SwitchItem>
    </div>
  );
};
