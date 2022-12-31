import { useState } from 'react'
import { generateId } from '../../../../helpers';
import { useForm } from '../../../../hooks';
import { habitInterface } from '../../../../interfaces'

export const HabitsForm = ({
    onAddHabit
}) => {
    const { form, onChangeInput, onResetForm } = useForm(habitInterface);

    const onSave = (e) => {
        onAddHabit({...form, id: generateId() });
        onResetForm();
    }
    
    const onPressEnter = (e) => {
        if( e.code === 'Enter') onSave();
    }

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="Habit"
                    name="description"
                    value={form.description}
                    onChange={onChangeInput}
                    onKeyDown={onPressEnter}
                />
            </div>
            <button onClick={onSave}>
                Add
            </button>
        </div>
    )
}
