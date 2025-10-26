import type { FC } from "react";

import classNames from "classnames";


import { UserAvatar } from "@entities/user";


import styles from './message-card.module.scss'


interface MessageCardProps {
    className?: string,

    name: string
    link: string
    image?: string

    message: string
}

export const MessageCard: FC<MessageCardProps> = ({
    className = '',

    link,
    name,
    image,

    message
}) => {
    return (
        <div className={classNames(styles.wrapper, className)}>
            <UserAvatar
                name={name}
                image={image}
            />

            <div className={classNames(styles.content)}>
                <div className={styles.contentName}>
                    <a href={link} target="_blank">{name}</a>
                </div>
                <div className={styles.contentText}>
                    {message}
                </div>
            </div>
        </div>
    );
}
