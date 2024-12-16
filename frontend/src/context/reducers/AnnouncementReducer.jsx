export const announcementReducer = (state, action) => {
    switch (action.type) {
        case "SET_ANNOUNCEMENTS":
            return {
                announcements: action.payload,
            };
        case "ADD_ANNOUNCEMENTS":
            return {
                announcements: [action.payload, ...state.markets],
            };
        default:
            return state;
    }
};
