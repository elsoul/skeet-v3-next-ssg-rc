import { unstable_setRequestLocale } from 'next-intl/server'
import {
  ArticlePageProps,
  getDataForArticlePageByFilename,
  getArticleBySlug,
} from '@/lib/articles'
import ScrollSyncToc from '@/components/articles/ScrollSyncToc'
import ArticleContents from '@/components/articles/ArticleContents'

const { groupDir, generateMetadata, generateStaticParams } =
  getDataForArticlePageByFilename(__filename)
export { generateMetadata, generateStaticParams }

export default function LegalArticlePage({
  params: { locale, slug },
}: ArticlePageProps) {
  unstable_setRequestLocale(locale)

  const articleData = getArticleBySlug(
    slug,
    ['title', 'content'],
    groupDir,
    locale,
  )
  console.log(articleData)

  return (
    <>
      <div className="mx-auto max-w-4xl overflow-visible p-3 md:py-8">
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-4 md:col-span-2">
            <h1 className="text-3xl font-bold tracking-tight">
              {articleData.title}
            </h1>
            <ArticleContents content={articleData.content as string} />
          </div>
          <div className="max-h-full p-4 md:col-span-1">
            <div className="hidden md:sticky md:top-32 md:block">
              <ScrollSyncToc rawMarkdownBody={articleData.content as string} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
