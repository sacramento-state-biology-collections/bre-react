import styles from './table-data-view.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { CardView } from '../card-view/card-view';

export interface TableDataViewProps {
    className?: string;
    children?: React.ReactNode;
    toggleView: (nextView: string) => void;
    getData: () => any[];
    toggleCardBool: () => void;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-table-data-views-and-templates
 */

export const TableDataView = ({className, getData, toggleView, toggleCardBool}: TableDataViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <table className={styles.TableMainClass}>
                <li className={styles.PlaceholderItems}>Common Name</li>
                <li className={styles.PlaceholderItems}>Scientific Name</li>
                <li className={styles.PlaceholderItems}>Prep Type</li>
                <li className={styles.PlaceholderItems}>Drawer #</li>
                <li className={styles.PlaceholderItems}> </li>
            </table>
            {getData().map((item) => {
                return (
                    <tr className={styles.TableRow}>
                        <li className={styles.TableRowItem}>{item.common_name}</li>
                        <li className={styles.TableRowItem}>{item.scientific_name}</li>
                        <li className={styles.TableRowItem}>{item.prep_type}</li>
                        <li className={styles.TableRowItem}>{item.drawer_number}</li>
                        <li className={styles.TableRowItem}>
                            <button className={styles.PreviewButtonStyles} onClick={toggleCardBool}>Preview</button>
                        </li>
                    </tr>
                );
            })}
        </div>
    );
};
