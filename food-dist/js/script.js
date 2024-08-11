let res = document.querySelectorAll(".tabheader__item")
let contents = document.querySelectorAll(".tabcontent")

res.forEach((item, i) => {
    item.onclick = () => {
        res.forEach(item1 => {
            item1.classList.remove("tabheader__item_active")
        })

        item.classList.add("tabheader__item_active");
        showContent(i);
    }
})

function showContent(i = 0) {
    contents.forEach((contents) => contents.classList.add("hide"));

    contents[i].classList.remove("hide")
    contents[i].classList.add("show", "fade")
}

showContent()

// 

let bot = document.querySelectorAll("#bot")
let modal = document.querySelector(".modal")
let close = document.querySelector(".modal__close")

bot.forEach(item => {
    item.onclick = () => {
        modal.classList.add("show")
        modal.classList.remove("hide")
        modal.classList.add("fade")
    }

})


close.onclick = () => {
    modal.classList.remove("show")
    modal.classList.add("hide")
}

let days = document.querySelector("#days")
let seconds = document.querySelector("#seconds")
let minutes = document.querySelector("#minutes")
let hours = document.querySelector("hours")



let deadline = "2024-9-24";

function getTime(endtime) {
    let now = new Date();
    const total = Date.parse(endtime) - Date.parse(now);

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { days, hours, minutes, seconds };
}
console.log(getTime(deadline));


let interval = setInterval(() => {
    seconds.textContent = getTime(deadline).seconds
    days.textContent = getTime(deadline).days
    hours.textContent = getTime(deadline).hours
    minutes.textContent = getTime(deadline).minutes}, 1000
)







// let interval = setInterval(() => {
//     console.log("test");
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);


 

