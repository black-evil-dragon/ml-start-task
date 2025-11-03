import classNames from "classnames";

import styles from './user-avatar.module.scss';
import type { FC } from "react";

interface UserAvatarProps {
    name: string;
    url?: string;

    image?: string;
    isActive?: boolean;
}

export const UserAvatar: FC<UserAvatarProps> = ({
    name,
    url,

    image,
    isActive
}) => {
    return (
        <div className={classNames(styles.wrapper)}>
            <a href={url} className={classNames('font--no-underline')}>
                {image ?
                    <img src={image} alt={name} className={styles.image} />
                    : <div className={styles.image}></div>
                }
            </a>

            {isActive && <div className={styles.status}></div>}
        </div>
    );
}

