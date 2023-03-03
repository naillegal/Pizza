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
  cheddar.style.display = 'none'
  mozarella.style.display = 'none'
  gratedcheese.style.display = 'none'
  gouda.style.display = 'none'
  chicken.style.display = 'none'
  meat.style.display = 'none'
  pepperoni.style.display = 'none'
  fish.style.display = 'none'
  greenpepper.style.display = 'none'
  redpepper.style.display = 'none'
  tomato.style.display = 'none'
  onion.style.display = 'none'
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



const cheddar = document.getElementById('cheddar');
const cheddarImg = document.querySelector('#cheddar img');
const cheddarp = document.querySelector('#cheddar p')


cheddar.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - cheddar.getBoundingClientRect().left;
  let shiftY = event.clientY - cheddar.getBoundingClientRect().top;

  cheddar.style.position = 'absolute';
  cheddar.style.zIndex = 1000;
  document.body.append(cheddar);
  cheddarImg.style.width = '10%';
  cheddarp.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    cheddar.style.left = pageX - shiftX + 'px';
    cheddar.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    cheddar.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    cheddar.hidden = false;

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

  cheddar.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    cheddar.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

cheddar.ondragstart = function () {
  return false;
};
const gratedcheese = document.getElementById('gratedcheese');
const gratedcheeseImg = document.querySelector('#gratedcheese img');
const gratedp = document.querySelector('#gratedcheese p')

let currentDroppable = null;

gratedcheese.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - gratedcheese.getBoundingClientRect().left;
  let shiftY = event.clientY - gratedcheese.getBoundingClientRect().top;

  gratedcheese.style.position = 'absolute';
  gratedcheese.style.zIndex = 1000;
  document.body.append(gratedcheese);
  gratedcheeseImg.style.width = '10%';
  gratedp.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    gratedcheese.style.left = pageX - shiftX + 'px';
    gratedcheese.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    gratedcheese.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    gratedcheese.hidden = false;

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

  gratedcheese.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    gratedcheese.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

gratedcheese.ondragstart = function () {
  return false;
};
const gouda = document.getElementById('gouda');
const goudaImg = document.querySelector('#gouda img');
const goudap = document.querySelector('#gouda p')

gouda.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - gouda.getBoundingClientRect().left;
  let shiftY = event.clientY - gouda.getBoundingClientRect().top;

  gouda.style.position = 'absolute';
  gouda.style.zIndex = 1000;
  document.body.append(gouda);
  goudaImg.style.width = '10%';
  goudap.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    gouda.style.left = pageX - shiftX + 'px';
    gouda.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    gouda.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    gouda.hidden = false;

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

  gouda.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    gouda.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

gouda.ondragstart = function () {
  return false;
};
const mozarella = document.getElementById('mozarella');
const mozarellaImg = document.querySelector('#mozarella img');
const mozarellap = document.querySelector('#mozarella p')


mozarella.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - mozarella.getBoundingClientRect().left;
  let shiftY = event.clientY - mozarella.getBoundingClientRect().top;

  mozarella.style.position = 'absolute';
  mozarella.style.zIndex = 1000;
  document.body.append(mozarella);
  mozarellaImg.style.width = '10%';
  mozarellap.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    mozarella.style.left = pageX - shiftX + 'px';
    mozarella.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    mozarella.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    mozarella.hidden = false;

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

  mozarella.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    mozarella.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

mozarella.ondragstart = function () {
  return false;
};
const chicken = document.getElementById('chicken');
const chickenImg = document.querySelector('#chicken img');
const chickenp = document.querySelector('#chicken p')
chicken.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - chicken.getBoundingClientRect().left;
  let shiftY = event.clientY - chicken.getBoundingClientRect().top;

  chicken.style.position = 'absolute';
  chicken.style.zIndex = 1000;
  document.body.append(chicken);
  chickenImg.style.width = '10%';
  chickenp.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    chicken.style.left = pageX - shiftX + 'px';
    chicken.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    chicken.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    chicken.hidden = false;

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

  chicken.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    chicken.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

chicken.ondragstart = function () {
  return false;
};
const meat = document.getElementById('meat');
const meatImg = document.querySelector('#meat img');
const meatp = document.querySelector('#meat p')
meat.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - meat.getBoundingClientRect().left;
  let shiftY = event.clientY - meat.getBoundingClientRect().top;

  meat.style.position = 'absolute';
  meat.style.zIndex = 1000;
  document.body.append(meat);
  meatImg.style.width = '10%';
  meatp.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    meat.style.left = pageX - shiftX + 'px';
    meat.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    meat.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    meat.hidden = false;

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

  meat.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    meat.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

