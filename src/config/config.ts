import { questionnare } from './Question/Questionnare'
export enum Themes {
    Default = 0,
    GoogleAssitant = 1,
    Facebook = 2,
    WhatsApp = 3,
    Snowy = 4,
    GradientGreen = 5,
}

export interface IBotConfig {
    botName: string;    
    userName: string;
    useRelativeTime: boolean;
    questions: any;
    Theme : Themes;
}
const botConfig: IBotConfig = {
    botName: "Test Bot",
    userName: 'Guest User',
    useRelativeTime: true,
    questions: questionnare, 
    Theme : Themes.WhatsApp,
}

export default botConfig;