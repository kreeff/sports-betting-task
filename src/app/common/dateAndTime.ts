/* Return initial start date for event in format DD/MM/YYYY
 * Return current date and time(UTC) in format MM/DD/YYYY HH:MM
*/

export function getDateAndTime() {
    const current = new Date().toISOString();
    const [date, time ] = current.split('T');
    const [year, month, day] = date.split('-');
    const [hour, minutes] = time.split(':');

    return {
        initialDateTime: `${day}/${month}/${year} 23:59`,        
        currentDateTime: `${month}/${day}/${year} ${hour}:${minutes}`
    }
}