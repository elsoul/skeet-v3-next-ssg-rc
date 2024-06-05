import { appInfo } from '@/app/config'

import { LanguageToggle } from '@/components/config/LanguageToggle'
import { ModeToggle } from '@/components/config/ModeToggle'
import { unstable_setRequestLocale } from 'next-intl/server'

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
        <header className="flex flex-row items-start justify-center p-6">
          <div className="flex flex-grow" />
          <div className="flex flex-row items-start justify-center gap-3">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </header>
        <main>{children}</main>
        <footer className="flex flex-row items-start justify-center p-6">
          <p className="text-sm tracking-tight text-zinc-400">
            © {new Date().getFullYear()} {appInfo.copyright}
          </p>
          <div className="flex flex-grow" />
        </footer>
      </div>
    </>
  )
}
