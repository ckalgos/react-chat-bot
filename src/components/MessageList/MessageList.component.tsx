import React, { useContext } from "react";
import MessageItem from "./MessageItem.component";
import { MessageStyles } from './MessageStyles';
import { IMessage } from "../../interfaces/IMessage";
import BotContext from "../../BotContext";

interface IMessageListProps {
    user: string;
    messages: Array<IMessage>; 
}

export default function MessageList(props: IMessageListProps) {
    let context = useContext(BotContext);
    return (
        <>
            <MessageStyles {...context.styles} />
            <div className={"timeLine"}>
                {props.messages.slice(0).reverse().map(
                    (messageItem: IMessage) => (
                        <MessageItem
                            key={messageItem.id}
                            id={messageItem.id}
                            user={props.user}
                            sender={messageItem.sender}
                            message={messageItem.message}
                            sentTime={messageItem.sentTime}
                        />
                    )
                )}
            </div>
        </>
    );
}
