import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import { unstable_setRequestLocale } from 'next-intl/server'
import {
  ArticlePageProps,
  getDataForArticlePageByFilename,
  getArticleBySlug,
} from '@/lib/articles'

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
      <div className="mx-auto max-w-4xl p-3 md:py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="p-4 md:col-span-3">Contents</div>
          <div className="p-4 md:col-span-1">ToC</div>
        </div>
      </div>
    </>
  )
}
