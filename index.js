function findAllPermutations(theString){
  if(theString.length < 2){
    return [theString];
  }
  
  let arrayContainer = [];
  for(let i = 0; i < theString.length; i++){
    let char = theString[i];
    let remainingChars = theString.slice(0, i) + theString.slice(i+1);
    for(let permutation of findAllPermutations(remainingChars)){
      arrayContainer.push(char + permutation)
    }
  }
  return arrayContainer
}