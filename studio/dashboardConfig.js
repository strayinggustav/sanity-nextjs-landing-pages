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
                  buildHookId: '5cefb09cf25f4f01847b3cc4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mqapbp3k',
                  apiId: '25550ad8-d56a-4cc2-b42a-aeee97108c6a'
                },
                {
                  buildHookId: '5cefb09c52e043017452a3d6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a2h9ergm',
                  apiId: 'f73a2458-07a0-439b-8a27-26109be35af1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strayinggustav/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a2h9ergm.netlify.com', category: 'apps'}
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
