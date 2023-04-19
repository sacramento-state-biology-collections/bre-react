import styles from './bre-search-header-part.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react';

export interface Bre_Search_Header_PartProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_BreSearchBodyPart: () => void;
    toggle_SearchTablePart: () => void;
    toggle_SearchTableCardPart: () => void;
    toggle_Back: () => void;
    bool_BreSearchBodyPart: boolean;
    bool_Back: boolean;
    can_Search: () => boolean;
    table_Clicked: () => void;
    refresh_View: () => void;
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
    toggle_SearchTablePart,
    toggle_SearchTableCardPart,
    toggle_Back,
    bool_BreSearchBodyPart,
    bool_Back,
    can_Search,
    table_Clicked,
    refresh_View,
    update_CollectionName,
    update_SearchCriteria,
}: Bre_Search_Header_PartProps) => {
    function run_HeaderEvent() {
        if (bool_BreSearchBodyPart === false) {
            toggle_BreSearchBodyPart();
            toggle_Back();
        }
        update_Props();
        table_Clicked();
    }

    function update_Props() {
        update_CollectionName(
            (document.getElementsByName('collection')[0] as HTMLSelectElement).value
                .toLowerCase()
                .replaceAll(' ', '_')
        );
        update_SearchCriteria(
            (document.getElementsByName('searchInput')[0] as HTMLInputElement).value
        );
    }
    function reset_table() {
        refresh_View();
        toggle_WelcomeView();
    }

    useEffect(() => {
        let select = document.getElementsByName('collection')[0] as HTMLSelectElement;
        select.addEventListener('change', update_Props);
    }, []);

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (can_Search()) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    run_HeaderEvent();
                }
                if (event.key === 'Escape') {
                    event.preventDefault();
                    refresh_View();
                }
            }
        };
        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchHeaderPart-style']}>
                <div className={styles['div2-breSearchHeaderPart-Toggle']}>
                    Change Views
                    <button onClick={toggle_SearchTablePart}>
                        <img
                            src="https://static.thenounproject.com/png/1055380-200.png"
                            alt="buttonpng"
                            className={classNames(
                                styles['button-breSearchHeader-viewChange'],
                                styles['image-BreSearch-changeView']
                            )}
                        />
                    </button>
                    <button onClick={toggle_SearchTableCardPart}>
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
                        className={styles['button-breSearchHeaderPart-back']}
                        hidden={bool_Back}
                        onClick={refresh_View}
                    >
                        Back
                    </button>
                    <button
                        title="Home"
                        className={styles['button-breSearchHeaderPart-style']}
                        onClick={reset_table}
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
                        placeholder="Search"
                        onInput={update_Props}
                    />
                    <select
                        title="Collection"
                        name="collection"
                        className={styles['select-breSearchHeaderPart-style']}
                    >
                        <option>Arboretum</option>
                        <option>Fish</option>
                        <option>Green House</option>
                        <option>Herbarium</option>
                        <option>Herps</option>
                        <option>Insects</option>
                        <option>Mammals</option>
                        <option>Vivarium</option>
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
