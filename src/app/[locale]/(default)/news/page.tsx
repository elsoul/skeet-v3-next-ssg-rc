import { unstable_setRequestLocale } from 'next-intl/server'
import { getDataForPageByFilename, PageProps } from '@/lib/pages'

const { generateMetadata } = getDataForPageByFilename(__filename)
export { generateMetadata }

export default function NewsPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <div className="mx-auto max-w-7xl p-3 md:py-8">News Index</div>
    </>
  )
}
