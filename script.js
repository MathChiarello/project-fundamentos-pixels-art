//Capturando Elementos

const colorPalette = document.querySelector('#color-palette')
const pixelBoard = document.querySelector('.pixel-board')

// Criando constantes

const colors = ['violet','green','red','blue'];
const pixelsLenght = 5;

// Paleta de cores

for (let index = 0; index < colors.length; index += 1) {
  colorItens = document.createElement('div');
  colorPalette.appendChild(colorItens);
  colorItens.className = 'color';
  colorItens.style.backgroundColor = colors[index];
  colorItens.setAttribute('onclick', 'teste()');
}


// Pixel Board

for (let indexPixelColumn = 0; indexPixelColumn < pixelsLenght; indexPixelColumn += 1) {
  for (let indexPixelRow = 0; indexPixelRow < pixelsLenght; indexPixelRow += 1) {
    pixel = document.createElement('div');
    pixelBoard.appendChild(pixel)  
    pixel.className = 'pixel';
  }    
}

// Função onClick

function teste() {
  console.log(addEventListener("click",className = 'selected'));
}


console.log(colorPalette);
