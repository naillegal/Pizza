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
const chefbox = document.querySelector('.chefbox')
const sauce = document.querySelector('.sauce')
const saucebox = document.querySelector('.saucebox')
sauce.onclick = function () {
    saucebox.style.display = 'block'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
}

const cheese = document.querySelector('.cheese')
const cheesebox = document.querySelector('.cheesebox')
cheese.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'block'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
}

const meats = document.querySelector('.meats')
const meatsbox = document.querySelector('.meatsbox')
meats.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'block'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
}

const veggies = document.querySelector('.veggies')
const veggiesbox = document.querySelector('.veggiesbox')
veggies.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'block'
    chefbox.style.display = 'none'
}
