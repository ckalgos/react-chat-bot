import React, { Component } from "react";
import Title from "../Title/Title.component";
import MessageList from "../MessageList/MessageList.component";
import TypingIndicator from "../TypingIndicator/TypingIndicator.component";
import CustomInput from "../CustomInput/CustomInput.component";
import { ChatWrapperStyles } from './ChatWrapperStyles';
import { IMessage } from "../../interfaces/IMessage";
import BotContext from "../../BotContext";

interface IChatWrapperProps {
    user: string;
    messages: Array<IMessage>;
    isTyping: Array<boolean>;
    disableInput: boolean;
    sendMessage: Function;
    restartConversation: Function;
}

interface IChatWrapperState {
    isLoading: boolean;
}

export default class ChatWrapper extends Component<IChatWrapperProps, IChatWrapperState> {
    static contextType = BotContext; 
    constructor(props: IChatWrapperProps) {
        super(props);
        this.state = {
            isLoading: false
        };
        this.sendMessageLoading = this.sendMessageLoading.bind(this);
    }
    sendMessageLoading(sender: string, message: string) {
        this.setState({ isLoading: true });
        this.props.sendMessage(sender, message);
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 400);
    }
    render() {
        return (
            <>
                <ChatWrapperStyles {...this.context.styles} />
                <div className={"conversation"}>
                    <Title
                        user={this.props.user}
                    />
                    <MessageList
                        user={this.props.user}
                        messages={this.props.messages}
                    />
                    <div className={"sendMessage clearfix"}>
                        <TypingIndicator
                            user={this.props.user}
                            isTyping={this.props.isTyping}
                        />
                        <CustomInput
                            isLoading={this.state.isLoading}
                            user={this.props.user}
                            sendMessage={this.props.sendMessage}
                            sendMessageLoading={this.sendMessageLoading}
                            disableInput={this.props.disableInput}
                            restartConversation={this.props.restartConversation}
                        />
                    </div>
                </div>
            </>
        );
    }
}