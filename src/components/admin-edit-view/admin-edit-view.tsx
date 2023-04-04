import styles from './admin-edit-view.module.scss';
import classNames from 'classnames';
import { Admin_Edit_Header_Part } from '../admin-edit-header-part/admin-edit-header-part';
import { Admin_Edit_Body_Part } from '../admin-edit-body-part/admin-edit-body-part';

export interface AdminEditViewProps {
    className?: string;
    toggle_AdminEditView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-page-edit-views-and-templates
 */
export const AdminEditView = ({ className, toggle_AdminEditView }: AdminEditViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Admin_Edit_Header_Part toggle_AdminEditView={toggle_AdminEditView} />
            <Admin_Edit_Body_Part />
        </div>
    );
};
