let Loading = document.querySelector(".loading");

let loading_func = function () {
    Loading.style.opacity = "0";
    document.body.style.overflow = "auto";
}
setTimeout(loading_func, 2100);
let d_none = function () {
    Loading.style.display = "none";
}
setTimeout(d_none, 2100);

AOS.init();
