import { WiDaySunny, WiNightClear } from "react-icons/wi";


import { useTheme } from "../model/useTheme";


import styles from "./theme-switcher.module.scss";
import classNames from "classnames";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();


    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.button, theme == 'light' && styles.buttonActive)} onClick={toggleTheme}>
                <WiDaySunny />
            </div>
            <div className={classNames(styles.button, theme == 'dark' && styles.buttonActive)} onClick={toggleTheme}>
                <WiNightClear />
            </div>
        </div>
    );
}