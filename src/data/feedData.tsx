import React from "react";
import classNames from "classnames";

import intellij_scss_img_01 from "../assets/images/feed/intellij-scss/img-01.png";
import intellij_scss_img_02 from "../assets/images/feed/intellij-scss/img-02.png";
import style from "../pages/feed/view.module.scss";

import intellij_autoprefixer_img_01 from "../assets/images/feed/intellij-autoprefixer/img-01.png";
import intellij_autoprefixer_img_02 from "../assets/images/feed/intellij-autoprefixer/img-02.png";
import intellij_autoprefixer_img_03 from "../assets/images/feed/intellij-autoprefixer/img-03.png";

export interface FeedItem {
  id: string;
  category: "LAB" | "DEV" | "LIFE";
  date: string;
  title: string;
  externalUrl?: string;
  content?: React.ReactNode;
}

//**category : LAB, DEV, LIFE
export const feedData: FeedItem[] = [
  {
    id: "frontend-in-the-ai-era",
    category: "LIFE",
    date: "19.02.26",
    title: "Being a Frontend Developer When AI Writes the Code",
    content:
      <>
        <article>
          <header>
            <h2>When AI Can Do What You Do</h2>
          </header>
          <section>
            <p>
              Ask AI to write code these days, and it actually does a decent job.
              So what are we supposed to do with that?
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>Judgment Is What's Left</h2>
          </header>
          <section>
            <p>
              AI can write the code, but it can't tell you if it's right.
              Is there a bug? Is there unnecessary logic? Is it secure enough?
              Which AI tool is even worth using for this project?
              That judgment comes from experience — and it's still yours.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>How to Actually Build That Judgment</h2>
          </header>
          <section>
            <p>
              Read more code than you write. Other people's code, open source projects,
              code reviews — and yes, AI-generated code too. The more you read,
              the faster you spot what's off.
            </p>
            <p>
              Keep the fundamentals sharp. Performance, security, clean logic —
              knowing these deeply is what lets you spot when AI gets it wrong.
            </p>
            <p>
              And use AI on real projects, a lot. Not passively, but with intention.
              The more contexts you work through, the better you get at knowing
              which tool to reach for and when to trust it.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>So What Kind of Developer Survives?</h2>
          </header>
          <section>
            <p>
              Not the one who codes faster than AI.
              The one who knows when AI is wrong, understands what the team actually needs,
              and never loses sight of why something is being built in the first place.
            </p>
          </section>
        </article>
      </>
  },
  {
    id: "vanilla-carousel-demo",
    category: "LAB",
    date: "19.01.26",
    title: "Vanilla Carousel Demo",
    externalUrl: "https://vanilla-carousel-demo.netlify.app/"
  },
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

            <pre>
              <code>
{`npm init -y`}
              </code>
            </pre>

            <p>
              Then install the required development dependencies:
            </p>

            <pre>
              <code>
{`npm install --save-dev sass postcss postcss-cli autoprefixer`}
              </code>
            </pre>

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
              Create a <span className={style.txtBox}>.browserslistrc</span> file
              at the root of the project:
            </p>

            <pre>
              <code>
{`> 0.1%
last 2 versions`}
              </code>
            </pre>

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
              This ensures that vendor prefixing behaves the same regardless of the editor
              or operating system.
              <br/><br/>
              Create a <span className={style.txtBox}>postcss.config.js</span>
              file in the project root:
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
              IntelliJ IDEA does not provide a built-in alternative to VS Code’s Live Sass
              Compiler.
              Instead, <span className={style.txtBox}>File Watchers</span> can be used to
              trigger Sass and PostCSS processing on file changes.
              <br/><br/>
              Navigate to:
              <br />
              <strong>
                Settings → Tools → File Watchers
              </strong>
              <br/><br/>
              Configure a watcher that runs <span className={style.txtBox}>sass</span> to
              compile SCSS files into CSS.
              <br/>
              PostCSS can either be chained as a second watcher or executed via npm scripts.
            </p>

            <div className={style.imgBox} data-uk-lightbox="animation: fade">
              <a href={intellij_autoprefixer_img_01}>
                <img src={intellij_autoprefixer_img_01} alt=""/>
              </a>
              <a href={intellij_autoprefixer_img_02}>
                <img src={intellij_autoprefixer_img_02} alt=""/>
              </a>
              <a href={intellij_autoprefixer_img_03}>
                <img src={intellij_autoprefixer_img_03} alt=""/>
              </a>
            </div>

            <p>
              *Autoprefixer Arguments:
            </p>
            <pre>
              <code>
{`"$FilePath$" --use autoprefixer --use cssnano --replace --no-map`}
              </code>
            </pre>
              <br/>
            <p>*Sass Compiler Arguments:</p>
            <pre>
              <code>
{`--no-source-map --style=compressed $FileName$:$FileNameWithoutExtension$.min.css`}
              </code>
            </pre>

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
    
    // Wait 3 seconds
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
    title: "What is the “this” keyword in JavaScript?",
    content:
      <>
        <article>
          <section>
            <p>
              The <span className={style.txtBox}>this</span> keyword refers to the object that is currently executing the
              code.
              <br/>
              What <span className={style.txtBox}>this</span> refers to depends on how the function is called.
              <br/><br/>
              In a regular function, <span className={style.txtBox}>this</span> refers to the global object.
              <br/>
              In a method - which is a function inside an object - <span className={style.txtBox}>this</span> refers to
              that object itself.
              <br/><br/>
              Arrow functions work differently. They don't have their own <span className={style.txtBox}>this</span>, so
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
          <header>
            <h2>1. Scope</h2>
          </header>

          <section>
            <p>
              Scope is the range where a variable can be accessed. In JavaScript, there are three types of scope:
              <br/><br/>
              First, <strong>global scope</strong> - a variable declared outside any function can be accessed anywhere
              in your code.
              <br/><br/>
              Second, <strong>function scope</strong> - a variable declared inside a function can only be accessed
              within that function.
              <br/><br/>
              Third, <strong>block scope</strong> - when you use <span className={style.txtBox}>let</span> or <span
              className={style.txtBox}>const</span> inside curly braces, the variable can only be used within that block.
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
          <header>
            <h2>2. Hoisting</h2>
          </header>

          <section>
            <p>
              <strong>Hoisting</strong> is a JavaScript behavior where variable and function declarations are moved to
              the top of their
              scope before the code actually runs. So, the important thing to remember is that only the declaration is
              hoisted, not the value or assignment.
              <br/><br/>
              For example, with functions, you can call a function before you define it in your code, and it still
              works.
              But with variables, if you use <span className={style.txtBox}>var</span>, the variable will be undefined
              until you assign it a value.
              <br/><br/>
              With modern JavaScript, we use <span className={style.txtBox}>let</span> and <span
              className={style.txtBox}>const</span> instead of <span className={style.txtBox}>var</span>,
              which is better practice because it avoids hoisting confusion.
              And the best approach is to always declare your variables before you use them in your code.
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
          <header>
            <h2>3. Closure</h2>
          </header>

          <section>
            <p>
              A closure is when a function has access to variables from another function.
              <br/>
              Here's a simple example:
              when you have a function inside a function, the inner function can use the
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
    id: "3d-folding-effect",
    category: "LAB",
    date: "13.11.25",
    title: "3D Folding Effect",
    externalUrl: "https://3d-folding-effect.netlify.app"
  },
  {
    id: "draggable-product-grid",
    category: "LAB",
    date: "10.11.25",
    title: "Draggable Product Grid",
    externalUrl: "https://draggable-product-grid.netlify.app"
  },
  {
    id: "soul",
    category: "LIFE",
    date: "19.09.25",
    title: "I heard this story about a fish",
    content:
      (
        <article>
          <section>
            <p>
              I heard this story about a fish.
              <br/>
              He swims up to this older fish and says,
              <br/>
              "I'm trying to find this thing they call the ocean."
              <br/>
              "The ocean?" says the older fish, <strong>"that's what you're in right now."</strong>
              <br/>
              "This?" says the younger fish, "This is water. What I want is the ocean."
            </p>
            <strong>Soul (2020), Disney Pixar</strong>
          </section>
        </article>
      )
  },
  {
    id: "secret-santa",
    category: "LIFE",
    date: "18.09.25",
    title: "Flipping Secret Santa on Its Head",
    content:
      (
        <article>
          <header>
            <h2>Flipping Secret Santa on Its Head</h2>
          </header>

          <section>
            <h3>The Problem from 2022</h3>
            <p>
              I was put in charge of Secret Santa for our December 2023 year-end party.
              I heard the <b>2022 event</b> didn't go well—the main issue was gift satisfaction.
              Since it's hard to really know your coworkers' preferences, people often received
              unwanted items that ended up unused and forgotten.
            </p>
          </section>

          <section>
            <h3>A New Approach for 2023</h3>
            <p>
              So I completely flipped the format.
              <br/><br/>
              <b>Old way:</b> Know who you're giving to → Guess their preferences → Prepare gift
              <br/>
              <b>New way:</b> Share what you want to receive → Guess who you're preparing for
              <br/><br/>
              This way, everyone gets something they actually want, while still keeping
              the fun of guessing who their Secret Santa is.
            </p>
          </section>
        </article>
      )
  },
  {
    id: "sticky-vertical-slide",
    category: "LAB",
    date: "17.09.25",
    title: "Responsive Sticky Vertical Component",
    externalUrl: "https://sticky-vertical-slide.netlify.app/"
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
            <p>To optimize website loading speed, here's how to set up automatic compilation from SCSS to minified CSS
              in IntelliJ IDEA.</p>
          </header>
        </article>

        <article>
          <header>
            <h2>1. Prerequisites</h2>
          </header>

          <section>
            <h3>1-1. Install Sass Compiler</h3>
            <pre>
              <code>
                npm install -g sass
              </code>
            </pre>
          </section>

          <section>
            <h3>1-2. Install IntelliJ Plugins</h3>
            <p>Go to <strong>File</strong> &gt; <strong>Settings</strong> &gt; <strong>Plugins</strong> and install the
              following plugins:</p>
            <ul className={style.itemList}>
              <li><strong>Sass</strong></li>
              <li><strong>File Watchers</strong></li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <h2>2. Configure SCSS File Watcher</h2>
            <p>Navigate to <strong>File</strong> &gt; <strong>Settings</strong> &gt; <strong>Tools</strong> &gt;
              <strong>File Watchers</strong> and create a new watcher.</p>
            <div className={classNames(style.imgBox)} data-uk-lightbox="animation: fade">
              <a href={intellij_scss_img_01}>
                <img src={intellij_scss_img_01} alt="IntelliJ SCSS Setup 1"/>
              </a>
              <a href={intellij_scss_img_02}>
                <img src={intellij_scss_img_02} alt="IntelliJ SCSS Setup 2"/>
              </a>
            </div>
          </header>

          <section>
            <h3>2-1. Regular CSS Compilation Settings</h3>
            <p><strong>1) Arguments:</strong></p>
            <pre>
              <code>
