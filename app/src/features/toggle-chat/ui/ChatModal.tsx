import { RxCross1 } from "react-icons/rx";
import classNames from "classnames";

import { UserAvatar } from "@entities/user";

import styles from './chat-modal.module.scss'


export const ChatModal = () => {
    return (<>

        <div className={styles.overlay}>
            <div className={classNames(styles.wrapper, styles.wrapperActive)}>
                <div className={styles.header}>
                    <UserAvatar
                        name={'test'}

                        className={classNames(styles.avatar)}
                    />
                    <div className={classNames(styles.action, styles.actionCross)}>
                        <RxCross1 />
                    </div>
                </div>
                <div className={classNames(styles.container)}>

                </div>
            </div>
        </div>
    </>);
}