let tiles;

//function that handles the API call
const fetchTileData = async () => {

   await fetch("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=aZamlLmHCkb79p0ejlBxscpBnBUFx4bb")
    //this first function is where make the API call and get the response
    .then(response => {
      return response.json()
    })
    //this second function is where we get and render API data
    .then(data => {
      console.log(JSON.stringify(data.results));
      tiles = data.results
      console.table(`Console log tiles variable: ${tiles}`)
      console.table(`Console log multimedia variable: ${tiles.multimedia}`)
      renderTiles()
    })
}

//function that handles rendering data from API response
const renderTiles = () => {

  const containerDiv = document.getElementById('container');

  tiles.map(tile => {
    const section = document.createElement('section');
    section.innerHTML = `
          <a href='${tile.url}'>
          <img
          src='${tile.multimedia[2].url}'
          class='thumbnail'>
          <p class='caption'>${tile.multimedia[2].caption}</p>
          <p class='title'>${tile.title}</p>
          <p class='abstract'>${tile.abstract}</p>
          </a>
        `
    containerDiv.appendChild(section)
    
  })
}



fetchTileData();
