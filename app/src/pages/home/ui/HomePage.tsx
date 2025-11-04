import React from 'react';


import { Profile } from '@widgets/profile/';
import { ChatModal } from '@features/toggle-chat/ui/ChatModal';



export const HomePage: React.FunctionComponent = () => {
    return (<>
        <Profile />

        <ChatModal />
    </>);
}