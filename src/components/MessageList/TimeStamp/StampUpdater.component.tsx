
import { useEffect } from 'react';

interface IStampUpdaterProps {
    at: number,
    onInterval: Function;
}

export const StampUpdater = ({ at, onInterval }: IStampUpdaterProps) => {
    useEffect(() => {
        if (!isNaN(at)) {
            const timeout = setTimeout(() => {
                onInterval && onInterval();
            }, Math.max(0, at - Date.now()));

            return () => clearTimeout(timeout);
        }
        return null;
    }, [at, onInterval]);

    return null;
};
