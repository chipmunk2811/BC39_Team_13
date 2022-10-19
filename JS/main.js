// Theme-light-dark
document.getElementById("theme_switch").onclick = function () {
    var themedark = document.getElementById("theme_dark")
    var themelight = document.getElementById("theme_light")
    if (themedark) {
        themedark.className = "fa fa-sun"
        themedark.id = "theme_light"
    } else {
        themelight.className = "fa fa-moon"
        themelight.id = "theme_dark"
    }

}


