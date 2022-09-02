import React, { useContext } from "react";
import { TitleStyles } from './Title';
import BotContext from "../../BotContext";

interface ITitleProps {
    user: string;
}

export default function Title(titleProps: ITitleProps) {
    let context = useContext(BotContext);
    return (
        <>
            <TitleStyles {...context.styles} />
            <div className={"title"}>{context.botName}</div>
        </>
    );
} 