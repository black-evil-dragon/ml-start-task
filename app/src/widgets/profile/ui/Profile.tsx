
import { MessageCard } from "@entities/messages";
import { UserCard, UserCompactCard } from "@entities/user";
// import { MessageList } from "@entities/messages/";

import { ItemsContainer } from "@shared/ui/ItemsContainer";


const Profile = () => {
    return (<>

        <div>
            <UserCard />
            
            <ItemsContainer title="Последние проекты" >
                <MessageCard />
            </ItemsContainer>

            <ItemsContainer title="Мой стек">
                <UserCompactCard />
            </ItemsContainer>
        </div>
    
    </>);
}

export { Profile };
