import classNames from "classnames";

import styles from './user-avatar.module.scss';
import type { FC } from "react";

interface UserAvatarProps {
    className?: string;

    name: string;
    url?: string;

    image?: string;
    isActive?: boolean;

    onClick?: () => void;
}

export const UserAvatar: FC<UserAvatarProps> = ({
    name,
    url,

    image,
    isActive,

    onClick
}) => {
    return (
        <div className={classNames(styles.wrapper)} onClick={onClick}>
            <a href={url} className={classNames('font--no-underline')}>
                {image ?
                    <img src={image} alt={name} className={styles.image} />
                    : <div className={classNames(styles.image, styles.imagePlaceholder)}></div>
                }
            </a>

            {isActive && <div className={styles.status}></div>}
        </div>
    );
}

