# 1 — Difference between any, unknown and never in TypeScript?

The type of any is used to assign any type of a variable. It will not give error even if you reassign another type. Like below -

```
let x: any = 10;
x = 'hello'; // No TypeScript error
console.log(x.toUpperCase()); // No TypeScript error
```

### The type unknown is better than type any, because it requires us checking the type before performing operations on value. Like below -

```
let y: unknown = 10;
// Type assertion needed before using y as number
if (typeof y === 'number') {
    console.log(y.toFixed(2));
}
```

### The type never represents value that never occurs. It is typically used for return statements of function that doesn’t returns properly. Like below -

```
function throwError(message: string): never {
    throw new Error(message);
}
```
