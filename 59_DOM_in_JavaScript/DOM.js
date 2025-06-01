/*
    Dom = DOCUMENT OBJECT MODEL
          Object{} that represents the page we see in the web browser
          and provides us with an API to interact with it.
          web browser constructs the DOM when it loads an HTML Document,
          and structure all the elements in a tree-like representation.
          JavaScript can access the DOM to dynamically
          change the content, structure, and style of a web page.  
*/

document.title = "My Website";
document.body.style.backgroundColor = "skyblue";

console.dir(document);

const username = "Anish Khatri";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username ;
