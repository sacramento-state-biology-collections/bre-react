import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { TableEngineView } from './components/table-engine-view/table-engine-view';
import { AdminLoginView } from './components/admin-login-view/admin-login-view';
import { AdminPanelView } from './components/admin-panel-view/admin-panel-view';

function App() {
    const [bool_WelcomeView, set_WelcomeView] = useState(false);
    const [bool_TableEngineView, set_TableEngineView] = useState(true);
    const [bool_AdminLoginView, set_AdminLoginView] = useState(true);
    const [bool_AdminPanelView, set_AdminPanelView] = useState(true);
    const [object_CollectionData, set_CollectionData] = useState([]);
    const [object_CardData, set_CardData] = useState([]);
    const [object_SpecimenData, set_SpecimenData] = useState([]);
    const [string_CollectionName, set_CollectionName] = useState('');
    const [string_SearchCriteria, set_SearchCriteria] = useState('');
    const [object_LoginData, set_LoginData] = useState({});
    const [object_AdminEditData, set_AdminEditData] = useState([]);

    function toggle_WelcomeView() {
        if (bool_AdminPanelView === false) {
            set_AdminPanelView(!bool_AdminPanelView);
        }
        if (bool_TableEngineView === false) {
            set_TableEngineView(!bool_TableEngineView);
        }
        if (bool_AdminLoginView === false) {
            set_AdminLoginView(!bool_AdminLoginView);
        }
        set_WelcomeView(!bool_WelcomeView);
    }

    function toggle_TableEngineView() {
        set_WelcomeView(!bool_WelcomeView);
        set_TableEngineView(!bool_TableEngineView);
    }

    function toggle_AdminLoginView() {
        set_WelcomeView(!bool_WelcomeView);
        set_AdminLoginView(!bool_AdminLoginView);
    }

    function toggle_AdminPanelView() {
        set_AdminLoginView(!bool_AdminLoginView);
        set_AdminPanelView(!bool_AdminPanelView);
    }

    function update_CollectionData(CollectionData: any) {
        set_CollectionData(CollectionData);
    }

    function update_CardData(CardData: any) {
        set_CardData(CardData);
    }

    function update_SpecimenData(SpecimenData: any) {
        set_SpecimenData(SpecimenData);
    }

    function update_AdminEditData(AdminEditData: any) {
        set_AdminEditData(AdminEditData);
    }

    function update_CollectionName(CollectionName: string) {
        set_CollectionName(CollectionName);
    }

    function update_SearchCriteria(SearchCriteria: string) {
        set_SearchCriteria(SearchCriteria);
    }

    function update_LoginData(LoginData: any): Promise<void> {
        set_LoginData(LoginData);
        return Promise.resolve();
    }

    function get_LoginData() {
        return object_LoginData;
    }

    function handleVisibleContent() {
        return (
            <div>
                <div hidden={bool_WelcomeView}>
                    <WelcomeView
                        toggle_TableEngineView={toggle_TableEngineView}
                        toggle_AdminLoginView={toggle_AdminLoginView}
                    />
                </div>
                <div hidden={bool_TableEngineView}>
                    <TableEngineView
                        toggle_WelcomeView={toggle_WelcomeView}
                        bool_TableEngineView={bool_TableEngineView}
                        update_CollectionData={update_CollectionData}
                        update_CardData={update_CardData}
                        update_SpecimenData={update_SpecimenData}
                        update_CollectionName={update_CollectionName}
                        update_SearchCriteria={update_SearchCriteria}
                        object_CollectionData={object_CollectionData}
                        object_CardData={object_CardData}
                        object_SpecimenData={object_SpecimenData}
                        string_CollectionName={string_CollectionName}
                        string_SearchCriteria={string_SearchCriteria}
                    />
                </div>
                <div hidden={bool_AdminLoginView}>
                    <AdminLoginView
                        toggle_WelcomeView={toggle_WelcomeView}
                        toggle_AdminPanelView={toggle_AdminPanelView}
                        update_LoginData={update_LoginData}
                        get_LoginData={get_LoginData}
                    />
                </div>
                <div hidden={bool_AdminPanelView}>
                    <AdminPanelView
                        toggle_WelcomeView={toggle_WelcomeView}
                        update_AdminEditData={update_AdminEditData}
                        object_AdminEditData={object_AdminEditData}
                    />
                </div>
            </div>
        );
    }

    return handleVisibleContent();
}

export default App;
