import styles from './bre-search-card-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Card_PartProps {
    className?: string;
    toggle_SearchCardPart: () => void;
    toggle_SearchPagePart: () => void;
    object_SpecimenData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-card-parts-and-templates
 */
export const Bre_Search_Card_Part = ({
    className,
    toggle_SearchCardPart,
    toggle_SearchPagePart,
    object_SpecimenData,
}: Bre_Search_Card_PartProps) => {
    function get_Data() {
        return (
            <div>
                <h1>{object_SpecimenData.common_name}</h1>
                <ul>
                    <li>{object_SpecimenData.scientific_name}</li>
                    <li>{object_SpecimenData.prep_type}</li>
                    <li>{object_SpecimenData.drawer}</li>
                </ul>
            </div>
        );
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchCardPart-style']}>
                <div className={styles['div1-breSearchCardPart-style']}>
                    <div>
                        <img
                            alt="image"
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        />
                    </div>
                    {get_Data()}
                </div>
                <div className={styles['div2-breSearchCardPart-style']}>
                    <button
                        className={styles['button0-breSearchCardPart-style']}
                        onClick={toggle_SearchCardPart}
                    >
                        X
                    </button>
                    <button
                        className={styles['button1-breSearchCardPart-style']}
                        onClick={toggle_SearchPagePart}
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};
