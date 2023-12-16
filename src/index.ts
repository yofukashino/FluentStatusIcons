import { Injector, Logger, settings } from "replugged";

import { defaultSettings } from "./lib/consts";

export const PluginLogger = Logger.plugin("FluentStatusIcons");

export const SettingValues = await settings.init("dev.tharki.FluentStatusIcons", defaultSettings);

export const PluginInjector = new Injector();

import { registerSettings } from "./Components/Settings";

import { applyInjections } from "./patches/index";

import Utils from "./lib/utils";

export const start = (): void => {
  registerSettings();
  applyInjections();
  Utils.refreshMaskLibrary();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  Utils.refreshMaskLibrary();
};

export { Settings } from "./Components/Settings";
