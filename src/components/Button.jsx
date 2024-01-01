import PropTypes from 'prop-types';



const Button = ({ btnName }) => {
    return (
        <>
            <button className="button-28" >{btnName}</button>
        </>
    );
};
Button.propTypes = {
    btnName: PropTypes.string.isRequired,
};
export default Button;