const API_KEY = "cJikTNpQ2luE1qA9jeUGRdsQ9IiArrLf";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

// myRequest
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

myRequest
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);

    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;

    document.body.append(imgElement);
  })
  .catch((error) => {
    console.error(error);
  });
