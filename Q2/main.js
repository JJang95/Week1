
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("productTable").deleteRow(i);
}