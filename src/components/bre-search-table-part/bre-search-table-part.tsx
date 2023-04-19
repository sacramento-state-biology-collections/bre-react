import styles from './bre-search-table-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Table_PartProps {
    className?: string;
    card_Clicked: (item: any) => void;
    object_CollectionData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-table-parts-and-templates
 */
export const Bre_Search_Table_Part = ({
    className,
    card_Clicked,
    object_CollectionData,
}: Bre_Search_Table_PartProps) => {
    function get_Data() {
        return object_CollectionData.map((item: any, index: number) => {
            return (
                <tr className={styles['tr-breSearchTablePart-style']} key={index}>
                    <td>{item.catalog}</td>
                    <td>{item.common_name}</td>
                    <td>{item.scientific_name}</td>
                    <td>{item.prep_type}</td>
                    <td>{item.drawer}</td>
                    <td>
                        <button onClick={() => card_Clicked(item)}>Button</button>
                    </td>
                </tr>
            );
        });
    }

    return (
        <div className={classNames(styles.root, className)}>
            <table className={styles['table-breSearchTablePart-style']}>
                <tbody>
                    <tr className={styles['tr-breSearchTablePart-style']}>
                        <th>Catalog #</th>
                        <th>Common Name</th>
                        <th>Scientific Name</th>
                        <th>Prep Type</th>
                        <th>Drawer #</th>
                        <th>View More</th>
                    </tr>
                    {get_Data()}
                </tbody>
            </table>
        </div>
    );
};
