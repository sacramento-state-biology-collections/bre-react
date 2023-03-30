import styles from './admin-history-view.module.scss';
import classNames from 'classnames';
import { Admin_History_Header_Part } from '../admin-history-header-part/admin-history-header-part';
import { Admin_History_Body_Part } from '../admin-history-body-part/admin-history-body-part';

export interface AdminHistoryViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-history-views-and-templates
 */
export const AdminHistoryView = ({ className }: AdminHistoryViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Admin_History_Header_Part />
            <Admin_History_Body_Part />
        </div>
    );
};