// Capturando Elementos

const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

// Criando constantes

const colors = ['violet', 'green', 'red', 'blue'];
const pixelsLenght = 5;

// Função onClick

function getColorSelected(event) {
  let selectedElement = document.querySelector('.selected');
  const elemento = event.target;

  if (selectedElement === null) {
    selectedElement = elemento;
  }

  selectedElement.classList.remove('selected');
  elemento.classList.add('selected');
}

function setColorSelected(event) {
  const selectedItem = document.querySelector('.selected');
  const element = event.target;
  element.style.backgroundColor = selectedItem.style.backgroundColor;
}

// Paleta de cores

for (let index = 0; index < colors.length; index += 1) {
  const colorItens = document.createElement('div');
  colorPalette.appendChild(colorItens);
  colorItens.className = 'color';
  colorItens.style.backgroundColor = colors[index];
  colorItens.addEventListener('click', getColorSelected);
}

// Pixel Board

for (let indexPixelColumn = 0; indexPixelColumn < pixelsLenght; indexPixelColumn += 1) {
  for (let indexPixelRow = 0; indexPixelRow < pixelsLenght; indexPixelRow += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.className = 'pixel';
    pixel.addEventListener('click', setColorSelected);
  }
}

function reset() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

const button = document.createElement('button');
document.querySelector('body').insertBefore(button, document.querySelector('#pixel-board'));
button.id = 'clear-board';
button.textContent = 'Limpar';
button.addEventListener('click', reset);
