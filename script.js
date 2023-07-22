window.onload = () => {
  if (JSON.parse(localStorage.getItem('pixelBoard')) === null) {
    localStorage.setItem('pixelBoard', JSON.stringify([]));
  }
  const getListStorage = JSON.parse(localStorage.getItem('pixelBoard'));
  if (getListStorage == null) {
    return;
  }
  for (let index = 0; index < (getListStorage.length); index += 2) {
    document.getElementById(getListStorage[index])
      .style.backgroundColor = getListStorage[index + 1];
  }
};

// REQUISITO 8

const inputBoardSize = document.createElement('input');
document.querySelector('body').insertBefore(inputBoardSize, document.querySelector('#pixel-board'));
inputBoardSize.type = 'number'
inputBoardSize.min = '1'
inputBoardSize.id = 'board-size';

const buttonBoardSize = document.createElement('button')
buttonBoardSize.textContent = 'VQV';
buttonBoardSize.id = 'generate-board'
document.querySelector('body').insertBefore(buttonBoardSize, document.querySelector('#pixel-board'));

buttonBoardSize.addEventListener('click', getBorderSize);

function getBorderSize() {
  if (document.querySelector('#board-size').value === '') {
    alert('Board inválido!')
    localStorage.setItem('borderSize', JSON.stringify(5));
  }
  localStorage.setItem('borderSize',document.querySelector('#board-size').value);
  window.location.reload()
}



// Capturando Elementos

const listStorage = JSON.parse(localStorage.getItem('pixelBoard')) || [];
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

// Criando constantes

const colors = ['violet', 'green', 'red', 'blue'];

if (JSON.parse(localStorage.getItem('borderSize')) === null) {
  pixelsLenght = 5;
  document.querySelector('#pixel-board').style.width = '250px';
} else {
  pixelsLenght = JSON.parse(localStorage.getItem('borderSize'));
  document.querySelector('#pixel-board').style.width = JSON.parse(localStorage.getItem('borderSize')) * 50 + 'px';
}

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
  if (document.querySelector('.selected') === null) {
    return;
  }
  const selectedItem = document.querySelector('.selected');
  const element = event.target;
  element.style.backgroundColor = selectedItem.style.backgroundColor;

  // REQUISITO 7

  localStorage.setItem('color', element.style.backgroundColor);
  localStorage.setItem('position', element.id);
  listStorage.push(localStorage.getItem('position'));
  listStorage.push(localStorage.getItem('color'));
  console.log(listStorage);
  localStorage.setItem('pixelBoard', JSON.stringify(listStorage));
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
let count = 0;
for (let indexPixelColumn = 0; indexPixelColumn < pixelsLenght; indexPixelColumn += 1) {
  for (let indexPixelRow = 0; indexPixelRow < pixelsLenght; indexPixelRow += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.className = 'pixel';
    pixel.id = count;
    pixel.addEventListener('click', setColorSelected);
    count += 1;
  }
}

// REQUISITO 5

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

// REQUISITO 6

const palette = document.querySelectorAll('.color');

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let indexRandom = 0; indexRandom < 6; indexRandom += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  } return color;
}

function randomColor() {
  for (let index = 0; index < palette.length; index += 1) {
    palette[index].style.backgroundColor = generateColor();
  }
}

const buttonRandom = document.createElement('button');
document.querySelector('body').appendChild(buttonRandom);
buttonRandom.id = 'button-random-color';
buttonRandom.textContent = 'Cores aleatórias';
buttonRandom.addEventListener('click', randomColor);

// Bônus
/*
const buttonClear = document.createElement('button');
document.querySelector('body').appendChild(buttonClear);
buttonClear.textContent = 'Limpar LocalStorage';
buttonClear.addEventListener('click', () => {
  localStorage.clear()
  pixelsLenght = 5;
});
*/