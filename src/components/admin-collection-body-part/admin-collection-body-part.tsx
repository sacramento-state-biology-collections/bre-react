import styles from './admin-collection-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_Collection_Body_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-collection-body-parts-and-templates
 */
export const Admin_Collection_Body_Part = ({ className }: Admin_Collection_Body_PartProps) => {
    return <div className={classNames(styles.root, className)}>Admin_Collection_Body_Part</div>;
};
