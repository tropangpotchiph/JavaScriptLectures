# Capitalize Challenge

**Instructions**:

Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about during our discussions. Put the result in a variable called `myNewString`.

Create multiple solutions if you would like.

**Expected Result:**

```JavaScript
const myString = 'developer';

console.log(myNewString); // 'Developer'
```

**Hints:**

1. You can use the `charAt()` method as well as `string[index]` to get the character at a specific index.
2. The `.toUpperCase()` method will make the entire string uppercase
3. `substring()` or `slice()` will return a specific portion of a string

<details>
<summary>Click for Solution</summary>
There are many ways to do this. Let's take a look:

```JavaScript
/Solution1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

//Solution2: instead of using charAt(0) we will use string[0]
myNewString = myString[0].toUpperCase() + myString.substring(1);

//Solution3: using slice and template literals
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;


```

</details>
