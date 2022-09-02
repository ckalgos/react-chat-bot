import { IMessage } from "../interfaces/IMessage";

export const getInitials = function (name: string) {
    let initials = "";
    let names = name.split(' ');
    if (names.length === 1) {
        initials += names[0].charAt(0) + "" + names[0].charAt(1);
    } else {
        for (let n = 0; n < names.length; n++) {
            initials += names[n].substring(0, 1);
        }
    }
    return initials || 'GU';
};

export const detectURL = function (message: string) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.replace(urlRegex, function (urlMatch: string) {
        return '<a href="' + urlMatch + '">' + urlMatch + '</a>';
    })
}

export const nextTimer = (origin: any) => {
    const time = new Date(origin).getTime();
    const now = Date.now();

    return time > now ? time : now + 60000 - ((now - time) % 60000);
}

export const generateJsonFromMessage = (messages: Array<IMessage>) => {

    let result: { [key: string]: String } = {};
    for (let i = 0; i < messages.length; i++) {
        let currentVal = messages[i];
        if (currentVal.questionKey) {
            result[currentVal.questionKey] = currentVal.message;
        }
    }
    return JSON.stringify(result);
}

export const timeExplased = (date?: Date) => {
    if (!date) {
        return date;
    }

    const dateTime = date.getTime();

    const now = Date.now();
    const deltaInMs = now - dateTime;
    const deltaInMinutes = Math.floor(deltaInMs / 60000);
    const deltaInHours = Math.floor(deltaInMs / 3600000);

    if (deltaInMinutes < 1) {
        return 'Just now';
    } else if (deltaInMinutes === 1) {
        return 'A minute ago';
    } else if (deltaInHours < 1) {
        return `${deltaInMinutes} minutes ago`;
    } else if (deltaInHours === 1) {
        return `An hour ago`;
    } else if (deltaInHours < 5) {
        return `${deltaInHours} hours ago`;
    } else if (deltaInHours <= 24) {
        return `Today`;
    } else if (deltaInHours <= 48) {
        return `Yesterday`;
    }
    return null;
}
