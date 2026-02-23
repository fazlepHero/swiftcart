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