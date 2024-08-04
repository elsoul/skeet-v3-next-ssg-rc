'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Link, usePathname } from '@/navigation'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import {
  DiscordIconLink,
  GithubIconLink,
  TwitterIconLink,
} from '@/components/common/icons'
import { defaultHeaderNav } from './defaultNavs'

export default function DefaultModalNav() {
  const [open, setOpen] = useState(false)
  const t = useTranslations()
  const pathname = usePathname()
  const isActivePath = (path: string) => pathname.includes(path)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
            onClick={() => setOpen(true)}
          >
            <HamburgerMenuIcon className="h-5 w-5" />
            <span className="sr-only">{t('common.toggleNavigationMenu')}</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="flex h-screen flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <div className="mb-3 flex flex-row items-start">
              <LogoHorizontalLink
                className="w-24"
                onClick={() => {
                  setOpen(false)
                }}
              />
            </div>
            {defaultHeaderNav.map((navItem) => (
              <Link
                href={navItem.path}
                key={navItem.label}
                className={cn(
                  isActivePath(navItem.path)
                    ? 'bg-muted text-foreground hover:text-foreground dark:bg-muted/40'
                    : 'text-muted-foreground hover:text-foreground dark:text-foreground dark:hover:opacity-80',
                  'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2',
                )}
                onClick={() => setOpen(false)}
              >
                {t(navItem.label)}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <div className="flex flex-row gap-3">
              <GithubIconLink />
              <TwitterIconLink />
              <DiscordIconLink />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
