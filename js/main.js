var mycursor = document.getElementById("mycursor");
document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    console.log(x);
    console.log(y);
    mycursor.style.left = x + "px";
    mycursor.style.top = y + "px";
});