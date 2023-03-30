import styles from './admin-login-view.module.scss';
import classNames from 'classnames';

export interface AdminLoginViewProps {
    className?: string;
    toggle_AdminPanelView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-login-views-and-templates
 */
export const AdminLoginView = ({ className, toggle_AdminPanelView }: AdminLoginViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div-AdminLoginView-style']}>
                <form className={styles['form-AdminLoginView-style']}>
                    <label className={styles['label-AdminLoginView-style']}>Username</label>
                    <input className={styles['input-AdminLoginView-style']} />
                    <label className={styles['label-AdminLoginView-style']}>Password</label>
                    <input type="password" className={styles['input-AdminLoginView-style']} />
                    <button className={styles['button-AdminLoginView-style']}>Login</button>
                </form>
            </div>
        </div>
    );
};
