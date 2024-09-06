import { Section } from '@/lib/articles'

export const docMenuData: Section[] = [
  {
    title: 'doc.nav.general.getting-started',
    route: '/doc/general/getting-started',
    items: [
      {
        title: 'doc.nav.general.installation',
        route: '/doc/general/installation',
      },
      {
        title: 'doc.nav.general.project-structure',
        route: '/doc/general/project-structure',
      },
    ],
  },
  {
    title: 'doc.nav.building-your-application.title',
    route: '/doc/building-your-application/menu',
    items: [
      {
        title: 'doc.nav.building-your-application.api.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.api.http',
            route: '/doc/building-your-application/api/http',
          },
          {
            title: 'doc.nav.building-your-application.api.rpc',
            route: '/doc/building-your-application/api/rpc',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.worker.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.worker.cron',
            route: '/doc/building-your-application/worker/cron',
          },
          {
            title: 'doc.nav.building-your-application.worker.queue',
            route: '/doc/building-your-application/worker/queue',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.frontend.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.frontend.ssg',
            route: '/doc/building-your-application/frontend/ssg',
          },
          {
            title: 'doc.nav.building-your-application.frontend.webapp',
            route: '/doc/building-your-application/frontend/webapp',
          },
          {
            title: 'doc.nav.building-your-application.frontend.solana',
            route: '/doc/building-your-application/frontend/solana',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.cli.title',
        route: '/doc/building-your-application/cli/main',
      },
    ],
  },
]
