import styles from './header.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export interface HeaderProps {
    className?: string;
    children?: React.ReactNode;
    toggleView: (nextView: string) => void;
    clicked: () => void;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-headers-and-templates
 */

export const Header = ({ className, children = 'Header', toggleView, clicked }: HeaderProps) => {
    function toggleHomeView() {
        toggleView('welcome-view');
    }
    function toggleTableView() {
        clicked();
        toggleView('table-view');
    }
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.Title}>Biology Research Engine</span>
            <div className={styles.Bottom_Header}>
                <button className={styles.Button} onClick={toggleHomeView}>
                    <img
                        id="home-button-img"
                        src="../styles/Home_Button.svg"
                        alt="Home"
                        className={styles.Home_Img}
                    />
                </button>
                <input className={styles.Search_bar} placeholder={'Search All'} />
                <select className={styles.Drop_list}>
                    <option>All</option>
                    <option>Mammals</option>
                    <option>Birds</option>
                    <option>Reptiles</option>
                    <option>Amphibians</option>
                    <option>Fish</option>
                </select>
                <button className={styles.Button} onClick={toggleTableView}>
                    <img
                        id="search-button-img"
                        src="../styles/Search_Button.svg"
                        alt="Search"
                        className={styles.Home_Img}
                    />
                </button>
            </div>
        </div>
    );
};
