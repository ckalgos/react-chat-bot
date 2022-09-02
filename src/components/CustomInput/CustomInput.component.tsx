import React, { useContext } from "react";
import BotContext from "../../BotContext";
import { InputStyles } from "./CustomInputStyles";

interface ICustomInputProps {
    user: string;
    isLoading: boolean;
    disableInput: boolean;
    sendMessageLoading: Function;
    sendMessage: Function;
    restartConversation: Function;
}

export default function CustomInput(inputProps: ICustomInputProps) {
    let userInput: HTMLInputElement;
    let messageInput: HTMLInputElement;
    const context = useContext(BotContext)
    const handleSendMessage = (event: React.FormEvent | React.MouseEvent) => {
        event.preventDefault();
        if (messageInput.value.length > 0) {
            inputProps.sendMessageLoading(userInput.value, messageInput.value);
            messageInput.value = '';
        }
        else if (inputProps.disableInput) {
            inputProps.restartConversation();
        }
    }
    var loadingClass = inputProps.isLoading ? 'button--loading' : '';
    let sendButtonIcon = <i className={"material-icons"}>{inputProps.disableInput ? 'replay' : 'send'}</i>;
    return (
        <form onSubmit={(event: React.FormEvent) => handleSendMessage(event)} style={{ textAlign: 'center' }}>
            <InputStyles {...context.styles} />
            <input
                type="hidden"
                ref={(user: HTMLInputElement) => (userInput = user)}
                value={inputProps.user}
            />
            <input
                disabled={inputProps.disableInput}
                type="text"
                ref={(message: HTMLInputElement) => (messageInput = message)}
                className={"convInput"}
                placeholder={context.themeConfig.inputTextPlaceHolder}
            />
            {(context.themeConfig.hideSendButton && !inputProps.disableInput) ? null :
                <div className={'button ' + loadingClass} onClick={(event: React.MouseEvent) => handleSendMessage(event)}>
                    {sendButtonIcon}
                </div>
            }
        </form>
    );
}
