import React from 'react';

import { Routing } from './router'

import { Provider } from 'react-redux';
import { store } from './store';



export function App() {
    return (<>
        <React.StrictMode>
            <Provider store={store}>
                <Routing />
            </Provider>
        </React.StrictMode>
    </>);
}
