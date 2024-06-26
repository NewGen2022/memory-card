import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Game.css';
import '../styles/Level.css';
import Info from './Info';
import Header from './Header';
import Level from './Level';

const Game = ({ setShowMain }) => {
    const [closeInfo, setCloseInfo] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(prevState => !prevState);

        setTimeout(() => {
            setIsFlipped(false);
        }, 1000);
    };

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

                <div>Level: Easy</div>
                <div>Score: 0</div>
                <div>Best Score: 0</div>

                <Level handleClick={handleClick} isFlipped={isFlipped} />
            </div>
        </>
    );
};

Game.propTypes = {
    setShowMain: PropTypes.func.isRequired,
};

export default Game;
