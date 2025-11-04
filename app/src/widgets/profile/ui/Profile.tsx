import classNames from "classnames";

import { UserProfileCard } from "@entities/user";
import { useChat } from "@entities/chat/";

//* Shared
import { previewText } from "@shared/libs/previewText";
import { CompactCard } from "@shared/ui/components";
import { ItemsContainer, stylesItemsContainer } from "@shared/ui/layout/";

import { CHATS, CONTACTS, EXPREIENCE } from '@shared/data/data'

import MyImage from '@shared/images/me.jpg'



//* Component


import stylesLayout from '@styles/modules/layout.module.scss'
import styles from './profile.module.scss'




const Profile = () => {

    const { openChat } = useChat()

    const openUrl = (url: string) => {
        window.open(url, "_blank")
    }

    return (<div className={classNames(stylesLayout.pageContainer, styles.wrapper)}>
        <UserProfileCard
            image={MyImage}
            name="Семён Голган"
            bio="Fullstack-разработчик"

            location="г. Вологда"

            contacts={CONTACTS}
        />


        
        <div className={styles.content}>
            <div className={styles.contentRow}>
                <ItemsContainer
                    title="Последние проекты"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    {CHATS.map((chat, key) => (<CompactCard
                        className={classNames(stylesItemsContainer.containerItem, stylesItemsContainer.containerItem2)}
                        title={chat.name}
                        subText={previewText(chat.messages[0]?.text || '', 50)}

                        onClick={() => openChat(chat.id)}

                        key={key}
                    />))}
                </ItemsContainer>
            </div>

            <div className={styles.contentRow}>
                <ItemsContainer
                    title="Опыт работы"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    {EXPREIENCE.map((job, key) => (<CompactCard
                        className={classNames(stylesItemsContainer.containerItem, stylesItemsContainer.containerItem1)}
                        title={job.title}
                        subText={job.bio + ' | ' + job.date.start + (job.date.end ? ' - ' + job.date.end : '')}
                        url={job.url}
                        image={job.image}
                        onClick={() => { openUrl(job.url) }}

                        key={key}
                    />))}
                </ItemsContainer>


                <ItemsContainer
                    title="Обо мне"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    <p>
                        Я занимаюсь Fullstack-разработкой более 2 лет. Мой опыт включает разработку веб-приложений и поддержку существующих систем, что позволяет мне эффективно решать задачи как на стороне клиента, так и на стороне сервера.
                    </p>

                    <p>
                        Меня привлекает Fullstack-разработка, поскольку она позволяет охватывать весь цикл создания приложения от проектирования инфраструктуры до пользовательского интерфейса. Мне особенно интересно участвовать в проектах, где можно глубоко погружаться как в backend, так и в frontend, создавая оптимизированные образы, настраивая серверную логику и одновременно разрабатывая интуитивно понятные интерфейсы.
                    </p>

                    <p>Особенно приятно видеть, как идея превращается в полноценное решение, работающее от начала до конца.</p>
                </ItemsContainer>


            </div>
        </div>

    </div>);
}

export { Profile };
