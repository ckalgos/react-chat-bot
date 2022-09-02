import React from "react";
interface ITypingProps {
    user: string;
    isTyping: Array<boolean>
}

export default function TypingIndicator(typingProps: ITypingProps) {
    let typersDisplay = '';
    let countTypers = 0;
    for (var key in typingProps.isTyping) {
        if (key !== typingProps.user && typingProps.isTyping[key]) {
            typersDisplay += ', ' + key;
            countTypers++;
        }
    }
    typersDisplay = typersDisplay.substr(1);
    typersDisplay += ((countTypers > 1) ? ' are ' : ' is ');
    if (countTypers > 0) {
        return (
            <div className={"typing"}>{typersDisplay} writing
				<span className={"typingDot"}></span>
            </div>
        );
    }
    return (
        <div className={"typing"}></div>
    );
}
