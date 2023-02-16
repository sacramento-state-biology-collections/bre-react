import styles from './table-data-view.module.scss';
import classNames from 'classnames';

export interface TableDataViewProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-table-data-views-and-templates
 */
export const TableDataView = ({ className, children = 'TableDataView' }: TableDataViewProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
