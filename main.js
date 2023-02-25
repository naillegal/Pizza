const sizes = document.querySelectorAll(".size")
const crust = document.querySelector(".crust")
sizes.forEach(crust => {
    crust.onclick = sizeHandler
})


function sizeHandler(e) {
    value = e.target.getAttribute("value")
    switch (value) {
        case "small":
            crust.style.width = 40 + "%"
            crust.style.height = 40 + "%"
            break
        case "medium":
            crust.style.width = 50 + "%"
            crust.style.height = 50 + "%"
            break
        case "large":
            crust.style.width = 60 + "%"
            crust.style.height = 60 + "%"
            break
    }
}