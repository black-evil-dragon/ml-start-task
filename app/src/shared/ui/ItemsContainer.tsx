import type { FC } from 'react';

import styles from './items-container.module.scss'
import classNames from 'classnames';



interface ItemsContainerProps {
    className?: string;

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
                <div className={styles.headerTitle}>
                    {title}
                </div>

                <div className={styles.headerText}>
                    {description}
                </div>
            </div>


            {/* Содержимое секции */}
            <div className={styles.container}>
            
                {/* <div className={styles.containerItem}>Items of content block</div> */}

                {children}
            </div>
        
        </div>
    );
}