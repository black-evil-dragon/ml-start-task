import classNames from "classnames";

import styles from './user-avatar.module.scss';
import type { FC } from "react";

interface UserAvatarProps {
    name: string;

    image?: string;
    isActive?: boolean;
}

export const UserAvatar: FC<UserAvatarProps> = ({
    name,

    image,
    isActive
}) => {
    return (
        <div className={classNames(styles.wrapper)}>
            {image ? <img src={image} alt={name} /> : <div className={styles.image}></div>}

            {isActive && <div className={styles.status}></div>}
        </div>
    );
}

