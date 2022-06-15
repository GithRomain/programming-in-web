const ballon = document.querySelector(".ballon");
const bomb = document.querySelector(".bomb");

let size = 50;

document.addEventListener('keydown', logKey);

function logKey(event) {
    if (size >= 2000)
    {
        ballon.classList.remove("active");
        bomb.classList.add("active");
    }
    if (event.key == "ArrowDown" && ballon.classList.contains("active"))
    {
        size -= size * 0.1;
    }
    if (event.key == "ArrowUp" && ballon.classList.contains("active"))
    {
        size += size * 0.1;
    }
    ballon.style.fontSize = size + "%";
    bomb.style.fontSize = size + "%";
}
