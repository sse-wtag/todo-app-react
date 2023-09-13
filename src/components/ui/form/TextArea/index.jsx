import PropTypes from "prop-types";
import "./style.scss";

function TextArea({ rows = 3, ...rest }) {
    return <textarea rows={rows} {...rest}></textarea>;
}

TextArea.propTypes = {
    rows: PropTypes.number,
};

export default TextArea;
