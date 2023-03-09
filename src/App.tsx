import styles from './App.module.scss';
import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { SearchEngineView } from './components/search-engine-view/search-engine-view';
import { TableEngineView } from './components/table-engine-view/table-engine-view';
import { AdminLoginView } from './components/admin-login-view/admin-login-view';
import { AdminPanelView } from './components/admin-panel-view/admin-panel-view';
import { AdminCollectionView } from './components/admin-collection-view/admin-collection-view';

function App() {
    const [bool_WelcomeView, set_WelcomeView] = useState(false);
    const [bool_SearchEngineView, set_SearchEngineView] = useState(true);
    const [bool_TableEngineView, set_TableEngineView] = useState(true);
    const [bool_AdminLoginView, set_AdminLoginView] = useState(true);
    const [bool_AdminPanelView, set_AdminPanelView] = useState(true);
    const [bool_AdminCollectionView, set_AdminCollectionView] = useState(true);

    function handleVisibleContent() {
        return(
            <div>
                <div hidden={bool_WelcomeView}><WelcomeView /></div>
                <div hidden={bool_SearchEngineView}><SearchEngineView /></div>
                <div hidden={bool_TableEngineView}><TableEngineView /></div>
                <div hidden={bool_AdminLoginView}><AdminLoginView /></div>
                <div hidden={bool_AdminPanelView}><AdminPanelView /></div>
                <div hidden={bool_AdminCollectionView}><AdminCollectionView /></div>
            </div>
        );
    }

    return (handleVisibleContent());
}

export default App;
