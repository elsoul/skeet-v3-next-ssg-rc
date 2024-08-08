import { unstable_setRequestLocale } from 'next-intl/server'
import {
  ArticlePageProps,
  getDataForArticlePageByFilename,
  getArticleBySlug,
} from '@/lib/articles'
import ScrollSyncToc from '@/components/articles/ScrollSyncToc'
import { cn } from '@/lib/utils'
import ArticleContents from '@/components/articles/ArticleContents'
import DocMobileHeader from '../DocMobileHeader'

const { groupDir, generateMetadata, generateStaticParams } =
  getDataForArticlePageByFilename(__filename)
export { generateMetadata, generateStaticParams }

export default function DocArticlePage({
  params: { locale, slug },
}: ArticlePageProps) {
  unstable_setRequestLocale(locale)

  const articleData = getArticleBySlug(
    slug,
    ['title', 'thumbnail', 'content'],
    groupDir,
    locale,
  )

  return (
    <>
      <DocMobileHeader articleContent={articleData.content as string} />
      <div className="grid grid-cols-1 gap-4 p-3 sm:p-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold tracking-tight">
            {articleData.title}
          </h1>
          <ArticleContents content={articleData.content as string} />
        </div>
        <div className="max-h-full md:col-span-1">
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
    </>
  )
}
