// Javascript
let root = document.getElementById("root");
let h1 = document.createElement("h1");
h1.innerHTML = 'Hello World! From Js';
root.appendChild(h1);

// React CND
let h2 = React.createElement("h1", {}, "Hellow World from React!");
let main = ReactDOM.createRoot(document.getElementById("main"));
main.render(h2);