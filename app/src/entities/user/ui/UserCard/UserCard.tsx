import type { FC } from "react";

import classNames from "classnames";


import { UserAvatar } from "@entities/user";


import styles from './user-card.module.scss'


interface UserCardProps {
    className?: string,

    name: string
    url: string
    image?: string

    bio?: string
}


export const UserCard: FC<UserCardProps> = ({
    className = '',

    url,
    name,
    image,

    bio,

}) => {
    return (<div className={classNames(styles.wrapper, className)}>
        <UserAvatar
            name={name}
            url={url}
            image={image}
        />

        <div className={classNames(styles.content)}>
            <div className={styles.contentName}>
                <a href={url} target="_blank">{name}</a>
            </div>
            <div className={styles.contentText}>
                {bio}
            </div>
        </div>
    </div>);
}
