import { MessageList } from "@entities/messages/";
import { UserCard, UserCompactCard } from "@entities/user";


const Profile = () => {
    return (<>

        <div>
            <div>
                <UserCard />
            </div>
            
            <div>
                <UserCompactCard />
                <MessageList />
            </div>
        </div>
    
    </>);
}

export { Profile };
