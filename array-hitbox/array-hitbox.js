function writeField(x, y){
  let arr = [];
  
  //add x values
  for(var i = 0; i < x; i++){
    arr.push([]);
    console.log('x: ' + i);
    
    //add y values
    for(var k = 0; k < y; k++){
      arr[i].push(0);
      console.log('y: ' + i);
      console.log(arr[i]);
    }
  }
  console.log(arr);
  return arr;
}
function drawField(field, target){
  let tgt = document.getElementById(target);
  
}
