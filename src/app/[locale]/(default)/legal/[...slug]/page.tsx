import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getGroupDir, truncateContent } from '@/lib/utils'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import { locales } from '@/app/config'
const groupDir = getGroupDir(__filename)

export async function generateMetadata({ params: { locale, slug } }: Props) {
  const metadata = getArticleBySlug(
    slug,
    ['title', 'thumbnail', 'content'],
    groupDir,
    locale,
  )

  const description = truncateContent(metadata.content, 160)

  return {
    title: metadata.title,
    description,
    openGraph: {
      images: [metadata.thumbnail],
    },
    twitter: {
      images: [metadata.thumbnail],
    },
  }
}

type Props = {
  params: {
    locale: string
    slug: string[]
  }
}

export default function LegalArticle({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <div className="flex -translate-y-12 flex-col items-center justify-center gap-8 p-3">
        <LogoHorizontalLink className="w-24" />
      </div>
    </>
  )
}

export function generateStaticParams() {
  const paths = locales.flatMap((locale) => {
    const articles = getAllArticles(groupDir)

    return articles.map((slug) => ({
      locale,
      slug,
    }))
  })
  return paths
}
