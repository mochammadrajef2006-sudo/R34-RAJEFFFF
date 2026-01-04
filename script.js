function tampilkanWaktu() {
    document.getElementById("jam").innerHTML =
        new Date().toLocaleTimeString();
}
setInterval(tampilkanWaktu, 1000);