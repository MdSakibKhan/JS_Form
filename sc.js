function billingFunction(){
    if(document.getElementById("same").checked){
        var st1 = document.getElementById("shippingName").value;
        var zp1 = document.getElementById("shippingZip");
        document.getElementById("billingName").setAttribute("value", st1);
        document.getElementById("billingZip").setAttribute("value", zp1['value']);
    }
    else{
        document.getElementById("billingName").setAttribute("value", "");
        document.getElementById("billingZip").setAttribute("value", "");
    }
}