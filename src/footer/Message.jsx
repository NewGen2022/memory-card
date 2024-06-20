import PropTypes from 'prop-types';

const Message = ({ text, side }) => {
    return (
        <div className={`popup-msg ${side}`}>
            <span>{ text }</span>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
};

export default Message;