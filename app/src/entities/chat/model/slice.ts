import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


export interface Message {
    id: string;
    text: string;
    userId: string;
    timestamp: string;
    isRead: boolean;
}

export interface ChatState {
    messages: Message[];

    activeChatId: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: ChatState = {
    messages: [],

    activeChatId: null,
    loading: false,
    error: null,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveChat: (state, action: PayloadAction<string | null>) => {
            state.activeChatId = action.payload;
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

export const chatAction = chatSlice.actions;
export const chatReducer = chatSlice.reducer
