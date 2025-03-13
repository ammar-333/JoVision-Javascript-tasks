let btn = document.getElementById("btnId");

function getIpBtn() {
  fetch("https://api.ipify.orgx/")
    .then((response) => response.text())
    .then((ip) => {
      btn.innerText = ip;
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
