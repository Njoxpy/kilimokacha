// import context
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { expertAdviceReducer } from "./reducers/ExpertAdviceReducer";

// create context
export const ExpertAdviceContext = createContext()

// create provider
export const ExpertAdviceContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(expertAdviceReducer, { expertAdvices: null })

    return (
        <ExpertAdviceContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ExpertAdviceContext.Provider>
    )
}

// PropTypes validation
ExpertAdviceContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};