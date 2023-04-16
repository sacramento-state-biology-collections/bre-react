import styles from './table-engine-view.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { Bre_Search_Header_Part } from '../bre-search-header-part/bre-search-header-part';
import { Bre_Search_Table_Part } from '../bre-search-table-part/bre-search-table-part';
import { Bre_Search_Table_CardDisplay_Part } from '../bre-search-table-card-display-part/bre-search-table-card-display-part';
import { Bre_Search_Card_Part } from '../bre-search-card-part/bre-search-card-part';
import { Bre_Search_Page_Part } from '../bre-search-page-part/bre-search-page-part';
import { Bre_Search_Body_Part } from '../bre-search-body-part/bre-search-body-part';

export interface TableEngineViewProps {
    className?: string;
    toggle_WelcomeView: () => void;
    bool_TableEngineView?: boolean;
    update_CollectionData: (CollectionData: any) => void;
    update_CardData: (CardData: any) => void;
    update_SpecimenData: (Specimen: any) => void;
    update_CollectionName: (CollectionName: string) => void;
    update_SearchCriteria: (SearchCriteria: string) => void;
    object_CollectionData?: any;
    object_CardData?: any;
    object_SpecimenData?: any;
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
    bool_TableEngineView,
    update_CollectionData,
    update_CardData,
    update_SpecimenData,
    update_CollectionName,
    update_SearchCriteria,
    object_CollectionData,
    object_CardData,
    object_SpecimenData,
    string_CollectionName,
    string_SearchCriteria,
}: TableEngineViewProps) => {
    const [bool_BreSearchHeaderPart, set_BreSearchHeaderPart] = useState(false);
    const [bool_BreSearchBodyPart, set_BreSearchBodyPart] = useState(false);
    const [bool_SearchTablePart, set_SearchTablePart] = useState(true);
    const [bool_SearchTableCardPart, set_SearchTableCardPart] = useState(true);
    const [bool_SearchCardPart, set_SearchCardPart] = useState(true);
    const [bool_SearchPagePart, set_SearchPagePart] = useState(true);
    const [bool_CurrentSearch, set_CurrentSearch] = useState(true);

    function toggle_BreSearchBodyPart() {
        set_BreSearchBodyPart(!bool_BreSearchBodyPart);
        if (bool_BreSearchBodyPart) {
            set_SearchTableCardPart(true);
            set_SearchTableCardPart(true);
        }
    }
    function toggle_SearchCardPart() {
        set_SearchCardPart(!bool_SearchCardPart);
    }
    function toggle_SearchPagePart() {
        set_SearchPagePart(!bool_SearchPagePart);
        set_SearchCardPart(!bool_SearchCardPart);
        if (!bool_SearchPagePart) {
            toggle_Search();
        } else {
            set_SearchTableCardPart(true);
            set_SearchTablePart(true);
        }
        set_BreSearchHeaderPart(!bool_BreSearchHeaderPart);
    }
    function toggle_SearchTablePart() {
        if (bool_BreSearchBodyPart) {
            set_SearchTablePart(false);
            set_SearchTableCardPart(true);
        }
        set_CurrentSearch(true);
    }
    function toggle_SearchTableCardPart() {
        if (bool_BreSearchBodyPart) {
            set_SearchTablePart(true);
            set_SearchTableCardPart(false);
        }
        set_CurrentSearch(false);
    }
    function toggle_Search() {
        if (bool_CurrentSearch) {
            set_SearchTablePart(false);
            set_SearchTableCardPart(true);
        } else {
            set_SearchTablePart(true);
            set_SearchTableCardPart(false);
        }
    }
    function can_Search() {
        return !bool_BreSearchHeaderPart && !bool_TableEngineView;
    }
    function refresh_View() {
        set_BreSearchBodyPart(false);
        set_SearchTablePart(true);
        set_SearchTableCardPart(true);
        set_SearchCardPart(true);
    }

    function click_QuickSearch(collection: String) {
        update_CollectionData([]);
        if (bool_BreSearchBodyPart === false) {
            set_BreSearchBodyPart(true);
            toggle_Search();
        }
        fetch(`http://127.0.0.1:9001/api/${collection}_collection`)
            .then((response) => response.json())
            .then((Data) => {
                update_CollectionData(Data);
            });
    }

    function table_Clicked() {
        update_CollectionData([]);
        if (bool_BreSearchBodyPart === false) {
            set_BreSearchBodyPart(true);
            toggle_Search();
        }
        fetch(
            `http://127.0.0.1:9001/api/${string_CollectionName}_collection/${string_SearchCriteria}`
        )
            .then((response) => response.json())
            .then((Data) => {
                update_CollectionData(Data);
            });
    }

    function card_Clicked(specimen: any) {
        update_CardData(specimen);

        toggle_SearchCardPart();
    }

    function page_Clicked() {
        update_SpecimenData(object_CardData);

        toggle_SearchPagePart();
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div hidden={bool_BreSearchHeaderPart}>
                <Bre_Search_Header_Part
                    toggle_WelcomeView={toggle_WelcomeView}
                    toggle_BreSearchBodyPart={toggle_BreSearchBodyPart}
                    toggle_SearchTablePart={toggle_SearchTablePart}
                    toggle_SearchTableCardPart={toggle_SearchTableCardPart}
                    bool_BreSearchBodyPart={bool_BreSearchBodyPart}
                    can_Search={can_Search}
                    table_Clicked={table_Clicked}
                    refresh_View={refresh_View}
                    update_CollectionName={update_CollectionName}
                    update_SearchCriteria={update_SearchCriteria}
                />
            </div>
            <div hidden={bool_BreSearchBodyPart}>
                <Bre_Search_Body_Part click_QuickSearch={click_QuickSearch} />
            </div>
            <div hidden={bool_SearchTablePart}>
                <Bre_Search_Table_Part
                    card_Clicked={card_Clicked}
                    object_CollectionData={object_CollectionData}
                />
            </div>
            <div hidden={bool_SearchTableCardPart}>
                <Bre_Search_Table_CardDisplay_Part
                    card_Clicked={card_Clicked}
                    object_CollectionData={object_CollectionData}
                />
            </div>
            <div hidden={bool_SearchCardPart}>
                <Bre_Search_Card_Part
                    toggle_SearchCardPart={toggle_SearchCardPart}
                    page_Clicked={page_Clicked}
                    object_CardData={object_CardData}
                />
            </div>
            <div hidden={bool_SearchPagePart}>
                <Bre_Search_Page_Part
                    toggle_SearchPagePart={toggle_SearchPagePart}
                    object_SpecimenData={object_SpecimenData}
                />
            </div>
        </div>
    );
};
