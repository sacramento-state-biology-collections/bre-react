import styles from './admin-page-body.module.scss';
import classNames from 'classnames';

export interface AdminPageBodyProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-page-bodys-and-templates
 */
export const AdminPageBody = ({ className, children = 'AdminPageBody' }: AdminPageBodyProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
