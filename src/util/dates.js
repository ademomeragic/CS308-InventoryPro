export function sortByDate(items, order = 'asc') {
    return items.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (order === 'asc') {
            return dateA - dateB;
        } else {
            return dateB - dateA;
        }
    });
}

export function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formatter = new Intl.DateTimeFormat('en-CA', options);
    const [{ value: year }, , { value: month }, , { value: day }] = formatter.formatToParts(date);

    return `${year}-${month}-${day}`;
}