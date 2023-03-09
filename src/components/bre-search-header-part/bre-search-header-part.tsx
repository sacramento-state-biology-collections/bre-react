import styles from './bre-search-header-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Header_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-header-parts-and-templates
 */
export const Bre_Search_Header_Part = ({ className }: Bre_Search_Header_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchHeaderPart-style']}>
                <span className={styles['span-breSearchHeaderPart-style']}>
                    Biology Research Engine
                </span>
                <div className={styles['div1-breSearchHeaderPart-style']}>
                    <button className={styles['button-breSearchHeaderPart-style']}>
                        <img
                            src="../styles/Home_Button.svg"
                            className={styles['img-breSearchHeaderPart-style']}
                        />
                    </button>
                    <input
                        className={styles['input-breSearchHeaderPart-style']}
                        placeholder="Search All"
                    />
                    <select className={styles['select-breSearchHeaderPart-style']}>
                        <option>All</option>
                        <option>Arboretum</option>
                        <option>Fish</option>
                        <option>Green House</option>
                        <option>Herbarium</option>
                        <option>Herps</option>
                        <option>Insects</option>
                        <option>Mammals</option>
                        <option>Vivarium</option>
                    </select>
                    <button className={styles['button-breSearchHeaderPart-style']}>
                        <img
                            src="../styles/Search_Button.svg"
                            className={styles['img-breSearchHeaderPart-style']}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
