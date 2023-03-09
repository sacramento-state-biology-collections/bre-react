import styles from './bre-search-table-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Table_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-table-parts-and-templates
 */
export const Bre_Search_Table_Part = ({ className }: Bre_Search_Table_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <table className={styles['table-breSearchTablePart-style']}>
                <tbody>
                    <tr className={styles['tr-breSearchTablePart-style']}>
                        <th>Common Name</th>
                        <th>Scientific Name</th>
                        <th>Prep Type</th>
                        <th>Drawer #</th>
                        <th>View More</th>
                    </tr>
                    <tr className={styles['tr-breSearchTablePart-style']}>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>
                            <button>Button</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
