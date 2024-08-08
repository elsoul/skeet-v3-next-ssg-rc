import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkSlug from 'remark-slug'
import ReactMarkdown from 'react-markdown'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Pluggable } from 'unified'
import { CodeBlock } from './CodeBlock'
import { cn, getYouTubeVideoId, isYouTubeUrl } from '@/lib/utils'

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
          img({ children, ...props }) {
            return (
              <>
                {/* eslint-disable */}
                <img
                  className="mb-6 mt-4 rounded-lg"
                  alt={props.alt as string}
                  src={props.src as string}
                />
              </>
            )
          },
          a({ children, href, ...props }) {
            if (!href) return null
            const isYouTube = isYouTubeUrl(href)
            const videoId = getYouTubeVideoId(href)
            if (isYouTube && videoId) {
              return (
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allowFullScreen
                    className="h-full w-full rounded-xl object-cover"
                  />
                </AspectRatio>
              )
            }

            return (
              <a
                className="underline hover:opacity-80"
                id={props.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children as React.ReactNode}
              </a>
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
              <ul className="mb-4 ml-8 mt-3 list-disc" id={props.id}>
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
            const fileMatch = /:(.*)/.exec(className || '')

            if (!match) {
              return (
                <code
                  className={cn(
                    className,
                    'rounded-md border border-zinc-400 bg-zinc-200 p-1 text-red-500',
                  )}
                  {...props}
                >
                  {/* @ts-ignore */}
                  {children}
                </code>
              )
            }

            return (
              <CodeBlock
                key={Math.random()}
                language={(match && match[1]) || ''}
                fileName={(fileMatch && fileMatch[1]) || ''}
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
