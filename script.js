function searchPhotos() {
  let clientId = "UVUN_1zW0u_bAMjtBufVK7wgTa4vByVzksFmvopUUFw";
  let query = document.getElementById("search").value;
  let url =
    "https://api.unsplash.com/search/photos/?client_id=" +
    clientId +
    "&query=" +
    query;

  // make request to api
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);

      let output = ` <h2 >${query}</h2>`;
      data.results.forEach((photo) => {
        output += `
      <div class = "cont">
      <img class ="img-fluid img-thumbnail" src ="${photo.urls.regular}">
      <a href= "${photo.links.download}">
      <small class="text" >Name: ${photo.alt_description}</small>
      <p class = text> Likes: ${photo.likes}</p>
      </div> `;
      });
      document.getElementById("results").innerHTML = output;
    });
    document.getElementById('loading').textContent ="Loading..."
  setTimeout(function () {
    document.getElementById('loading').style.display = 'none'
  }, 1000);
}
