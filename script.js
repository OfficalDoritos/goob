let count = 0;
let show = () => {
  fetch("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
    .then((res) => res.json())
    .then((data) => $("#image").attr("src", data));
  count++;
  if (count > 20) {
    $("#getDog").html("please chill Veronica");
  }
};
