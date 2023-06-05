// Вставка изображений
function insertImages() {
  document.querySelectorAll(".box").forEach((image) => {
    if (image.innerText.length !== 0) {
      if (image.innerText === "Wrawn" || image.innerText === "Brawn") {
        image.innerHTML = `${image.innerText} <img class='all-img all-pown'
        src="${image.textContent}.png" alt="" />`;
        image.style.cursor = "pointer";
      }
      else{
        image.innerHTML = `${image.innerText} <img class='all-img'
        src="${image.textContent}.png" alt="" />`;
        image.style.cursor = "pointer";
      }
    }
  });
}

insertImages();

//Раскрашивание доски
function coloring () {
  const color = document.querySelectorAll('.box')

  color.forEach(color =>{
    getId=color.id
    arr = Array.from(getId)
    arr.shift()
    aside = eval(arr.pop())
    aup = eval(arr.shift())
    a = aside + aup

    if (a % 2 == 0){
      color.style.backgroundColor = 'rgb(232 235 239)'
    }
    if (a % 2 !== 0){
      color.style.backgroundColor = 'rgb(125 135 150)'
    }
  })
}
coloring()
