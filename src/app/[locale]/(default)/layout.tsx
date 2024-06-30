import { unstable_setRequestLocale } from 'next-intl/server'
import DefaultHeader from './DefaultHeader'
import DefaultFooter from './DefaultFooter'

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function DefaultLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <DefaultHeader />
        <main>{children}</main>
        <DefaultFooter />
      </div>
    </>
  )
}
