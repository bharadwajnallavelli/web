function calculatetip() {
    var billamount = document.getElementById("billamount").value;
    var sharebill = document.getElementById("sharebill").value;
    var quality = document.getElementById("select").value;
    
    if(billamount == "" || quality == 0) {
        window.alert("Enter the bill amount and service quality");
        return;
    }
    if(sharebill ==="") {
        sharebill ==1;
    }
    if(quality == 0 || billamount == "") {
        window.alert("Enter the correct details");
        return;
    }
    var totalbill = billamount * quality / sharebill;
    totalbill = Math.round(totalbill * 100) / 100;
    totalbill = totalbill.toFixed(2);
    document.getElementById("display-tip").innerHTML = "<sup>$</sup>" + totalbill + "" + "Each";
    
}

document.getElementById("calculate").onclick = function() { calculatetip(); };