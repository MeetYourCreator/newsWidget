const getTileData = async () => {
 
  const data = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init";

  try {
  
    const response = await axios.get(data);
    let tiles = response.data.list;
    console.table(tiles)
    return tiles;

  } catch (error) {
    console.log(`Error retrieving data: ${error}`) 
  }
 
}

getTileData();

document.body.onload = addElement;
function addElement() {
  // create a new div element 
  const newDiv = document.createElement("div");
  // and give it some content 
  const newContent = document.createTextNode("Hi there and greetings!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}