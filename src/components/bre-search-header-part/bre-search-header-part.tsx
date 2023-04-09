import styles from './bre-search-header-part.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react';

export interface Bre_Search_Header_PartProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_BreSearchBodyPart: () => void;
    bool_BreSearchBodyPart: boolean;
    table_Clicked: () => void;
    update_CollectionName: (CollectionName: string) => void;
    update_SearchCriteria: (SearchCriteria: string) => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-header-parts-and-templates
 */
export const Bre_Search_Header_Part = ({
    className,
    toggle_WelcomeView,
    toggle_BreSearchBodyPart,
    bool_BreSearchBodyPart,
    table_Clicked,
    update_CollectionName,
    update_SearchCriteria,
}: Bre_Search_Header_PartProps) => {
    function run_HeaderEvent() {
        if (bool_BreSearchBodyPart === false) {
            toggle_BreSearchBodyPart();
        }
        update_Props();
        table_Clicked();
    }

    function update_Props() {
        update_CollectionName(
            (document.getElementsByName('collection')[0] as HTMLSelectElement).value
        );
        update_SearchCriteria(
            (document.getElementsByName('searchInput')[0] as HTMLInputElement).value
        );
    }

    useEffect(() => {
        update_Props();
    }, []);
    
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchHeaderPart-style']}>
                <div className={styles['div2-breSearchHeaderPart-Toggle']}>
                    Change Views
                    <button>
                        <img
                            src="https://static.thenounproject.com/png/1055380-200.png"
                            alt="buttonpng"
                            className={classNames(
                                styles['button-breSearchHeader-viewChange'],
                                styles['image-BreSearch-changeView']
                            )}
                        />
                    </button>
                    <button>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/58/58477.png"
                            alt="buttonpng"
                            className={styles['button-breSearchHeader-viewChange']}
                        />
                    </button>
                </div>
                <span className={styles['span-breSearchHeaderPart-style']}>
                    Biology Research Engine
                </span>
                <div className={styles['div1-breSearchHeaderPart-style']}>
                    <button
                        title="Home"
                        className={styles['button-breSearchHeaderPart-style']}
                        onClick={toggle_WelcomeView}
                    >
                        <img
                            alt=""
                            src="Home_Button.svg"
                            className={styles['img-breSearchHeaderPart-style']}
                        />
                    </button>
                    <input
                        name="searchInput"
                        className={styles['input-breSearchHeaderPart-style']}
                        placeholder="Search All"
                        onInput={update_Props}
                    />
                    <select
                        title="Collection"
                        name="collection"
                        className={styles['select-breSearchHeaderPart-style']}
                    >
                        <option>mammals</option>
                        <option>arboretum</option>
                        <option>fish</option>
                        <option>green_house</option>
                        <option>herbarium</option>
                        <option>herps</option>
                        <option>insects</option>
                        <option>vivarium</option>
                    </select>
                    <button
                        title="Search"
                        className={styles['button-breSearchHeaderPart-style']}
                        onClick={run_HeaderEvent}
                    >
                        <img
                            alt=""
                            src="Search_Button.svg"
                            className={styles['img-breSearchHeaderPart-style']}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
