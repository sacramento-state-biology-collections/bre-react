import styles from './login-ribbon.module.scss';
import classNames from 'classnames';

export interface LoginRibbonProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-login-ribbons-and-templates
 */
export const LoginRibbon = ({ className = 'LoginRibbon' }: LoginRibbonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.RootLoginRibbon}>
                <h1 className={styles.LoginRibbonH1}>Biology Research Engine (BRE)</h1>
                <button className={styles.LoginRibbonBtn}>Login</button>
            </div>
        </div>
    );
};
