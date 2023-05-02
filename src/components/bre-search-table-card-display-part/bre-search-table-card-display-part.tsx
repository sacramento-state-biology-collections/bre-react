import styles from './bre-search-table-card-display-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Table_CardDisplay_PartProps {
    className?: string;
    card_Clicked: (item: any) => void;
    object_CollectionData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-table-card-display-parts-and-templates
 */
export const Bre_Search_Table_CardDisplay_Part = ({
    className,
    card_Clicked,
    object_CollectionData,
}: Bre_Search_Table_CardDisplay_PartProps) => {
    function get_Data() {
        return object_CollectionData.map((item: any, index: number) => {
            return (
                <button
                    className={styles['btn-BreSearchTableCardDisplayPart-style']}
                    key={index}
                    onClick={() => card_Clicked(item)}
                >
                    <div className={styles['div1-BreSearchTableCardDisplayPart-Style']}>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles['img-BreSearchTableCardDisplayPart-Style']}
                        />
                    </div>
                    <div className={styles['div4-SearchTableCardDisplayPart-Style']}>
                        <div className={styles['div2-BreSearchTableCardDisplayPart-style']}>
                            Common Name: {item.common_name}
                        </div>
                        <div className={styles['div2-BreSearchTableCardDisplayPart-style']}>
                            Scientific Name: {item.scientific_name}
                        </div>
                    </div>
                </button>
            );
        });
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-BreSearchTableCardDisplay-Style']}>
                <div className={styles['div3-BreSearchTableCardDisplayPart-style']}>
                    {get_Data()}
                </div>
            </div>
        </div>
    );
};
