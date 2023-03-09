import styles from './admin-panel-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_Panel_Body_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-panel-body-parts-and-templates
 */
export const Admin_Panel_Body_Part = ({ className }: Admin_Panel_Body_PartProps) => {
    return <div className={classNames(styles.root, className)}>Admin_Panel_Body_Part</div>;
};
