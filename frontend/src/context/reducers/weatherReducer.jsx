export const announcementReducer = (state, action) => {
    switch (action.type) {
        case "SET_WEATHER":
            return {
                weather: action.payload,
            };
        /*
        case "ADD_ANNOUNCEMENTS":
            return {
                announcements: [action.payload, ...state.markets],
            };
         */
        default:
            return state;
    }
};
