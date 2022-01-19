fetch('/api/product/'+window.location.href.split("/")[4])
  .then((response) => {
    if (!response.ok) {
      throw Error("ERROR");
    }
    return response.json();
  })
  .then((data) => {
    product = data.product
    var headingDiv = document.getElementById("headerproduct");
    headingDiv.innerHTML = "<H3>" + product.name + "</H3>";
    document.getElementById("pID").value = product.id;
    document.getElementById("pName").value = product.name;
    document.getElementById("pDesc").value = product.description;
    document.getElementById("pPrice").value = product.price;
    document.getElementById("pStock").value = product.stock;
});

function submitForm() {
  window.location.href = '/';
}

function editProduct() {
  id = window.location.href.split("/")[4];
  window.location.href = '/edit/'+id
}

function deleteProduct() {
  id = window.location.href.split("/")[4];
  fetch('/api/product/'+id, {
      method: "delete",
  })
  .then((response) => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
  })
  .then((data) => {
    window.alert(data.product + " has been deleted from the inventory");
    window.location.href = '/';
  });
}

function exportCSV() {
  id = window.location.href.split("/")[4];
  fetch('/api/csv/'+id)
  .then((response) => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
  })
  .then((data) => {
    window.location.href = '/';
    window.location.href = '/download/csvproduct';
  });
}

userAction();