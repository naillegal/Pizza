const sizes = document.querySelectorAll(".size")
const pizza = document.querySelector(".pizza")
sizes.forEach(pizza => {
    pizza.onclick = sizeHandler
})

function sizeHandler(e) {
    value = e.target.getAttribute("value")
    switch (value) {
        case "small":
            pizza.style.width = '300px'
            break
        case "medium":
            pizza.style.width = '450px'
            break
        case "large":
            pizza.style.width = '600px'
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

const logo = document.querySelector('.logo')
const courier = document.querySelector('.courier')
const completed = document.querySelector('.completed')
const imgbox = document.querySelector('.imgbox')
const couriersound = new Audio('couriersound.mp3')
const completedsound = new Audio('completedsound.mp3')

logo.onclick = function () {
    imgbox.style.display = 'none'
    logo.style.display = 'none'
    couriersound.play()
    setTimeout(() => {
        courier.style.display = 'block'
    }, 2000);
    setTimeout(() => {
        courier.style.display = 'none'
        completed.style.display = 'block'
        completedsound.play()
    }, 7000);
}








const ketchup = document.getElementById('ketchup');
const ketchupImg = document.querySelector('#ketchup img');

let currentDroppable = null;

ketchup.onmousedown = function(event) {
        console.log(event.target.currentSrc.substring(22));
      let shiftX = event.clientX - ketchup.getBoundingClientRect().left;
      let shiftY = event.clientY - ketchup.getBoundingClientRect().top;

      ketchup.style.position = 'absolute';
      ketchup.style.width='5%';
      ketchup.style.zIndex = 1000;
      document.body.append(ketchup);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        ketchup.style.left = pageX - shiftX + 'px';
        ketchup.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ketchup.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ketchup.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ketchup.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ketchup.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    ketchup.ondragstart = function() {
      return false;
    };