export enum DEFAULT_PATHS {
  home = '/',
  doc = '/doc/',
  news = '/news/',
  privacy = '/legal/privacy-policy/',
}

export const defaultHeaderNav = [
  {
    path: DEFAULT_PATHS.doc,
    label: 'Doc.title',
  },
  {
    path: DEFAULT_PATHS.news,
    label: 'News.title',
  },
]

export const defaultFooterNav = [
  {
    path: DEFAULT_PATHS.doc,
    label: 'Doc.title',
  },
  {
    path: DEFAULT_PATHS.news,
    label: 'News.title',
  },
  {
    path: DEFAULT_PATHS.privacy,
    label: 'Legal.privacy',
  },
]
