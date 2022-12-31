import { useReducer } from 'react'
import { periodInterface } from '../interfaces'
import { periodReducer } from '../reducers'

export const usePeriod = () => {
    const [period, dispatch] = useReducer(periodReducer, periodInterface);
    
    const onChangePeriod = (period = {}) => {
        const action = {
            type: '[Period] setPeriod',
            payload: period
        }

        dispatch(action);
    }

    const onAddHabit = (habit = {}) => {
        const action = {
            type: '[Period] addHabit',
            payload: habit
        }

        dispatch(action);
    } 

    const onRemoveHabit = (id = '') => {
        const action = {
            type: '[Period] removeHabit',
            payload: id
        }

        dispatch(action);
    }

    return {
        period,
        onChangePeriod,
        onAddHabit,
        onRemoveHabit
    }
}
