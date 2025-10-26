import React from 'react';

import { Routing } from './router'

import { Provider } from 'react-redux';
import { store } from './store';



export function App() {

    React.useEffect(() => {
        const timer = setTimeout(() => {
            document.body.style.setProperty('transition', 'background-color .3s ease, color .3s ease');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (<>
        <React.StrictMode>
            <Provider store={store}>
                <Routing />
            </Provider>
        </React.StrictMode>
    </>);
}
