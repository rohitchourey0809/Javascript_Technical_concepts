## (Q1) What is the difference between innerHTML and textContent

innerHTML and textContent are both properties in JavaScript used to manipulate the content of HTML elements, but they function differently:

`innerHTML:`

1. innerHTML allows you to access or modify the HTML content inside an element.

2. When you use innerHTML, you're not just dealing with text content, but with the entire HTML structure inside the element, including any HTML tags.

For example, if you have a <div> element with some text and HTML tags inside it, element.innerHTML would give you access to the HTML content inside that <div>, including the tags themselves.

`textContent:`

1. textContent allows you to access or modify only the text content inside an element, without considering any HTML tags.

2. It deals strictly with the textual content, ignoring any HTML markup within the element.

For example, if you have a <div> element with some text and HTML tags inside it, element.textContent would give you access to just the text content, excluding any HTML tags.
Example:

html

<div id="example">
    <p>This is <strong>some</strong> text.</p>
</div>

const div = document.getElementById('example');

console.log(div.innerHTML);

<!-- // Output: "<p>This is <strong>some</strong> text.</p>" -->

console.log(div.textContent);

<!-- // Output: "This is some text." -->

In summary, innerHTML deals with HTML content, including tags, while textContent deals with just the text content, ignoring any HTML tags.

<!-- --------------------------------------------- -->

## (Q2) What is the difference between document.getElementsByClassName and document.getElementsById

Ans:
`document.getElementsByClassName(className):`
This method `returns a collection of elements that have the specified class name`.

If multiple elements in the document have the same class name, all of them will be returned in a live HTMLCollection.
If no elements are found with the specified class name, an empty HTMLCollection will be returned.

Example:
let elements = document.getElementsByClassName("exampleClass");

`document.getElementById(id):`
This method `returns a single element that has the specified ID`.

IDs are supposed to be unique within a document, so this method typically returns only one element (the first one found with the specified ID).

If no element is found with the specified ID, null is returned.

Example:
let element = document.getElementById("exampleId");
In summary:
\*\*

**`document.getElementsByClassName returns multiple elements with the specified class name.`**

**`document.getElementById returns a single element with the specified ID.`**

It's worth noting that while document.

getElementsByClassName returns a live HTMLCollection,

document.getElementById returns only one element (or null if not found), so there's no need to iterate through it.

Additionally, using IDs (document.getElementById) is generally faster than using classes (document.getElementsByClassName).

 
