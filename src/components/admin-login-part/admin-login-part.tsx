import styles from './admin-login-part.module.scss';
import classNames from 'classnames';

export interface Admin_Login_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-login-parts-and-templates
 */
export const Admin_Login_Part = ({ className }: Admin_Login_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div-AdminLoginView-style']}>
                <form className={styles['form-AdminLoginView-style']}>
                    <label className={styles['label-AdminLoginView-style']}>Key</label>
                    <input className={styles['input-AdminLoginView-style']} title="key" />
                    <label className={styles['label-AdminLoginView-style']}>Username</label>
                    <input className={styles['input-AdminLoginView-style']} title="username" />
                    <label className={styles['label-AdminLoginView-style']}>Password</label>
                    <input
                        type="password"
                        className={styles['input-AdminLoginView-style']}
                        title="password"
                    />
                    <button className={styles['button-AdminLoginView-style']}>Login</button>
                </form>
            </div>
        </div>
    );
};
