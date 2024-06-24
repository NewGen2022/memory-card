import PropTypes from 'prop-types';


const Info = ({ setCloseInfo }) => {

    const handleCloseInfo = () => {
        setCloseInfo(true);
    };

    return (
        <div id="info">
            There is 3 levels: EASY, MEDIUM and HARD.
            After you complete the one, it will automatically change 
            the difficulty to next one. After you complete HARD level you win.
            <span>GOOD LUCK!</span>
            <button className="close-info-btn" onClick={handleCloseInfo}>Close</button>
        </div>
    );
};

Info.propTypes = {
    setCloseInfo: PropTypes.func.isRequired,
};

export default Info;