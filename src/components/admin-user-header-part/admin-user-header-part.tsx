import styles from './admin-user-header-part.module.scss';
import classNames from 'classnames';
import AdminPanelBodyPart_module from '../admin-panel-body-part/admin-panel-body-part.module.scss';

export interface Admin_User_Header_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-user-header-parts-and-templates
 */
export const Admin_User_Header_Part = ({ className }: Admin_User_Header_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminUserHeaderPart-style']}>
                <span className={styles['span-AdminUserHeaderPart-style']}>
                    <h1 className={styles['h1-AdminUserHeaderPart-style']}>Admin Panel</h1>
                    <span className={styles['span-AdminUserHeaderPart-style']}>
                        <button className={styles['button-AdminUserHeaderPart-style']}>Home</button>
                        <button className={styles['button-AdminUserHeaderPart-style']}>
                            Settings
                        </button>
                        <span className={styles['span1-AdminUserHeaderPart-style']}>
                            LASTNAME, FIRSTNAME
                        </span>
                    </span>
                </span>
            </div>
            <div className={styles['div1-AdminUserHeaderPart-style']} />
        </div>
    );
};
