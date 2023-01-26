// Array.prototype.indexOf() 

var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

console.log(myFriendNames.indexOf("Thapa", 3));


// Array.prototype.lastIndexOf() 
 

var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

console.log(myFriendNames.lastIndexOf("Thapa",3));


// Array.prototype.includes() 
 

var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

console.log(myFriendNames.includes("thapa"));



// Array.prototype.find() 

arr.find(callback(element[ index[ array]])[ thisArg])

 

const prices = [200,300,350,400,450,500,600];

prices < 400
const findElem = prices.find((currVal) =>  currVal < 400 );
console.log(findElem);

console.log(  prices.find((currVal) => currVal > 1400 )  );