import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { getGroupDir } from '@/lib/utils'
const groupDir = getGroupDir(__filename)

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t(groupDir),
  }
}

type Props = {
  params: {
    locale: string
  }
}

export default function NewsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <div className="flex -translate-y-12 flex-col items-center justify-center gap-8 p-3">
        <LogoHorizontalLink className="w-24" />
      </div>
    </>
  )
}
