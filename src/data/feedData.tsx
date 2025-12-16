import React from "react";
import classNames from "classnames";

import intellij_scss_img_01 from "../assets/images/feed/intellij-scss/img-01.png";
import intellij_scss_img_02 from "../assets/images/feed/intellij-scss/img-02.png";
import style from "../pages/feed/view.module.scss";

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
    id: "js-this-keyword",
    category: "DEV",
    date: "16.12.25",
    title: "What is the “this” keyword in JavaScript?",
    content:
      <>
        <article>
          <section>
            <p>
              The <span className={style.bgTxt}>this</span> keyword refers to the object that is currently executing the code.
              <br/>
              What <span className={style.bgTxt}>this</span> refers to depends on how the function is called.
              <br/><br/>
              In a regular function, <span className={style.bgTxt}>this</span> refers to the global object.
              <br/>
              In a method - which is a function inside an object - <span className={style.bgTxt}>this</span> refers to that object itself.
              <br/><br/>
              Arrow functions work differently. They don't have their own <span className={style.bgTxt}>this</span>, so they use the <span className={style.bgTxt}>this</span> from the outer function instead.
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
              First, <strong>global scope</strong> - a variable declared outside any function can be accessed anywhere in your code.
              <br/><br/>
              Second, <strong>function scope</strong> - a variable declared inside a function can only be accessed within that function.
              <br/><br/>
              Third, <strong>block scope</strong> - when you use <span className={style.bgTxt}>let</span> or <span className={style.bgTxt}>const</span> inside curly braces, the variable can only be used within that block.
              Using <span className={style.bgTxt}>let</span> and <span className={style.bgTxt}>const</span> is better than <span className={style.bgTxt}>var</span> because they have block scope, which helps prevent bugs.
            </p>
          </section>

          <section>
            <pre>
              <code>
{`// Global Scope
let globalVar = "I'm global";

function myFunction() {
  // Function Scope
  let functionVar = "I'm inside function";
  console.log(globalVar);
}

if (true) {
  // Block Scope
  let blockVar = "I'm inside block";
  console.log(globalVar);
}

console.log(blockVar); // Error! blockVar is not accessible outside the block`}
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
              <strong>Hoisting</strong> is a JavaScript behavior where variable and function declarations are moved to the top of their
              scope before the code actually runs. So, the important thing to remember is that only the declaration is
              hoisted, not the value or assignment.
              <br/><br/>
              For example, with functions, you can call a function before you define it in your code, and it still works.
              But with variables, if you use <span className={style.bgTxt}>var</span>, the variable will be undefined until you assign it a value.
              <br/><br/>
              With modern JavaScript, we use <span className={style.bgTxt}>let</span> and <span className={style.bgTxt}>const</span> instead of <span className={style.bgTxt}>var</span>,
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
              variables from the outer function. This is very useful in JavaScript for data privacy and creating functions that remember values.
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
    id: "how-to-survive",
    category: "LIFE",
    date: "15.12.25",
    title: "How to survive the AI era as a frontend-developer",
    content:
      <>
        <article>

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
    title: "I heard this story about a fish.",
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