import { usePeriods } from '../hooks';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }) => {
    const { periods, onDeletePeriod, onNewPeriod } = usePeriods();
    
    return (
        <AppContext.Provider
            value={{
                periods, 
                onDeletePeriod, 
                onNewPeriod,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}
