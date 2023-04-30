import styles from './admin-edit-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_Edit_Body_PartProps {
    className?: string;
    object_AdminEditData: any;
    toggle_AdminEditPage: (catalog: string) => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-edit-header-parts-and-templates
 */
export const Admin_Edit_Body_Part = ({
    className,
    object_AdminEditData,
    toggle_AdminEditPage,
}: Admin_Edit_Body_PartProps) => {
    function getData() {
        return object_AdminEditData.map((item: any, index: number) => {
            return (
                <tr className={styles['tr-AdminEditBodyPart-style']} key={index}>
                    <td>{item.catalog}</td>
                    <td>{item.common_name}</td>
                    <td>
                        <button onClick={() => toggle_AdminEditPage(item.catalog)}>Modify</button>
                    </td>
                </tr>
            );
        });
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminEditBodyPart-style']}>
                <button onClick={() => toggle_AdminEditPage('hide-AdminEditBodyPart')}>back</button>
                <table className={styles['table-AdminEditBodyPart-style']}>
                    <tbody>
                        <tr className={styles['tr-AdminEditBodyPart-style']}>
                            <th>Catalog</th>
                            <th>Common Name</th>
                            <th>Modify</th>
                        </tr>
                        {getData()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
