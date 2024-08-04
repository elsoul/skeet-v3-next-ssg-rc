import clsx from 'clsx'
import { useTranslations } from 'next-intl'

type Props = {
  toc: {
    id: string
    depth: number
    value: string
  }[]
  activeItemIds: string[]
}

const OFFSET_HEIGHT = 80

const scrollToHash = (hash: string) => {
  const element = document.getElementById(hash)
  if (element) {
    const yOffset = -OFFSET_HEIGHT
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export default function Toc({ toc, activeItemIds }: Props) {
  const t = useTranslations()

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault()
    scrollToHash(id)
    history.pushState(null, '', `#${id}`)
  }

  return (
    <>
      {toc.length > 0 && (
        <>
          <div className="p-4">
            <p className="text-base font-semibold tracking-tight">
              {t('common.toc')}
            </p>
          </div>
          <div className="border-l p-4">
            <nav className="space-y-1" aria-label="Sidebar">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={clsx(
                    activeItemIds.includes(item.id)
                      ? 'bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50'
                      : `rounded-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-zinc-50`,
                    `block px-3 py-2 text-sm font-medium ml-${
                      item.depth > 2 ? 3 : 0
                    }`,
                  )}
                  aria-current={
                    activeItemIds.includes(item.id) ? 'location' : undefined
                  }
                >
                  <span className="break-words">{item.value}</span>
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
