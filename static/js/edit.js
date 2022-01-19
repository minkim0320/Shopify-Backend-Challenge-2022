fetch('/api/product/'+window.location.href.split("/")[4])
.then((response) => {
  if (!response.ok) {
    throw Error("ERROR");
  }
  return response.json();
})
.then((data) => {
  product = data.product
  document.getElementById("pID").value = product.id;
  document.getElementById("pName").value = product.name
  document.getElementById("pDesc").value = product.description
  document.getElementById("pPrice").value = product.price
  document.getElementById("pStock").value = product.stock
});

function goBack() {
  window.location.href="/";
}

function submitForm() {

var data = {
  "name": document.getElementById("pName").value,
  "description": document.getElementById("pDesc").value,
  "price": document.getElementById("pPrice").value,
  "stock": document.getElementById("pStock").value,
}


fetch('/api/product/'+window.location.href.split("/")[4], {
    method: "put",
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
  window.alert(data.name + " has been modified in the inventory")
  window.location.href = '/';
});

}