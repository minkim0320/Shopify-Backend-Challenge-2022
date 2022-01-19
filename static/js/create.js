
function submitForm() {

  var data = {
    "name": document.getElementById("pName").value,
    "description": document.getElementById("pDesc").value,
    "price": document.getElementById("pPrice").value,
    "stock": document.getElementById("pStock").value,
  }


  fetch('/api/inventory', {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  })
  .then((response) => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
  })
  .then((data) => {
    window.alert(data.name + " has been added to the inventory")
    window.location.href = '/';
  });

}