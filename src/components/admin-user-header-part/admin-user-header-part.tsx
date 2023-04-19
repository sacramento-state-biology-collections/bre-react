import styles from './admin-user-header-part.module.scss';
import classNames from 'classnames';

export interface Admin_User_Header_PartProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_AdminHistoryView: () => void;
    refresh_View: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-user-header-parts-and-templates
 */
export const Admin_User_Header_Part = ({
    className,
    toggle_WelcomeView,
    toggle_AdminHistoryView,
    refresh_View,
}: Admin_User_Header_PartProps) => {
    function return_Home() {
        refresh_View();
        toggle_WelcomeView();
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminUserHeaderPart-style']}>
                <span className={styles['span-AdminUserHeaderPart-style']}>
                    <h1 className={styles['h1-AdminUserHeaderPart-style']}>Admin Panel</h1>
                    <span className={styles['span-AdminUserHeaderPart-style']}>
                        <button
                            className={styles['button-AdminUserHeaderPart-style']}
                            onClick={return_Home}
                        >
                            Home
                        </button>
                        <select
                            className={styles['select-AdminUserHeaderPart-style']}
                            onChange={toggle_AdminHistoryView}
                            name="history"
                        >
                            <option>History</option>
                            <option>Mammals</option>
                            <option>Insects</option>
                            <option>Fish</option>
                            <option>Arboretum</option>
                            <option>Vivarium</option>
                            <option>Green House</option>
                            <option>Herbarium</option>
                            <option>Herps</option>
                        </select>
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
