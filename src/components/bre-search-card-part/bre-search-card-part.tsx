import styles from './bre-search-card-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Card_PartProps {
    className?: string;
    toggle_SearchCardPart: () => void;
    toggle_SearchPagePart: () => void;
    page_Clicked: () => void;
    object_CardData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-card-parts-and-templates
 */
export const Bre_Search_Card_Part = ({
    className,
    toggle_SearchCardPart,
    toggle_SearchPagePart,
    page_Clicked,
    object_CardData,
}: Bre_Search_Card_PartProps) => {
    function get_Data() {
        return (
            <div>
                <h1>{object_CardData.common_name}</h1>
                <ul>
                    <li>{object_CardData.scientific_name}</li>
                    <li>{object_CardData.prep_type}</li>
                    <li>{object_CardData.drawer}</li>
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
                        onClick={page_Clicked}
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};
