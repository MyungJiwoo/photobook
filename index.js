const clock = document.querySelector('.h1-clock');


function getTime() {
    let Pig = new Date(2018, 7, 28);
    let time = new Date();

    let btMs = time.getTime() - Pig.getTime();
    let btDay = btMs / (1000 * 60 * 60 * 24);

    clock.innerHTML = `${btDay}`;

}

handleMouseOver = (element, key) => {
    console.log(element, key)
    element.className = "content " + key;
    element.addEventListener("animationend", () => {
        element.className = "content";
    });
}


function init() {
    setInterval(getTime, 1000);
}

init();