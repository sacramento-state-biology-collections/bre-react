import styles from './history-view.module.scss';
import classNames from 'classnames';

export interface HistoryViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-history-views-and-templates
 */
export const HistoryView = ({ className }: HistoryViewProps) => {
    return <div className={classNames(styles.root, className)}>HistoryView</div>;
};
