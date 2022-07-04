const black = document.querySelector('#black');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');
const quadroDePixels = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const botaoPixels = document.querySelector('#generate-board');

function generateColor(opacidade = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

black.style.backgroundColor = 'black';
color2.style.backgroundColor = generateColor();
color3.style.backgroundColor = generateColor();
color4.style.backgroundColor = generateColor();

function color() {
  const newColor = document.querySelector('.selected').style.backgroundColor;
  return newColor;
}

function click() {
  const pintaveis = document.querySelectorAll('.pixel');
  for (let index = 0; index < pintaveis.length; index += 1) {
    pintaveis[index].addEventListener('click', () => {
      pintaveis[index].style.backgroundColor = color();
    });
  }

  const limpa = document.querySelector('#clear-board');
  limpa.addEventListener('click', () => {
    for (let index = 0; index < pintaveis.length; index += 1) {
      pintaveis[index].style.backgroundColor = 'white';
    }
  });
}

window.onload = () => {
  quadroDePixels.style.width = `${5 * 42}px`;
  for (let linha = 1; linha <= 25; linha += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    quadroDePixels.appendChild(pixel);
  }

  click();
};

function createBlock() {
  if (input.value === '') {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }
  const numeroDePixels = input.value * input.value;
  quadroDePixels.style.width = `${input.value * 42}px`;
  const pixels = document.querySelectorAll('.pixel');
  if (pixels.length !== 0) {
    for (let index = 0; index < pixels.length; index += 1) {
      quadroDePixels.removeChild(pixels[index]);
    }
  }
  for (let linha = 1; linha <= numeroDePixels; linha += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    quadroDePixels.appendChild(pixel);
  }

  click();
}

botaoPixels.addEventListener('click', createBlock);

function addClass(event) {
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', addClass);
color2.addEventListener('click', addClass);
color3.addEventListener('click', addClass);
color4.addEventListener('click', addClass);
