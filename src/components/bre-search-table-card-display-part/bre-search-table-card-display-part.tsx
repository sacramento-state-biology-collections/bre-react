import styles from './bre-search-table-card-display-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Table_CardDisplay_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-table-card-display-parts-and-templates
 */
export const Bre_Search_Table_CardDisplay_Part = ({
    className,
}: Bre_Search_Table_CardDisplay_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-BreSearchTableCardDisplay-Style']}>
                <div className={styles['div3-BreSearchTableCardDisplayPart-style']}>
                    <button className={styles['btn-BreSearchTableCardDisplayPart-style']}>
                        <div className={styles['div1-BreSearchTableCardDisplayPart-Style']}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                className={styles['img-BreSearchTableCardDisplayPart-Style']}
                            />
                        </div>
                        <div className={styles['div4-SearchTableCardDisplayPart-Style']}>
                            <div className={styles['div2-BreSearchTableCardDisplayPart-style']}>
                                Scientifc Name
                            </div>
                            <div className={styles['div2-BreSearchTableCardDisplayPart-style']}>
                                Common Name{' '}
                            </div>
                        </div>
                    </button>
                    <button className={styles['btn-BreSearchTableCardDisplayPart-style']}>
                        <div className={styles['div1-BreSearchTableCardDisplayPart-Style']}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                className={styles['img-BreSearchTableCardDisplayPart-Style']}
                            />
                        </div>
                        <div className={styles['div4-SearchTableCardDisplayPart-Style']}>
                            <div className={styles['div2-BreSearchTableCardDisplayPart-style']}>
                                Scientifc Name
                            </div>
                            <div className={styles['div2-BreSearchTableCardDisplayPart-style']}>
                                Common Name{' '}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
