import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
export default (): void => {
  const {
    Avatar: { AnimatedAvatar, Avatar },
  } = Modules;
  // thanks powercord for this code  => https://github.com/powercord-org/powercord/blob/v2/src/Powercord/coremods/utility-classes/modules/avatars.js
  PluginInjector.instead(AnimatedAvatar, "type", (args) => (
    <Avatar {...Object.assign({}, ...args)} />
  ));
};
