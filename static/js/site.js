function toggleTheme() {

    var theme = localStorage.getItem("theme")
    // change data-theme
    if (!theme || theme === "light") {
        setTheme("dark")
    }
    else {
        setTheme("light")
    }
}

function setTheme(theme) {

    var prettifyDark = document.getElementById('prettify-dark')
    var sheets = document.styleSheets

    // temporariily set transition class on html element
    document.documentElement.classList.add('transition-theme')

    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark")
        prettifyDark.removeAttribute('disabled')
        prettifyDark.disabled = false
        localStorage.setItem("theme", "dark")
    }
    else {
        document.documentElement.removeAttribute("data-theme", "dark")
        prettifyDark.disabled = true
        localStorage.setItem("theme", "light")
    }

    // remove transition class
    window.setTimeout(function () {
        document.documentElement.classList.remove('transition-theme')
    }, 1000)
}

document.addEventListener("DOMContentLoaded", function() {
    var theme = localStorage.getItem("theme") || "light"
    setTheme(theme);
  });