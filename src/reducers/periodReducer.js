export const periodReducer = (initial, action) => {
    const { type, payload } = action;

    switch (type) {
        case '[Period] setPeriod':
            return { ...initial, ...payload };

        case '[Period] addHabit': {
            const { habits, ...period } = initial;
            const newHabits = [...habits, payload];
            return { ...period, habits: newHabits };
        }

        case '[Period] removeHabit': {
            const { habits, ...period } = initial;
            const newHabits = habits.filter( habit => habit.id !== payload );
            return { ...period, habits: newHabits };
        }
    
        default:
            return initial;
    }
}