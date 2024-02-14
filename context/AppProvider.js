import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';


const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState(undefined);

    const handleUserData = () => {
        // Logic
    };

    const providerValue = {
        data: {
            userData,
        },
        actions: {
            handleUserData,
        },
    };
    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    );
}