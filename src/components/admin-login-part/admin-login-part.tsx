import { useEffect } from 'react';
import styles from './admin-login-part.module.scss';
import classNames from 'classnames';

export interface Admin_Login_PartProps {
    className?: string;
    update_LoginData: (LoginData: any) => Promise<void>;
    attempt_Login: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-login-parts-and-templates
 */
export const Admin_Login_Part = ({
    className,
    update_LoginData,
    attempt_Login,
}: Admin_Login_PartProps) => {
    function start_Login() {
        let data = {
            key: (document.getElementsByName('key')[0] as HTMLInputElement).value,
            username: (document.getElementsByName('username')[0] as HTMLInputElement).value,
            password: (document.getElementsByName('password')[0] as HTMLInputElement).value,
        };
        update_LoginData(data).finally(() => attempt_Login());
    }

    useEffect(() => {
        let key = document.getElementsByName('key')[0] as HTMLInputElement;
        let username = document.getElementsByName('username')[0] as HTMLInputElement;
        let password = document.getElementsByName('password')[0] as HTMLInputElement;
        key.addEventListener('input', () => {
            let data = {
                key: key.value,
                username: username.value,
                password: password.value,
            };
            update_LoginData(data);
        });
        username.addEventListener('input', () => {
            let data = {
                key: key.value,
                username: username.value,
                password: password.value,
            };
            update_LoginData(data);
        });
        password.addEventListener('input', () => {
            let data = {
                key: key.value,
                username: username.value,
                password: password.value,
            };
            update_LoginData(data);
        });
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div-AdminLoginView-style']}>
                <div className={styles['form-AdminLoginView-style']}>
                    <label className={styles['label-AdminLoginView-style']}>Key</label>
                    <input
                        className={styles['input-AdminLoginView-style']}
                        title="key"
                        name="key"
                    />
                    <label className={styles['label-AdminLoginView-style']}>Username</label>
                    <input
                        className={styles['input-AdminLoginView-style']}
                        title="username"
                        name="username"
                    />
                    <label className={styles['label-AdminLoginView-style']}>Password</label>
                    <input
                        type="password"
                        className={styles['input-AdminLoginView-style']}
                        title="password"
                        name="password"
                    />
                    <div className={styles['div1-AdminLoginView-style']}>
                        <button
                            className={styles['button-AdminLoginView-style']}
                            onClick={start_Login}
                        >
                            Return
                        </button>
                        <button
                            className={styles['button-AdminLoginView-style']}
                            onClick={start_Login}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
