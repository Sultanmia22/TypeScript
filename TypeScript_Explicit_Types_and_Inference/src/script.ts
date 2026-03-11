// ** TypeScript Explicit Types and Inference **

//!Explicit Type Annotations
let greeting: string = "Hello, TypeScript!";

let usrCount : number = 42;

let isLoading : boolean = true;

let scores : number[] = [44,53,53]


// Function with Explicit Types

function greet(name:string): string {
    return `Hello,${name}`
};


//!Type Inference
//?TypeScript can automatically determine (infer) the type of a variable based on its initial value:

// TypeScript infers 'string'
let userName = 'Alice';

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true,false,true];

// TypeScript infers return type as 'number'
function add(a:number,b:number){
    return a + b;
}

//?Note: Type inference works best when variables are initialized at declaration.


//! Object Literal Inference 
const user = {
    name : 'Sultan',
    age: 30,
    isAdmin : true
};

// TypeScript knows these properties exist
console.log(user.name) // okey 

console.log(user.email) // Error: Property 'email' does not exist