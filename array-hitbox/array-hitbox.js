var playerX = 0;
var playerY = 0;
function writeField(x, y){
  let arr = [];
  
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
      values.id = k.toString();
      values.style.border = '1px solid black';
      document.getElementById('row' + i.toString()).appendChild(values);
    }
  }
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
  console.log(playerX + ', ' + playerY);
  console.log(event.key);
}
