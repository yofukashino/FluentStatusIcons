import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {}

Modules.loadModules = async (): Promise<void> =>{
  Modules.Avatar ??= await webpack.waitForModule<Types.Avatar>(webpack.filters.bySource("getMaskId()"));
  Modules.MaskManager ??= await webpack.waitForProps<Types.MaskLibrary>("MaskLibrary");
  
}

export default Modules;

