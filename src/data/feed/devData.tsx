import React from 'react';
import classNames from 'classnames';
import type { FeedItem } from './types';
import style from '../../pages/feed/view.module.scss';

import intellij_scss_img_01 from '../../assets/images/feed/intellij-scss/img-01.png';
import intellij_scss_img_02 from '../../assets/images/feed/intellij-scss/img-02.png';
import intellij_autoprefixer_img_01 from '../../assets/images/feed/intellij-autoprefixer/img-01.png';
import intellij_autoprefixer_img_02 from '../../assets/images/feed/intellij-autoprefixer/img-02.png';
import intellij_autoprefixer_img_03 from '../../assets/images/feed/intellij-autoprefixer/img-03.png';

export const devData: FeedItem[] = [
  {
    id: "intellij-autoprefixer",
    category: "DEV",
    date: "06.01.26",
    title: "IntelliJ IDEA Autoprefixer Setup Guide",
    content:
      <>
        <article>
          <section>
            <p>
              In VS Code, Sass compilation and autoprefixer settings were handled through
              <span className={style.txtBox}>settings.json</span> and the Live Sass Compiler extension.
              However, when switching to IntelliJ IDEA, I realized that there was no equivalent,
              centralized configuration file.
              <br/><br/>
              This made editor-specific settings impractical for a team environment.
              To achieve consistent CSS output regardless of the editor, I decided to move the configuration
              to a project-level setup using <span className={style.txtBox}>PostCSS</span> and <span className={style.txtBox}>Browserslist</span>.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>1. Install Package</h2>
          </header>
          <section>
            <p>
              To make Sass compilation and vendor prefix handling editor-agnostic,
              I decided to rely on <span className={style.txtBox}>Node.js</span>-based tooling.
              This allows the same CSS output regardless of whether the project is opened
              in IntelliJ IDEA, VS Code, or any other editor.
              <br/><br/>
              If the project does not already contain a <span className={style.txtBox}>package.json</span>,
              initialize it first:
            </p>
            <pre><code>{`npm init -y`}</code></pre>
            <p>Then install the required development dependencies:</p>
            <pre><code>{`npm install --save-dev sass postcss postcss-cli autoprefixer`}</code></pre>
            <p>
              This will automatically generate both <span className={style.txtBox}>package.json</span> and
              <span className={style.txtBox}>package-lock.json</span>, ensuring that all team members
              use the same package versions.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>2. Browserslist Configuration</h2>
          </header>
          <section>
            <p>
              Autoprefixer determines which vendor prefixes to apply based on the target
              browsers defined in <span className={style.txtBox}>Browserslist</span>.
              By extracting this configuration into a separate file, the browser support
              policy becomes explicit and consistent across all environments.
              <br/><br/>
              Create a <span className={style.txtBox}>.browserslistrc</span> file at the root of the project:
            </p>
            <pre><code>{`> 0.1%\nlast 2 versions`}</code></pre>
            <p>
              This configuration targets modern browsers while maintaining reasonable
              backward compatibility without unnecessary legacy prefixes.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>3. PostCSS Configuration</h2>
          </header>
          <section>
            <p>
              Instead of relying on editor-specific plugins, PostCSS is used as a
              project-level CSS processing layer.
              <br/><br/>
              Create a <span className={style.txtBox}>postcss.config.js</span> file in the project root:
            </p>
            <pre>
              <code>
{`module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}`}
              </code>
            </pre>
            <p>
              Autoprefixer will automatically read the browser targets from
              <span className={style.txtBox}>.browserslistrc</span>,
              keeping configuration clean and centralized.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>4. IntelliJ IDEA Integration</h2>
          </header>
          <section>
            <p>
              IntelliJ IDEA does not provide a built-in alternative to VS Code's Live Sass Compiler.
              Instead, <span className={style.txtBox}>File Watchers</span> can be used to
              trigger Sass and PostCSS processing on file changes.
              <br/><br/>
              Navigate to:
              <br/>
              <strong>Settings → Tools → File Watchers</strong>
              <br/><br/>
              Configure a watcher that runs <span className={style.txtBox}>sass</span> to
              compile SCSS files into CSS.
            </p>
            <div className={style.imgBox} data-uk-lightbox="animation: fade">
              <a href={intellij_autoprefixer_img_01}><img src={intellij_autoprefixer_img_01} alt=""/></a>
              <a href={intellij_autoprefixer_img_02}><img src={intellij_autoprefixer_img_02} alt=""/></a>
              <a href={intellij_autoprefixer_img_03}><img src={intellij_autoprefixer_img_03} alt=""/></a>
            </div>
            <p>*Autoprefixer Arguments:</p>
            <pre><code>{`"$FilePath$" --use autoprefixer --use cssnano --replace --no-map`}</code></pre>
            <br/>
            <p>*Sass Compiler Arguments:</p>
            <pre><code>{`--no-source-map --style=compressed $FileName$:$FileNameWithoutExtension$.min.css`}</code></pre>
          </section>
        </article>
      </>
  },
  {
    id: "js-async-await",
    category: "DEV",
    date: "16.12.25",
    title: "What is async/await?",
    content:
      <>
        <article>
          <section>
            <p>
              <strong>Async/await</strong> is a way to handle asynchronous operations in JavaScript.
              <br/>
              It makes asynchronous code look like synchronous code, which is easier to read and understand.
              <br/><br/>
              An <strong>async</strong> function is a function that always returns a Promise.
              <br/>
              An <strong>await</strong> keyword pauses the execution and waits for the Promise to be resolved.
              <br/><br/>
              For example, when you fetch data from a server, it takes time.
              <br/>
              With async/await, you can wait for that data without blocking other code from running.
            </p>
          </section>
          <section>
            <pre>
              <code>
{`// Simple example: cooking dinner
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
// Dinner is ready!`}
              </code>
            </pre>
          </section>
        </article>
      </>
  },
  {
    id: "js-this-keyword",
    category: "DEV",
    date: "16.12.25",
    title: `What is the "this" keyword in JavaScript?`,
    content:
      <>
        <article>
          <section>
            <p>
              The <span className={style.txtBox}>this</span> keyword refers to the object that is currently executing the code.
              <br/>
              What <span className={style.txtBox}>this</span> refers to depends on how the function is called.
              <br/><br/>
              In a regular function, <span className={style.txtBox}>this</span> refers to the global object.
              <br/>
              In a method, <span className={style.txtBox}>this</span> refers to that object itself.
              <br/><br/>
              Arrow functions don't have their own <span className={style.txtBox}>this</span>, so
              they use the <span className={style.txtBox}>this</span> from the outer function instead.
            </p>
          </section>
          <section>
            <pre>
              <code>
{`// 1. 객체의 메서드에서 this = 그 객체
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
console.log(cat.name); // "Whiskers"`}
              </code>
            </pre>
          </section>
        </article>
      </>
  },
  {
    id: "js-essential-concepts",
    category: "DEV",
    date: "16.12.25",
    title: "JavaScript Essential Concepts",
    content:
      <>
        <article>
          <header><h2>1. Scope</h2></header>
          <section>
            <p>
              Scope is the range where a variable can be accessed. In JavaScript, there are three types of scope:
              <br/><br/>
              First, <strong>global scope</strong> - a variable declared outside any function can be accessed anywhere in your code.
              <br/><br/>
              Second, <strong>function scope</strong> - a variable declared inside a function can only be accessed within that function.
              <br/><br/>
              Third, <strong>block scope</strong> - when you use <span className={style.txtBox}>let</span> or <span className={style.txtBox}>const</span> inside curly braces,
              the variable can only be used within that block.
              Using <span className={style.txtBox}>let</span> and <span className={style.txtBox}>const</span> is better
              than <span className={style.txtBox}>var</span> because they have block scope, which helps prevent bugs.
            </p>
          </section>
          <section>
            <pre>
              <code>
{`let global = "Accessible anywhere";

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
console.log(blockVar);      // ❌ Error! Not accessible outside the block`}
              </code>
            </pre>
          </section>
        </article>

        <article>
          <header><h2>2. Hoisting</h2></header>
          <section>
            <p>
              <strong>Hoisting</strong> is a JavaScript behavior where variable and function declarations are moved to
              the top of their scope before the code actually runs.
              <br/><br/>
              For example, with functions, you can call a function before you define it in your code, and it still works.
              But with variables, if you use <span className={style.txtBox}>var</span>, the variable will be undefined until you assign it a value.
              <br/><br/>
              With modern JavaScript, we use <span className={style.txtBox}>let</span> and <span className={style.txtBox}>const</span> instead of <span className={style.txtBox}>var</span>,
              which is better practice because it avoids hoisting confusion.
            </p>
          </section>
          <section>
            <pre>
              <code>
{`// Function hoisting works
sayHi(); // "Hi"

function sayHi() {
  console.log("Hi");
}

// Variable hoisting returns undefined
console.log(x); // undefined
var x = 5;
console.log(x); // 5`}
              </code>
            </pre>
          </section>
        </article>

        <article>
          <header><h2>3. Closure</h2></header>
          <section>
            <p>
              A closure is when a function has access to variables from another function.
              <br/>
              When you have a function inside a function, the inner function can use the
              variables from the outer function. This is very useful in JavaScript for data privacy and creating
              functions that remember values.
            </p>
          </section>
          <section>
            <pre>
              <code>
{`function outer() {
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
counter(); // 3`}
              </code>
            </pre>
          </section>
        </article>
      </>
  },
  {
    id: "intellij-scss",
    category: "DEV",
    date: "08.09.25",
    title: "IntelliJ IDEA SCSS Setup Guide",
    content:
      <>
        <article>
          <header>
            <h2>When You Need This</h2>
            <p>To optimize website loading speed, here's how to set up automatic compilation from SCSS to minified CSS in IntelliJ IDEA.</p>
          </header>
        </article>

        <article>
          <header><h2>1. Prerequisites</h2></header>
          <section>
            <h3>1-1. Install Sass Compiler</h3>
            <pre><code>npm install -g sass</code></pre>
          </section>
          <section>
            <h3>1-2. Install IntelliJ Plugins</h3>
            <p>Go to <strong>File</strong> &gt; <strong>Settings</strong> &gt; <strong>Plugins</strong> and install:</p>
            <ul className={style.itemList}>
              <li><strong>Sass</strong></li>
              <li><strong>File Watchers</strong></li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <h2>2. Configure SCSS File Watcher</h2>
            <p>Navigate to <strong>File</strong> &gt; <strong>Settings</strong> &gt; <strong>Tools</strong> &gt; <strong>File Watchers</strong> and create a new watcher.</p>
            <div className={classNames(style.imgBox)} data-uk-lightbox="animation: fade">
              <a href={intellij_scss_img_01}><img src={intellij_scss_img_01} alt="IntelliJ SCSS Setup 1"/></a>
              <a href={intellij_scss_img_02}><img src={intellij_scss_img_02} alt="IntelliJ SCSS Setup 2"/></a>
            </div>
          </header>
          <section>
            <h3>2-1. Regular CSS Compilation Settings</h3>
            <p><strong>1) Arguments:</strong></p>
            <pre><code>$FileName$:$FileNameWithoutExtension$.css --no-source-map</code></pre>
            <p><strong>2) Output paths to refresh:</strong></p>
            <pre><code>$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css:$ProjectFileDir$/css/$FileNameWithoutExtension$.css.map</code></pre>
          </section>
          <section>
            <h3>2-2. Minified CSS Compilation Settings</h3>
            <p><strong>1) Arguments:</strong></p>
            <pre><code>$FileName$:$FileNameWithoutExtension$.min.css  --style compressed --no-source-map</code></pre>
            <p><strong>2) Output paths to refresh:</strong></p>
            <pre><code>$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css:$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css.map</code></pre>
          </section>
        </article>

        <article>
          <section>
            <p>Now your SCSS files will automatically compile to minified CSS whenever you save them.</p>
          </section>
        </article>
      </>
  }
];