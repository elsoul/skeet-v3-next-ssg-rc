import { Inter, Noto_Sans_JP } from 'next/font/google'
import {
  unstable_setRequestLocale,
  getMessages,
  getTranslations,
} from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import '../globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { appInfo, locales } from '@/app/config'

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    generator: appInfo.copyright,
    applicationName: t('appTitle'),
    keywords: t('keywords'),
    title: {
      template: `%s | ${t('appTitle')}`,
      default: t('defaultTitle'),
    },
    description: t('defaultDescription'),
    openGraph: {
      title: {
        template: `%s | ${t('appTitle')}`,
        default: t('defaultTitle'),
      },
      description: t('defaultDescription'),
      locale,
      type: 'website',
    },
    twitter: {
      creator: appInfo.twitterId,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages({ locale })
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(`${inter.variable} ${notoSansJP.variable}`)}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
