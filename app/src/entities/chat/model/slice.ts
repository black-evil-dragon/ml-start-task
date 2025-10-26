import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


const initialState = {
    data: {
        id: '',

        created_at: '',
        updated_at: '',
    }
};


const ChatSlice = createSlice({
    name: 'chat-content',
    initialState,
    reducers: {
        set(
            state,
            action: PayloadAction<any>
        ) {

        }
    }
});

export const {

    set,

} = ChatSlice.actions;

export default ChatSlice.reducer