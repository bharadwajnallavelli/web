document.getElementById("button").onclick = function() { myfunction();};
function myfunction() {
    var x = document.getElementById("bill").value;
    var y = document.getElementById("select").value;
    if(x === ""|| y === "")
        {
            window.alert("Enter correct details!")
            return;
        }
    else {
    var result;
    result = x * y;
    result = result.toFixed(2);
    document.getElementById("res").innerHTML = "$" + result;
    }
}