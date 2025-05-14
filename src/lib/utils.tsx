import { util } from "replugged";
import { PluginInjector, PluginLogger } from "../index";

export const replaceMask = ({
  predicate,
  id,
  element,
  masks,
}: {
  predicate: boolean;
  id: string;
  element: React.ReactElement;
  masks: React.ReactElement[];
}) => {
  if (!predicate) return;
  const index = masks.findIndex((mask: React.ReactElement) => mask.props.id === id);
  masks[index] = element;
};

export const refreshMaskLibrary = (): void => {
  try {
    const element = document.querySelector("#app-mount #svg-mask-squircle");
    if (!element) {
      PluginLogger.error("Missing “MaskManager” element, Please report this to the developer.");
      return;
    }
    const ownerInstance = util.getOwnerInstance(element);
    const unpatchRender = PluginInjector.instead(ownerInstance, "render", () => {
      unpatchRender();
      return null;
    });
    ownerInstance.forceUpdate(ownerInstance.forceUpdate);
  } catch (error) {
    PluginLogger.error(error);
  }
};

export default { replaceMask, refreshMaskLibrary };
