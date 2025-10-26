import classNames from "classnames";

import { MessageCard } from "@entities/messages";
import { UserProfileCard } from "@entities/user";


import { ItemsContainer } from "@shared/ui/ItemsContainer";
import { CONTACTS } from '@shared/data/data'
import MyImage from '@shared/images/me.jpg'


import stylesLayout from '@styles/modules/layout.module.scss'
import stylesItemsContainer from '@shared/ui/items-container.module.scss';
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
                        className={classNames(stylesItemsContainer.containerItem, stylesItemsContainer.containerItem2)}
                        name={message.userName}
                        message={previewText(message.text, 50)}
                        link={message.link}

                        key={key}
                    />))}
                </ItemsContainer>
            </div>

            <div className={styles.contentRow}>
                <ItemsContainer
                    title="Мой стек"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    <div>Python, Django</div>
                    <div>TS, React, Gulp</div>
                    <div>Docker</div>
                </ItemsContainer>

                <ItemsContainer
                    title="Опыт работы"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    <div>Стажировка - <a href="https://only.digital/" target="_blank">Only.digital</a></div>
                    <div>Django-разработчик - <a href="https://place-start.ru/" target="_blank">PLACESTART</a> с 2023 года</div>
                    <div>Практикант - <a href="https://sbertech.ru/" target="_blank">СберТех</a> на 2 курсе</div>
                </ItemsContainer>
            </div>
        </div>

    </div>);
}

export { Profile };
