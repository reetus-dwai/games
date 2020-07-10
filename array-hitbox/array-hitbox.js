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
  
  let rows = document.createElement('tr');
  //let rowNum = 0;
  let values = document.createElement('td');
  //let valueNum = 0;
  values.style.border = '1px solid black';
  
  for(var i = 0; i <= field.length; i++){
    rows.id = i.toString();
    document.getElementById(newId).appendChild(rows);
    
    for(var k = 0; k <= field[0].length; k++){
      document.getElementById(i.toString()).appendChild(values);
    }
  }
}
