import kungFuPandaLogo from '../assets/panda-logo.png';
import infoLogo from '../assets/info.png';
import PropTypes from 'prop-types';


const Header = ({ setShowMain, setCloseInfo }) => {

    const handleGoToStart = () => {
        setShowMain(false);
    };

    const handleShowInfo = () => {
        setCloseInfo(false);
    };

    return (
        <div id="header-game">
            <div id="kung-fu-panda-logo-back" onClick={handleGoToStart}>
                <img src={kungFuPandaLogo}/>
            </div>
            <button id="info-btn" onClick={handleShowInfo}>
                <img src={infoLogo}/>
            </button>
        </div>
    );
};

Header.propTypes = {
    setShowMain: PropTypes.func.isRequired,
    setCloseInfo: PropTypes.func.isRequired,
};

export default Header;
