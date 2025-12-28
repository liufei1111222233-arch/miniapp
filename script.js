function submitForm(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  fetch("https://script.google.com/macros/s/AKfycbzoiNjiDwk7V56bKbBeip4Ck3peFUcFUchDi5gju6ZzVKhEbnlnQ4r1fWsGxm5urAOoBg/exec", {
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

