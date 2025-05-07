Questions Answers

Q-1: What are some differences between interfaces and types in TypeScript?

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
 