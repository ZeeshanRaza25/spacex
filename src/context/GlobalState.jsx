import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// initial state 
const initialState = {
    flightNumber: '1'
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // EDIT_TITLE action
    function editTitle(flightNumber) {
        // console.log('flightNumber', flightNumber)
        dispatch({
            type: 'EDIT_TITLE',
            flightNumber: flightNumber,
        })
    }

    return (
        <GlobalContext.Provider value={{
            flightNumber: state.flightNumber,
            editTitle,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
