import Info from './Info';
import '../styles/Game.css';
import { useState } from 'react';

const Game = () => {
    const [closeInfo, setCloseInfo] = useState(false);

    return (
        <div id="main-game">
            {!closeInfo && <Info setCloseInfo={setCloseInfo} />}
        </div>
    );
};

export default Game;
