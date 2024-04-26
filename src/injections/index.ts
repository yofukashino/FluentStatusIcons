import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import injectAvatar from "./Avatar";
import injectMaskLibrary from "./MaskLibrary";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectAvatar();
  injectMaskLibrary();
  Utils.refreshMaskLibrary();
};

export const removeInjections = (): void => {
  PluginInjector.uninjectAll();
  Utils.refreshMaskLibrary();
};

export default { applyInjections, removeInjections };
