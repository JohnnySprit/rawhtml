// time zone formatting
let options = {
    timeZone: 'US/Eastern',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};
let formatter = new Intl.DateTimeFormat([], options);

// sets time
setInterval(() => {
    document.querySelector("#time").innerText = formatter.format(new Date());
}, 1000);