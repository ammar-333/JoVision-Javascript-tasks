function fun() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const timestamp = new Date().toLocaleString();

  const userDetails = {
    name: name,
    age: age,
    timestamp: timestamp,
  };

  window.alert(
    `Your name is: ${userDetails.name}\nYour age is: ${userDetails.age}\nTimestamp: ${userDetails.timestamp}`
  );
}
