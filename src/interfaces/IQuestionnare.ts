import { IMessage } from "./IMessage";

export interface IHandlers {
    nextQuestion: string;
    validators?: RegExp | Function;
}

export interface IQuestions extends IMessage { 
    handlers: Array<IHandlers>;
    questionKey? : string;
}


export interface IQuestionnare {
    [key: string]: IQuestions
}