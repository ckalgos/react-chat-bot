import { Themes } from "./config"

export interface IStyles {
    sendButtonColor?: string;
    userAvatar?: string;
    userAvatarColor?: string;
    userAvatarTextColor?: string;
    botAvatar?: string;
    botAvatarColor?: string;
    botAvatarTextColor?: string;
    bubbleRadius?: string;
    botMessageBubbleColor?: string;
    botMessageTextColor?: string;
    userMessageBubbleColor?: string;
    userMessageTextColor?: string;
    primaryColor?: string;
    inputBoxBorderRadius?: string;
    chatBackGround?: string;
    primaryLabelColor?: string;
}

const defaultStyles: IStyles = {
    primaryColor: "#4870df",
    sendButtonColor: "#4870df",
    userAvatar: '',
    userAvatarColor: '#4870df',
    userAvatarTextColor: '#fff',
    botAvatar: "https://i.ibb.co/NxZqGVN/bot-avatar.png",
    botAvatarColor: '#e6e5eb',
    botAvatarTextColor: '#000',
    bubbleRadius: "0",
    botMessageBubbleColor: '#4870df',
    botMessageTextColor: '#fff',
    userMessageBubbleColor: '#e6e5eb',
    userMessageTextColor: '#000',
    inputBoxBorderRadius: '40px',
    primaryLabelColor: '#000',
}

const googleAssitantStyles: IStyles = {
    ...defaultStyles,
    botAvatar: "https://i.ibb.co/3s3fMNY/google-bot-avatar.png",
    botAvatarColor: '#fff',
    bubbleRadius: "1.5em",
    botMessageBubbleColor: '#fff',
    inputBoxBorderRadius: '0',
    botMessageTextColor: '#000',
}

const faceBookStyles: IStyles = {
    ...defaultStyles,
    userMessageBubbleColor: 'rgb(0, 132, 255)',
    botMessageBubbleColor: '#e9ebee',
    botAvatarColor: '#fff',
    bubbleRadius: "1.5em",
    botMessageTextColor: '#000',
    userMessageTextColor: '#fff',
    inputBoxBorderRadius: '0',
}


const whatsAppStyles: IStyles = {
    ...defaultStyles,
    userMessageBubbleColor: '#DCF8C6',
    botMessageBubbleColor: '#ebebeb',
    botAvatarColor: '#000',
    bubbleRadius: "5px",
    botMessageTextColor: '#000',
    userMessageTextColor: '#000',
    inputBoxBorderRadius: '0',
    chatBackGround: 'https://i.ibb.co/kyy620T/whatsapp-bg.png'
}


const gradientGreenStyles: IStyles = {
    ...defaultStyles,
    userMessageBubbleColor: 'rgba(25, 147, 147, 0.2)',
    botMessageBubbleColor: 'rgba(25, 147, 147, 0.2)',
    botAvatarColor: '#000',
    bubbleRadius: "15px",
    botMessageTextColor: '#0EC879',
    userMessageTextColor: '#0AD5C1',
    chatBackGround: '-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%',
    primaryLabelColor: '#fff',
}

export const getStylesByTheme = (theme: Themes): IStyles => {

    switch (theme) {
        case Themes.GoogleAssitant:
            return googleAssitantStyles;
        case Themes.Facebook:
            return faceBookStyles;
        case Themes.WhatsApp:
            return whatsAppStyles;
        case Themes.GradientGreen:
            return gradientGreenStyles;
        default:
            return defaultStyles;
    }
}