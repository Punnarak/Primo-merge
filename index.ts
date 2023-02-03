
const readline = require("readline-sync");
var c1 = readline.question("Enter Collection_1 : ");
var c2  = readline.question("Enter Collection_2 : ");
let myFunc = num => Number(num);

var collection_1 = String(c1).split(' ').map(myFunc)
var collection_2 = String(c2).split(' ').map(myFunc)


function merge( collection_1: number[],  collection_2: number[]): number[]{
  
   let result = collection_1.concat(collection_2)
  for(let i = 1 ; i < result.length ; i++){
    for(let j = 0 ; j < i ; j++){
      if(result[i] < result[j]){
        let temp = result[i]
        result[i] = result[j]
        result[j] = temp
        
      }
    }
  }
  
  return result;
}
console.log(merge(collection_1,collection_2));

