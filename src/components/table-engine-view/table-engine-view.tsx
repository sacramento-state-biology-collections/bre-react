import styles from './table-engine-view.module.scss';
import classNames from 'classnames';
import { Bre_Search_Header_Part } from '../bre-search-header-part/bre-search-header-part';
import { Bre_Search_Table_Part } from '../bre-search-table-part/bre-search-table-part';
import { Bre_Search_Card_Part } from '../bre-search-card-part/bre-search-card-part';
import { Bre_Search_Page_Part } from '../bre-search-page-part/bre-search-page-part';

export interface TableEngineViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-table-engine-views-and-templates
 */
export const TableEngineView = ({ className }: TableEngineViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Bre_Search_Header_Part />
            <Bre_Search_Table_Part />
            <Bre_Search_Card_Part />
            <Bre_Search_Page_Part />
        </div>
    );
};
