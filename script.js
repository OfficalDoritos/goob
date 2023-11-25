let goob = () => {
  fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
    .then((res) => res.json())
    .then((data) => $("#guh").attr("src", data));
};
