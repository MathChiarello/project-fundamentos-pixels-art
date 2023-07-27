//  REQUISITO 7 - Criação da varíavel pixelBoard no início do programa
if (localStorage.getItem('pixelBoard') === null) {
  localStorage.setItem('pixelBoard',JSON.stringify([]))  
}

//  REQUISITO 1
// A criação do h1 e da section foi direto no HTML

// Criação da lista de cores da paleta e capturação de elementos
const idColorPalette = document.querySelector('#color-palette');
const idPixelBoard = document.querySelector('#pixel-board');
const colorsPalette = ['yellow','green','blue','red'];

let pixelBoardSize = 5;

// REQUISITO 8 - Inclusão do input na variável

if (localStorage.getItem('boardSize') === null || localStorage.getItem('boardSize') <= 5) {
  pixelBoardSize = 5;
} else if (localStorage.getItem('boardSize') > 50) {
  pixelBoardSize = 50;
} else {
  pixelBoardSize = localStorage.getItem('boardSize');
}

// Criação das div's da paleta de cores
colorsPalette.forEach(index => {
  const div = document.createElement('div');
  div.className = 'color';
  div.style.background = index;
  idColorPalette.appendChild(div);
});

// REQUISITO 2
// A section com id 'pixel-board' foi criada no HTML

// Parametrização do tamanho da caixa de pixels
idPixelBoard.style.width = `${pixelBoardSize * 50}px`;

// For aninhado para criar a caixa de pixels
let count = 0;

for (let indexRow = 0; indexRow < pixelBoardSize; indexRow += 1) {
  for (let indexColumn = 0; indexColumn < pixelBoardSize; indexColumn += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.id = count;
    idPixelBoard.appendChild(pixel);
    count += 1;
  }  
}

//  REQUISITO 3

const csColor = document.querySelectorAll('.color');

// For para incluir a classe selected em cada click da paleta de cores
csColor.forEach(index => {
  index.addEventListener('click', (element) => {
    if (document.querySelector('.selected') === null) {
      element.target.classList.add('selected');
    } else {
      document.querySelector('.selected').classList.remove('selected');
      element.target.classList.add('selected');
    }
  })
});

// REQUISITO 4

const csPixel = document.querySelectorAll('.pixel');
const objPixelsLocal = JSON.parse(localStorage.getItem('pixelBoard')) || [];

// For para pintar com a cor selecionada da paleta de cores
csPixel.forEach(index => {
  index.addEventListener('click', (element) => {
    if (document.querySelector('.selected') === null) {
      return;
    } else {
      const background = document.querySelector('.selected').style.background;
      index.style.background = background;
    }

    // REQUISTITO 7 - Incluir informação no localStorage
    objPixelsLocal.push(`${index.id}-${index.style.background}`);
    localStorage.setItem('pixelBoard',JSON.stringify(objPixelsLocal));
  });
});


// REQUISITO 5

// Criação do botão e inclusão na pagina
const btClearBoard = document.createElement('button');
document.body.insertBefore(btClearBoard, idPixelBoard);
btClearBoard.id = 'clear-board';
btClearBoard.textContent = 'Limpar';

// Criação da função de reset
btClearBoard.addEventListener('click', () => {
  csPixel.forEach(index => {
    index.style.background = 'white';
  });
});

// REQUISITO 6

// Função que gera uma cor aleatória
function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let indexRandom = 0; indexRandom < 6; indexRandom += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  } return color;
}

// Criação do botão e inclusão na pagina
const btRandomColors = document.createElement('button');
document.body.insertBefore(btRandomColors, idPixelBoard);
btRandomColors.id = 'button-random-color';
btRandomColors.textContent = 'Cores aleatórias';

// Criação da função de reset
btRandomColors.addEventListener('click', () => {
  csColor.forEach(index => {
    index.style.background = generateColor();
  });
});

// REQUISITO 7 - Captura dos dados no localStorage e inclusão nos pixels

window.onload = () => {
  for (let index = 0; index < objPixelsLocal.length; index += 1) {
    const indexPosition = objPixelsLocal[index].substring(0,objPixelsLocal[index].search("-"));
    const indexColor = objPixelsLocal[index].substring(objPixelsLocal[index].search("-")+1);
    csPixel[indexPosition].style.background = indexColor;
  };
};

// REQUISITO 8

// Criação do input
const itBoardSize = document.createElement('input');
document.body.insertBefore(itBoardSize, idPixelBoard);
itBoardSize.id = 'board-size';
itBoardSize.type = 'number';
itBoardSize.min = 1;

// Criação do botão para "pegar" o input
const btGetBoardSize = document.createElement('button');
document.body.insertBefore(btGetBoardSize, itBoardSize);
btGetBoardSize.id = 'generate-board';
btGetBoardSize.textContent = 'VQV'


btGetBoardSize.addEventListener('click', () => {
  if (itBoardSize.value === '') {
    alert('Board inválido!')
  } else {
    // REQUISITO 10 - Levar para o localStorage
    localStorage.setItem('boardSize',itBoardSize.value)
    window.location.reload()
  }
});

