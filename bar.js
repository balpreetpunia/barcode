document.getElementById("clickMe").onclick = code();
function code()
{
    document.getElementById('svg').setAttribute('jsbarcode-value' , document.getElementById('num').value);
    JsBarcode(".barcode").init();

    var d = new Date();
    document.getElementById("date").innerHTML = "Date Received: " + d.toDateString();
    document.getElementById("time").innerHTML = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("dis_model").innerHTML = "Model: " + document.getElementById('model').value;
    document.getElementById("dis_serial").innerHTML = "Serial No: " + document.getElementById('serial').value;
    document.getElementById("dis_po").innerHTML = "PO: " + document.getElementById('po').value;
    document.getElementById("in-date").value = d.toDateString();
    document.getElementById("in-time").value = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}