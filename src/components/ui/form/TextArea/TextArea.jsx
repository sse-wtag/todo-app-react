import PropTypes from "prop-types";
import "./TextArea.scss";

function TextArea({ className, ...rest }) {
    return <textarea className={className} {...rest}></textarea>;
}

TextArea.defaultProps = {
    className: "input-textarea",
};

TextArea.propTypes = {
    className: PropTypes.string,
};

export default TextArea;
