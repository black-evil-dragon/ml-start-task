import classNames from "classnames";

// import { MessageCard } from "@entities/messages";
import { UserCard, UserProfileCard } from "@entities/user";


import { ItemsContainer } from "@shared/ui/ItemsContainer";
import { CONTACTS, EXPREIENCE } from '@shared/data/data'
import MyImage from '@shared/images/me.jpg'


import stylesLayout from '@styles/modules/layout.module.scss'
import stylesItemsContainer from '@shared/ui/items-container.module.scss';
import styles from './profile.module.scss'


import { MESSAGES } from "@shared/data/data";
import { previewText } from "@shared/libs/previewText";

const Profile = () => {


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
                    {MESSAGES.map((message, key) => (<UserCard
                        className={classNames(stylesItemsContainer.containerItem, stylesItemsContainer.containerItem2)}
                        name={message.userName}
                        subText={previewText(message.text, 50)}
                        url={message.link}

                        key={key}
                    />))}
                </ItemsContainer>
            </div>

            <div className={styles.contentRow}>
                <ItemsContainer
                    title="Опыт работы"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    {EXPREIENCE.map((job, key) => (<UserCard
                        className={classNames(stylesItemsContainer.containerItem, stylesItemsContainer.containerItem1)}
                        name={job.title}
                        subText={job.bio + ' | ' + job.date.start + (job.date.end ? ' - ' + job.date.end : '')}
                        url={job.url}
                        image={job.image}
                        onClick={() => { openUrl(job.url) }}

                        key={key}
                    />))}
                    {/* <div>Стажировка - <a href="https://only.digital/" target="_blank">Only.digital</a></div>
                    <div>Django-разработчик - <a href="https://place-start.ru/" target="_blank">PLACESTART</a> с 2023 года</div>
                    <div>Практикант - <a href="https://sbertech.ru/" target="_blank">СберТех</a> на 2 курсе</div> */}
                </ItemsContainer>

                <ItemsContainer
                    title="Обо мне"
                    className={classNames(stylesLayout.wrapper, styles.contentItem)}
                >
                    <p>
                        Я занимаюсь Fullstack-разработкой более 2 лет. Мой опыт включает разработку веб-приложений и поддержку существующих систем, что позволяет мне эффективно решать задачи как на стороне клиента, так и на стороне сервера.
                    </p>

                    <p>
                        Меня привлекает Fullstack-разработка, поскольку она позволяет охватывать весь цикл создания приложения от проектирования инфраструктуры до пользовательского интерфейса. Мне особенно интересно участвовать в проектах, где можно глубоко погружаться как в backend, так и в frontend, создавая оптимизированные образы, настраивая: серверную логику и одновременно разрабатывая интуитивно понятные интерфейсы. Особенно приятно видеть, как идея превращается в полноценное решение, работающее от начала до конца.
                    </p>
                </ItemsContainer>


            </div>
        </div>

    </div>);
}

export { Profile };
