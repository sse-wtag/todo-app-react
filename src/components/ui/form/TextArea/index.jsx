import PropTypes from "prop-types";
import "./style.scss";

function TextArea({ className, rows = 3, ...rest }) {
    return <textarea className={className || "input-textarea"} rows={rows} {...rest}></textarea>;
}

TextArea.propTypes = {
    className: PropTypes.string,
    rows: PropTypes.number,
};

export default TextArea;
