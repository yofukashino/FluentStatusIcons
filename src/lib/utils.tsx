import { common } from "replugged";
import { PluginLogger } from "../index";
import { MaskLibrary } from "./requiredModules";
import * as Types from "../types";

const { ReactDOM } = common;

export const refreshMaskLibrary = (): void => {
  try {
    if (!MaskLibrary) {
      PluginLogger.error("Missing “MaskLibrary” module, Please report this to the developer.");
      return;
    }
    const { MaskType } = MaskLibrary as unknown as { MaskType: Types.ElementType };
    const TempMaskContainer = document.createElement("div");
    TempMaskContainer.style.display = "none";
    document.body.appendChild(TempMaskContainer);

    ReactDOM.render(<MaskType />, TempMaskContainer);

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
