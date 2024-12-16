export const blogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload
            };
        case 'CREATE_BLOGS':
            return {
                blogs: [action.payload, ...state.blogs]
            };
        default:
            return state
    }
}