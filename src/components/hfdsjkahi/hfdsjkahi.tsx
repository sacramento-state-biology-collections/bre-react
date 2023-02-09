import styles from './hfdsjkahi.module.scss';
import classNames from 'classnames';

export interface HfdsjkahiProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-hfdsjkahis-and-templates
 */
export const Hfdsjkahi = ({ className, children = 'Hfdsjkahi' }: HfdsjkahiProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
