import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { CHATS } from "@shared/data/data";
// import type { Chat } from "@entities/chat/types"


import { chatActions } from "./slice";

export const useChat = () => {
    const dispatch = useAppDispatch();
    const activeChat = useAppSelector(state => state.chat);

    // const [activeChat, setActiveChat] = useState<Chat | null>(null)



    const openChat = (chatId: string) => {
        console.log(chatId);
        const chat = CHATS.find(c => c.id === chatId);

        console.log(chat);
        if (chat) {
            dispatch(chatActions.setActiveChat(chat));
        }
    }

    const closeChat = () => {
        // setActiveChat(null)

    }


    return {
        activeChat,
        openChat, closeChat
    }
}