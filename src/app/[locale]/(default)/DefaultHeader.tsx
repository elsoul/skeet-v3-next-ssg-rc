'use client'

import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import {
  DiscordIconLink,
  GithubIconLink,
  TwitterIconLink,
} from '@/components/common/icons'
import DefaultModalNav from './DefaultModalNav'
import { defaultHeaderNav } from './defaultNavs'
import { Link, usePathname } from '@/navigation'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export default function DefaultHeader() {
  const t = useTranslations()
  const pathname = usePathname()
  const isActivePath = (path: string) => pathname.includes(path)

  return (
    <>
      <header className="sticky flex w-full flex-col gap-10 px-6 py-4">
        <div className="mx-auto flex w-full max-w-7xl flex-row items-center gap-20">
          <LogoHorizontalLink className="w-24" />
          <div className="hidden gap-8 md:flex md:flex-row">
            {defaultHeaderNav.map((navItem) => (
              <Link
                href={navItem.path}
                key={navItem.label}
                className={cn(
                  isActivePath(navItem.path)
                    ? 'bg-muted text-foreground hover:text-foreground dark:bg-muted/40'
                    : 'text-muted-foreground hover:text-foreground dark:text-foreground dark:hover:opacity-80',
                  'flex items-center gap-4 rounded-xl px-3 py-2',
                )}
              >
                {t(navItem.label)}
              </Link>
            ))}
          </div>
          <div className="flex flex-grow" />
          <div className="flex flex-row items-start justify-center gap-3">
            <DefaultModalNav />
            <div className="hidden gap-3 md:flex md:flex-row">
              <GithubIconLink />
              <TwitterIconLink />
              <DiscordIconLink />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
