let tiles;

//function that handles rendering data from API response
const renderTiles = () => {

  const containerDiv = document.getElementById('container');

  tiles.map(tile => {
    const section = document.createElement('section');
    section.innerHTML = `
          <div class='tile-container'>
          <img
          src='${tile.thumbnail[0].url}'
          class='thumbnail'>
          <p>${tile.name}</p>
          <p>${tile.categories[0]}</p>
          <p>${tile.branding}</p>
          </div>
        `
    containerDiv.appendChild(section)
  })
}

//function that handles the API call
const fetchTileData = async () => {

  await fetch("https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init")
    .then(response => response.json())
    .then(data => {
      tiles = data.list
      renderTiles()
    })
}

fetchTileData();