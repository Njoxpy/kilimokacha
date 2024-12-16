export const expertAdviceReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ADVICES':
            return {
                expertAdvices: action.payload,
            };
        case 'ADD_ADVICES':
            return {
                expertAdvices: action.payload, ...state.expertAdvices
            }
        default:
            return state;
    }
}