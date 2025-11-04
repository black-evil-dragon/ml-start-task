import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Chat, Message } from '../types';



const initialState: Chat = {
    id: "",
    name: "",

    isLoading: false,
    isOpened: false,

    error: null as string | null,

    messages: [] as Message[]
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveChat: (state, action: PayloadAction<Chat>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.messages = action.payload.messages;
            state.isLoading = false;
            state.isOpened = true;
            state.error = null;
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },

        loadMessages: (state, action: PayloadAction<Message[]>) => {
            state.messages = action.payload;
        },

        closeActiveChat: (state) => {
            state.isOpened = false;

            // state.id = "";
            // state.name = "";
            // state.messages = [];
            // state.loading = false;
            // state.error = null;
        }
    }
});

export const chatActions = chatSlice.actions;
export const chatReducer = chatSlice.reducer
