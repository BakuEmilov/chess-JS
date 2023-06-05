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
