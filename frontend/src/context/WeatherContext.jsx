import { createContext, useReducer } from "react";
import PropTypes from "prop-types"
import { weatherReducer } from "./reducers/weatherReducer"

export const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(weatherReducer, { weather: null })
    return (
        <WeatherContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WeatherContext.Provider>
    )
}

// PropTypes validation
WeatherContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};