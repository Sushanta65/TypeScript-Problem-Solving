# TypeScript Assignment - Interface vs Type

## ✨ Definition

In TypeScript, both `interface` and `type` are used to define the **structure of data**. They help us describe the shape of objects, functions, or other types, making our code more readable, maintainable, and error-free.

---

## 🔍 Differences Between Interface and Type

| Feature                     | `interface`                                | `type`                                              |
|----------------------------|--------------------------------------------|-----------------------------------------------------|
| ✅ Declaration              | Declared using `interface` keyword         | Declared using `type` keyword                       |
| 🔁 Declaration Merging      | Supported — multiple declarations merge    | Not supported — duplicate declarations give error   |
| 🔗 Extension                | Uses `extends` keyword                     | Uses intersection `&` to combine types              |
| 🧱 Use Case                 | Best for defining object structures        | Can define objects, unions, tuples, primitives, etc.|
| 💡 Flexibility              | More structured and scalable               | More flexible and powerful for complex types        |

---

## 📘 Examples

### Interface Example:
```ts
interface Person {
  name: string;
  age: number;
}

interface Person {
  gender: string;
}

// Merged: { name: string, age: number, gender: string
