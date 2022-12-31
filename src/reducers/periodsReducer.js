export const periodsReducer = (initial, action) => {
    const { type, payload } = action;

    switch (type) {
        case '[Period] addPeriod': 
            return [ ...initial, payload ];

        case '[Period] removePeriod':
            return initial.filter( period => period.id !== payload );
            
        default:
            return initial;
    }
}