let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var s = document.getElementById("skills");
    if (window.innerHeight - s.getBoundingClientRect().top >= 300) {
        let e = document.getElementsByClassName("progreso");
        e[0].classList.add("javascript");
        e[1].classList.add("htmlcss");
        e[2].classList.add("photoshop");
        e[3].classList.add("wordpress");
        e[4].classList.add("drupal");
        e[5].classList.add("comunicacion");
        e[6].classList.add("trabajo");
        e[7].classList.add("creatividad");
        e[8].classList.add("dedicacion");
        e[9].classList.add("proyect");
    }
}

window.onscroll = function() {
    efectoHabilidades();
};
