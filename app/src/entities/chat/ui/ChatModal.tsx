import { RxCross1 } from "react-icons/rx";
import classNames from "classnames";

import { UserAvatar } from "@entities/user";

import styles from './chat-modal.module.scss'
import { useChat } from "../model/useChat";
import { useEffect } from "react";


export const ChatModal = () => {

    const { activeChat, closeChat } = useChat()

    useEffect(() => {
        console.log(activeChat);
    }, [activeChat])

    return (<>

        <div className={styles.overlay}>
            <div className={classNames(styles.wrapper, activeChat && styles.wrapperActive)}>
                {!activeChat ? <>
                    <div>Loading</div>
                </> : <>
                    <div className={styles.header}>
                        <div className={styles.user}>
                            <UserAvatar
                                name={""}

                                className={classNames(styles.userAvatar)}
                            />

                            <div className={classNames(styles.userContent)}>
                                <div className={classNames(styles.userContentName)}>
                                    Название чата
                                </div>
                                <a className={classNames(styles.userContentSubtext, 'font-link')} href="/">
                                    Ссылка
                                </a>
                            </div>
                        </div>
                        <div className={classNames(styles.action, styles.actionCross)} onClick={closeChat}>
                            <RxCross1 />
                        </div>
                    </div>
                    <div className={classNames(styles.container)}>
                        <div className={classNames(styles.messages)}>
                            <div className={classNames(styles.messagesItem, styles.messagesItemOther)}>
                                Сообщение

                                <div className={classNames(styles.time)}>
                                    11:05
                                </div>

                                <div className={classNames(styles.unread)}></div>
                            </div>
                            <div className={classNames(styles.messagesItem, styles.messagesItemPersonal)}>
                                Было бы здорово оставлять тут сообщения

                                <div className={classNames(styles.time)}>
                                    11:05
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    </>);
}