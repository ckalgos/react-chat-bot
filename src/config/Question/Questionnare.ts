import { IQuestionnare } from "../../interfaces/IQuestionnare";

const dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const dateRegNeg = /^((?!\d{2}[./-]\d{2}[./-]\d{4}).)*$/;
const validateEmail = (email: string) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateEmailNeg = (email: string) => { return !validateEmail(email) }

class Questionnare {
    questions: IQuestionnare = {
        'start': {
            id: 1,
            message: "What's your name?",
            questionKey : 'name',
            handlers: [
                {
                    nextQuestion: 'dob',
                },
            ],
        },
        'dob': {
            id: 2,
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
        },
        'dobWrong': {
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
        },
        'email': {
            id: 3,
            message: "What's your email Address?",
            questionKey : 'email',
            handlers: [
                {
                    validators: validateEmail,
                    nextQuestion: 'location',
                },
                {
                    validators: validateEmailNeg,
                    nextQuestion: 'emailWrong',
                },
            ],
        },
        'emailWrong': {
            id: 3,
            message: "Please enter a valid email address",
            questionKey : 'email',
            handlers: [
                {
                    validators: validateEmail,
                    nextQuestion: 'location',
                },
                {
                    validators: validateEmailNeg,
                    nextQuestion: 'emailWrong',
                },
            ],
        },
        'location': {
            id: 4,
            message: 'Where you are from?',
            questionKey : 'location',
            handlers: [
                {
                    nextQuestion: 'thankYou',
                },
            ],
        },
        'thankYou': {
            id: 5,
            message: 'Thank You , you details are saved. ',
            handlers: [
            ],
        },
    };

}

export var questionnare = new Questionnare().questions;