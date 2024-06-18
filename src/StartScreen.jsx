import './styles/startScreen.css';
import kungFuPandaLogo from './assets/panda-logo.png';

const StartScreen = () => {
    return (
        <>
            <div id="upper-part">
                <div id="header">
                    <img id="panda-logo" src={kungFuPandaLogo} alt="kung fu panda logo"/>
                    <span id="text">Memory Game</span>
                </div>

                <button id="start-btn">Start</button>
            </div>
        </>
    );
};

export default StartScreen;
