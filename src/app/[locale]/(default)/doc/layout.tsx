import { cn } from '@/lib/utils'
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
      <div className="mx-auto max-w-7xl p-3 md:py-8">
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="max-h-full sm:p-4 md:col-span-1">
            <div
              className={cn(
                'scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-zinc-300 dark:scrollbar-track-zinc-950 dark:scrollbar-thumb-zinc-600',
                'hidden max-h-[calc(100vh-10rem)] md:sticky md:top-32 md:block',
              )}
            >
              Nav
            </div>
          </div>
          <div className="sm:p-4 md:col-span-4">{children}</div>
        </div>
      </div>
    </>
  )
}
