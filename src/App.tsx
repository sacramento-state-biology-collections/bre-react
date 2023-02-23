import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { DemoView } from './components/demo-view/demo-view';
import { BREHomeView } from './components/bre-home-view/bre-home-view';

let view = 0;

function App() {
    function toggleView(nextView: number) {
        view = nextView;
    }

    switch (view) {
        case 0: {
            return <WelcomeView toggleView={toggleView} />;
        }
        case 1: {
            return <DemoView toggleView={toggleView} />;
        }
        default:
    }
}

export default App;
