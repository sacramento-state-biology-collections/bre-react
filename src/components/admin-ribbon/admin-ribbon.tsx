import styles from './admin-ribbon.module.scss';
import classNames from 'classnames';

export interface AdminRibbonProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-ribbons-and-templates
 */
export const AdminRibbon = ({ className, children = 'AdminRibbon' }: AdminRibbonProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
