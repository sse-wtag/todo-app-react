import PropTypes from "prop-types";
import "./style.css";

function TextInput({ type = "text", ...rest }) {
    return <input type={type} {...rest} />;
}

TextInput.propTypes = {
    type: PropTypes.string,
};

export default TextInput;
