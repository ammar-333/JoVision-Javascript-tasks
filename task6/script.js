function getIpBtn() {
  fetch("https://api.ipify.org/")
    .then((response) => response.text())
    .then((ip) => {
      console.log("Your IP address is:", ip);
    });
}
