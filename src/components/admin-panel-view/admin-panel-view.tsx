import styles from './admin-panel-view.module.scss';
import classNames from 'classnames';

export interface AdminPanelViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-panel-views-and-templates
 */
export const AdminPanelView = ({ className }: AdminPanelViewProps) => {
    return <div className={classNames(styles.root, className)}>AdminPanelView</div>;
};
