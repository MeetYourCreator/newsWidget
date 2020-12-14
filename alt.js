; (function () {
  let hasLoaded
  let hasData
  let tiles
  function renderTiles() {
    const containerDiv = document.getElementById("container")
    const fragment = new DocumentFragment()
    tiles.forEach((tile) => {
      console.log(JSON.stringify(tile, null, 4))
      const div = document.createElement("div")
      div.innerHTML = `
          <div></div>
          <div class="tile-container">
          <img src="${tile.thumbnail[0].url}"class="images">
          <p>${tile.name}</p>
          <p>${tile.categories[0]}</p>
          <p>${tile.branding}</p>
          </div>
      `
      fragment.appendChild(div)
    })
    document.body.insertBefore(fragment, containerDiv.nextSibling)
  }

  async function fetchTileData() {
    const url =
      "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init"
    const response = await fetch(url)
    return response.json()
  }
  fetchTileData().then((data) => {
    hasData = true
    tiles = data.list
    // console.log(tiles)
    if (hasLoaded) {
      renderTiles()w
    }
  })
  window.addEventListener("DOMContentLoaded", (event) => {
    hasLoaded = true
    if (hasData) {
      renderTiles()
    }
  })
})()
// let fetchTileData = async () => {
//  const url =
//    "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init"
//  const response = await fetch(url)
//  const tiles = response.json()
//  console.log(tiles)
//  return tiles
// }
// // renderResults()
// fetchTileData().then((tiles) => console.log(tiles))
// fetchTileData()
// document.body.onload = renderResults
// function renderResults() {
//  // tiles.map((el) => {
//  const newDiv = document.createElement("div")
//  const newContent = document.createTextNode("this is the new div")
//  newDiv.appendChild(newContent)
//  const currentDiv = document.getElementById("container")
//  document.body.insertBefore(newDiv, currentDiv)
// }``