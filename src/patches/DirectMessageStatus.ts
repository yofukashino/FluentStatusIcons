import { common } from "replugged";
import { SettingValues } from "../index";
import * as FluentMasks from "../Components/FluentMasks";
import * as Types from "../types";
const { React } = common;
export const patchDirectMessageStatus = (
  args: Types.DirectMessageStatusArgs,
  res: Types.ReactElement[],
): Types.ReactElement[] => {
  switch (args.status) {
    case "online": {
      if (
        (!SettingValues.get("OnlineIcon") && !args.isMobile) ||
        (!SettingValues.get("PhoneIcon") && args.isMobile)
      )
        break;
      const clonedMask = args.isMobile
        ? React.cloneElement(FluentMasks.Phone)
        : React.cloneElement(FluentMasks.Online);
      clonedMask.props.id = res[0]?.props?.id;
      res[0] = clonedMask;
      res[1].props.height = args?.isMobile ? 15 : 10;
      res[1].props.y = args?.isMobile ? 0 : 4;
      break;
    }
    case "idle": {
      if (!SettingValues.get("IdleIcon")) break;
      const clonedMask = React.cloneElement(FluentMasks.Idle);
      clonedMask.props.id = res[0]?.props?.id;
      res[0] = clonedMask;
      res[1].props.height = 10;
      res[1].props.y = 4;
      break;
    }
    case "dnd": {
      if (!SettingValues.get("DNDIcon")) break;
      const clonedMask = React.cloneElement(FluentMasks.DND);
      clonedMask.props.id = res[0]?.props?.id;
      res[0] = clonedMask;
      res[1].props.height = 10;
      res[1].props.y = 4;
      break;
    }
    case "offline": {
      if (!SettingValues.get("OfflineIcon")) break;
      const clonedMask = React.cloneElement(FluentMasks.Offline);
      clonedMask.props.id = res[0].props.id;
      res[0] = clonedMask;
      res[1].props.height = 10;
      res[1].props.y = 4;
      break;
    }
    case "streaming": {
      if (!SettingValues.get("StreamingIcon")) break;
      const clonedMask = React.cloneElement(FluentMasks.Stream);
      clonedMask.props.id = res[0].props.id;
      res[0] = clonedMask;
      res[1].props.height = 10;
      res[1].props.y = 4;
      break;
    }
  }
  return res;
};
