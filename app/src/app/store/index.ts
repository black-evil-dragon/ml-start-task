import { configureStore } from '@reduxjs/toolkit';


import { ChatReduser } from '@entities/chat';



export const store = configureStore({
    reducer: {
        chat: ChatReduser
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;