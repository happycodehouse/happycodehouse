import React from 'react';
import type { FeedItem } from './types';
import style from '../../pages/feed/view.module.scss';

export const labData: FeedItem[] = [
  {
    id: "vanilla-carousel-demo",
    category: "LAB",
    date: "19.01.26",
    title: "Vanilla Infinite Center",
    externalUrl: "https://vanilla-infinite-center.netlify.app/"
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
    id: "sticky-vertical-slide",
    category: "LAB",
    date: "17.09.25",
    title: "Responsive Sticky Vertical Component",
    externalUrl: "https://sticky-vertical-slide.netlify.app/"
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
            <a href="https://circular-heritage.netlify.app/" target="_blank" rel="noopener noreferrer">
              🌐 Live Demo
            </a>
            <a href="https://github.com/happycodehouse/circular-heritage" target="_blank" rel="noopener noreferrer">
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
            <p><strong>The Problem:</strong> Four hardcoded if statements for each chapter</p>
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
            <p><strong>The Problem:</strong> Device logic tangled together in one function</p>
            <strong>Before: Nested conditionals everywhere</strong>
            <pre>
              <code>
{`function breakPoint() {
  if (MEDIA_QUERY.matches) {
    $progress = $('#progress');
  } else {
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
    pcSecHeritageTl = gsap.timeline({
      scrollTrigger: { /* PC config */ }
    });
  },
  "(max-width: 1024px)": function() {
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
            <p><strong>The Problem:</strong> Four boolean flags trying to track everything</p>
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
});`}
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
              <li><strong>60% less code:</strong> Cut from 200+ lines to 80 by removing repetitive conditionals and flag management</li>
              <li><strong>Future-proof:</strong> New chapters only need HTML updates—no JavaScript changes required</li>
              <li><strong>Easier to debug:</strong> PC/mobile logic lives in separate, isolated contexts</li>
              <li><strong>More reliable:</strong> No manual state tracking means no synchronization bugs</li>
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