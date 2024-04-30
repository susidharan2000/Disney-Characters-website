const display = document.querySelector('.row');
const responce = fetch("https://api.disneyapi.dev/character");
responce
.then((data)=> { return data.json()})
.then((ele)=>
ele.data.forEach((element)=>{
    const col = document.createElement("div");
    col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4 ";
    col.innerHTML += `
    <div class="card h-100">
       <div class="card-header">
       <h5 class="card-title text-center"> ${element.name}</h5>
       </div>
       <div class=""img-box>
       <img class="card-img-top" width=300px height=300px src="${element.imageUrl}" alt="Card image cap">
       </div>
       <div class="card-body ">
       <div class="card-text text-center"><span>Movies:</span> ${element.films.length !== 0 ? element.films : "No Movie"}</div>
       <div class="card-text text-center"><span>TvShows:</span> ${element.tvShows.length !== 0 ? element.tvShows : "No TvShow"}</div>
       <div class="card-text text-center"><span>VideoGames:</span> ${element.videoGames.length !== 0 ? element.videoGames : "No videoGames"}</div>
       </div>
       </div>
    `;
    display.append(col)
})
)
.catch((error)=>console.log(error))