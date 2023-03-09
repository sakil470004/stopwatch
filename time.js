let intervalId;
let currentTime = 0;
const textTime = document.getElementById('text-time');
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnRest = document.getElementById('btn-reset');
const convertMillisecondsToProperFormat = (milliseconds) => {


}
const changeProperFormat = (time) => {
    if (time < 10) {
        return `0${time}`
    }
    return time;
}
function msToMMHHMs(ms) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = parseInt(seconds % 60);
    const ml = parseInt((ms % 1000)/10)
    const properTime = `${changeProperFormat(minutes)}:${changeProperFormat(seconds)}:${changeProperFormat(ml)}`
    return properTime;
}

convertMillisecondsToProperFormat(1200)
btnStart.addEventListener('click', function () {
    btnStart.setAttribute('disabled', true)
    intervalId = setInterval(function () {
        let value = parseInt(textTime.innerText)
        currentTime = currentTime + 10;
        const currentTimeString = msToMMHHMs(currentTime);
        textTime.innerText = currentTimeString;
    }, 10)
})
btnStop.addEventListener('click', function () {
    btnStart.removeAttribute('disabled')
    clearInterval(intervalId)
})
btnRest.addEventListener('click', function () {
    btnStart.removeAttribute('disabled')
    textTime.innerHTML = '00:00:00'
    currentTime = 0;
    clearInterval(intervalId)
    intervalId = null;

})