var button_on_click = 0;

document.querySelector(".card-btn").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
    if(button_on_click == 0)
    {
        button_on_click = 1;
    }
    if(button_on_click == 1)
    {
        button_on_click = 0;
    }
});

document.querySelector(".profil_button").addEventListener("click", () => {
    if(button_on_click == 0)
    {
        document.querySelector(".container").classList.toggle("change");
        button_on_click = 1;
    }
});

document.querySelector(".home_button").addEventListener("click", () => {
    if(button_on_click == 1)
    {
        document.querySelector(".container").classList.toggle("change");
    }
});
