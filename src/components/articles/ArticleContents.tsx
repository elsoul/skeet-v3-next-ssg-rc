import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkSlug from 'remark-slug'
import ReactMarkdown from 'react-markdown'

import { Pluggable } from 'unified'
import { CodeBlock } from './CodeBlock'

type Props = {
  content: string
}

export default function ArticleContents({ content }: Props) {
  return (
    <>
      <ReactMarkdown
        className="prose dark:prose-invert w-full break-words"
        remarkPlugins={[remarkGfm, remarkMath, remarkSlug as Pluggable]}
        components={{
          h1({ children, ...props }) {
            return (
              <h1
                className="mb-2 mt-12 text-3xl font-bold tracking-tight"
                id={props.id}
              >
                {children as React.ReactNode}
              </h1>
            )
          },
          h2({ children, ...props }) {
            return (
              <h2
                className="mb-2 mt-12 text-2xl font-bold tracking-tight"
                id={props.id}
              >
                {children as React.ReactNode}
              </h2>
            )
          },
          h3({ children, ...props }) {
            return (
              <h3
                className="mb-1 mt-8 text-xl font-bold tracking-tight"
                id={props.id}
              >
                {children as React.ReactNode}
              </h3>
            )
          },
          h4({ children, ...props }) {
            return (
              <h4
                className="mb-1 mt-6 text-lg font-bold tracking-tight"
                id={props.id}
              >
                {children as React.ReactNode}
              </h4>
            )
          },
          p({ children, ...props }) {
            return (
              <p className="mb-4 mt-3 last:mb-4" id={props.id}>
                {children as React.ReactNode}
              </p>
            )
          },
          ol({ children, ...props }) {
            return (
              <ol className="mb-4 ml-8 mt-3 block list-decimal" id={props.id}>
                {children as React.ReactNode}
              </ol>
            )
          },
          ul({ children, ...props }) {
            return (
              <ul className="mb-4 ml-8 mt-3 list-item" id={props.id}>
                {children as React.ReactNode}
              </ul>
            )
          },
          li({ children, ...props }) {
            return (
              <li className="py-1.5" id={props.id}>
                {children as React.ReactNode}
              </li>
            )
          },
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            return (
              <CodeBlock
                key={Math.random()}
                language={(match && match[1]) || ''}
                value={String(children).replace(/\n$/, '')}
                {...props}
              />
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  )
}
