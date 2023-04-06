import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { TableEngineView } from './components/table-engine-view/table-engine-view';
import { AdminLoginView } from './components/admin-login-view/admin-login-view';
import { AdminPanelView } from './components/admin-panel-view/admin-panel-view';
import { AdminCollectionView } from './components/admin-collection-view/admin-collection-view';
import { AdminEditView } from './components/admin-edit-view/admin-edit-view';
import { AdminHistoryView } from './components/admin-history-view/admin-history-view';

function App() {
    const [bool_WelcomeView, set_WelcomeView] = useState(false);
    const [bool_TableEngineView, set_TableEngineView] = useState(true);
    const [bool_AdminLoginView, set_AdminLoginView] = useState(true);
    const [bool_AdminPanelView, set_AdminPanelView] = useState(true);
    const [bool_AdminCollectionView, set_AdminCollectionView] = useState(true);
    const [bool_AdminEditView, set_AdminEditView] = useState(true);
    const [bool_AdminHistoryView, set_AdminHistoryView] = useState(true);
    const [object_CollectionData, set_CollectionData] = useState([]);
    const [string_CollectionName, set_CollectionName] = useState('');
    const [string_SearchCriteria, set_SearchCriteria] = useState('');

    function toggle_WelcomeView() {
        if (bool_AdminPanelView === false) {
            set_AdminPanelView(!bool_AdminPanelView);
        }
        if (bool_TableEngineView === false) {
            set_TableEngineView(!bool_TableEngineView);
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

    function toggle_AdminCollectionView() {
        set_AdminCollectionView(!bool_AdminCollectionView);
    }

    function toggle_AdminEditView() {
        set_AdminPanelView(!bool_AdminPanelView);
        set_AdminEditView(!bool_AdminEditView);
    }

    function toggle_AdminHistoryView() {
        set_AdminPanelView(!bool_AdminPanelView);
        set_AdminHistoryView(!bool_AdminHistoryView);
    }

    function update_CollectionData(CollectionData: any) {
        set_CollectionData(CollectionData);
    }

    function update_CollectionName(CollectionName: string) {
        set_CollectionName(CollectionName);
    }

    function update_SearchCriteria(SearchCriteria: string) {
        set_SearchCriteria(SearchCriteria);
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
                        toggle_TableEngineView={toggle_TableEngineView}
                        update_CollectionData={update_CollectionData}
                        update_CollectionName={update_CollectionName}
                        update_SearchCriteria={update_SearchCriteria}
                        object_CollectionData={object_CollectionData}
                        string_CollectionName={string_CollectionName}
                        string_SearchCriteria={string_SearchCriteria}
                    />
                </div>
                <div hidden={bool_AdminLoginView}>
                    <AdminLoginView toggle_AdminPanelView={toggle_AdminPanelView} />
                </div>
                <div hidden={bool_AdminPanelView}>
                    <AdminPanelView
                        toggle_WelcomeView={toggle_WelcomeView}
                        toggle_AdminEditView={toggle_AdminEditView}
                        toggle_AdminHistoryView={toggle_AdminHistoryView}
                    />
                </div>
                <div hidden={bool_AdminCollectionView}>
                    <AdminCollectionView />
                </div>
                <div hidden={bool_AdminEditView}>
                    <AdminEditView toggle_AdminEditView={toggle_AdminEditView} />
                </div>
                <div hidden={bool_AdminHistoryView}>
                    <AdminHistoryView />
                </div>
            </div>
        );
    }

    return handleVisibleContent();
}

export default App;
