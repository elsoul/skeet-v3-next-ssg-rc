import { unstable_setRequestLocale } from 'next-intl/server'
import { getDataForPageByFilename, PageProps } from '@/lib/pages'
import { Card } from '@/components/ui/card'
import { getArticleForIndex } from '@/lib/articles'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { useTranslations } from 'next-intl'

const { groupDir, generateMetadata } = getDataForPageByFilename(__filename)
export { generateMetadata }

export default function NewsPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations()

  const articlesData = getArticleForIndex(
    groupDir,
    ['title', 'category', 'thumbnail', 'date', 'content'],
    locale,
  )

  return (
    <>
      <div className="mx-auto max-w-7xl p-3 md:py-8">
        <h1 className="mb-4 px-3 text-3xl font-bold tracking-tight">News</h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {articlesData.map(({ article, url }) => (
            <Card key={article.title as string} className="flex flex-col">
              <AspectRatio ratio={16 / 9}>
                <Link href={url} className="hover:opacity-80">
                  <Image
                    src={article.thumbnail as string}
                    unoptimized
                    width={160}
                    height={90}
                    alt={article.title as string}
                    className="w-full rounded-t-xl"
                  />
                </Link>
              </AspectRatio>
              <div className="border-t border-zinc-200 p-4 dark:border-zinc-400">
                <Link href={url} className="hover:opacity-80">
                  <time
                    dateTime={article.date as string}
                    className="text-xs text-zinc-500"
                  >
                    {article.date}
                  </time>
                  <h2 className="mt-1 font-bold tracking-tight">
                    {article.title}
                  </h2>
                </Link>
              </div>
              <div className="flex-grow" />
              <div className="px-4 pb-3 pt-1">
                <Link href={url}>
                  <Button size="sm" className="w-full">
                    {t('news.readThis')}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
