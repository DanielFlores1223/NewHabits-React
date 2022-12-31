import { useReducer, useEffect } from 'react'
import { periodsReducer } from '../reducers'

const init = () => JSON.parse(localStorage.getItem('periods')) || [];

export const usePeriods = () => {
    const [periods, dispatch] = useReducer(periodsReducer, [], init);

    useEffect(() => {
        localStorage.setItem('periods', JSON.stringify(periods));
    }, [periods]);

    const onNewPeriod = (period) => {
        const action = {
            type: '[Period] addPeriod',
            payload: period
        }

        dispatch(action);
    }

    const onDeletePeriod = (id) => {
        const action = {
            type: '[Period] removePeriod',
            payload: id
        }

        dispatch(action);
    }

    return {
        periods,
        onNewPeriod,
        onDeletePeriod,
    }
}
