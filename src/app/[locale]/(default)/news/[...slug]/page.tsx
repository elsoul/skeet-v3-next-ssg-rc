import { unstable_setRequestLocale } from 'next-intl/server'
import {
  ArticlePageProps,
  getDataForArticlePageByFilename,
  getArticleBySlug,
} from '@/lib/articles'
import NewsMobileHeader from '../NewsMobileHeader'

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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="p-4 md:col-span-3">Contents</div>
          <div className="p-4 md:col-span-1">ToC</div>
        </div>
      </div>
    </>
  )
}
