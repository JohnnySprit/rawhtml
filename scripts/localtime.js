let options = {
    timeZone: 'US/Eastern',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};
let formatter = new Intl.DateTimeFormat([], options);

setInterval(() => {
    document.querySelector("#time").innerText = formatter.format(new Date());
}, 1000);

document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});