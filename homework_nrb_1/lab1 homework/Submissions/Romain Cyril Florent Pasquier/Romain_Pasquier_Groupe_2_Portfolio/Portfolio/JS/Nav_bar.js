const list = document.querySelectorAll('.list')
const sidebar = document.querySelector('.position_fixed');

var togle_one_time = 0;

function activeLink()
{
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

const tablet = window.matchMedia("(max-width: 1060px)")
const mobile = window.matchMedia("(max-width: 748px)")

list.forEach((item => 
item.addEventListener('click', activeLink)));

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled >= 500 && scrolled < 1000)
    {
        list[0].classList.remove('active')
        list[1].classList.add('active')

        if(togle_one_time == 0)
        {
            togle_one_time = 1;
            document.querySelector(".container").classList.toggle("change");
            if(button_on_click == 0)
            {
                button_on_click = 1;
            }
            if(button_on_click == 1)
            {
                button_on_click = 0;
            }
        }
    }
    if (scrolled < 500)
    {
        list[0].classList.add('active')
        list[1].classList.remove('active')
    }

    if(scrolled >= 615)
    {
        sidebar.style.position = "fixed";
        sidebar.style.bottom = "145px";
        sidebar.style.left= "12px"
    }
    
    if(scrolled < 615)
    {
        sidebar.style.position = "";
    }

    if (scrolled >= 1000)
    {
        list[1].classList.remove('active')
        list[2].classList.add('active')
    }
    if (scrolled < 1000 && scrolled > 500)
    {
        list[1].classList.add('active')
        list[2].classList.remove('active')
    }

    if (scrolled >= 1400)
    {
        list[2].classList.remove('active')
        list[3].classList.add('active')
    }
    if (scrolled < 1400 && scrolled > 1000)
    {
        list[2].classList.add('active')
        list[3].classList.remove('active')
    }

    if (scrolled >= 1800)
    {
        list[3].classList.remove('active')
        list[4].classList.add('active')
    }
    if (scrolled < 1800 && scrolled > 1400)
    {
        list[3].classList.add('active')
        list[4].classList.remove('active')
    }

    if (scrolled < 2300 && scrolled > 1800)
    {
        list[4].classList.add('active')
        list[5].classList.remove('active')
    }

    if(tablet.matches)
    {
        if(scrolled >= 590 && scrolled < 1585)
        {
            sidebar.style.position = "fixed";
            sidebar.style.top = "20px";
        }

        if(scrolled >= 1585)
        {
            sidebar.style.position = "relative";
            sidebar.style.bottom = "-1488px";
        }
    }

    if(mobile.matches)
    {
        sidebar.style.position = "";
        sidebar.style.margin = "-120px";
    }
});