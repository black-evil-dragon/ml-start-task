export interface Message {
    id: string;
    text: string;
    senderId: string;
    timestamp?: string;
    isRead?: boolean;
}

export interface ChatMeta {
    id: string;
    name: string;

    created_at?: string;
}

export interface Chat extends ChatMeta {
    messages: Message[];

    isOpened?: boolean;
    isLoading?: boolean;
    
    error?: string | null;
}