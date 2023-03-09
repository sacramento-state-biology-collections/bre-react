import styles from './App.module.scss';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { SearchEngineView } from './components/search-engine-view/search-engine-view';
import { TableEngineView } from './components/table-engine-view/table-engine-view';
import { AdminLoginView } from './components/admin-login-view/admin-login-view';
import { AdminPanelView } from './components/admin-panel-view/admin-panel-view';
import { AdminCollectionView } from './components/admin-collection-view/admin-collection-view';

function App() {
    return (
        <div>
            <WelcomeView />
            <SearchEngineView />
            <TableEngineView />
            <AdminLoginView />
            <AdminPanelView />
            <AdminCollectionView />
        </div>
    );
}

export default App;
