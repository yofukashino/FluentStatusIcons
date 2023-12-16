import { webpack } from "replugged";
import Types from "../types";

export const Avatar = webpack.getBySource<Types.Avatar>("getMaskId()");
export const MaskManager = webpack.getByProps<Types.MaskLibrary>("MaskLibrary");
