import styles from './bre-search-body-part.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export interface Bre_Search_Body_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-body-parts-and-templates
 */
export const Bre_Search_Body_Part = ({ className }: Bre_Search_Body_PartProps) => {
    const [bool_Arboretum, set_Arboretum] = useState(true);
    const [bool_Fish, set_Fish] = useState(true);
    const [bool_GreenHouse, set_GreenHouse] = useState(true);
    const [bool_Herbarium, set_Herbarium] = useState(true);
    const [bool_Herps, set_Herps] = useState(true);
    const [bool_Insects, set_Insects] = useState(true);
    const [bool_Mammals, set_Mammals] = useState(true);
    const [bool_Vivarium, set_Vivarium] = useState(true);

    function toggle_Arboretum() {
        set_Arboretum(!bool_Arboretum);
    }
    function toggle_Fish() {
        set_Fish(!bool_Fish);
    }
    function toggle_GreenHouse() {
        set_GreenHouse(!bool_GreenHouse);
    }
    function toggle_Herbarium() {
        set_Herbarium(!bool_Herbarium);
    }
    function toggle_Herps() {
        set_Herps(!bool_Herps);
    }
    function toggle_Insects() {
        set_Insects(!bool_Insects);
    }
    function toggle_Mammals() {
        set_Mammals(!bool_Mammals);
    }
    function toggle_Vivarium() {
        set_Vivarium(!bool_Vivarium);
    }   

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchBodyPart-style']}>
                <p className={styles['p-breSearchBodyPart-style']}>Quick Search Items</p>
                <br />
                <br />
                <div className={styles['div1-breSearchBodyPart-style']}>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button className={styles['button0-breSearchBodyPart-style']} onClick={toggle_Arboretum}>
                            Arboretum
                        </button>
                        <div className={styles['div3-breSearchBodyPart-style']}>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Arboretum}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Arboretum}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Arboretum}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Arboretum}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Arboretum}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Arboretum}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Arboretum}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Arboretum}>
                                Button
                            </button>
                        </div>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button className={styles['button0-breSearchBodyPart-style']} onClick={toggle_Fish}>Fish</button>
                        <div className={styles['div3-breSearchBodyPart-style']}>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Fish}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Fish}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Fish}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Fish}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Fish}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Fish}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Fish}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Fish}>
                                Button
                            </button>
                        </div>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button className={styles['button0-breSearchBodyPart-style']} onClick={toggle_GreenHouse}>Green House</button>
                        <div className={styles['div3-breSearchBodyPart-style']}>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_GreenHouse}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_GreenHouse}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_GreenHouse}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_GreenHouse}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_GreenHouse}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_GreenHouse}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_GreenHouse}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_GreenHouse}>
                                Button
                            </button>
                        </div>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button className={styles['button0-breSearchBodyPart-style']} onClick={toggle_Herbarium}>
                            Herbarium
                        </button>
                        <div className={styles['div3-breSearchBodyPart-style']}>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herbarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herbarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herbarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herbarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herbarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herbarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herbarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herbarium}>
                                Button
                            </button>
                        </div>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button className={styles['button0-breSearchBodyPart-style']} onClick={toggle_Herps}>Herps</button>
                        <div className={styles['div3-breSearchBodyPart-style']}>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herps}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herps}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herps}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herps}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herps}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herps}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herps}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Herps}>
                                Button
                            </button>
                        </div>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button className={styles['button0-breSearchBodyPart-style']} onClick={toggle_Insects}>
                            Insects
                        </button>
                        <div className={styles['div3-breSearchBodyPart-style']}>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Insects}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Insects}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Insects}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Insects}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Insects}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Insects}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Insects}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Insects}>
                                Button
                            </button>
                        </div>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button className={styles['button0-breSearchBodyPart-style']} onClick={toggle_Mammals}>
                            Mammals
                        </button>
                        <div className={styles['div3-breSearchBodyPart-style']}>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Mammals}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Mammals}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Mammals}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Mammals}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Mammals}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Mammals}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Mammals}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Mammals}>
                                Button
                            </button>
                        </div>
                    </div>
                    <div className={styles['div2-breSearchBodyPart-style']}>
                        <button className={styles['button0-breSearchBodyPart-style']} onClick={toggle_Vivarium}>
                            Vivarium
                        </button>
                        <div className={styles['div3-breSearchBodyPart-style']}>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Vivarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Vivarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Vivarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Vivarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Vivarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Vivarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Vivarium}>
                                Button
                            </button>
                            <button className={styles['button1-breSearchBodyPart-style']} hidden={bool_Vivarium}>
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
