import { Themes } from "./config";

export interface IThemeConfig {
    hideUserAvatar: boolean;
    hideBotAvatar: boolean;
    hideMessageTime: boolean;
    hideSendButton: boolean;
    inputTextPlaceHolder: string;
}

const defaultConfig: IThemeConfig = {
    hideUserAvatar: false,
    hideBotAvatar: false,
    hideMessageTime: false,
    hideSendButton: false,
    inputTextPlaceHolder: 'Enter your Message..',
}

const googleAssitantConfig: IThemeConfig = {
    ...defaultConfig,
    hideUserAvatar: true,
    hideMessageTime: true,
    hideSendButton: true,
    inputTextPlaceHolder: 'Type a Message',
}

const faceBookConfig: IThemeConfig = {
    ...defaultConfig,
    hideUserAvatar: true,
    hideMessageTime: true,
    hideSendButton: true,
    inputTextPlaceHolder: 'Type a Message...',
}

const whatsAppConfig: IThemeConfig = {
    ...defaultConfig,
    hideUserAvatar: true, 
    hideSendButton: true,
    inputTextPlaceHolder: 'Type a Message...',
}

export const getConfigByTheme = (theme: Themes): IThemeConfig => {

    switch (theme) {
        case Themes.GoogleAssitant:
            return googleAssitantConfig;
        case Themes.Facebook:
            return faceBookConfig;
        case Themes.WhatsApp:
            return whatsAppConfig;
        default:
            return defaultConfig;
    }
}