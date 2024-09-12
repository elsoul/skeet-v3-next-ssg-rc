import { Button } from '@/components/ui/button'
import { mainShardGradation } from '@/lib/decoration'
import { cn } from '@/lib/utils'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

export default function HomeHeroRow() {
  const t = useTranslations()

  return (
    <>
      <div className="mx-auto max-w-7xl p-3">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 md:py-32 lg:max-w-3xl">
          <h1
            className={cn(
              'py-2 text-center text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl',
              mainShardGradation,
            )}
          >
            {t('(home).HomeHeroRow.title1')} <br />
            {t('(home).HomeHeroRow.title2')}
          </h1>
          <p
            className={cn(
              'max-w-96 text-center font-medium sm:max-w-lg sm:text-xl lg:max-w-xl lg:text-2xl',
              'text-zinc-500 dark:text-zinc-200',
            )}
          >
            {t('(home).HomeHeroRow.subtitle1')} <br />
            {t('(home).HomeHeroRow.subtitle2')}
          </p>
          <Link href="/doc/general/getting-started">
            <Button>{t('(home).HomeHeroRow.getStarted')}</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
