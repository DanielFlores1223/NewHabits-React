import { useContext } from 'react';
import { AppContext } from '../../../../context/AppContext';
import { generateId } from '../../../../helpers';
import { usePeriod } from '../../../../hooks';
import { HabitsForm } from './HabitsForm';
import { HabitsList } from './HabitsList';

export const FormConfig = () => {

    const { onNewPeriod } = useContext(AppContext);
    const { period, onChangePeriod, onAddHabit, onRemoveHabit } = usePeriod();
    const { habits } = period;

    const onChange = (e) => {
        const { name, value } = e.target;

        onChangePeriod({ [name]: value });
    }

    const onSave = () => onNewPeriod({...period, id: generateId()});

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="Title"
                    name="title"
                    value={period.title}
                    onChange={onChange}
                />
            </div>

            <div>
                <label htmlFor="">Start Date</label>
                <input 
                    type="date" 
                    name="startDate"
                    value={period.startDate}
                    onChange={onChange}
                />
            </div>

            <div>
                <label htmlFor="">End Date</label>
                <input 
                    type="date" 
                    name="endDate"
                    value={period.endDate}
                    onChange={onChange}
                />
            </div>

            <div>
                <HabitsForm 
                    onAddHabit={onAddHabit}
                />
                <HabitsList 
                    habits={habits}
                    onRemoveHabit={onRemoveHabit}
                />
            </div>

            <button onClick={onSave}>Save</button>
        </div>
    )
}
