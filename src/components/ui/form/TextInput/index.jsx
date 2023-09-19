import PropTypes from "prop-types";
import "./style.scss";

function TextInput({ type, ...rest }) {
    return <input type={type} {...rest} />;
}

TextInput.defaultProps = {
    type: "text",
};

TextInput.propTypes = {
    type: PropTypes.string,
};

export default TextInput;
