import { createContext, useReducer } from "react";
import PropTypes from "prop-types"
import { blogReducer } from "./reducers/BlogReducer";

export const BlogContext = createContext()

export const BlogContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(blogReducer, { blogs: null })

    return (
        <BlogContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}

BlogContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};