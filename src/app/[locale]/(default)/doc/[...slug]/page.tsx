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
  console.log(articleData)

  return (
    <>
      <div className="flex -translate-y-12 flex-col items-center justify-center gap-8 p-3">
        <LogoHorizontalLink className="w-24" />
      </div>
    </>
  )
}
