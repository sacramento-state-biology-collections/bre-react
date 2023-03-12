import styles from './admin-header-part.module.scss';
import classNames from 'classnames';

export interface Admin_Header_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-header-parts-and-templates
 */
export const Admin_Header_Part = ({ className }: Admin_Header_PartProps) => {
    return <div className={classNames(styles.root, className)}>Admin_Header_Part</div>;
};
