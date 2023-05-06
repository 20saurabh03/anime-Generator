const btnEl =document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click",async function(){
    try {
        btnEl.disabled =true;
        btnEl.innerHTML = "Loading....";
        animeNameEl.innerHTML = "Updating....";
        animeImgEl.src = "loader.svg"
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled =false;
        btnEl.innerHTML = "Get Anime";
        animeContainerEl.style.display = "block";
        animeImgEl.src= data.url;
        animeNameEl.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btnEl.disabled =false;
        btnEl.innerHTML = "Get Anime";
        animeNameEl.innerHTML = "An error happened please try Again.......";
    }
});