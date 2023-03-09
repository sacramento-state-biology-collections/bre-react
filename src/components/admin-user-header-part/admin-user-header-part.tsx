import styles from './admin-user-header-part.module.scss';
import classNames from 'classnames';

export interface Admin_User_Header_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-user-header-parts-and-templates
 */
export const Admin_User_Header_Part = ({ className }: Admin_User_Header_PartProps) => {
    return <div className={classNames(styles.root, className)}>Admin_User_Header_Part</div>;
};
