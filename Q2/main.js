
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("productTable").deleteRow(i);
}

function addProduct() {
    var table = document.getElementById("productTable")
    var productName = document.getElementById("productName").value;
    var productCategory = document.getElementById("productCategory").value;
    var productPrice = document.getElementById("productPrice").value;

    var html = `
    
    <tr>
    
        <td>${productName}</td>
        
        <td>${productCategory}</td>
        
        <td>$${productPrice}</td>
        
        <td>
            <input type="button" value="Delete" onclick="deleteRow(this)">
        </td>
    
    </tr>
    
    `;

    table.innerHTML += html;

}
