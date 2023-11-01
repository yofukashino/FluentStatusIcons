export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { ReactElement, ElementType } from "react";
import { ComponentClass } from "react";
export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}
export interface Avatar {
  Avatar: ComponentClass;
  AnimatedAvatar: {
    $$typeof: symbol;
    compare: null | DefaultTypes.AnyFunction;
    type: DefaultTypes.AnyFunction;
  };
}

export interface MaskLibrary {
  default: ComponentClass;
  MaskLibrary: {
    $$typeof: symbol;
    compare: null | DefaultTypes.AnyFunction;
    type: DefaultTypes.AnyFunction;
  } & ComponentClass;
  MaskIDs: {
    AUTOCOMPLETE_EMOJI_UPSELL_EMOJI: string;
    AVATAR_CALL_ICON: string;
    AVATAR_CALL_ICON_32: string;
    AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80: string;
    AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80: string;
    AVATAR_DECORATION_STATUS_MOBILE_16: string;
    AVATAR_DECORATION_STATUS_MOBILE_20: string;
    AVATAR_DECORATION_STATUS_MOBILE_24: string;
    AVATAR_DECORATION_STATUS_MOBILE_32: string;
    AVATAR_DECORATION_STATUS_MOBILE_40: string;
    AVATAR_DECORATION_STATUS_MOBILE_56: string;
    AVATAR_DECORATION_STATUS_MOBILE_80: string;
    AVATAR_DECORATION_STATUS_MOBILE_100: string;
    AVATAR_DECORATION_STATUS_MOBILE_120: string;
    AVATAR_DECORATION_STATUS_ROUND_16: string;
    AVATAR_DECORATION_STATUS_ROUND_20: string;
    AVATAR_DECORATION_STATUS_ROUND_24: string;
    AVATAR_DECORATION_STATUS_ROUND_32: string;
    AVATAR_DECORATION_STATUS_ROUND_40: string;
    AVATAR_DECORATION_STATUS_ROUND_56: string;
    AVATAR_DECORATION_STATUS_ROUND_80: string;
    AVATAR_DECORATION_STATUS_ROUND_120: string;
    AVATAR_DECORATION_STATUS_TYPING_16: string;
    AVATAR_DECORATION_STATUS_TYPING_20: string;
    AVATAR_DECORATION_STATUS_TYPING_24: string;
    AVATAR_DECORATION_STATUS_TYPING_32: string;
    AVATAR_DECORATION_STATUS_TYPING_40: string;
    AVATAR_DECORATION_STATUS_TYPING_56: string;
    AVATAR_DECORATION_STATUS_TYPING_80: string;
    AVATAR_DECORATION_STATUS_TYPING_100: string;
    AVATAR_DECORATION_STATUS_TYPING_120: string;
    AVATAR_DEFAULT: string;
    AVATAR_STATUS_MOBILE_16: string;
    AVATAR_STATUS_MOBILE_20: string;
    AVATAR_STATUS_MOBILE_24: string;
    AVATAR_STATUS_MOBILE_32: string;
    AVATAR_STATUS_MOBILE_40: string;
    AVATAR_STATUS_MOBILE_56: string;
    AVATAR_STATUS_MOBILE_80: string;
    AVATAR_STATUS_MOBILE_100: string;
    AVATAR_STATUS_MOBILE_120: string;
    AVATAR_STATUS_ROUND_16: string;
    AVATAR_STATUS_ROUND_20: string;
    AVATAR_STATUS_ROUND_24: string;
    AVATAR_STATUS_ROUND_32: string;
    AVATAR_STATUS_ROUND_40: string;
    AVATAR_STATUS_ROUND_56: string;
    AVATAR_STATUS_ROUND_80: string;
    AVATAR_STATUS_ROUND_100: string;
    AVATAR_STATUS_ROUND_120: string;
    AVATAR_STATUS_TYPING_16: string;
    AVATAR_STATUS_TYPING_20: string;
    AVATAR_STATUS_TYPING_24: string;
    AVATAR_STATUS_TYPING_32: string;
    AVATAR_STATUS_TYPING_40: string;
    AVATAR_STATUS_TYPING_56: string;
    AVATAR_STATUS_TYPING_80: string;
    AVATAR_STATUS_TYPING_100: string;
    AVATAR_STATUS_TYPING_120: string;
    AVATAR_VOICE_CALL_80: string;
    CHANNEL_CALL_CONTROL_BUTTON: string;
    CHANNEL_CALL_CONTROL_BUTTON_BADGE_16: string;
    CHANNEL_CALL_CONTROL_BUTTON_BADGE_22: string;
    CHANNEL_CALL_CONTROL_BUTTON_BADGE_29: string;
    CHAT_INPUT_BUTTON_NOTIFICATION: string;
    EVENT_TICKET: string;
    HEADER_BAR_BADGE: string;
    PANEL_BUTTON: string;
    SQUIRCLE: string;
    STATUS_DND: string;
    STATUS_IDLE: string;
    STATUS_OFFLINE: string;
    STATUS_ONLINE: string;
    STATUS_ONLINE_MOBILE: string;
    STATUS_SCREENSHARE: string;
    STATUS_STREAMING: string;
    STATUS_TYPING: string;
    STICKER_ROUNDED_RECT: string;
    STICKER_SHOP_NOTIFICATION: string;
    VERTICAL_FADE: string;
    VOICE_USER_SUMMARY_ITEM: string;
  };
}
export interface DirectMessageStatusArgs {
  isMobile: boolean;
  size: number;
  status: string;
}
export interface Settings {
  PhoneIcon: boolean;
  OnlineIcon: boolean;
  StreamingIcon: boolean;
  DNDIcon: boolean;
  IdleIcon: boolean;
  OfflineIcon: boolean;
}
