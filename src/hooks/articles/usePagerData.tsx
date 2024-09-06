import { useMemo } from 'react'
import { getArticleBySlug } from '@/lib/articles'

type Props = {
  slug: string[]
  locale: string
  groupDir: string
  articlePaths: string[]
}

// Now only for News Format
export function usePagerData({ slug, groupDir, locale, articlePaths }: Props) {
  const pagerData = useMemo(() => {
    const articleLength = articlePaths.length
    const currentPath = `/${slug[0]}/${slug[1]}/${slug[2]}/${slug[3]}`
    const currentIndex = articlePaths.indexOf(currentPath)
    const isFirst = currentIndex === 0
    const isLast = currentIndex === articleLength - 1

    if (isFirst) {
      const nextRoutePath = articlePaths[currentIndex + 1]
      const nextRouteSlug = nextRoutePath.split('/').slice(1)
      const nextRouteTitle = getArticleBySlug(
        nextRouteSlug,
        ['title'],
        groupDir,
        locale,
      )
      return {
        nextRoute: {
          path: `/${groupDir}/${nextRoutePath}`,
          title: nextRouteTitle.title as string,
        },
        previousRoute: null,
      }
    }

    if (isLast) {
      const previousRoutePath = articlePaths[currentIndex - 1]
      const previousRouteSlug = previousRoutePath.split('/').slice(1)
      const previousRouteTitle = getArticleBySlug(
        previousRouteSlug,
        ['title'],
        groupDir,
        locale,
      )
      return {
        nextRoute: null,
        previousRoute: {
          path: `/${groupDir}/${previousRoutePath}`,
          title: previousRouteTitle.title as string,
        },
      }
    }

    const nextRoutePath = articlePaths[currentIndex + 1]
    const nextRouteSlug = nextRoutePath.split('/').slice(1)
    const nextRouteTitle = getArticleBySlug(
      nextRouteSlug,
      ['title'],
      groupDir,
      locale,
    )
    const previousRoutePath = articlePaths[currentIndex - 1]
    const previousRouteSlug = previousRoutePath.split('/').slice(1)
    const previousRouteTitle = getArticleBySlug(
      previousRouteSlug,
      ['title'],
      groupDir,
      locale,
    )

    return {
      nextRoute: {
        path: `/${groupDir}/${nextRoutePath}`,
        title: nextRouteTitle.title as string,
      },
      previousRoute: {
        path: `/${groupDir}/${previousRoutePath}`,
        title: previousRouteTitle.title as string,
      },
    }
  }, [])

  return pagerData
}
