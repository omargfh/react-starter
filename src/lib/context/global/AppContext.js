import React from 'react';
import { user } from './defaults';

const AppContext = React.createContext({
    state: {
        user: user,
    }, // State from the world
    assign: (state) => {}, // Assign is a function that sets the state
})

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [state, setState] = React.useState({
        user: user,
    })
    return (
        <AppContext.Provider value={{ state, assign: setState }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider