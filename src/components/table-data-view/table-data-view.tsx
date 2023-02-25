import styles from './table-data-view.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export interface TableDataViewProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-table-data-views-and-templates
 */

export const TableDataView = ({ className }: TableDataViewProps) => {

    return <div className={classNames(styles.root, className)}>
        <table className={styles.TableMainClass}>
                <li className={styles.PlaceholderItems}>Common Name</li>
                <li className={styles.PlaceholderItems}>Scientific Name</li>
                <li className={styles.PlaceholderItems}>Prep Type</li>
                <li className={styles.PlaceholderItems}>Drawer #</li>
                <li className={styles.PlaceholderItems}> </li>
            </table>
            <tr className={styles.TableRow}>
                <li className={styles.TableRowItem}>Item</li>
                <li className={styles.TableRowItem}>Item</li>
                <li className={styles.TableRowItem}>Item</li>
                <li className={styles.TableRowItem}>Item</li>
                <li className={styles.TableRowItem}>
                    <button className={styles.PreviewButtonStyles}>Preview</button>
                </li>
            </tr>
    </div>;
};
