function submitForm(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  fetch("PASTE_YOUR_APPS_SCRIPT_URL_HERE", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(() => {
    alert("Data saved successfully!");
  })
  .catch(err => {
    alert("Error");
    console.error(err);
  });
}
