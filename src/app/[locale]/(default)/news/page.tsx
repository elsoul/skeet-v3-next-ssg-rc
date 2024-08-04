import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getDataForPageByFilename, PageProps } from '@/lib/pages'

const { generateMetadata } = getDataForPageByFilename(__filename)
export { generateMetadata }

export default function NewsPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <div className="p-3">skeet</div>
    </>
  )
}
