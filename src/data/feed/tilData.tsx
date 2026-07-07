import type { FeedItem } from "./types";

import intellij_scss_img_01 from "../../assets/images/feed/intellij-scss/img-01.png";
import intellij_scss_img_02 from "../../assets/images/feed/intellij-scss/img-02.png";
import intellij_autoprefixer_img_01 from "../../assets/images/feed/intellij-autoprefixer/img-01.png";
import intellij_autoprefixer_img_02 from "../../assets/images/feed/intellij-autoprefixer/img-02.png";
import intellij_autoprefixer_img_03 from "../../assets/images/feed/intellij-autoprefixer/img-03.png";

export const tilData: FeedItem[] = [
  {
    id: "intellij-autoprefixer",
    category: "til",
    date: "06.01.26",
    title: "IntelliJ IDEA Autoprefixer Setup Guide",
    content: [
      {
        blocks: [
          {
            type: "text",
            value: "In VS Code, Sass compilation and autoprefixer settings were handled through settings.json and the Live Sass Compiler extension. However, when switching to IntelliJ IDEA, I realized that there was no equivalent, centralized configuration file."
          },
          {
            type: "text",
            value: "This made editor-specific settings impractical for a team environment. To achieve consistent CSS output regardless of the editor, I decided to move the configuration to a project-level setup using PostCSS and Browserslist."
          }
        ]
      },
      {
        heading: "1. Install Package",
        blocks: [
          {
            type: "text",
            value: "To make Sass compilation and vendor prefix handling editor-agnostic, I decided to rely on Node.js-based tooling. This allows the same CSS output regardless of whether the project is opened in IntelliJ IDEA, VS Code, or any other editor."
          },
          { type: "text", value: "If the project does not already contain a package.json, initialize it first:" },
          { type: "code", value: "npm init -y" },
          { type: "text", value: "Then install the required development dependencies:" },
          { type: "code", value: "npm install --save-dev sass postcss postcss-cli autoprefixer" },
          {
            type: "text",
            value: "This will automatically generate both package.json and package-lock.json, ensuring that all team members use the same package versions."
          }
        ]
      },
      {
        heading: "2. Browserslist Configuration",
        blocks: [
          {
            type: "text",
            value: "Autoprefixer determines which vendor prefixes to apply based on the target browsers defined in Browserslist. By extracting this configuration into a separate file, the browser support policy becomes explicit and consistent across all environments."
          },
          { type: "text", value: "Create a .browserslistrc file at the root of the project:" },
          { type: "code", value: "> 0.1%\nlast 2 versions" },
          {
            type: "text",
            value: "This configuration targets modern browsers while maintaining reasonable backward compatibility without unnecessary legacy prefixes."
          }
        ]
      },
      {
        heading: "3. PostCSS Configuration",
        blocks: [
          {
            type: "text",
            value: "Instead of relying on editor-specific plugins, PostCSS is used as a project-level CSS processing layer."
          },
          { type: "text", value: "Create a postcss.config.js file in the project root:" },
          {
            type: "code", value:
              `module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}`
          },
          {
            type: "text",
            value: "Autoprefixer will automatically read the browser targets from .browserslistrc, keeping configuration clean and centralized."
          }
        ]
      },
      {
        heading: "4. IntelliJ IDEA Integration",
        blocks: [
          {
            type: "text",
            value: "IntelliJ IDEA does not provide a built-in alternative to VS Code's Live Sass Compiler. Instead, File Watchers can be used to trigger Sass and PostCSS processing on file changes."
          },
          { type: "text", value: "Navigate to: Settings → Tools → File Watchers" },
          { type: "text", value: "Configure a watcher that runs sass to compile SCSS files into CSS." },
          {
            type: "images",
            src: [intellij_autoprefixer_img_01, intellij_autoprefixer_img_02, intellij_autoprefixer_img_03]
          },
          { type: "strong", value: "*Autoprefixer Arguments:" },
          { type: "code", value: `"$FilePath$" --use autoprefixer --use cssnano --replace --no-map` },
          { type: "strong", value: "*Sass Compiler Arguments:" },
          { type: "code", value: `--no-source-map --style=compressed $FileName$:$FileNameWithoutExtension$.min.css` }
        ]
      }
    ]
  },
  {
    id: "js-async-await",
    category: "til",
    date: "16.12.25",
    title: "What is async/await?",
    content: [
      {
        blocks: [
          {
            type: "text",
            value: "Async/await is a way to handle asynchronous operations in JavaScript. It makes asynchronous code look like synchronous code, which is easier to read and understand."
          },
          {
            type: "text",
            value: "An async function is a function that always returns a Promise. An await keyword pauses the execution and waits for the Promise to be resolved."
          },
          {
            type: "text",
            value: "For example, when you fetch data from a server, it takes time. With async/await, you can wait for that data without blocking other code from running."
          },
          {
            type: "code", value:
              `// Simple example: cooking dinner
async function cookDinner() {
  console.log("Start cooking...");
  
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  console.log("Dinner is ready!");
}

cookDinner();
console.log("Other work can happen here!");

// Output:
// Start cooking...
// Other work can happen here!
// (wait 3 seconds)
// Dinner is ready!`
          }
        ]
      }
    ]
  },
  {
    id: "js-this-keyword",
    category: "til",
    date: "16.12.25",
    title: `What is the "this" keyword in JavaScript?`,
    content: [
      {
        blocks: [
          {
            type: "text",
            value: "The this keyword refers to the object that is currently executing the code. What this refers to depends on how the function is called."
          },
          {
            type: "text",
            value: "In a regular function, this refers to the global object. In a method, this refers to that object itself."
          },
          {
            type: "text",
            value: "Arrow functions don't have their own this, so they use the this from the outer function instead."
          },
          {
            type: "code", value:
              `// 1. 객체의 메서드에서 this = 그 객체
const dog = {
  name: "Max",
  bark: function() {
    console.log(this.name + " is barking"); // "Max is barking"
  }
};
dog.bark();

// 2. 일반 함수에서 this = 전역 객체
function test() {
  console.log(this); // 전역 객체
}
test();

// 3. new로 만든 객체에서 this = 새로운 객체
function Animal(name) {
  this.name = name;
}
const cat = new Animal("Whiskers");
console.log(cat.name); // "Whiskers"`
          }
        ]
      }
    ]
  },
  {
    id: "js-essential-concepts",
    category: "til",
    date: "16.12.25",
    title: "JavaScript Essential Concepts",
    content: [
      {
        heading: "1. Scope",
        blocks: [
          {
            type: "text",
            value: "Scope is the range where a variable can be accessed. In JavaScript, there are three types of scope:"
          },
          {
            type: "text",
            value: "First, global scope - a variable declared outside any function can be accessed anywhere in your code."
          },
          {
            type: "text",
            value: "Second, function scope - a variable declared inside a function can only be accessed within that function."
          },
          {
            type: "text",
            value: "Third, block scope - when you use let or const inside curly braces, the variable can only be used within that block. Using let and const is better than var because they have block scope, which helps prevent bugs."
          },
          {
            type: "code", value:
              `let global = "Accessible anywhere";

function testFunction() {
  let funcVar = "Only inside function";
  
  if (true) {
    let blockVar = "Only inside block";
    
    console.log(global);    // ✅ Can access all
    console.log(funcVar);   // ✅ Can access parent function variable
    console.log(blockVar);  // ✅ Can access own variable
  }
  
  console.log(global);      // ✅ Accessible
  console.log(funcVar);     // ✅ Accessible
  console.log(blockVar);    // ❌ Error! Not accessible outside the block
}

console.log(global);        // ✅ Accessible
console.log(funcVar);       // ❌ Error! Not accessible outside the function
console.log(blockVar);      // ❌ Error! Not accessible outside the block`
          }
        ]
      },
      {
        heading: "2. Hoisting",
        blocks: [
          {
            type: "text",
            value: "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before the code actually runs."
          },
          {
            type: "text",
            value: "For example, with functions, you can call a function before you define it in your code, and it still works. But with variables, if you use var, the variable will be undefined until you assign it a value."
          },
          {
            type: "text",
            value: "With modern JavaScript, we use let and const instead of var, which is better practice because it avoids hoisting confusion."
          },
          {
            type: "code", value:
              `// Function hoisting works
sayHi(); // "Hi"

function sayHi() {
  console.log("Hi");
}

// Variable hoisting returns undefined
console.log(x); // undefined
var x = 5;
console.log(x); // 5`
          }
        ]
      },
      {
        heading: "3. Closure",
        blocks: [
          {
            type: "text",
            value: "A closure is when a function has access to variables from another function. When you have a function inside a function, the inner function can use the variables from the outer function."
          },
          {
            type: "text",
            value: "This is very useful in JavaScript for data privacy and creating functions that remember values."
          },
          {
            type: "code", value:
              `function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3`
          }
        ]
      }
    ]
  },
  {
    id: "intellij-scss",
    category: "til",
    date: "08.09.25",
    title: "IntelliJ IDEA SCSS Setup Guide",
    content: [
      {
        heading: "When You Need This",
        blocks: [
          {
            type: "text",
            value: "To optimize website loading speed, here's how to set up automatic compilation from SCSS to minified CSS in IntelliJ IDEA."
          }
        ]
      },
      {
        heading: "1. Prerequisites",
        blocks: [
          { type: "heading", level: 3, value: "1-1. Install Sass Compiler" },
          { type: "code", value: "npm install -g sass" },
          { type: "heading", level: 3, value: "1-2. Install IntelliJ Plugins" },
          { type: "text", value: "Go to File > Settings > Plugins and install:" },
          { type: "list", items: ["Sass", "File Watchers"] }
        ]
      },
      {
        heading: "2. Configure SCSS File Watcher",
        blocks: [
          { type: "text", value: "Navigate to File > Settings > Tools > File Watchers and create a new watcher." },
          { type: "images", src: [intellij_scss_img_01, intellij_scss_img_02], alt: ["", ""] },
          { type: "heading", level: 3, value: "2-1. Regular CSS Compilation Settings" },
          { type: "strong", value: "1) Arguments:" },
          { type: "code", value: "$FileName$:$FileNameWithoutExtension$.css --no-source-map" },
          { type: "strong", value: "2) Output paths to refresh:" },
          {
            type: "code",
            value: "$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css:$ProjectFileDir$/css/$FileNameWithoutExtension$.css.map"
          },
          { type: "heading", level: 3, value: "2-2. Minified CSS Compilation Settings" },
          { type: "strong", value: "1) Arguments:" },
          { type: "code", value: "$FileName$:$FileNameWithoutExtension$.min.css --style compressed --no-source-map" },
          { type: "strong", value: "2) Output paths to refresh:" },
          {
            type: "code",
            value: "$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css:$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css.map"
          }
        ]
      },
      {
        blocks: [
          {
            type: "text",
            value: "Now your SCSS files will automatically compile to minified CSS whenever you save them."
          }
        ]
      }
    ]
  }
];