import styles from './admin-panel-view.module.scss';
import classNames from 'classnames';
import { Admin_User_Header_Part } from '../admin-user-header-part/admin-user-header-part';
import { Admin_Panel_Body_Part } from '../admin-panel-body-part/admin-panel-body-part';

export interface AdminPanelViewProps {
    className?: string;
    toggle_WelcomeView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-panel-views-and-templates
 */
export const AdminPanelView = ({ className, toggle_WelcomeView }: AdminPanelViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Admin_User_Header_Part toggle_WelcomeView={toggle_WelcomeView} />
            <Admin_Panel_Body_Part />
        </div>
    );
};
