function fun() {
  const name = document.getElementById("name").value;

  if (name) {
    const url = `https://api.agify.io/?name=${name}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { name, age } = data;

        alert(`Your name is: ${name}\nYour age is: ${age}`);
      })
      .catch((error) => {
        alert("Error fetching age data: " + error.message);
      });
  }
}