$FileName$:$FileNameWithoutExtension$.css --no-source-map
              </code>
            </pre>
            <p><strong>2) Output paths to refresh:</strong></p>
            <pre>
              <code>
$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css:$ProjectFileDir$/css/$FileNameWithoutExtension$.css.map
              </code>
            </pre>
          </section>

          <section>
            <h3>2-2. Minified CSS Compilation Settings</h3>
            <p><strong>1) Arguments:</strong></p>
            <pre>
              <code>
$FileName$:$FileNameWithoutExtension$.min.css  --style compressed --no-source-map
              </code>
            </pre>
            <p><strong>2) Output paths to refresh:</strong></p>
            <pre>
              <code>
$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css:$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css.map
              </code>
            </pre>
          </section>
        </article>

        <article>
          <section>
            <p>Now your SCSS files will automatically compile to minified CSS whenever you save them.</p>
          </section>
        </article>
      </>
  },
  {
    id: "circular-heritage",
    category: "LAB",
    date: "03.09.25",
    title: "From 200 to 80 Lines: Heritage Page Code Optimization",
    content:
      <>
        <article>
          <header>
            <h2>Overview</h2>
          </header>

          <section>
            <a
              href="https://circular-heritage.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Live Demo
            </a>
            <a
              href="https://github.com/happycodehouse/circular-heritage"
              target="_blank"
              rel="noopener noreferrer"
            >
              📂 Github
            </a>
          </section>

          <section>
            <p>
              The original codebase suffered from hardcoded repetitive logic and manual state
              management that made it difficult to maintain. I rewrote the scroll animation
              system from the ground up, reducing 200+ lines of imperative code down to 80
              lines of clean, declarative JavaScript.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>Problems with the Original Code</h2>
          </header>

          <section>
            <h3>Repetitive Hardcoding</h3>
            <ul className={style.itemList}>
              <li>Four separate if statements handling each chapter's scroll position</li>
              <li>Manual scroll offset calculations (fullOffset + fullHeight * N)</li>
              <li>Every new chapter required code changes in multiple places</li>
            </ul>
          </section>

          <section>
            <h3>Tangled Responsive Logic</h3>
            <ul className={style.itemList}>
              <li>PC and mobile behaviors crammed into a single breakPoint() function</li>
              <li>Environment-specific bugs were hard to track down</li>
              <li>No clear boundaries between device-specific animations</li>
            </ul>
          </section>

          <section>
            <h3>Fragile State Management</h3>
            <ul className={style.itemList}>
              <li>Four boolean flags (chapterMotionFlag_0~3) tracking chapter transitions</li>
              <li>Hardcoded progress thresholds (0-24%, 24-49%, etc.)</li>
              <li>Prone to state synchronization bugs</li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <h2>How I Solved It</h2>
          </header>

          <section>
            <h3>1. Eliminated Repetitive Logic</h3>
            <p>
              <strong>The Problem:</strong> Four hardcoded if statements for each chapter
            </p>

            <strong>Before: Manual calculations for every index</strong>
            <pre>
        <code>
{`if (targetIdx === 0) {
  gsap.to(window, { scrollTo: fullOffset });
}
if (targetIdx === 1) {
  gsap.to(window, { scrollTo: fullOffset + (fullHeight * 1) });
}
if (targetIdx === 2) {
  gsap.to(window, { scrollTo: fullOffset + (fullHeight * 2) });
}
if (targetIdx === 3) {
  gsap.to(window, { scrollTo: fullOffset + (fullHeight * 3) });
}
// Every new chapter means more code to write`}
        </code>
      </pre>

            <strong>After: One function handles everything</strong>
            <pre>
        <code>
{`function activeTimeline(idx) {
  gsap.to(window, {
    scrollTo: $desc.eq(idx).offset().top,
    ease: "none",
    onComplete: () => scrollToItem(idx)
  });
}
// Works for any number of chapters automatically`}
        </code>
      </pre>

            <p>
              <strong>Why it matters:</strong> New chapters can be added in the HTML without
              touching the JavaScript. The function uses jQuery's .eq() and .offset() to
              calculate positions dynamically.
            </p>
          </section>

          <section>
            <h3>2. Separated PC/Mobile Logic</h3>
            <p>
              <strong>The Problem:</strong> Device logic tangled together in one function
            </p>

            <strong>Before: Nested conditionals everywhere</strong>
            <pre>
        <code>
{`function breakPoint() {
  if (MEDIA_QUERY.matches) {
    // PC stuff
    $progress = $('#progress');
  } else {
    // Mobile stuff
    $progress = $('#progressMo');
    $timelineItem.on('click', function () {
      let target = $(this).parent();
      tlwCenter(target);
    });
  }
}`}
        </code>
      </pre>

            <strong>After: Clean separation with ScrollTrigger</strong>
            <pre>
        <code>
{`ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function() {
    // PC gets its own timeline
    pcSecHeritageTl = gsap.timeline({
      scrollTrigger: { /* PC config */ }
    });
  },
  "(max-width: 1024px)": function() {
    // Mobile gets its own timeline
    moSecHeritageTl = gsap.timeline({
      scrollTrigger: {
        onEnter: () => $timelineWrap.addClass("fixed")
      }
    });
  }
});`}
        </code>
      </pre>

            <p>
              <strong>Why it matters:</strong> Each device has its own isolated ScrollTrigger.
              GSAP handles cleanup and re-initialization on resize automatically.
            </p>
          </section>

          <section>
            <h3>3. Ditched Manual State Management</h3>
            <p>
              <strong>The Problem:</strong> Four boolean flags trying to track everything
            </p>

            <strong>Before: Flag juggling based on scroll progress</strong>
            <pre>
        <code>
{`let chapterMotionFlag_0 = true,
    chapterMotionFlag_1 = true,
    chapterMotionFlag_2 = true,
    chapterMotionFlag_3 = true;

onUpdate: function (self) {
  let progress = parseInt(self.progress * 100);
  
  if (progress >= 0 && progress < 24) {
    chapterMotionFlag_3 = true;
    if(chapterMotionFlag_0){
      chapterMotion(0);
      chapterMotionFlag_0 = false;
    }
    chapterMotionFlag_1 = true;
  }
  // ...and so on for each chapter
}`}
        </code>
      </pre>

            <strong>After: Let ScrollTrigger handle it</strong>
            <pre>
        <code>
{`$timelineItem.each(function(idx) {
  pcSecHeritageTl.to({}, {
    onStart: () => activeTimeline(idx),
    onReverseComplete: () => activeTimeline(idx - 1)
  });
});
// No manual tracking needed`}
        </code>
      </pre>

            <p>
              <strong>Why it matters:</strong> Eliminated 4 flag variables and all the progress
              calculation logic. ScrollTrigger handles forward and backward scrolling naturally.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>Results</h2>
          </header>

          <section>
            <ul className={style.itemList}>
              <li>
                <strong>60% less code:</strong> Cut from 200+ lines to 80 by removing
                repetitive conditionals and flag management
              </li>
              <li>
                <strong>Future-proof:</strong> New chapters only need HTML updates—no
                JavaScript changes required
              </li>
              <li>
                <strong>Easier to debug:</strong> PC/mobile logic lives in separate,
                isolated contexts
              </li>
              <li>
                <strong>More reliable:</strong> No manual state tracking means no
                synchronization bugs
              </li>
            </ul>
          </section>

          <section>
            <p>
              This refactor wasn't just about writing less code—it was about writing better code.
              Instead of manually handling each chapter with separate if statements,
              I used index-based loops to automate the process. This shifted the code
              from telling the browser "how to scroll" step-by-step to simply declaring
              "what to animate," making it simpler and more reliable.
            </p>
          </section>
        </article>
      </>
  }
];