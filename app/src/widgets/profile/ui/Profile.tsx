import { MessageCard } from "@entities/messages/";
import { UserCard, UserCompactCard } from "@entities/user";


const Profile = () => {
    return (<>

        <UserCard />
        <UserCompactCard />
        <MessageCard />
    
    </>);
}

export { Profile };
