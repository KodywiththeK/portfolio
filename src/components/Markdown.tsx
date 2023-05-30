'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import styles from './Markdown.module.css'

type MarkdownType = {
  markdown: string
}

export default function Markdown({ markdown }: MarkdownType) {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={materialDark}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            )
          },
          h1: ({ children }) => <h1 className={styles.heading}>{children}</h1>,
          h2: ({ children }) => <h2 className={styles.subheading}>{children}</h2>,
          h3: ({ children }) => <h3 className={styles.semiheading}>{children}</h3>,
          p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
          a: ({ children, href }) => (
            <a className={styles.link} href={href}>
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
          ol: ({ children }) => <ol className={styles.numberedList}>{children}</ol>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
