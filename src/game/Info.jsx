import PropTypes from 'prop-types';

const Info = ({ setCloseInfo }) => {

    const handleCloseInfo = () => {
        setCloseInfo(true);
    };

    return (
        <div id="info">
            There is 3 levels: EASY (3 points needed), MEDIUM(5) and HARD(7).
            After you complete the one (get as many points as you need for each level), 
            it will automatically change the difficulty to next. 
            After you complete HARD level you win.
            <p className='help-info'>DO NOT CLICK ON THE SAME CARD TWICE IN THE ONE LEVEL</p>
            <span>GOOD LUCK!</span>
            <button className="close-info-btn" onClick={handleCloseInfo}>Close</button>
        </div>
    );
};

Info.propTypes = {
    setCloseInfo: PropTypes.func.isRequired,
};

export default Info;