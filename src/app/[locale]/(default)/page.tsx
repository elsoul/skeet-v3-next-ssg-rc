import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'

import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('homeTitle'),
  }
}

type Props = {
  params: {
    locale: string
  }
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const t = useTranslations()
  return (
    <>
      <div className="flex -translate-y-12 flex-col items-center justify-center gap-8 p-3">
        <LogoHorizontalLink className="w-24" />
      </div>
    </>
  )
}
