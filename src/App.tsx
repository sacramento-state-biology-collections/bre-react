import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { BREHomeView } from './components/bre-home-view/bre-home-view';
import { TableView } from './components/table-view/table-view';

function App() {
    let viewMap = new Map<String, JSX.Element>([
        ["welcome-view", <WelcomeView toggleView={toggleView} />],
        ["bre-home-view", <BREHomeView toggleView={toggleView}/>],
    ]);

    const [currentView, setView] = useState(<WelcomeView toggleView={toggleView} />);

    function toggleView(nextView: string) {
        viewMap.has(nextView) ? setView(viewMap.get(nextView)) : setView(<WelcomeView toggleView={toggleView} />)
    }
    
    return currentView;
}

export default App;
