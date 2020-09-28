export default function CurrentDate() {
    let d = new Date().toString().split(' ');
    let day = d.slice(0,1);
    let month = d.slice(1,2);
    let dayNumber = d.slice(2,3)
    let currentDate = `${day}day, ${month} ${dayNumber}`;
    
    return currentDate
}