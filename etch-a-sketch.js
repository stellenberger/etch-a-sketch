const container = document.querySelector('.container')

const grid = prompt('How many columns/rows would you like?')

const numberOfBlocks = grid * grid

function generateDivs(numberOfBlocks) {
  for (i = 1; i <= numberOfBlocks; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = '';
    newDiv.style.color = 'red';
    newDiv.addEventListener('mouseover', function(e){
      newDiv.style.backgroundColor = 'black';
    });
    container.appendChild(newDiv);
  }
  document.documentElement.style.setProperty('--rowNum', grid);
  document.documentElement.style.setProperty('--colNum', grid);
}

function shadedGrid(numberOfBlocks) {
  for (i = 1; i <= numberOfBlocks; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = '';
    newDiv.style.color = 'red';
    newDiv.addEventListener('mouseover', function(e){
      newDiv.style.backgroundColor = 'black';
      newDiv.style.opacity -= '-0.05';
    });
    container.appendChild(newDiv);
  }
  document.documentElement.style.setProperty('--rowNum', grid);
  document.documentElement.style.setProperty('--colNum', grid);
}

function clearGrid(){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
}

const shadedButton = document.getElementById('shadedButton');
shadedButton.addEventListener('click', function(e){
  clearGrid();
  shadedGrid(numberOfBlocks);
});

const newGrid = document.getElementById('newGrid')
newGrid.addEventListener('click', function(e){
  location.reload();
})



generateDivs(numberOfBlocks)
