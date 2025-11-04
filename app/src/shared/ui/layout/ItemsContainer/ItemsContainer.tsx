import type { FC } from 'react';

import styles from './items-container.module.scss'
import classNames from 'classnames';



interface ItemsContainerProps {
    className?: string;
    columns?: number;

    title: string;
    description?: string;
    children: React.ReactNode;
}


export const ItemsContainer: FC<ItemsContainerProps> = ({
    className,
    title, description, children 
}) => {
    return (
        <div className={classNames(styles.wrapper, className)}>

            {/* Шапка секции */}
            <div className={styles.header}>
                <div className={classNames(styles.headerTitle, 'font-color', 'font-h4')}>
                    {title}
                </div>

                <div className={classNames(styles.headerText)}>
                    {description}
                </div>
            </div>


            {/* Содержимое секции */}
            <div className={styles.container}>

                {children}
            </div>
        
        </div>
    );
}