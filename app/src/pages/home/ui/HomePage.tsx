import React from 'react';


import { Profile } from '@widgets/profile/';
import { ChatModal } from '@entities/chat/';



export const HomePage: React.FunctionComponent = () => {
    return (<>
        <Profile />

        <ChatModal />
    </>);
}