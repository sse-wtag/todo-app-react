import PropTypes from "prop-types";
import "./style.scss";

function TextInput({ type = "text", ...rest }) {
    return <input type={type} {...rest} />;
}

TextInput.propTypes = {
    type: PropTypes.string,
};

export default TextInput;
