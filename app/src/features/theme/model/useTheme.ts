import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemIsDark ? 'dark' : 'light');

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const clearTheme = () => {
        const newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        localStorage.removeItem('theme')
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    }

    return { theme, toggleTheme, clearTheme };
};