import { RxCross1 } from "react-icons/rx";
import classNames from "classnames";


import { UserAvatar } from "@entities/user";


import { useChat } from "../model/useChat";


import styles from './chat-modal.module.scss'




export const ChatModal = () => {

    const { activeChat, closeChat } = useChat()

    return (<>
        <div className={styles.overlay}>
            <div className={classNames(styles.wrapper, activeChat.isOpened && styles.wrapperActive)}>
                {activeChat.isLoading ? <>
                    <div>Loading</div>
                </> : <>
                    <div className={styles.header}>
                        <div className={styles.user}>
                            <UserAvatar
                                name={activeChat.name}

                                className={classNames(styles.userAvatar)}
                            />

                            <div className={classNames(styles.userContent)}>
                                <div className={classNames(styles.userContentName)}>
                                    {activeChat.name}
                                </div>
                                <p className={classNames(styles.userContentSubtext)}>
                                    Был в сети когда-то давно
                                </p>
                            </div>
                        </div>
                        <div className={classNames(styles.action, styles.actionCross)} onClick={closeChat}>
                            <RxCross1 />
                        </div>
                    </div>
                    <div className={classNames(styles.container)}>
                        <div className={classNames(styles.messages)}>
                            {activeChat.messages && activeChat.messages.map((message) =>
                                <div className={classNames(styles.messagesItem, styles.messagesItemOther)} key={`${activeChat.id}${message.id}`}>
                                    {message.text}

                                    <div className={classNames(styles.time)}>
                                        11:05
                                    </div>

                                    <div className={classNames(styles.unread)}></div>
                                </div>
                            )}
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