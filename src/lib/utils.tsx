import { ReactDOM } from "replugged/common";
import { PluginLogger } from "../index";
import { MaskManager } from "./requiredModules";

export const refreshMaskLibrary = (): void => {
  try {
    if (MaskManager) {
      PluginLogger.error("Missing “MaskLibrary” module, Please report this to the developer.");
      return;
    }
    const { MaskLibrary } = MaskManager;
    const TempMaskContainer = document.createElement("div");
    TempMaskContainer.style.display = "none";
    document.body.appendChild(TempMaskContainer);

    ReactDOM.render(<MaskLibrary />, TempMaskContainer);

    const MaskLibraryElement = document.querySelector("#app-mount #svg-mask-squircle")
      ?.parentNode as HTMLElement;
    if (MaskLibraryElement) {
      MaskLibraryElement.innerHTML = TempMaskContainer.firstElementChild.innerHTML;
      TempMaskContainer.remove();
    }
  } catch (error) {
    PluginLogger.error(error);
  }
};
