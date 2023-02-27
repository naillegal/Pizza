const sizes = document.querySelectorAll(".size")
const pizza = document.querySelector(".pizza")
sizes.forEach(pizza => {
    pizza.onclick = sizeHandler
})

function sizeHandler(e) {
    value = e.target.getAttribute("value")
    switch (value) {
        case "small":
            pizza.style.width = 40 + "%"
            pizza.style.height = 40 + "%"
            break
        case "medium":
            pizza.style.width = 50 + "%"
            pizza.style.height = 50 + "%"
            break
        case "large":
            pizza.style.width = 60 + "%"
            pizza.style.height = 60 + "%"
            break
    }
}
const soundeffect = new Audio('soundeffect.mp3')
const chefbox = document.querySelector('.chefbox')
const sauce = document.querySelector('.sauce')
const saucebox = document.querySelector('.saucebox')
sauce.onclick = function () {
    saucebox.style.display = 'block'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
    soundeffect.play()
}

const cheese = document.querySelector('.cheese')
const cheesebox = document.querySelector('.cheesebox')
cheese.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'block'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
    soundeffect.play()
}

const meats = document.querySelector('.meats')
const meatsbox = document.querySelector('.meatsbox')
meats.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'block'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
    soundeffect.play()
}

const veggies = document.querySelector('.veggies')
const veggiesbox = document.querySelector('.veggiesbox')
veggies.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'block'
    chefbox.style.display = 'none'
    soundeffect.play()
}
