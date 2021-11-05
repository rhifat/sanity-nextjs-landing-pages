export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6184929b391c2b63af14c705',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jhrsi2ho',
                  apiId: '08c6f210-1788-4353-bf49-e04fe8a5c32d'
                },
                {
                  buildHookId: '6184929b72dea0643cfd96ad',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wtqa3m1r',
                  apiId: '6afa6bd4-4acc-417f-a9fb-5a71c512c89a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rhifat/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wtqa3m1r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
