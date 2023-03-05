const backgrounds = ['jingberger1.jpg', 'jingberger2.jpg', 'jingberger3.jpg', 'wakgood1.jpg'];
const backNums = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const body = document.querySelector('body');

function printImage(imgNumber) {
  const img = new Image();

  img.src = `img/${backNums}`;
  img.classList.add('bgImage');
  body.prepend(img);
}

printImage(backNums);