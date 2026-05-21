import type { FeedItem } from './types'

export const noteData: FeedItem[] = [
  {
    id: "frontend-in-the-ai-era",
    category: "NOTE",
    date: "19.02.26",
    title: "Being a Frontend Developer When AI Writes the Code",
    content: [
      {
        heading: "When AI Can Do What You Do",
        blocks: [
          { type: "text", value: "Ask AI to write code these days, and it actually does a decent job. So what are we supposed to do with that?" }
        ]
      },
      {
        heading: "Judgment Is What's Left",
        blocks: [
          { type: "text", value: "AI can write the code, but it can't tell you if it's right. Is there a bug? Is there unnecessary logic? Is it secure enough? Which AI tool is even worth using for this project? That judgment comes from experience — and it's still yours." }
        ]
      },
      {
        heading: "How to Actually Build That Judgment",
        blocks: [
          { type: "text", value: "Read more code than you write. Other people's code, open source projects, code reviews — and yes, AI-generated code too. The more you read, the faster you spot what's off." },
          { type: "text", value: "Keep the fundamentals sharp. Performance, security, clean logic — knowing these deeply is what lets you spot when AI gets it wrong." },
          { type: "text", value: "And use AI on real projects, a lot. Not passively, but with intention. The more contexts you work through, the better you get at knowing which tool to reach for and when to trust it." }
        ]
      },
      {
        heading: "So What Kind of Developer Survives?",
        blocks: [
          { type: "text", value: "Not the one who codes faster than AI. The one who knows when AI is wrong, understands what the team actually needs, and never loses sight of why something is being built in the first place." }
        ]
      }
    ]
  },
  {
    id: "soul",
    category: "NOTE",
    date: "19.09.25",
    title: "I heard this story about a fish",
    content: [
      {
        blocks: [
          { type: "text", value: `I heard this story about a fish. He swims up to this older fish and says, "I'm trying to find this thing they call the ocean." "The ocean?" says the older fish, "that's what you're in right now." "This?" says the younger fish, "This is water. What I want is the ocean."` },
          { type: "strong", value: "Soul (2020), Disney Pixar" }
        ]
      }
    ]
  },
  {
    id: "secret-santa",
    category: "NOTE",
    date: "18.09.25",
    title: "Flipping Secret Santa on Its Head",
    content: [
      {
        heading: "The Problem from 2022",
        blocks: [
          { type: "text", value: "I was put in charge of Secret Santa for our December 2023 year-end party. I heard the 2022 event didn't go well — the main issue was gift satisfaction. Since it's hard to really know your coworkers' preferences, people often received unwanted items that ended up unused and forgotten." }
        ]
      },
      {
        heading: "A New Approach for 2023",
        blocks: [
          { type: "text", value: "So I completely flipped the format." },
          { type: "list", items: [
              "Old way: Know who you're giving to → Guess their preferences → Prepare gift",
              "New way: Share what you want to receive → Guess who you're preparing for"
            ]},
          { type: "text", value: "This way, everyone gets something they actually want, while still keeping the fun of guessing who their Secret Santa is." }
        ]
      }
    ]
  }
]