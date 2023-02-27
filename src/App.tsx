import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { DemoView } from './components/demo-view/demo-view';
import { BREHomeView } from './components/bre-home-view/bre-home-view';
import { Intro } from './components/intro/intro';
import { IntroView } from './components/intro-view/intro-view';

function App() {
    const views = ["welcome-view", ]

    const [currentView, setView] = useState(0);

    function toggleView(nextView: number) {
        setView(nextView);
    }

    switch (currentView) {
        case 0: {
            return <WelcomeView toggleView={toggleView} />;
        }
        case 1: {
            return <IntroView />;
        }
        default: {
            return <WelcomeView toggleView={toggleView} />;
        }
    }
}

export default App;
