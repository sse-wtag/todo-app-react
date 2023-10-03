import PropTypes from "prop-types";
import "./Input.scss";

function Input({ className, type, ...rest }) {
    return <input type={type} className={className} {...rest} />;
}

Input.defaultProps = {
    className: "input",
    type: "text",
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
};

export default Input;
