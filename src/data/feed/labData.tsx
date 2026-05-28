import type { FeedItem } from './types'

import intellij_autoprefixer_img_01 from '../../assets/images/feed/intellij-autoprefixer/img-01.png'
import intellij_autoprefixer_img_02 from '../../assets/images/feed/intellij-autoprefixer/img-02.png'
import intellij_autoprefixer_img_03 from '../../assets/images/feed/intellij-autoprefixer/img-03.png'

/* copy this
{
  id: "",
   category: "LAB",
  date: "",
  title: "",
  externalUrl: ""
},
*/

export const labData: FeedItem[] = [
  {
    id: "scroll-depth-gallery",
    category: "LAB",
    date: "13.05.26",
    title: "Scroll-reactive 3D gallery — Three.js · WebGL · GSAP",
    externalUrl: "https://scroll-depth-gallery.netlify.app/"
  },
  {
    id: "mask-scroll-transition",
    category: "LAB",
    date: "06.05.26",
    title: "SVG Blind Reveal - Scroll Image Transition",
    externalUrl: "https://mask-scroll-transition.netlify.app/"
  },
  {
    id: "lift-slideshow",
    category: "LAB",
    date: "28.04.26",
    title: "Vertical Lift Slideshow",
    externalUrl: "https://lift-slideshow.netlify.app/"
  },
  {
    id: "vanilla-infinite-center",
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
    content: [
      {
        heading: "Overview",
        blocks: [
          { type: "link", label: "🌐 Live Demo", url: "https://circular-heritage.netlify.app/" },
          { type: "link", label: "📂 Github", url: "https://github.com/happycodehouse/circular-heritage" },
          { type: "text", value: "The original codebase suffered from hardcoded repetitive logic and manual state management that made it difficult to maintain. I rewrote the scroll animation system from the ground up, reducing 200+ lines of imperative code down to 80 lines of clean, declarative JavaScript." }
        ]
      },
      {
        heading: "Problems with the Original Code",
        blocks: [
          { type: "heading", level: 3, value: "Repetitive Hardcoding" },
          { type: "list", items: [
              "Four separate if statements handling each chapter's scroll position",
              "Manual scroll offset calculations (fullOffset + fullHeight * N)",
              "Every new chapter required code changes in multiple places"
            ]},
          { type: "heading", level: 3, value: "Tangled Responsive Logic" },
          { type: "list", items: [
              "PC and mobile behaviors crammed into a single breakPoint() function",
              "Environment-specific bugs were hard to track down",
              "No clear boundaries between device-specific animations"
            ]},
          { type: "heading", level: 3, value: "Fragile State Management" },
          { type: "list", items: [
              "Four boolean flags (chapterMotionFlag_0~3) tracking chapter transitions",
              "Hardcoded progress thresholds (0-24%, 24-49%, etc.)",
              "Prone to state synchronization bugs"
            ]}
        ]
      },
      {
        heading: "How I Solved It",
        blocks: [
          { type: "heading", level: 3, value: "1. Eliminated Repetitive Logic" },
          { type: "text", value: "The Problem: Four hardcoded if statements for each chapter" },
          { type: "strong", value: "Before: Manual calculations for every index" },
          { type: "code", value:
              `if (targetIdx === 0) {
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
// Every new chapter means more code to write`
          },
          { type: "strong", value: "After: One function handles everything" },
          { type: "code", value:
              `function activeTimeline(idx) {
  gsap.to(window, {
    scrollTo: $desc.eq(idx).offset().top,
    ease: "none",
    onComplete: () => scrollToItem(idx)
  });
}
// Works for any number of chapters automatically`
          },
          { type: "text", value: "Why it matters: New chapters can be added in the HTML without touching the JavaScript. The function uses jQuery's .eq() and .offset() to calculate positions dynamically." },

          { type: "heading", level: 3, value: "2. Separated PC/Mobile Logic" },
          { type: "text", value: "The Problem: Device logic tangled together in one function" },
          { type: "strong", value: "Before: Nested conditionals everywhere" },
          { type: "code", value:
              `function breakPoint() {
  if (MEDIA_QUERY.matches) {
    $progress = $('#progress');
  } else {
    $progress = $('#progressMo');
    $timelineItem.on('click', function () {
      let target = $(this).parent();
      tlwCenter(target);
    });
  }
}`
          },
          { type: "strong", value: "After: Clean separation with ScrollTrigger" },
          { type: "code", value:
              `ScrollTrigger.matchMedia({
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
});`
          },
          { type: "text", value: "Why it matters: Each device has its own isolated ScrollTrigger. GSAP handles cleanup and re-initialization on resize automatically." },

          { type: "heading", level: 3, value: "3. Ditched Manual State Management" },
          { type: "text", value: "The Problem: Four boolean flags trying to track everything" },
          { type: "strong", value: "Before: Flag juggling based on scroll progress" },
          { type: "code", value:
              `let chapterMotionFlag_0 = true,
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
}`
          },
          { type: "strong", value: "After: Let ScrollTrigger handle it" },
          { type: "code", value:
              `$timelineItem.each(function(idx) {
  pcSecHeritageTl.to({}, {
    onStart: () => activeTimeline(idx),
    onReverseComplete: () => activeTimeline(idx - 1)
  });
});`
          },
          { type: "text", value: "Why it matters: Eliminated 4 flag variables and all the progress calculation logic. ScrollTrigger handles forward and backward scrolling naturally." }
        ]
      },
      {
        heading: "Results",
        blocks: [
          { type: "list", items: [
              "60% less code: Cut from 200+ lines to 80 by removing repetitive conditionals and flag management",
              "Future-proof: New chapters only need HTML updates — no JavaScript changes required",
              "Easier to debug: PC/mobile logic lives in separate, isolated contexts",
              "More reliable: No manual state tracking means no synchronization bugs"
            ]},
          { type: "text", value: "This refactor wasn't just about writing less code — it was about writing better code. Instead of manually handling each chapter with separate if statements, I used index-based loops to automate the process. This shifted the code from telling the browser 'how to scroll' step-by-step to simply declaring 'what to animate,' making it simpler and more reliable." }
        ]
      }
    ]
  }
]