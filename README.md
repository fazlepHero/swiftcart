# Some interview Questions 

### 1) What is the difference between null and undefined?

 `null` means a empty value defined by users on the other hand `undefined` is mistake to assign or forgot to assign. 

for example,

```javascript
let a; 
this is undefined because i forgot to assign a value to it.
let b = null;
this is null because i assigned a empty value to it.

```

#### 2) What is the use of the map() function in JavaScript? How is it different from forEach()?
 `map()` is use the whole array execute function for each array and retuns a new array but it's not modify the main array. on the other hand `forEach()` is use to execute a function for each element in the array but it does not return a new array and it can modify the main array.


 #### 3) What is the difference between == and ===?

 `==` compare two values only not the ype of the value on the other hand `===` compare two values and also compare the type of the value.



 #### 4) What is the significance of async/await in fetching API data?

  `async/await` helps to write clean asynchrounos opperations, 
  `fetch` isn a asynchronous function that returns promise, which means instead of executing  line by line code it wait and pass the executino to next line, `async/await` helps to hand error and i can write anychrouse code in a syncrounous way. 


#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

    `Scope` is the area where a variable is defined and can be accessed.
    `Global scope` is a area where a vaiable defined outside of any funcion or scop and can accessed from anywhere in the code. `Function scope` is a area where veriable can definded and only access inside the function. `Block scope` is a area where variable can defined and only access inside the block of code like if statement.
    