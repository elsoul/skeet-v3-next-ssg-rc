import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getDataForPageByFilename, PageProps } from '@/lib/pages'

const { generateMetadata } = getDataForPageByFilename(__filename)
export { generateMetadata }

export default function DocPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <div className="flex -translate-y-12 flex-col items-center justify-center gap-8 p-3">
        <LogoHorizontalLink className="w-24" />
      </div>
    </>
  )
}
