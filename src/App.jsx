import StartScreen from './StartScreen';
import Footer from '../src/footer/Footer';
import Game from './game/Game';

import { useState } from 'react';

function App() {
    const [showMain, setShowMain] = useState(false);

    return (
        <>
            {!showMain ?
                <StartScreen setShowMain={setShowMain} /> :
                <Game setShowMain={setShowMain} />
            }
            <Footer />
        </>
    );
}

export default App;
