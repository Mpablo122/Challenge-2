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

let employee = {
    name: "Francis Pablo",
    Age: 21,
    department: "Operations Department",
    isActive: true
};
console.log(employee)

employee.department = "Analytics Department"

console.log(employee)

employee.position = "Data Analyst"
console.log("Updated Employee Information", employee)

// "Task 3 - Employee Records."

let customers = [{name: "Jose Darnell", email: "josedarnell@yahoo.com", 
        purchaseamount: 200},
              {name: "Easton Smith", email: "eastonsmith@yahoo.com", 
        purchaseamount: 400},
                {name: "Francis Mark", email: "francismark@yahoo.com",
        purchaseamount: 500
     }];
customers.push = ({name: "Austin Meyers", email: "austinmeyers@yahoo.com",
    purchaseamount: 600
});

console.log(customers)
// "Task 4 - Customer Database."


