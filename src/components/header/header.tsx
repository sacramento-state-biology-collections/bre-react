import styles from './header.module.scss';
import classNames from 'classnames';

export interface HeaderProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-headers-and-templates
 */
export const Header = ({ className, children = 'Header' }: HeaderProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
