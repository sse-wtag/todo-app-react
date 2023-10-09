export const compareDates = (dateString1, dateString2) => {
    if (!dateString1 || !dateString2) {
        return null;
    }

    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    if (isNaN(date1) || isNaN(date2)) {
        return null;
    }

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const timeDifference = Math.abs(date1 - date2);
    const daysDifference = Math.floor(timeDifference / _MS_PER_DAY) + 1;

    return daysDifference;
};
