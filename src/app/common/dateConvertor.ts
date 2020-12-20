// Convert DD/MM/YYYY to MM/DD/YYYY

export function dateConvertor(dayMonthYear: string) {
    const [day, month, year] = dayMonthYear.split('/');
    return `${month}/${day}/${year}`;
}