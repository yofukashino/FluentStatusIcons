import { patchAvatar } from "./Avatar";
import { patchMaskLibrary } from "./MaskLibrary";
export { patchDirectMessageStatus } from "./DirectMessageStatus";
export const applyInjections = (): void => {
  patchAvatar();
  patchMaskLibrary();
};
