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

function userDefinedFilter(array,userFunction){
  let newArray=[];
  console.log(array.length);
  for(let index = 0;index<array.length;index++){
    if(userFunction(array[index])){
      newArray.push(array[index]);
    }
  }
  return newArray;
}
function userDefinedFunction3(number){
  return number>=5;
}

function userDefinedForEach(array,userFunction){
  for(let index = 0; index < array.length;index++){
    userFunction(array[index]);
  }
}
function userDefinedFunction4(item){
  console.log(item);
}
let array = [4,9,16,25];
userDefinedForEach(array,userDefinedFunction4);
