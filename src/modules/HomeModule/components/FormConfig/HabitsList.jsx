import React from 'react'

export const HabitsList = ({
    habits = [],
    onRemoveHabit,
}) => {
    return (
        <div>
            { 
                habits.map( habit => (
                    <div key={habit.id}>
                        <p>{ habit.description }</p>
                        <button onClick={ () => onRemoveHabit(habit.id) }>
                            Delete
                        </button>
                    </div>
                )) 
            }
        </div>
    )
}
