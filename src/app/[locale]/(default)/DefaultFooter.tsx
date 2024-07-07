'use client'

import { appInfo } from '@/app/config'
import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import {
  DiscordIconLink,
  GithubIconLink,
  TwitterIconLink,
} from '@/components/common/icons'

import { LanguageToggle } from '@/components/config/LanguageToggle'
import { ModeToggle } from '@/components/config/ModeToggle'
import { defaultFooterNav } from './defaultNavs'
import { Link, usePathname } from '@/navigation'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export default function DefaultFooter() {
  const t = useTranslations()
  const pathname = usePathname()
  return (
    <>
      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-10 border-t border-zinc-200 px-6 pb-8 pt-10 dark:border-zinc-500">
        <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="flex w-full justify-between sm:h-36 sm:flex-col">
            <LogoHorizontalLink className="w-24" />
            <div className="flex flex-row items-center gap-4">
              <GithubIconLink />
              <TwitterIconLink />
              <DiscordIconLink />
            </div>
          </div>
          <div className="flex w-full flex-col gap-3">
            {defaultFooterNav.map((navItem) => (
              <Link
                href={navItem.path}
                key={`ModalNav ${navItem.label}`}
                className={cn(
                  pathname === navItem.path
                    ? 'bg-muted text-foreground hover:text-foreground dark:bg-muted/40'
                    : 'text-muted-foreground hover:text-foreground',
                  'flex items-center gap-4 rounded-xl px-3 py-2',
                )}
              >
                {t(navItem.label)}
              </Link>
            ))}
          </div>
          <div className="flex w-full flex-col"></div>
          <div className="flex w-full flex-col"></div>
        </div>
        <div className="flex w-full flex-row items-center justify-center">
          <p className="text-sm tracking-tight text-zinc-400 dark:text-zinc-300">
            © {new Date().getFullYear()} {appInfo.copyright}
          </p>
          <div className="flex flex-grow" />
          <div className="flex flex-row items-start justify-center gap-3">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </footer>
    </>
  )
}