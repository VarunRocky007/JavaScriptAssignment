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
let array = [4,9,16,25];
array = userDefinedMap(array,userDefinedFunction);
console.log(array);
