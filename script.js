function isValidTimeFormat(time) {
    const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] [ap]m$/i;
    return timeRegex.test(time);
}

function calculateTime() {
    const inputTime = document.getElementById('inputTime').value;
    const inputMinutes = parseInt(document.getElementById('inputMinutes').value);

    if (isValidTimeFormat(inputTime) && !isNaN(inputMinutes)) {
        const enteredTime = new Date(`2000-01-01 ${inputTime}`);
        const elapsedTime = new Date(enteredTime.getTime() + inputMinutes * 60000);
        let hours = elapsedTime.getHours();
        const minutes = elapsedTime.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
        document.getElementById('result').textContent = `The calculated time is ${formattedTime}.`;
    } else {
        document.getElementById('result').textContent = 'Invalid input. Please enter valid time (HH:mm am/pm) and minutes.';
    }
}
