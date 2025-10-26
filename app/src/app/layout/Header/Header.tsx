import { useTheme } from "@features/theme/model/useTheme";

export function Header() {

    const { theme, toggleTheme, clearTheme } = useTheme();


    return (<>
        <header onClick={toggleTheme}>
            HEADER {theme}
        </header>
        <div onClick={clearTheme}>clear theme</div>
    </>);
}