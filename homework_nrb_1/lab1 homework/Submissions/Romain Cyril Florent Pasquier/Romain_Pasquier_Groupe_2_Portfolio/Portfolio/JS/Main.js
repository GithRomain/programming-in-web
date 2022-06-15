const text1_options = [
    "My first project was to create an application which encrypt an image",
    "My second project was to develop a showcase website for a chocolate brand",
    "My third project was to create the beginning of a GPS with Floyd Warshall",
    "My fourth project was to code operations in binary on a circuit board"
];
const text2_options = [
    "Time: 3 months",
    "Time: 1 month",
    "Time: 1 month",
    "Time: 2 months"
];
const color_options = ["#E3CD8B", "#5D7052", "#F0BE86", "#6A645A"];
const color_border = ["#5D7052", "#F0BE86", "#6A645A", "#E3CD8B"];
const color_blanc = ["#F6F4E8", "#000000"];
const image_options = [
    "../IMG/slider1.jpg",
    "../IMG/slider2.jpg",
    "../IMG/slider3.png",
    "../IMG/slider4.png"
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];

    currentOptionText2.dataset.nextText = text2_options[i];
    
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    if(i == 1 || i ==3)
    {
        currentOptionText1.style.color = color_blanc[0];
        currentOptionText2.style.color = color_blanc[0];
        optionPrevious.style.color = color_blanc[0];
        optionNext.style.color = color_blanc[0];
    }
    else
    {
        currentOptionText1.style.color = color_blanc[1];
        currentOptionText2.style.color = color_blanc[1];
        optionPrevious.style.color = color_blanc[1];
        optionNext.style.color = color_blanc[1];
    }

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        currentOptionImage.style.border = "5px solid" + color_border[i];
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-next");
    }, 650);
};

optionPrevious.onclick = function () {
    if (i === 0) {
        i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];

    currentOptionText2.dataset.previousText = text2_options[i];

    if(i == 1 || i ==3)
    {
        currentOptionText1.style.color = color_blanc[0];
        currentOptionText2.style.color = color_blanc[0];
        optionPrevious.style.color = color_blanc[0];
        optionNext.style.color = color_blanc[0];
    }
    else
    {
        currentOptionText1.style.color = color_blanc[1];
        currentOptionText2.style.color = color_blanc[1];
        optionPrevious.style.color = color_blanc[1];
        optionNext.style.color = color_blanc[1];
    }
    
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        currentOptionImage.style.border = "5px solid" + color_border[i];
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-previous");
    }, 650);
};