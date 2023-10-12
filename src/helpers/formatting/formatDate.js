function formatDate(date, config = {}) {
    const { day = "2-digit", month = "2-digit", year = "2-digit", separator = ".", locale = "en-GB" } = config;
    const GENERAL_ERROR_MESSAGE = "Invalid date input";

    try {
        if (!date) {
            throw new Error(GENERAL_ERROR_MESSAGE);
        }

        const dateObject = new Date(date);

        if (isNaN(dateObject.getTime())) {
            throw new Error(GENERAL_ERROR_MESSAGE);
        }

        const options = { day, month, year };
        const formattedDate = dateObject.toLocaleDateString(locale, options).replace(/\//g, separator);

        return formattedDate;
    } catch (error) {
        return error.message;
    }
}

export default formatDate;
