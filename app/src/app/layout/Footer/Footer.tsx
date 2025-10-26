import classNames from "classnames";

import styles from "./footer.module.scss";
import stylesLayout from "@styles/modules/layout.module.scss";

export const Footer = () => {
    return (<>
        <footer className={classNames('app-footer', stylesLayout.pageContainer, styles.wrapper)}>
            <div className={classNames(styles.links)}>
                <a href="https://react.dev/" target="_blank">React</a>
                <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
                <a href="https://vite.dev/" target="_blank">Vite</a>
                |
                <a href="https://feature-sliced.github.io/documentation/ru/docs/get-started/overview" target="_blank">Feature-sliced design</a>
            </div>
        </footer>
    </>);
}