'use client'
import { useState } from 'react'
import { Link, usePathname } from '@/navigation'
import { docMenuData, Item, Section } from './docNavs'
import { ChevronRightIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

const DocMenu = () => {
  return (
    <div className="w-full">
      {docMenuData.map((section, sectionIndex) => (
        <DocMenuSection key={sectionIndex} section={section} />
      ))}
    </div>
  )
}

type DocMenuSectionProps = {
  section: Section
}

const DocMenuSection = ({ section }: DocMenuSectionProps) => {
  const t = useTranslations()
  const pathname = usePathname()
  const isActivePath = (path: string) => {
    console.log(pathname, path)
    return pathname === path
  }
  return (
    <div className="p-2">
      <div className="flex cursor-pointer items-center justify-between hover:opacity-70">
        <Link href={section.route}>
          <span
            className={cn(
              isActivePath(section.route) && 'text-blue-500 dark:text-blue-300',
              'flex-1 text-sm font-bold',
            )}
          >
            {t(section.title)}
          </span>
        </Link>
      </div>
      {section.items && (
        <ul className="my-2">
          {section.items.map((item, itemIndex) => (
            <DocMenuItem key={itemIndex} item={item} />
          ))}
        </ul>
      )}
    </div>
  )
}

type DocMenuItemProps = {
  item: Item
}

const DocMenuItem = ({ item }: DocMenuItemProps) => {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isActivePath = (path: string) => {
    console.log(pathname, path)
    return pathname === path
  }

  return (
    <li className="mt-3">
      <div
        className="flex cursor-pointer items-center justify-between gap-2 hover:opacity-70"
        onClick={() => setIsOpen(!item.subItems ? false : !isOpen)}
      >
        {item.subItems ? (
          <>
            <span className="flex-1 text-sm">{t(item.title)}</span>
            {isOpen ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
          </>
        ) : (
          <>
            <Link href={item.route as string}>
              <span
                className={cn(
                  isActivePath(item.route as string) &&
                    'text-blue-500 dark:text-blue-300',
                  'flex-1 text-sm',
                )}
              >
                {t(item.title)}
              </span>
            </Link>
          </>
        )}
      </div>
      {isOpen && item.subItems && (
        <ul className="ml-1.5 mt-3 border-l border-zinc-300 pl-3 dark:border-zinc-500">
          {item.subItems.map((subItem, subItemIndex) => (
            <li key={subItemIndex} className="mb-3">
              <Link href={subItem.route}>
                <span
                  className={cn(
                    isActivePath(subItem.route) &&
                      'text-blue-500 dark:text-blue-300',
                    'text-sm hover:opacity-70',
                  )}
                >
                  {t(subItem.title)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default DocMenu
