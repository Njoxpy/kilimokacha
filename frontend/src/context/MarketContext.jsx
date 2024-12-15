import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { marketReducer } from "./reducers/MarketReducer";

export const MarketsContext = createContext();

export const MarketsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(marketReducer, { markets: null });

    return (
        <MarketsContext.Provider value={{ state, dispatch }}>
            {children}
        </MarketsContext.Provider>
    );
};

// PropTypes validation
MarketsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
