import React, { useState, useCallback, useContext } from 'react'
import { StampUpdater } from './StampUpdater.component';
import { TimeStampStyles } from './TimeStamp'
import { timeExplased, nextTimer } from '../../../Utils/utils';
import BotContext from '../../../BotContext';

interface ITimeStampProps {
    value?: Date;
    messagePosition: string;
}

export default function TimeStamp(props: ITimeStampProps) {
    let context = useContext(BotContext);
    const text = context.useRelativeTime ? timeExplased(props.value) : props.value?.toLocaleTimeString(navigator.language, {
        day: '2-digit',
        hour: '2-digit',
        hour12: false,
        minute: '2-digit',
        month: 'long'
    });
    const [timer, setTimer] = useState(nextTimer(props.value));

    const handleInterval = useCallback(() => {
        setTimer(nextTimer(props.value));
    }, [props.value]);
    return (
        <> <TimeStampStyles {...context.styles} />
            <div className={"messageTime " + props.messagePosition}>
                <span className="timeStampLabel" aria-hidden="true">{text}</span>
                <StampUpdater at={timer} onInterval={handleInterval} />
            </div>
        </>
    )
}