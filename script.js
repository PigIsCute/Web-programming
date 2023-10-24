document.getElementById("width200").addEventListener("click", function () {
    document.getElementById("styled-table").style.width = "200px";
});

document.getElementById("width500").addEventListener("click", function () {
    document.getElementById("styled-table").style.width = "500px";
});

document.getElementById("border0").addEventListener("click", function () {
    document.getElementById("styled-table").style.borderSpacing = "1px";
});

document.getElementById("border1").addEventListener("click", function () {
    document.getElementById("styled-table").style.borderSpacing = "10px";
});

document.getElementById("border2").addEventListener("click", function () {
    document.getElementById("styled-table").style.borderSpacing = "20px";
});

document.getElementById("bgRed").addEventListener("click", function () {
    document.getElementById("styled-table").style.backgroundColor = "red";
});

document.getElementById("bgBlue").addEventListener("click", function () {
    document.getElementById("styled-table").style.backgroundColor = "blue";
});

document.getElementById("bgGreen").addEventListener("click", function () {
    document.getElementById("styled-table").style.backgroundColor = "green";
});

document.getElementById("bgPurple").addEventListener("click", function () {
    document.getElementById("styled-table").style.backgroundColor = "Purple";
});

document.getElementById("bgReset").addEventListener("click", function () {
    var table = document.getElementById("styled-table");
    table.style.width = "";
    table.style.border = "";
    table.style.borderSpacing = "";
    table.style.backgroundColor = "";
});
