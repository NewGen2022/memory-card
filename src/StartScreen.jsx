import './styles/StartScreen.css';
import kungFuPandaLogo from './assets/panda-logo.png';
import PropTypes from 'prop-types';

const StartScreen = ({ setShowMain }) => {

    const handleStartBtnPress = () => {
        setShowMain(true);
    };

    return (
        <>
            <div id="upper-part">
                <div id="header">
                    <img id="panda-logo" src={kungFuPandaLogo} alt="kung fu panda logo"/>
                    <span id="text">Memory Game</span>
                </div>

                <button id="start-btn" onClick={handleStartBtnPress}>Start</button>
            </div>
        </>
    );
};

StartScreen.propTypes = {
    setShowMain: PropTypes.func.isRequired,
};

export default StartScreen;