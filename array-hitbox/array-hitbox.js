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
function drawField(field, target){
  let tgt = document.getElementById(target);
  
}
