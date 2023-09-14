export const compareDates = (dateString1, dateString2) => {
    if (!dateString1 || !dateString2) {
        return 0;
    }

    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    if (isNaN(date1) || isNaN(date2)) {
        return 0;
    }

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const timeDifference = Math.abs(date1 - date2);
    const daysDifference = Math.ceil(timeDifference / _MS_PER_DAY);

    return daysDifference;
};
