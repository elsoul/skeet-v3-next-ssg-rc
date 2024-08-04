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

  return (
    <>
      <div className="mx-auto max-w-6xl p-3 md:py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="p-4 md:col-span-1">Nav</div>
          <div className="p-4 md:col-span-3">{children}</div>
        </div>
      </div>
    </>
  )
}
