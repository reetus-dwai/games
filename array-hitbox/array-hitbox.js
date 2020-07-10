var playerX = 0;
var playerY = 0;

var sizeX;
var sizeY;
function writeField(x, y){
  let arr = [];
  sizeX = x;
  sizeY = y;
  
  //add x values
  for(var i = 0; i < x; i++){
    arr.push([]);
    
    //add y values
    for(var k = 0; k < y; k++){
      arr[i].push(0);
    }
  }
  console.log(arr);
  return arr;
}
function drawField(field, target, newId){
  let table = document.createElement('table');
  table.id = newId;
  document.getElementById(target).appendChild(table);
  
  
  for(var i = 0; i <= field.length; i++){
    let rows = document.createElement('tr');
    rows.id = 'row' + i.toString();
    document.getElementById(newId).appendChild(rows);
    
    for(var k = 0; k <= field[0].length; k++){
      let values = document.createElement('td');
      values.id = i.toString() + ' ' + k.toString();
      values.style.border = '1px solid black';
      document.getElementById('row' + i.toString()).appendChild(values);
    }
  }
}
function recolorSquares(){
  //clear all squares
  for(var i = 0; i < sizeX; i++){
    for(var j = 0; j < sizeY; j++){
      document.getElementById(i + ' ' + j).style.background = '#ffffff';
    }
  }
  
  //player's square
  document.getElementById(playerX + ' ' + playerY).style.background = '#000000';
}
function keyBind (event){
  if (event.key == 'ArrowUp'){
    playerY--;
  }
  if (event.key == 'ArrowDown'){
    playerY++;
  }
  if (event.key == 'ArrowLeft'){
    playerX--;
  }
  if (event.key == 'ArrowRight'){
    playerX++;
  }
  
  if(playerX > sizeX){
    playerX = sizeX;
  }
  if(playerX < 0){
    playerX = 0;
  }
  if(playerY > sizeY){
    playerY = sizeY;
  }
  if(playerY < 0){
    playerY = 0;
  }
  console.log(playerX + ', ' + playerY);
  //console.log(event.key);
  recolorSquares();
}
