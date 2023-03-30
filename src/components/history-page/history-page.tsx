import styles from './history-page.module.scss';
import classNames from 'classnames';

export interface HistoryPageProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-history-pages-and-templates
 */
export const HistoryPage = ({ className, children = 'HistoryPage' }: HistoryPageProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
