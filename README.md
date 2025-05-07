## Questions Answers

### Q-1: What are some differences between interfaces and types in TypeScript?

Ans: In TypeScript interface and type both are using for defining structure of data. There are some difference between interface and type.

Defferences:
1. Interface declar with interface keyword and type declar with type keyword.
    ```ts
    //Interface declar like this
    interface Car{
        name: "Toyota";
        model: "RMX2030"
    }
    //type declar like this
    type Animal = { name: string };
2. If we delar interface multiple time then it will be marged. Its called declaration marging. But its not happed with type, if we declar type then It can't be modifing.

3. Interface can extended using the extends keyword but in the type we use & intersection to combine them.
4. Interface primarily use for defining object structure. But Type is more flexible for function, union, tuple etc.
 

### Q-2: How does TypeScript help in improving code quality and project maintainability?

Ans: TypeScript is like JavaScript, but smarter. It helps us to write code that is correct and easy to fix. It makes big projects easier to work. Basically its called the superset of JavaScript. TypeScript help us to write better code with compile time error showing or catching. Here are some important role of TypeScript:
1. Find Error Early: Using TypeScript we can see the error on compile time and we can solved it quickly.
    ```ts
        let age: number = "twenty"; // This is wrong, because "twenty" is not a number

2. Code is Easy to Read : TypeScript codes are very easy to read and understand. Here is the example:
    ```ts
    function greet(user: { name: string; age: number }) {
    return `Hello, ${user.name}`;
    }

    ```
    The Codes are very easy to understand.

3. Good for Big Projects: In a big projects, it is hard to remember everything. TypeScript helps us to keep things in order and organized.

4. Catches Hidden Bugs: TypeScript finds small problems that are hard to see in normal JavaScript. Thats why we should use TypeScript.