function userDefinedMap(array,userFunction){
  let newArray=[];
  for(let index=0;index<array.length;index++){
    newArray.push(userFunction(array[index]));
  }
  return newArray;
}
function userDefinedFunction(number){
  return number*5;
}


function userDefinedReduce(array,userFunction){
  let total = array[0];
  for(let index=1;index<array.length;index++){
    total = userFunction(total,array[index]);
  }
  return total;
}
function userDefinedFunction(total,num){
  return total - num;
}
let array = [4,9,16,25];
total = userDefinedReduce(array,userDefinedFunction);
console.log(total);
