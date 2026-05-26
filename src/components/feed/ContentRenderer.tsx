import React from 'react'
import style from '../../pages/feed/view.module.scss'
import type { FeedSection, ContentBlock } from '../../data/feed/types'

const BlockRenderer = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "text":
      return <p>{block.value}</p>
    case "heading":
      return block.level === 2
        ? <h2>{block.value}</h2>
        : <h3>{block.value}</h3>
    case "code":
      return <pre><code>{block.value}</code></pre>
    case "list":
      return (
        <ul className={style.itemList}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    case "strong":
      return <strong>{block.value}</strong>
    case "link":
      return (
        <a className={style.link} href={block.url} target="_blank" rel="noopener noreferrer">
          {block.label}
        </a>
      )
    case "images":
      return (
        <div className={style.imgBox} data-uk-lightbox="animation: fade">
          {block.src.map((src, i) => (
            <a key={i} href={src} data-caption={block.alt?.[i] ?? ""}>
              <img src={src} />
            </a>
          ))}
        </div>
      )
    default:
      return null
  }
}

const ContentRenderer = ({ content }: { content: FeedSection[] }) => (
  <>
    {content.map((section, i) => (
      <article key={i}>
        {section.heading && <h2>{section.heading}</h2>}
        <div className={style.sectionBody}>
          {section.blocks.map((block, j) => (
            <BlockRenderer key={j} block={block} />
          ))}
        </div>
      </article>
    ))}
  </>
)

export default ContentRenderer