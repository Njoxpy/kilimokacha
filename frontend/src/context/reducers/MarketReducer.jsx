export const marketReducer = (state, action) => {
    switch (action.type) {
        case "SET_MARKETS":
            return {
                markets: action.payload,
            };
        case "ADD_MARKET":
            return {
                markets: [action.payload, ...state.markets],
            };
        default:
            return state;
    }
};
