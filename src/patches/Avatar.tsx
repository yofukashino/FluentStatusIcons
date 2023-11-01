import { PluginInjector } from "../index";
import { Avatar } from "../lib/requiredModules";
export const patchAvatar = (): void => {
  // thanks powercord for this code  => https://github.com/powercord-org/powercord/blob/v2/src/Powercord/coremods/utility-classes/modules/avatars.js
  PluginInjector.instead(Avatar.AnimatedAvatar, "type", (args) => (
    <Avatar.Avatar {...Object.assign({}, ...args)} />
  ));
};
