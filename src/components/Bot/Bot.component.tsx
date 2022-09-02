import React, { Component } from "react";
import ChatWrapper from "../ChatWrapper/ChatWrapper.component";
import { IMessage } from "../../interfaces/IMessage";
import { detectURL, generateJsonFromMessage } from "../../Utils/utils";
import { questionnare } from "../../config/Question/Questionnare";
import { IHandlers, IQuestions } from "../../interfaces/IQuestionnare";
import { IBotConfig } from "../../config/config";
import { BotContextProvider, IBotContext } from "../../BotContext";
import { getStylesByTheme, IStyles } from '../../config/style'
import { getConfigByTheme } from '../../config/ThemeConfig'

interface IBotState {
    messages: Array<IMessage>;
    isTyping: Array<boolean>;
    currentBotMessage: IQuestions;
}

interface IBotProps {
    config: IBotConfig;
    customStyles?: IStyles;
    onConversationEnd : Function;
}

export default class Bot extends Component<IBotProps, IBotState> {

    botContext: IBotContext;
    constructor(props: IBotProps) {
        super(props);
        this.state = {
            currentBotMessage: questionnare['start'],
            messages: [{
                id: 1,
                sentTime: new Date(),
                ...questionnare['start'],
                sender: this.props.config.botName,
            }
            ],
            isTyping: [],
        };
        this.botContext = {
            ...this.props.config,
            styles: { ...getStylesByTheme(this.props.config.Theme), ...(this.props.customStyles || {}) },
            themeConfig: getConfigByTheme(this.props.config.Theme),
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.typing = this.typing.bind(this);
        this.resetTyping = this.resetTyping.bind(this);
        this.restartConversation = this.restartConversation.bind(this);
    }

    sendMessage(sender: string, message: string) {
        setTimeout(() => {
            let messageFormat = detectURL(message);
            let newMessageItem = {
                id: this.state.messages.length + 1,
                sender: sender,
                sentTime: new Date(),
                message: messageFormat,
                questionKey: this.state.currentBotMessage.questionKey,
            };
            this.typing('bot')
            this.setState((state) => { return { messages: [...state.messages, newMessageItem] } });
            setTimeout(() => {
                this.setState((state) => {
                    let val = this.generateNextQuestion(state.currentBotMessage.handlers, message);

                    let nextQuestion = questionnare[val];
                    let botResponse = {
                        ...nextQuestion,
                        sender: this.props.config.botName,
                        sentTime: new Date(),
                        id: state.messages.length + 1
                    };
                    let updatedMessage = state.messages
                    if (botResponse && botResponse.message)
                        updatedMessage = [...updatedMessage, botResponse]
                    if (nextQuestion.handlers.length === 0)
                        this.props.onConversationEnd(generateJsonFromMessage(this.state.messages));
                    return { messages: updatedMessage, currentBotMessage: nextQuestion, isTyping: this.resetTyping('bot') };
                })
            }, 400)
        }, 400);
    }

    restartConversation() {
        this.setState({
            currentBotMessage: questionnare['start'],
            messages: [{
                id: 1,
                ...questionnare['start']
            }
            ],
            isTyping: [],
        })
    }

    generateNextQuestion(handlers: Array<IHandlers>, userMessage: string) {
        let result = null;
        if (handlers.length > 1) {
            result = handlers.find(j => {
                if (j.validators instanceof RegExp) {
                    return userMessage.match(j.validators)
                }
                else if (j.validators instanceof Function) {
                    return j.validators(userMessage)
                }
                return null;
            });
        }
        else {
            result = handlers[0];
        }

        return (result?.nextQuestion as keyof typeof questionnare);
    }

    typing(writer: any) {
        if (!this.state.isTyping[writer]) {
            let stateTyping = this.state.isTyping;
            stateTyping[writer] = true;
            this.setState({ isTyping: stateTyping });
        }
    }

    resetTypeAndUpdateState(writer: any) {
        this.setState({ isTyping: this.resetTyping(writer) });
    }

    resetTyping(writer: any) {
        let stateTyping = this.state.isTyping;
        stateTyping[writer] = false;
        return stateTyping;
    }

    render() {
        let { userName } = this.props.config;
        let { messages, isTyping } = this.state;
        return (
            <BotContextProvider value={this.botContext}>
                <ChatWrapper
                    user={userName}
                    sendMessage={this.sendMessage}
                    messages={messages}
                    isTyping={isTyping}
                    disableInput={!this.state.currentBotMessage || this.state.currentBotMessage.handlers.length === 0}
                    restartConversation={this.restartConversation}
                />
            </BotContextProvider>
        );
    }
} 