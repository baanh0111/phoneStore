class Phone {
    id;
    nameProduct;
    brand;
    price;
    inventoryQuality;
    productDate;
    description;


    constructor(id, nameProduct, brand, price, inventoryQuality, productDate, description) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.brand = brand;
        this.price = price;
        this.inventoryQuality = inventoryQuality;
        this.productDate = productDate;
        this.description = description;

    }

}

function displayPhone() {
    phones.sort(function(a, b) {
        return b.inventoryQuality - a.inventoryQuality;
    })

    let temp = "<table style='width: 500px ;' border = '1'>"
    temp +="<tr>"
    temp += "<th>ID</th>"
    temp += "<th>Name</th>"
    temp += "<th>Brand</th>"
    temp += "<th>Price</th>"
    temp += "<th>Inventory Quality</th>"
    temp += "<th>Product Date</th>"
    temp += "<th>Description</th>"
    temp += "<th>Feature</th>";
    temp += "</tr>"

    for (let phone of phones) {
        temp += "<tr>"
        temp += `<td>${phone.id}</td>`
        temp += `<td>${phone.nameProduct}</td>`
        temp += `<td>${phone.brand}</td>`
        temp += `<td>${phone.price}</td>`
        temp += `<td>${phone.inventoryQuality}</td>`
        temp += `<td>${phone.productDate}</td>`
        temp += `<td>${phone.description}</td>`
        temp += `<td><button onclick="removePhone()">Delete</td>`
        temp += "</tr>"

    }
    temp += "</table>"
    document.getElementById("view").innerHTML = temp;
}

function addNewPhone() {
    let id = document.getElementById("id").value;
    let nameProduct = document.getElementById("nameProduct").value;
    let brand = document.getElementById("brand").value;
    let price = document.getElementById("price").value;
    let inventoryQuality = document.getElementById("inventoryQuality").value;
    let productDate = document.getElementById("productDate").value;
    let description = document.getElementById("description").value;
    phones.push(new Phone(id, nameProduct, brand, price, inventoryQuality, productDate, description));
    displayPhone();

}


function removePhone(index) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
    phones.splice(index, 1);
    displayPhone();

}