meat.ondragstart = function () {
  return false;
};
const pepperoni = document.getElementById('pepperoni');
const pepperoniImg = document.querySelector('#pepperoni img');
const pepperonip = document.querySelector('#pepperoni p')
pepperoni.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - pepperoni.getBoundingClientRect().left;
  let shiftY = event.clientY - pepperoni.getBoundingClientRect().top;

  pepperoni.style.position = 'absolute';
  pepperoni.style.zIndex = 1000;
  document.body.append(pepperoni);
  pepperoniImg.style.width = '10%';
  pepperonip.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    pepperoni.style.left = pageX - shiftX + 'px';
    pepperoni.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    pepperoni.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    pepperoni.hidden = false;

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

  pepperoni.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    pepperoni.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

pepperoni.ondragstart = function () {
  return false;
};
const fish = document.getElementById('fish');
const fishImg = document.querySelector('#fish img');
const fishp = document.querySelector('#fish p')
fish.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - fish.getBoundingClientRect().left;
  let shiftY = event.clientY - fish.getBoundingClientRect().top;

  fish.style.position = 'absolute';
  fish.style.zIndex = 1000;
  document.body.append(fish);
  fishImg.style.width = '10%';
  fishp.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    fish.style.left = pageX - shiftX + 'px';
    fish.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    fish.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    fish.hidden = false;

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

  fish.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    fish.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

fish.ondragstart = function () {
  return false;
};
const greenpepper = document.getElementById('greenpepper');
const greenpepperImg = document.querySelector('#greenpepper img');
const greenpepperp = document.querySelector('#greenpepper p')


greenpepper.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - greenpepper.getBoundingClientRect().left;
  let shiftY = event.clientY - greenpepper.getBoundingClientRect().top;

  greenpepper.style.position = 'absolute';
  greenpepper.style.zIndex = 1000;
  document.body.append(greenpepper);
  greenpepperImg.style.width = '10%';
  greenpepperp.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    greenpepper.style.left = pageX - shiftX + 'px';
    greenpepper.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    greenpepper.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    greenpepper.hidden = false;

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

  greenpepper.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    greenpepper.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

greenpepper.ondragstart = function () {
  return false;
};
const redpepper = document.getElementById('redpepper');
const redpepperImg = document.querySelector('#redpepper img');
const redpepperp = document.querySelector('#redpepper p')


redpepper.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - redpepper.getBoundingClientRect().left;
  let shiftY = event.clientY - redpepper.getBoundingClientRect().top;

  redpepper.style.position = 'absolute';
  redpepper.style.zIndex = 1000;
  document.body.append(redpepper);
  redpepperImg.style.width = '10%';
  redpepperp.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    redpepper.style.left = pageX - shiftX + 'px';
    redpepper.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    redpepper.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    redpepper.hidden = false;

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

  redpepper.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    redpepper.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

redpepper.ondragstart = function () {
  return false;
};
const tomato = document.getElementById('tomato');
const tomatoImg = document.querySelector('#tomato img');
const tomatop = document.querySelector('#tomato p')


tomato.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - tomato.getBoundingClientRect().left;
  let shiftY = event.clientY - tomato.getBoundingClientRect().top;

  tomato.style.position = 'absolute';
  tomato.style.zIndex = 1000;
  document.body.append(tomato);
  tomatoImg.style.width = '10%';
  tomatop.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    tomato.style.left = pageX - shiftX + 'px';
    tomato.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    tomato.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    tomato.hidden = false;

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

  tomato.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    tomato.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

tomato.ondragstart = function () {
  return false;
};
const onion = document.getElementById('onion');
const onionImg = document.querySelector('#onion img');
const onionp = document.querySelector('#onion p')


onion.onmousedown = function (event) {
  console.log(event.target.currentSrc.substring(22));
  let shiftX = event.clientX - onion.getBoundingClientRect().left;
  let shiftY = event.clientY - onion.getBoundingClientRect().top;

  onion.style.position = 'absolute';
  onion.style.zIndex = 1000;
  document.body.append(onion);
  onionImg.style.width = '10%';
  onionp.style.display = 'none';

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    onion.style.left = pageX - shiftX + 'px';
    onion.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    onion.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    onion.hidden = false;

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

  onion.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    onion.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

onion.ondragstart = function () {
  return false;
};




