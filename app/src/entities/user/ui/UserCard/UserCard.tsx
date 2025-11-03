import type { FC } from "react";

import classNames from "classnames";


import { UserAvatar } from "@entities/user";


import styles from './user-card.module.scss'


interface UserCardProps {
    className?: string,

    name: string
    url: string
    image?: string

    subText?: string,

    onClick?: () => void,
}


export const UserCard: FC<UserCardProps> = ({
    className = '',

    url,
    name,
    image,

    subText,

    onClick

}) => {
    return (<div className={classNames(styles.wrapper, className)} onClick={onClick}>
        <UserAvatar
            name={name}
            url={url}
            image={image}
            onClick={onClick}
        />

        <div className={classNames(styles.content)}>
            <div className={styles.contentName}>
                {name}
            </div>
            <div className={styles.contentText}>
                {subText}
            </div>
        </div>
    </div>);
}
