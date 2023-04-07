import styles from './admin-panel-view.module.scss';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Admin_User_Header_Part } from '../admin-user-header-part/admin-user-header-part';
import { Admin_Panel_Body_Part } from '../admin-panel-body-part/admin-panel-body-part';
import { Table_Loading_Img_Part } from '../table-loading-img-part/table-loading-img-part';
import { Admin_History_Body_Part } from '../admin-history-body-part/admin-history-body-part';
import { Admin_Edit_Body_Part } from '../admin-edit-body-part/admin-edit-body-part';

export interface AdminPanelViewProps {
    className?: string;
    toggle_WelcomeView: () => void;
    toggle_AdminEditView: () => void;
    toggle_AdminHistoryView: () => void;
    bool_AdminHistoryView: boolean;
    bool_AdminEditView: boolean;
    update_AdminEditData: (AdminEditData: any) => void;
    object_AdminEditData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-panel-views-and-templates
 */
export const AdminPanelView = ({
    className,
    toggle_WelcomeView,
    toggle_AdminEditView,
    toggle_AdminHistoryView,
    bool_AdminHistoryView,
    bool_AdminEditView,
    update_AdminEditData,
    object_AdminEditData,
}: AdminPanelViewProps) => {
    const [bool_Loading, set_Loading] = useState<boolean>(true);

    function toggle_LoadingTrue() {
        set_Loading(true);
    }
    function toggle_LoadingFalse() {
        set_Loading(false);
    }

    function toggle_HistoryView() {
        toggle_AdminHistoryView();
    }

    // write a useeffect to toggle history view when ever the select tag changes
    useEffect(() => {
        let select = document.getElementsByName('history')[0] as HTMLSelectElement;
        select.addEventListener('change', toggle_HistoryView);
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            <div hidden={bool_Loading}>
                <Table_Loading_Img_Part />
            </div>
            <Admin_User_Header_Part
                toggle_WelcomeView={toggle_WelcomeView}
                toggle_AdminHistoryView={toggle_AdminHistoryView}
            />
            <Admin_Panel_Body_Part
                toggle_LoadingTrue={toggle_LoadingTrue}
                toggle_LoadingFalse={toggle_LoadingFalse}
                toggle_AdminEditView={toggle_AdminEditView}
                update_AdminEditData={update_AdminEditData}
            />
            <div hidden={bool_AdminHistoryView}>
                <Admin_History_Body_Part />
            </div>
            <div hidden={bool_AdminEditView}>
                <Admin_Edit_Body_Part object_AdminEditData={object_AdminEditData} />
            </div>
        </div>
    );
};
