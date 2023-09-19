import PropTypes from "prop-types";
import "./style.scss";

function TextInput({ className, type, ...rest }) {
    return <input type={type} className={className} {...rest} />;
}

TextInput.defaultProps = {
    className: "input-text",
    type: "text",
};

TextInput.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
};

export default TextInput;
