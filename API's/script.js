fetch("https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3").then(
  (Response) => Response.json(),
);

const Card = document.querySelector("#Card-button");
const setupElement = document.querySelector("#setup");



