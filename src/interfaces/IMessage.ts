
export interface IMessage
{
    id : number;
    message : string;
    sentTime? : Date;
    sender? : string;
    questionKey? : string;
}
