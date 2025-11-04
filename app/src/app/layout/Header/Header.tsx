import classNames from "classnames";

import { ThemeSwitcher } from "@features/theme";


import styles from "./header.module.scss";
import stylesLayout from "@styles/modules/layout.module.scss";



export function Header() {
    return (<>
        <header className={classNames('app-header', stylesLayout.pageContainer, styles.wrapper)}>
            <div className={classNames(stylesLayout.section, styles.container)}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>Страница пользователя</div>

                    <ThemeSwitcher />
                </div>

                <div className={styles.text}>
                    Добро пожаловать на сайт-визитку
                </div>
            </div>
        </header>
    </>);
}