import { useState } from 'react';
import { WelcomeView } from './components/welcome-view/welcome-view';
import { DemoView } from './components/demo-view/demo-view';

function App() {
    const [myBool, setmyBool] = useState(true);

    function toggleBool() {
        setmyBool(!myBool);
    }

    return myBool ? <WelcomeView toggleBool={toggleBool} /> : <DemoView toggleBool={toggleBool} />;
}

export default App;
