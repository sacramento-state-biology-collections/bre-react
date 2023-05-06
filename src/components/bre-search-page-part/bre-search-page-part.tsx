import styles from './bre-search-page-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Page_PartProps {
    className?: string;
    toggle_SearchPagePart: () => void;
    object_SpecimenData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-page-parts-and-templates
 */
export const Bre_Search_Page_Part = ({
    className,
    toggle_SearchPagePart,
    object_SpecimenData,
}: Bre_Search_Page_PartProps) => {
    function get_Data() {
        const values = Object.values(object_SpecimenData);
        const keys = Object.keys(object_SpecimenData);
        let list = [];
        for (let i = 0; i < values.length; i++) {
            if (keys[i] !== 'common_name') {
                list.push(<li>{get_Point(keys[i], values[i])}</li>);
            }
        }
        return list;
    }
    function get_Point(k: any, v: any) {
        return k + ': ' + v;
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchPagePart-style']}>
                <div className={styles['div1-breSearchPage-style']}>
                    <h1>{object_SpecimenData.common_name}</h1>
                    <ul>{get_Data()}</ul>
                </div>
                <div>
                    <button
                        className={styles['button-breSearchPagePart-style']}
                        onClick={toggle_SearchPagePart}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};
