import { unstable_setRequestLocale } from 'next-intl/server'
import { getDataForPageByFilename, PageProps } from '@/lib/pages'

const { generateMetadata } = getDataForPageByFilename(__filename)
export { generateMetadata }

export default function HomePage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <div className="p-3">home</div>
    </>
  )
}
