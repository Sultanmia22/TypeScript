// ** TypeScript Arrays **
//? TypeScript has a specific syntax for typing arrays.
//! Readonly
//? The readonly keyword can prevent arrays from being changed.
const names = ['Sultan'];
names.push('Mia'); // Error: Property 'push' does not exist on type 'readonly string[]'.
//! Type Inference
//?TypeScript can infer the type of an array if it has values.
// Example
const numbers = [1, 2, 3, 4]; // inferred to type number[]
numbers.push(4);
numbers.push('4'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
export {};
//# sourceMappingURL=script.js.map