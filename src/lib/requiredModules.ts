import { webpack } from "replugged";
import * as Types from "../types";

export const AvatarModule = webpack.getBySource<Types.GenericModule>(
  /statusColor.*fromStatus.*fromIsMobile.*statusColor/,
);
export const Avatar = {
  default: webpack.getFunctionBySource(
    AvatarModule,
    /\.typingIndicatorRef.*\.isSpeaking.*\.statusTooltip.*\.statusBackdropColor/,
  ),
  AnimatedAvatar: webpack.getExportsForProps(AvatarModule, ["$$typeof", "compare", "type"]),
} as Types.Avatar;
export const MaskLibraryModule = webpack.getBySource<Types.GenericModule>("svg-mask-squircle");
export const MaskLibrary = {
  default: webpack.getFunctionBySource(MaskLibraryModule, /\.mask.*\.width.*\.height/),
  MaskType: webpack.getExportsForProps(MaskLibraryModule, ["$$typeof", "compare", "type"]),
  MaskClasses: webpack.getExportsForProps(MaskLibraryModule, [
    "STATUS_DND",
    "STATUS_IDLE",
    "STATUS_OFFLINE",
    "STATUS_ONLINE",
  ]),
} as Types.MaskLibrary;
