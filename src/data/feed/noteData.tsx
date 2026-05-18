import React from 'react';
import type { FeedItem } from './types';

export const noteData: FeedItem[] = [
  {
    id: "frontend-in-the-ai-era",
    category: "NOTE",
    date: "19.02.26",
    title: "Being a Frontend Developer When AI Writes the Code",
    content:
      <>
        <article>
          <header><h2>When AI Can Do What You Do</h2></header>
          <section>
            <p>
              Ask AI to write code these days, and it actually does a decent job.
              So what are we supposed to do with that?
            </p>
          </section>
        </article>

        <article>
          <header><h2>Judgment Is What's Left</h2></header>
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
          <header><h2>How to Actually Build That Judgment</h2></header>
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
          <header><h2>So What Kind of Developer Survives?</h2></header>
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
    id: "soul",
    category: "NOTE",
    date: "19.09.25",
    title: "I heard this story about a fish",
    content:
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
  },
  {
    id: "secret-santa",
    category: "NOTE",
    date: "18.09.25",
    title: "Flipping Secret Santa on Its Head",
    content:
      <article>
        <header><h2>Flipping Secret Santa on Its Head</h2></header>
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
  }
];