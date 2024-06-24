import Info from './Info';
import '../styles/Game.css';
import { useState } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const Game = ({ setShowMain }) => {
    const [closeInfo, setCloseInfo] = useState(false);

    return (
        <>

            <Header setShowMain={setShowMain} setCloseInfo={setCloseInfo} />

            <div id="main-game">
                {!closeInfo && 
                    <>
                        <Info setCloseInfo={setCloseInfo} />
                        <div id="overlay"></div>    
                    </>
                }
            </div>
        </>
    );
};

Game.propTypes = {
    setShowMain: PropTypes.func.isRequired,
};

export default Game;
