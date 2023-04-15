import styles from './bre-search-body-part.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export interface Bre_Search_Body_PartProps {
    className?: string;
    click_QuickSearch: (Collection: string) => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-body-parts-and-templates
 */
export const Bre_Search_Body_Part = ({
    className,
    click_QuickSearch,
}: Bre_Search_Body_PartProps) => {
    function toggle_Arboretum() {
        click_QuickSearch('arboretum');
    }
    function toggle_Fish() {
        click_QuickSearch('fish');
    }
    function toggle_GreenHouse() {
        click_QuickSearch('green_house');
    }
    function toggle_Herbarium() {
        click_QuickSearch('herbarium');
    }
    function toggle_Herps() {
        click_QuickSearch('herps');
    }
    function toggle_Insects() {
        click_QuickSearch('insects');
    }
    function toggle_Mammals() {
        click_QuickSearch('mammals');
    }
    function toggle_Vivarium() {
        click_QuickSearch('vivarium');
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchBodyPart-style']}>
                <p className={styles['p-breSearchBodyPart-style']}>Quick Search Items</p>
                <br />
                <br />
                <div className={styles['div1-breSearchBodyPart-style']}>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button
                            className={styles['button0-breSearchBodyPart-style']}
                            onClick={toggle_Arboretum}
                        >
                            Arboretum
                        </button>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button
                            className={styles['button0-breSearchBodyPart-style']}
                            onClick={toggle_Fish}
                        >
                            Fish
                        </button>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button
                            className={styles['button0-breSearchBodyPart-style']}
                            onClick={toggle_GreenHouse}
                        >
                            Green House
                        </button>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button
                            className={styles['button0-breSearchBodyPart-style']}
                            onClick={toggle_Herbarium}
                        >
                            Herbarium
                        </button>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button
                            className={styles['button0-breSearchBodyPart-style']}
                            onClick={toggle_Herps}
                        >
                            Herps
                        </button>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button
                            className={styles['button0-breSearchBodyPart-style']}
                            onClick={toggle_Insects}
                        >
                            Insects
                        </button>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button
                            className={styles['button0-breSearchBodyPart-style']}
                            onClick={toggle_Mammals}
                        >
                            Mammals
                        </button>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button
                            className={styles['button0-breSearchBodyPart-style']}
                            onClick={toggle_Vivarium}
                        >
                            Vivarium
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
