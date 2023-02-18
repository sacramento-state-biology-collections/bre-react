import styles from './table-view.module.scss';
import classNames from 'classnames';
import { Header } from '../header/header';
import { TableDataView } from '../table-data-view/table-data-view';

export interface TableViewProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-table-views-and-templates
 */
export const TableView = ({ className, children = 'TableView' }: TableViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <TableDataView />
        </div>
    );
};
