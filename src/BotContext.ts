import React from 'react'
import { IBotConfig } from './config/config';
import { IStyles } from './config/style';
import { IThemeConfig } from './config/ThemeConfig';

export interface IBotContext extends IBotConfig
{
    styles : IStyles;
    themeConfig : IThemeConfig;
}

const BotContext = React.createContext(<IBotContext>({}))

export const BotContextProvider = BotContext.Provider
export const BotContextConsumer = BotContext.Consumer
export default BotContext;