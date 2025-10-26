import classNames from "classnames";

import { MessageCard } from "@entities/messages";
import { UserProfileCard, UserCompactCard } from "@entities/user";


import { ItemsContainer } from "@shared/ui/ItemsContainer";
import { CONTACTS } from '@shared/data/data'
import MyImage from '@shared/images/me.jpg'


import stylesLayout from '@styles/modules/layout.module.scss'
import styles from './profile.module.scss'


import { MESSAGES } from "@shared/data/data";
import { previewText } from "@shared/libs/previewText";

const Profile = () => {
    return (<div className={classNames(stylesLayout.pageContainer, styles.wrapper)}>

        <UserProfileCard
            image={MyImage}
            name="Семён Голган"
            bio="Fullstack-разработчки"

            location="г. Вологда"

            contacts={CONTACTS}
        />

        

        <div className={styles.content}>
            <div className={styles.contentRow}>
                <ItemsContainer
                    title="Последние проекты"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    {MESSAGES.map((message, key) => (<MessageCard
                        // className={styles.c}
                        name={message.userName}
                        message={previewText(message.text, 50)}

                        key={key}
                    />))}
                </ItemsContainer>
            </div>

            <div className={styles.contentRow}>
                <ItemsContainer
                    title="Мой стек"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    <UserCompactCard />
                    <UserCompactCard />
                    <UserCompactCard />
                    <UserCompactCard />
                </ItemsContainer>

                <ItemsContainer
                    title="Опыт работы"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    <UserCompactCard />
                    <UserCompactCard />
                    <UserCompactCard />
                    <UserCompactCard />
                </ItemsContainer>
            </div>
        </div>

    </div>);
}

export { Profile };
