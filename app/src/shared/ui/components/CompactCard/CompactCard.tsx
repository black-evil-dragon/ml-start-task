import type { FC } from "react";

import classNames from "classnames";


import { UserAvatar } from "@entities/user";


import styles from './compact-card.module.scss'


interface CompactCardProps {
    className?: string,

    title: string

    url?: string
    image?: string

    subText?: string,

    onClick?: () => void,
}


export const CompactCard: FC<CompactCardProps> = ({
    className = '',

    url,
    title,
    image,

    subText,

    onClick

}) => {
    return (<div className={classNames(styles.wrapper, className)} onClick={onClick}>
        <UserAvatar
            name={title}
            url={url}
            image={image}
            onClick={onClick}
        />

        <div className={classNames(styles.content)}>
            <div className={styles.contentName}>
                {title}
            </div>
            <div className={styles.contentText}>
                {subText}
            </div>
        </div>
    </div>);
}
