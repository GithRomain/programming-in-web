const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");

const compt = document.querySelector(".compt");
let i = 0

let toogle = false;

const reset = document.querySelector(".reset");
const stop = document.querySelector(".stop");

//for the begining (initial all things)
if (i == 0)
{
    //to apply condition at every seconds
    var call = setInterval(condition, 1);
    addEvent()
}

//configure stop/start button
stop.addEventListener("click", () =>
{
    if (toogle)
    {
        addEvent();
        toogle = false;
    }
    else
    {
        deleteEvent();
        toogle = true;
    }
})

//configure
reset.addEventListener("click", () =>
{
    i = 0;
    compt.innerHTML = i;
    addEvent();
    //to apply condition at every seconds
    call = setInterval(condition, 1);
})

//add event to all the button
function addEvent()
{
    blue.addEventListener("click", blue_fct)
    red.addEventListener("click", red_fct)
    yellow.addEventListener("click", yellow_fct)
    stop.innerHTML = "StopPropagation";
}

//delete event to all the button
function deleteEvent()
{
    blue.removeEventListener("click", blue_fct)
    red.removeEventListener("click", red_fct)
    yellow.removeEventListener("click", yellow_fct)
    stop.innerHTML = "StartPropagation";
}

//implement information to blue button
function blue_fct()
{
    i += 1;
    compt.innerHTML = i;
    console.log("you pressed blue with a value of 1");
}

//implement information to red button
function red_fct()
{
    i += 2;
    compt.innerHTML = i;
    console.log("you pressed red with a value of 2");
}

//implement information to yellow button
function yellow_fct()
{
    i += 5;
    compt.innerHTML = i;
    console.log("you pressed yellow with a value of 5");
}

//condition function if the second condition is activated then call is shutdown and recall if reset is activated
function condition()
{
    if (i >= 30)
    {
        red.removeEventListener("click", red_fct)
    }
    if (i >= 50)
    {
        yellow.removeEventListener("click", yellow_fct)
        clearInterval(call);
    }
}
