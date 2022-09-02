import React, { useContext } from "react";
import { IMessage } from "../../interfaces/IMessage";
import { getInitials } from "../../Utils/utils";
import TimeStamp from "./TimeStamp/TimeStamp.component";
import BotContext from "../../BotContext";

interface IMessageItemProps extends IMessage {
    user: string;
}

export default function MessageItem(props: IMessageItemProps) {
    let context = useContext(BotContext);
    let isFromBot = (props.user !== props.sender);
    let messagePosition = (!isFromBot ? 'messageItem--right' : 'messageItem--left');
    let avatar = (!isFromBot ? context.styles.userAvatar : context.styles.botAvatar);
    return (
        <div className={"messageItem " + messagePosition + " clearfix"}>
            {((isFromBot && context.themeConfig.hideBotAvatar) || (!isFromBot && context.themeConfig.hideUserAvatar)) ? null : (avatar ?
                <img src={avatar} alt={props.sender} className={"messageAvatar " + messagePosition} />
                :
                <section className='messageAvatar'>
                    <div>
                        <p>{getInitials(props.sender || 'Test User')}</p>
                    </div>
                </section>
            )}
            <div className={"messageBubble " + messagePosition}>
                <div className="messageValue" dangerouslySetInnerHTML={{ __html: props.message }}></div>
            </div>
            {context.themeConfig.hideMessageTime ? null :
                <TimeStamp value={props.sentTime} messagePosition={messagePosition} />
            }
        </div>
    );
}
