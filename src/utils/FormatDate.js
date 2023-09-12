export const formatDate = (date, config = {}) => {
    const { day, month, year, separator } = config;

    const newDate = new Date(date);
    const formattedDate = newDate
        .toLocaleDateString("en-GB", {
            day: day || "2-digit",
            month: month || "2-digit",
            year: year || "numeric",
        })
        .replace(/\//g, separator || ".");

    return formattedDate;
};
