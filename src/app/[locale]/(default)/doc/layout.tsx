import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function DocLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale)

  return <>{children}</>
}
