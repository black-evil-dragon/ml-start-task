import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Chat, Message } from '../types';
import { CHATS } from '@shared/data/data';



const initialState: Chat = {
    id: "",
    name: "",

    loading: false,
    error: null as string | null,

    messages: [] as Message[]
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveChat: (state, action: PayloadAction<Chat>) => {
            state = {
                ...action.payload
            }
            
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },

        loadMessages: (state, action: PayloadAction<Message[]>) => {
            state.messages = action.payload;
        }
    }
});

export const chatActions = chatSlice.actions;
export const chatReducer = chatSlice.reducer
