import { createContext, useReducer } from "react"
import PropTypes from "prop-types";
import { announcementReducer } from "./reducers/AnnouncementReducer"

export const AnnouncementContext = createContext()

export const AnnouncementContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(announcementReducer, { anouncements: null })
    return (
        <AnnouncementContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AnnouncementContext.Provider>
    )
}

// PropTypes validation
AnnouncementContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};