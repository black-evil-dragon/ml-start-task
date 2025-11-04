import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { CHATS } from "@shared/data/data";
// import type { Chat } from "@entities/chat/types"


import { chatActions } from "./slice";

export const useChat = () => {
    const dispatch = useAppDispatch();
    const activeChat = useAppSelector(state => state.chat);


    const openChat = (chatId: string) => {
        const chat = CHATS.find(c => c.id === chatId);

        
        if (chat) {
            dispatch(chatActions.setActiveChat(chat));
        }
    }

    const closeChat = () => {
        if (activeChat.id) {
            dispatch(chatActions.closeActiveChat());
        }
    }


    return {
        activeChat,
        openChat, closeChat
    }
}