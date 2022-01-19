function userAction() {
  fetch('/api/inventory')
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      list_products = data.inventory_list.map((product, index) => {
        return `
          <tr>
            <th scope="col" style="width: 25%">${product.id}</th>
            <th scope="col"><a href="/view/${product.id}">${product.name}</a></th>
            <th scope="col">${product.price}</th>
            <th scope="col">${product.stock}</th>
            <th scope="col" style="width: 25%">
              <div>
                <button type="button" onclick="editProduct(\'${product.id}\')" class="btn btn-secondary">Edit</button>
                <button type="button" onclick="deleteProduct(\'${product.id}\')" class="btn btn-danger">Delete</button>
                <button type="button" onclick="exportCSV(\'${product.id}\')" class="btn btn-secondary">CSV Export</button>
              </div>
            </th>
          </tr>
        `;
      })
      .join("");
      if (data.inventory_list.length == 0) {
        list_products = "<tr><th scope=\"col\">There are no products right now.</th></tr>"
      }
      document.querySelector("#tablecontent").insertAdjacentHTML("afterbegin", list_products);
    });
}

function editProduct(id) {
  window.location.href = '/edit/'+id
}

function deleteProduct(id) {
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

function exportCSV(id) {
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

function exportCSVAll() {
  fetch('/api/csvall')
  .then((response) => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
  })
  .then((data) => {
    window.location.href = '/';
    window.location.href = '/download/csvall';
  });
}

userAction();
