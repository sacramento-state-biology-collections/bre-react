import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { BREHomeView } from './components/bre-home-view/bre-home-view';

function App() {
    const [currentView, setView] = useState(0);

    function toggleView(nextView: number) {
        setView(nextView);
    }

    switch (currentView) {
        case 0: {
            return <WelcomeView toggleView={toggleView} />;
        }
        case 1: {
            return <BREHomeView toggleView={toggleView}/>;
        }
        default: {
            return <WelcomeView toggleView={toggleView} />;
        }
    }
}

export default App;
