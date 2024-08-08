import { unstable_setRequestLocale } from 'next-intl/server'
import {
  ArticlePageProps,
  getDataForArticlePageByFilename,
  getArticleBySlug,
} from '@/lib/articles'
import NewsMobileHeader from '../NewsMobileHeader'
import ScrollSyncToc from '@/components/articles/ScrollSyncToc'
import { cn } from '@/lib/utils'
import ArticleContents from '@/components/articles/ArticleContents'

const { groupDir, generateMetadata, generateStaticParams } =
  getDataForArticlePageByFilename(__filename)
export { generateMetadata, generateStaticParams }

export default function NewsArticlePage({
  params: { locale, slug },
}: ArticlePageProps) {
  unstable_setRequestLocale(locale)

  const articleData = getArticleBySlug(
    slug,
    ['title', 'category', 'thumbnail', 'date', 'content'],
    groupDir,
    locale,
  )

  return (
    <>
      <NewsMobileHeader
        articleTitle={articleData.title as string}
        articleContent={articleData.content as string}
      />
      <div className="mx-auto max-w-4xl p-3 md:py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-4 md:col-span-2">
            <ArticleContents content={articleData.content as string} />
          </div>

          <div className="max-h-full p-4 md:col-span-1">
            <div
              className={cn(
                'scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-zinc-300 dark:scrollbar-track-zinc-950 dark:scrollbar-thumb-zinc-600',
                'hidden max-h-[calc(100vh-10rem)] md:sticky md:top-32 md:block',
              )}
            >
              <ScrollSyncToc rawMarkdownBody={articleData.content as string} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
