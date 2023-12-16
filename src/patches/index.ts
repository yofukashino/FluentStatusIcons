import { patchAvatar } from "./Avatar";
import { patchMaskLibrary } from "./MaskLibrary";
export const applyInjections = (): void => {
  patchAvatar();
  patchMaskLibrary();
};

export default { applyInjections };
