'use client'
import Image from 'next/image'
import Link from 'next/link'
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
    <>
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
          h2: ({ children }) => <h2 className={`${styles.subheading} bg-neutral-300`}>{children}</h2>,
          h3: ({ children }) => <h3 className={styles.semiheading}>{children}</h3>,
          p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
          a: ({ children, href }) => (
            <Link className={styles.link} href={href as string}>
              {children}
            </Link>
          ),
          ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
          ol: ({ children }) => <ol className={styles.numberedList}>{children}</ol>,
          img: (image) => <Image className="rounded-xl shadow-lg" src={image?.src || ''} alt={image?.alt || ''} width={800} height={600} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </>
  )
}
