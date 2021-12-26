//alert("hello world!");
document.getElementById("button").onclick = function(){
    document.getElementById("confirm").innerHTML = "Order Placed. Check email for confirmation";
    document.getElementById("button").style.display = "none";
}


var username = prompt();
//alert(username);

console.log(username);