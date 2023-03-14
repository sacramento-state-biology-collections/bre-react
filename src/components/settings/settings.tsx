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
    return <div className={classNames(styles.root, className)}>{children}</div>;
};