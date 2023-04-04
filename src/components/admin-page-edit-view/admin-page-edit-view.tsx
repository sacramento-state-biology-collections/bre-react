import styles from './admin-page-edit-view.module.scss';
import classNames from 'classnames';
import { Admin_Edit_Header_Part } from '../admin-edit-header-part/admin-edit-header-part';
import { Admin_Edit_Body1_Part } from '../admin-edit-body-1-part/admin-edit-body-1-part';

export interface Admin_Page_Edit_ViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-page-edit-views-and-templates
 */
export const Admin_Page_Edit_View = ({ className }: Admin_Page_Edit_ViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Admin_Edit_Body1_Part />
            <Admin_Edit_Header_Part />
        </div>
    );
};
