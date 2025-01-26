let products = ["Brocolli","fries","whopper","Juice","Ice Cream"];
products.push ("pie");
console.log(products);
let productsUpdated = products.pop();
console.log(productsUpdated);
console,log(products);
//task 1 - Store Inventory

let scores = [75, 20, 80 , 95, 100];
scores.splice (1,1, 50)
console.log(scores)

let totalscores = scores.reduce((sum, score) => sum + score, 0);
let averagescores = totalscores / scores.length;

console.log ("Updated array", scores);
console.log("Average Scores =", averagescores);

//Task 2 - student scores