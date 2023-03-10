import styles from './table-engine-view.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { Bre_Search_Header_Part } from '../bre-search-header-part/bre-search-header-part';
import { Bre_Search_Table_Part } from '../bre-search-table-part/bre-search-table-part';
import { Bre_Search_Card_Part } from '../bre-search-card-part/bre-search-card-part';
import { Bre_Search_Page_Part } from '../bre-search-page-part/bre-search-page-part';

export interface TableEngineViewProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_TableEngineView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-table-engine-views-and-templates
 */
export const TableEngineView = ({ className, toggle_WelcomeView, toggle_TableEngineView }: TableEngineViewProps) => {
    const [bool_SearchTablePart, set_SearchTablePart] = useState(false);
    const [bool_SearchCardPart, set_SearchCardPart] = useState(true);
    const [bool_SearchPagePart, set_SearchPagePart] = useState(true);

    function toggle_SearchTablePart() {
        set_SearchTablePart(!bool_SearchTablePart);
    }
    function toggle_SearchCardPart() {
        set_SearchCardPart(!bool_SearchCardPart);
    }
    function toggle_SearchPagePart() {
        set_SearchPagePart(!bool_SearchPagePart);
    }    

    return (
        <div className={classNames(styles.root, className)}>
            <Bre_Search_Header_Part toggle_WelcomeView={toggle_WelcomeView} toggle_TableEngineView={toggle_TableEngineView}/>
            <div hidden={bool_SearchTablePart}><Bre_Search_Table_Part toggle_SearchCardPart={toggle_SearchCardPart}/></div>
            <div hidden={bool_SearchCardPart}><Bre_Search_Card_Part toggle_SearchCardPart={toggle_SearchCardPart} toggle_SearchPagePart={toggle_SearchPagePart}/></div>
            <div hidden={bool_SearchPagePart}><Bre_Search_Page_Part toggle_SearchPagePart={toggle_SearchPagePart}/></div>
        </div>
    );
};
