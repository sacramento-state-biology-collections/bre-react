import styles from './table-engine-view.module.scss';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { Bre_Search_Header_Part } from '../bre-search-header-part/bre-search-header-part';
import { Bre_Search_Table_Part } from '../bre-search-table-part/bre-search-table-part';
import { Bre_Search_Card_Part } from '../bre-search-card-part/bre-search-card-part';
import { Bre_Search_Page_Part } from '../bre-search-page-part/bre-search-page-part';
import { Bre_Search_Body_Part } from '../bre-search-body-part/bre-search-body-part';

export interface TableEngineViewProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_TableEngineView: () => void;
    update_CollectionData: (CollectionData: any) => void;
    update_CollectionName: (CollectionName: string) => void;
    update_SearchCriteria: (SearchCriteria: string) => void;
    object_CollectionData?: any;
    string_CollectionName?: string;
    string_SearchCriteria?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-table-engine-views-and-templates
 */
export const TableEngineView = ({
    className,
    toggle_WelcomeView,
    toggle_TableEngineView,
    update_CollectionData,
    update_CollectionName,
    update_SearchCriteria,
    object_CollectionData,
    string_CollectionName,
    string_SearchCriteria,
}: TableEngineViewProps) => {
    const [bool_BreSearchHeaderPart, set_BreSearchHeaderPart] = useState(false);
    const [bool_BreSearchBodyPart, set_BreSearchBodyPart] = useState(false);
    const [bool_SearchTablePart, set_SearchTablePart] = useState(true);
    const [bool_SearchCardPart, set_SearchCardPart] = useState(true);
    const [bool_SearchPagePart, set_SearchPagePart] = useState(true);

    function toggle_BreSearchBodyPart() {
        set_BreSearchBodyPart(!bool_BreSearchBodyPart);
    }
    function toggle_SearchCardPart() {
        set_SearchCardPart(!bool_SearchCardPart);
    }
    function toggle_SearchPagePart() {
        if (bool_SearchPagePart === true) {
            set_SearchPagePart(!bool_SearchPagePart);
            set_SearchCardPart(!bool_SearchCardPart);
            set_SearchTablePart(!bool_SearchTablePart);
            set_BreSearchHeaderPart(!bool_BreSearchHeaderPart);
        } else {
            set_SearchPagePart(!bool_SearchPagePart);
            set_SearchCardPart(!bool_SearchCardPart);
            set_SearchTablePart(!bool_SearchTablePart);
            set_BreSearchHeaderPart(!bool_BreSearchHeaderPart);
        }
    }

    function clicked() {
        if (bool_BreSearchBodyPart === false) {
            set_BreSearchBodyPart(true);
            set_SearchTablePart(false);
        }
        fetch('http://50.116.3.37:9001/api/all')
            .then((response) => response.json())
            .then((Data) => {
                update_CollectionData(Data);
            });
    }
    useEffect(() => {
        console.log(object_CollectionData);
    }, [object_CollectionData]);
    function getData() {
        return object_CollectionData;
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div hidden={bool_BreSearchHeaderPart}>
                <Bre_Search_Header_Part
                    toggle_WelcomeView={toggle_WelcomeView}
                    toggle_BreSearchBodyPart={toggle_BreSearchBodyPart}
                    bool_BreSearchBodyPart={bool_BreSearchBodyPart}
                    clicked={clicked}
                    update_CollectionName={update_CollectionName}
                    update_SearchCriteria={update_SearchCriteria}
                />
            </div>
            <div hidden={bool_BreSearchBodyPart}>
                <Bre_Search_Body_Part />
            </div>
            <div hidden={bool_SearchTablePart}>
                <Bre_Search_Table_Part
                    toggle_SearchCardPart={toggle_SearchCardPart}
                    object_CollectionData={object_CollectionData}
                />
            </div>
            <div hidden={bool_SearchCardPart}>
                <Bre_Search_Card_Part
                    toggle_SearchCardPart={toggle_SearchCardPart}
                    toggle_SearchPagePart={toggle_SearchPagePart}
                />
            </div>
            <div hidden={bool_SearchPagePart}>
                <Bre_Search_Page_Part toggle_SearchPagePart={toggle_SearchPagePart} />
            </div>
        </div>
    );
};
