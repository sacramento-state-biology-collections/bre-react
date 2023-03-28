import styles from './settings.module.scss';
import classNames from 'classnames';

export interface SettingsProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-settingss-and-templates
 */
export const Settings = ({ className, children = 'Settings' }: SettingsProps) => {
    return (
        <div className={classNames(className, styles.root)}>
            <div className={styles.style1}>
                <span>
                    <h1 className={styles.HistoryPage}>
                        History Page
                        <span className={styles.padding}>
                            <button className={styles.setting}>Back</button>
                            <button className={styles.setting}>SETTINGS</button>
                            <span className={styles.user}>LASTNAME, FIRSTNAME</span>
                        </span>
                    </h1>
                </span>
            </div>
            <div className={styles.style2} />
        </div>
    );
};
