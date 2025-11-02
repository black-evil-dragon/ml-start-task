import type { FC } from 'react';
import classNames from 'classnames';

import type { Contacts } from '@shared/types';


//* Styles
import styles from './user-profile-card.module.scss';
import layoutStyles from '@styles/modules/layout.module.scss'



interface UserProfileCardProps {
    image: string

    name: string

    bio?: string
    location?: string

    contacts?: Contacts
}

export const UserProfileCard: FC<UserProfileCardProps> = ({
    image,
    name,
    bio = '',
    location = '',
    contacts,
}) => {
    return (
        <div className={classNames(styles.wrapper, layoutStyles.wrapper)}>
            {image ? <img src={image} alt={name} className={styles.image} /> : <div className={styles.imagePlaceholder} />}

            <div className={styles.content}>
                <div className={styles.contentName}>
                    {name}
                </div>
                <div className={styles.contentBio}>
                    {bio}
                </div>

                <div className={styles.contentLocation}>
                    {location}
                </div>

                {contacts && <div className={styles.contacts}>
                    {Object.entries(contacts).map(([field, contactItem], key) => (<div className={styles.contactsItem} key={field+key}>
                        {<contactItem.icon className={styles.contactsItemIcon} />}

                        <a className={styles.contactsItemText} href={contactItem.link} target='_blank'>{contactItem.text}</a>
                    </div>))}
                </div>}
            </div>
        </div>
    );
}
