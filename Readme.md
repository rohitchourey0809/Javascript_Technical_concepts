# Promises vs. Async/Await: 
Promises: Promises are a pattern for handling asynchronous operations in JavaScript. They represent a value that might be available now, or in the future, or never. Promises provide a cleaner way to work with asynchronous code compared to traditional callback functions.

Async/Await: Async/Await is a syntax built on top of promises, introduced in ECMAScript 2017. It provides a more concise and readable way to work with asynchronous code. The async keyword is used to declare that a function returns a promise, and the await keyword is used within the function to wait for the resolution of a promise.

# Prototype in JavaScript:

In JavaScript, each object has a prototype, which is a reference to another object. This prototype object may, in turn, have its prototype, forming a prototype chain. The prototype is used for inheritance in JavaScript. When you access a property or method on an object, and it's not found on the object itself, JavaScript looks for it in the object's prototype and continues up the prototype chain until it finds the property or reaches the end of the chain.


# Event Bubbling:

Event bubbling is a mechanism in the DOM where an event triggered on a particular element will bubble up or propagate through its ancestors in the DOM hierarchy. This means that if you have nested HTML elements and an event occurs on the innermost element, the event will also trigger on all the outer elements containing it.

# Limitations of React:
Learning Curve: React has a learning curve, especially for beginners who may need time to grasp concepts like JSX, components, state, and props.
JSX Limitations: JSX might seem unintuitive to developers who are more accustomed to HTML.
SEO Issues: React applications are often single-page applications (SPAs), and there can be challenges with search engine optimization (SEO) due to the initial rendering being done on the client side.
Boilerplate Code: Some developers find that React projects can involve a lot of boilerplate code.
Context vs. Redux:

# Context in React:
 Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's often used for global state management in smaller applications where a centralized state is needed without the complexity of Redux.


# Redux:
 Redux is a state management library that is often used in larger React applications. It provides a predictable state container and follows a unidirectional data flow. Redux is suitable for complex state management scenarios where the application state needs to be managed more rigorously.
 
 
 # Controlled Components vs. Uncontrolled Components:

Controlled Components: In React, a controlled component is a component whose state is controlled by React. Form elements like input, textarea, and select maintain their own state, and their values are controlled by React through state. Changes to the input values trigger state updates.

Uncontrolled Components: An uncontrolled component is a component where the form data is handled by the DOM itself. The state is not controlled by React, and the data is accessed directly from the DOM using refs. Uncontrolled components are less common in React, but they can be useful in certain scenarios.

Controlled vs. Uncontrolled Components:

Controlled Components: Form elements where the value is managed by the component state using the useState hook. User changes trigger state updates and re-renders.
Uncontrolled Components: Form elements where the value is directly accessed from the DOM using refs. They update asynchronously and might require additional logic for validation and synchronization.


Error Boundaries in React:

Error boundaries are a feature in React that allows components to catch JavaScript errors anywhere in their component tree and log those errors, display a fallback UI, or take other appropriate actions. This prevents the entire application from crashing due to a single error in a component.
Example of using error boundaries:


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}


<!--              -----------------------    JAVASCRIPT    ---------------------------------                  -->


# What is JavaScript?
Answer:
JavaScript is a high-level, interpreted programming language primarily used for building interactive and dynamic web pages. It enables client-side scripting, allowing developers to create responsive and interactive user interfaces. JavaScript is an essential component of web development, providing the ability to manipulate the Document Object Model (DOM), handle events, and communicate with servers using technologies like AJAX.

# How is JavaScript different from Java?
Answer:
Despite their similar names, JavaScript and Java are distinct programming languages. JavaScript is a scripting language primarily used for front-end web development, executed in web browsers. It's lightweight and dynamically typed. On the other hand, Java is a full-fledged, object-oriented programming language designed for general-purpose applications, often used for back-end development. The similarity in names is mainly due to marketing reasons, and the two languages have different use cases and syntax.

#  What are the data types in JavaScript?
Answer:
JavaScript has two main categories of data types:

Primitive Data Types:

Number
String
Boolean
Null
Undefined
Symbol (introduced in ES6)
Non-Primitive (Reference) Data Types:

Object
Array
Function
Date
RegExp
Primitive data types are immutable, and non-primitive types are mutable and stored by reference.

# Explain hoisting in JavaScript.
Answer:
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows variables and functions to be used before they are declared in the code. However, only the declarations are hoisted, not the initializations.

Example:

javascript
Copy code
console.log(x); // undefined
var x = 5;
In this example, the declaration of x is hoisted to the top, but the initialization is not. Hence, the output is undefined.

#  What is the Event Loop in JavaScript?
Answer:
The Event Loop is a mechanism in JavaScript that allows asynchronous operations to be performed without blocking the execution of the main program. It continuously checks the call stack and the callback queue. When the call stack is empty, the event loop takes the first task from the callback queue and pushes it onto the call stack for execution. This process ensures that asynchronous operations, such as AJAX requests or timers, are handled in a non-blocking way.

# Lazy loading

Lazy loading is a technique in which you defer the loading of non-essential resources or components until they are actually needed. In React, lazy loading is commonly used for code-splitting, where you load parts of your application only when the user navigates to a specific route or interacts with a particular feature


# What is JavaScript?

JavaScript is a high-level, interpreted programming language primarily used for creating interactive effects within web browsers.

# What are the key features of JavaScript?

JavaScript is dynamically typed, supports functional and object-oriented programming paradigms, and is used for client-side as well as server-side development (with platforms like Node.js)
.

# What is the difference between null and undefined?

null represents the intentional absence of any object value, whereas undefined indicates the absence of a value in general. null is a value that can be assigned to a variable, whereas undefined usually means the variable has been declared but not yet assigned a value.

# What is hoisting in JavaScript?

#Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code execution. However, only the declarations are hoisted, not the initializations.

# What are closures in JavaScript?

Closures are functions that have access to their own scope, the scope in which they were defined, and the global scope. This allows for the preservation of the state of variables even after the outer function has finished executing.

# What is the event loop in JavaScript?

The event loop is a single-threaded mechanism in JavaScript that handles asynchronous callbacks. It continuously checks the call stack for functions to execute, and when it's empty, it looks at the message queue. If there are any messages, it processes them one by one.

# What is the difference between == and === operators?

The == operator checks for equality after type coercion, whereas the === operator checks for equality without type coercion. In other words, === checks for both value and type equality, whereas == only checks for value equality after type conversion.

# What is prototypal inheritance in JavaScript?

Prototypal inheritance is a way of creating objects in JavaScript where objects inherit properties and methods from a prototype. Each object has a private property which holds a link to another object called its prototype.

# What are some ways to handle asynchronous code in JavaScript?

Callbacks, Promises, and Async/Await are common ways to handle asynchronous code in JavaScript. Callbacks were traditionally used, Promises were introduced to simplify callback hell, and Async/Await is a syntactic sugar built on top of Promises to make asynchronous code look synchronous.

# Explain the concept of event bubbling and event capturing.

Event bubbling is the process where an event propagates from the target element up through its ancestors in the DOM tree. Event capturing is the opposite — the event starts from the top of the DOM tree and propagates downwards to the target element.

# What is NaN property in JavaScript?
NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

typeof of NaN will return a Number.

To check if a value is NaN, we use the isNaN() function,

Note- isNaN() function converts the given value to a Number type, and then equates to NaN.

isNaN("Hello")  // Returns true

isNaN(345)   // Returns false

isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 

isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true

# Explain passed by value and passed by reference.
Ans:-  Pass By 


