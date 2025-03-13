let btn = document.getElementById("btnId");

function getIpBtn() {
  fetch("https://api.ipify.org/")
    .then((response) => response.text())
    .then((ip) => {
      btn.innerText = ip;
    });
}
