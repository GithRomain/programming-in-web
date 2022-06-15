const input = document.querySelector(".search");
const button = document.querySelector(".search_active");
const div = document.querySelector(".img-fluid");
let memory = new Array();

function Search()
{
    let clienId = "U8gb60YrrIRNvvaC7AalrQV9wgXdGQ3qEqVC1rXJegc";
    let url = "https://api.unsplash.com/search/photos?query="+input.value+"&per_page=30&client_id="+clienId;

    fetch(url)
        .then(function (data){
            return data.json();
        })
        .then(function (data){
            memory.forEach(imgage =>
            {
                div.removeChild(imgage);
            })

            data.results.forEach(photo => {
                let img = document.createElement('img')
                img.src = photo.urls.regular;
                memory.push(img);
                div.append(img);
        })
        })
}

button.addEventListener("click", Search);

