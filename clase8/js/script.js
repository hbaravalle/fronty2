let qs = function(element) {
    return document.querySelector(element)
}

let btnTheme = qs("#changeTheme");
let toggleMenu = qs("#toggle-menu");

btnTheme.addEventListener("click", function() {
    document.body.classList.toggle("dark")
});

toggleMenu.addEventListener("mouseover", function() {
    qs("#menu").classList.add("show")
})

toggleMenu.addEventListener("mouseout", function() {
    qs("#menu").classList.remove("show")
})

window.addEventListener("keydown", function(event) {
    if(event.code == "Escape") {
        alert("Vuelva prontos!")
    }
})