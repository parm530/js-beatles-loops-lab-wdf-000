function theBeatlesPlay(musiciansArray, instrumentsArray){
  var array = [];
  for(var i = 0; i < musiciansArray.length; i++){
    array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return array;
}

function johnLennonFacts(array){
  var i = 0;
  while(i < array.length ){
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  debugger;
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  } while(number < 15);

  return array;
}