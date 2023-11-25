$(document).on("load", () => {
  fetch("http://shibe.online/api/shibes?count=[1]&urls=[true]&httpsUrls=[true]")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(console.error(console.log("sucker")));
});
