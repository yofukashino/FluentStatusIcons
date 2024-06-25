import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.AvatarModule ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("getMaskId()"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find Avatar Module");
    });

  Modules.Avatar ??= {
    Avatar: webpack.getFunctionBySource(Modules.AvatarModule, ".AVATAR_DEFAULT;"),
    AnimatedAvatar: webpack.getExportsForProps(Modules.AvatarModule, ["compare", "type"]),
    getStatusCoords: webpack.getFunctionBySource(Modules.AvatarModule, ".offset;"),
  };

  Modules.MaskManagerModule ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource(".AVATAR_DEFAULT="), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find MaskManager Module");
    });

  Modules.MaskManager ??= {
    default: webpack.getFunctionBySource(Modules.MaskManagerModule, "svg"),
    MaskLibrary: webpack.getExportsForProps(Modules.MaskManagerModule, ["compare", "type"]),
    MaskIDs: webpack.getExportsForProps(Modules.MaskManagerModule, [
      "STATUS_DND",
      "STATUS_IDLE",
      "STATUS_OFFLINE",
      "STATUS_ONLINE",
    ]),
  };
};

export default Modules;
