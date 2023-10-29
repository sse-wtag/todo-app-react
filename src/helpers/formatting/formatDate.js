function formatDate(dateString, config = {}) {
    const {
        day = "2-digit",
        month = "2-digit",
        year = "2-digit",
        separator = ".",
        sourceDelimiter = "/",
        locale = "en-GB",
    } = config;

    try {
        const date = new Date(dateString);
        const localeDateString = date.toLocaleDateString(locale, { day, month, year });
        const formattedDate = localeDateString.replaceAll(sourceDelimiter, separator);

        return formattedDate;
    } catch (error) {
        return error.message;
    }
}

export default formatDate;
