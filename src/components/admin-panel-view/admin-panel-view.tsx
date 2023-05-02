import styles from './admin-panel-view.module.scss';
import classNames from 'classnames';
import ip_addresses from '../../ip_addresses.json';
import React, { useEffect, useState } from 'react';
import { Admin_User_Header_Part } from '../admin-user-header-part/admin-user-header-part';
import { Admin_Panel_Body_Part } from '../admin-panel-body-part/admin-panel-body-part';
import { Table_Loading_Img_Part } from '../table-loading-img-part/table-loading-img-part';
import { Admin_History_Body_Part } from '../admin-history-body-part/admin-history-body-part';
import { Admin_Edit_Body_Part } from '../admin-edit-body-part/admin-edit-body-part';
import { Admin_Edit_Page_Part } from '../admin-edit-page-part/admin-edit-page-part';

export interface AdminPanelViewProps {
    className?: string;
    toggle_WelcomeView: () => void;
    update_AdminEditData: (AdminEditData: any) => void;
    object_AdminEditData: any;
    update_AdminEditPageData: (AdminEditPageData: any) => void;
    object_AdminEditPageData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-panel-views-and-templates
 */
export const AdminPanelView = ({
    className,
    toggle_WelcomeView,
    update_AdminEditData,
    object_AdminEditData,
    update_AdminEditPageData,
    object_AdminEditPageData,
}: AdminPanelViewProps) => {
    const [bool_AdminPanelView, set_AdminPanelView] = useState(false);
    const [bool_AdminEditView, set_AdminEditView] = useState(true);
    const [bool_AdminHistoryView, set_AdminHistoryView] = useState(true);
    const [bool_Loading, set_Loading] = useState<boolean>(true);
    const [bool_AdminEditPage, set_AdminEditPage] = useState(true);
    const ipAddress = ip_addresses.ip;

    function toggle_LoadingTrue() {
        set_Loading(true);
    }
    function toggle_LoadingFalse() {
        set_Loading(false);
    }
    function toggle_AdminEditView() {
        set_AdminEditView(!bool_AdminEditView);
        set_AdminPanelView(!bool_AdminPanelView);
    }
    function toggle_AdminHistoryView() {
        let select = document.getElementsByName('history')[0] as HTMLSelectElement;
        if (select.value === 'History') {
            set_AdminHistoryView(true);
            set_AdminPanelView(false);
        } else {
            set_AdminHistoryView(false);
            set_AdminPanelView(true);
        }
    }
    function toggle_AdminEditPage(catalog: string) {
        if (catalog !== '') {
            fetch(
                `http://${ipAddress}:9001/api/${object_AdminEditData[0]['collection']}_collection/catalog/${catalog}`
            )
                .then((res) => res.json())
                .then((data) => {
                    update_AdminEditPageData(data);
                });
        }
        if (catalog === 'hide-AdminEditBodyPart') {
            set_AdminPanelView(false);
            set_AdminEditView(true);
        } else if (bool_AdminEditPage) {
            set_AdminEditPage(false);
            set_AdminEditView(true);
        } else {
            set_AdminEditPage(true);
            set_AdminEditView(false);
        }
    }
    function refresh_View() {
        set_AdminPanelView(false);
        set_AdminEditView(true);
        set_AdminHistoryView(true);
        set_AdminEditPage(true);
    }

    // write a useeffect to toggle history view when ever the select tag changes
    useEffect(() => {
        let select = document.getElementsByName('history')[0] as HTMLSelectElement;
        select.addEventListener('change', refresh_View);
    }, []);

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && bool_AdminPanelView) {
                event.preventDefault();
                refresh_View();
            }
        };
        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });

    return (
        <div className={classNames(styles.root, className)}>
            <div hidden={bool_Loading}>
                <Table_Loading_Img_Part />
            </div>
            <div>
                <Admin_User_Header_Part
                    toggle_WelcomeView={toggle_WelcomeView}
                    toggle_AdminHistoryView={toggle_AdminHistoryView}
                    refresh_View={refresh_View}
                />
            </div>
            <div hidden={bool_AdminPanelView}>
                <Admin_Panel_Body_Part
                    toggle_LoadingTrue={toggle_LoadingTrue}
                    toggle_LoadingFalse={toggle_LoadingFalse}
                    toggle_AdminEditView={toggle_AdminEditView}
                    update_AdminEditData={update_AdminEditData}
                    ipAddress={ipAddress}
                />
            </div>
            <div hidden={bool_AdminHistoryView}>
                <Admin_History_Body_Part />
            </div>
            <div hidden={bool_AdminEditView}>
                <Admin_Edit_Body_Part
                    object_AdminEditData={object_AdminEditData}
                    toggle_AdminEditPage={toggle_AdminEditPage}
                />
            </div>
            <div hidden={bool_AdminEditPage}>
                <Admin_Edit_Page_Part
                    toggle_AdminEditPage={toggle_AdminEditPage}
                    object_AdminEditPageData={object_AdminEditPageData}
                />
            </div>
        </div>
    );
};
