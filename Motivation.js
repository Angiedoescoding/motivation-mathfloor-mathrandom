const btn = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
    "Life is what happens when you're busy making other plans.",
    "She believed she could, so she did!",
    "The big lesson in life, baby, is never be scared of anyone or anything.",
    "The best project you will ever work on is YOU!",
    "The best way to cheer up yurself is to try to cheer up someone else.",
    "Talent does not matter, but consistency and discipline do!",
    "Work until expensive becomes cheap.",
    "One day or Day one - you decide.",
    "It always seems impossible until it's done!",
    "Think about how much you could have done if it hadn't been for someone else's opinion..."
]

btn.addEventListener("click", function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; //>> мы поставили мэсфлор для счета и мэсрандом, чтобы он был рандомный; умножили это на динну массива, 
    // так как когда мы рботаем с ТЕКСТОМ, мы используем имеенно эту формулу. Т.е. функция генерирует случайные цитаты.
    par.style.display = "block";
    par.textContent = randomQuote;
})

const musicButton = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");

musicButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        musicButton.classList.toggle(musicButton.innerText = "PAUSE");
    }
    else {
        audio.pause();
        musicButton.classList.toggle(musicButton.innerText = "PLAY");
    }
})