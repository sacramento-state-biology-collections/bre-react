import styles from './admin-edit-view.module.scss';
import classNames from 'classnames';
import { Admin_Edit_Header_Part } from '../admin-edit-header-part/admin-edit-header-part';
import { Admin_Edit_Body_Part } from '../admin-edit-body-part/admin-edit-body-part';

export interface Admin_Edit_ViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-page-edit-views-and-templates
 */
export const Admin_Page_Edit_View = ({ className }: Admin_Edit_ViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Admin_Edit_Body_Part />
            <Admin_Edit_Header_Part />
        </div>
    );
};
