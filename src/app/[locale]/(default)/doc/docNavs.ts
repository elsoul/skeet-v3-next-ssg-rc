export type SubItem = {
  title: string
  route: string
}

export type Item = {
  title: string
  route?: string
  subItems?: SubItem[]
}

export type Section = {
  title: string
  route: string
  items?: Item[]
}

export const docMenuData: Section[] = [
  {
    title: 'doc.nav.general.getting-started',
    route: '/doc/general/getting-started/',
    items: [
      { title: 'doc.nav.general.installation', route: '/installation' },
      {
        title: 'doc.nav.general.project-structure',
        route: '/project-structure',
      },
    ],
  },
  {
    title: 'doc.nav.building-your-application.title',
    route: '/building-your-application',
    items: [
      {
        title: 'doc.nav.building-your-application.api.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.api.http',
            route: '/doc/general/getting-started/',
          },
          {
            title: 'doc.nav.building-your-application.api.rpc',
            route: '/routing/pages-and-layouts',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.worker.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.worker.cron',
            route: '/doc/general/getting-started/',
          },
          {
            title: 'doc.nav.building-your-application.worker.queue',
            route: '/routing/pages-and-layouts',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.frontend.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.frontend.ssg',
            route: '/doc/general/getting-started/',
          },
          {
            title: 'doc.nav.building-your-application.frontend.webapp',
            route: '/routing/pages-and-layouts',
          },
          {
            title: 'doc.nav.building-your-application.frontend.solana',
            route: '/routing/pages-and-layouts',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.cli.title',
        route: '/rendering',
      },
    ],
  },
]
