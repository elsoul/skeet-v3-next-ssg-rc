import { unstable_setRequestLocale } from 'next-intl/server'
import DocHeader from './DocHeader'
import DocFooter from './DocFooter'

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

  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <DocHeader />
        <main>{children}</main>
        <DocFooter />
      </div>
    </>
  )
}
