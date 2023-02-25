import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { DemoView } from './components/demo-view/demo-view';
import { BREHomeView } from './components/bre-home-view/bre-home-view';
import { TableDataView } from './components/table-data-view/table-data-view';
import { TableView } from './components/table-view/table-view';

function App() {
    const [myBool, setmyBool] = useState(true);
    const [myBool2, setmyBool2] = useState(true);

    function toggleBool() {
        setmyBool(!myBool);
    }

    return myBool ? <WelcomeView toggleBool={toggleBool} /> : <TableView />;
}

export default App;
