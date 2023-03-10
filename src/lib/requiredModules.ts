import { webpack } from "replugged";
import * as Types from "../types";

export const AvatarModule = webpack.getBySource(
  /statusColor.*fromStatus.*fromIsMobile.*statusColor/,
) as unknown as Types.GenericModule;
export const Avatar = {
  default: webpack.getFunctionBySource(
    AvatarModule,
    /\.typingIndicatorRef.*\.isSpeaking.*\.statusTooltip.*\.statusBackdropColor/,
  ),
  AnimatedAvatar: webpack.getExportsForProps(AvatarModule, ["$$typeof", "compare", "type"]),
} as unknown as Types.Avatar;
export const MaskLibraryModule = webpack.getBySource(
  "svg-mask-squircle",
) as unknown as Types.GenericModule;
export const MaskLibrary = {
  default: webpack.getFunctionBySource(MaskLibraryModule, /\.mask.*\.width.*\.height/),
  MaskType: webpack.getExportsForProps(MaskLibraryModule, ["$$typeof", "compare", "type"]),
  MaskClasses: webpack.getExportsForProps(MaskLibraryModule, [
    "STATUS_DND",
    "STATUS_IDLE",
    "STATUS_OFFLINE",
    "STATUS_ONLINE",
  ]),
} as unknown as Types.MaskLibrary;
