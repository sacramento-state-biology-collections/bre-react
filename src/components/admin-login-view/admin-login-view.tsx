import styles from './admin-login-view.module.scss';
import classNames from 'classnames';
import { Admin_Body_Part } from '../admin-body-part/admin-body-part';

export interface AdminLoginViewProps {
    className?: string;
    toggle_AdminPanelView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-login-views-and-templates
 */
export const AdminLoginView = ({ className, toggle_AdminPanelView }: AdminLoginViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Admin_Body_Part toggle_AdminPanelView={toggle_AdminPanelView} />
        </div>
    );
};
