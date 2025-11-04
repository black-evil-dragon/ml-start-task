import classNames from "classnames";

import styles from './chat-modal.module.scss'
import { UserAvatar } from "@entities/user";


export const ChatModal = () => {
    return (<>

        <div className={styles.overlay}>
            <div className={classNames(styles.wrapper)}>
                <UserAvatar 
                    name={'test'}
                />
            </div>
            
            <div className={classNames(styles.container)}>
                
            </div>
        </div>
    </>);
}