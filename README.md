**_Build your own chatbot with minimal changes_**

**Comes with 5 predefined styles and you can define your own styles as well**

## **Installation**

```
npm install react--customizable-chat-bot or Yarn add  react--customizable-chat-bot
```

## **Usage**

List of questions to be asked by bot the can be passed . Take a look at example questions structure [here!](https://github.com/ckalgos/react-chat-bot/blob/master/src/config/Question/Questionnare.ts)

```
import { Bot, BotConfig } from 'react--customizable-chat-bot'
```

BotConfig has some default set of questions and styles which you can override.

## **Adding Validators to user response**

If you need to validate user response , under each question we have a handlers where you can pass validators to validate user response and drive the chat accordingly.

Validators can either be a regex or a function which returns boolean

```
BotConfig.questions = [{'dob': {
            id: 1,
            message: "What's your Date of Birth (DD/MM/YYYY)?",
            questionKey : 'dob',
            handlers: [
                {
                    validators: dateReg,
                    nextQuestion: 'email',
                },
                {
                    validators: dateRegNeg,
                    nextQuestion: 'dobWrong',
                },
            ],
        }},'dobWrong': {
            id: 2,
            message: "Please enter a valid date of birth",
            questionKey : 'dob',
            handlers: [
                {
                    validators: dateReg,
                    nextQuestion: 'email',
                },
                {
                    validators: dateRegNeg,
                    nextQuestion: 'dobWrong',
                },
            ],
        }];
```

**Customizing the Styles**

By Default there are 5 themes available

    1.)Default,
    2.)GoogleAssitant,
    3.)Facebook,
    4.)WhatsApp,
    5.)GradientGreen

You can chose any of these themes as below

```
import { Bot, BotConfig } from 'react--customizable-chat-bot'
import { Themes } from 'react--customizable-chat-bot/lib/config/config';

BotConfig.Theme = Themes.GoogleAssitant;
```

You can entirely redefine the ui styles based on your brand.
Take a look at List of custom style option available [here!](https://github.com/ckalgos/react-chat-bot/blob/master/src/config/style.ts)

Once your styling is ready you can pass it as a props to the bot component

```
import { Bot, BotConfig , IStyles } from 'react--customizable-chat-bot'

const myStyles: IStyles = {
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

export const MyFunc() => <Bot config={BotConfig}  customStyles={myStyles}/>
```

You should pass a function to onConversationEnd props of Bot component to get the conversation data which we will a json string

```
import { Bot, BotConfig } from 'react--customizable-chat-bot'

const onConversationEnd = (converstationData : string ) => {
    console.log(converstationData);
}

export const MyFunc() => <Bot config={BotConfig}  onConversationEnd={onConversationEnd}/>
```

## For more help / settings

<a href="https://discord.gg/qkkW7KFxCV">Join the CK Algos Discord</a>
