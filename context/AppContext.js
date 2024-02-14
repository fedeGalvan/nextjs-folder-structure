import React from 'react';

export const defaultValue = {
    data: {
        userData: undefined,
    },
    actions: {
        handleUserData: () => undefined,
    },
};

const AppContext = React.createContext(defaultValue);

export default AppContext;