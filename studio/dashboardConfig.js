export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '631317e6d8aeff6db633fd7a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-2q4p8ad2',
                  apiId: '15ebd87f-ef2e-4ad4-a96f-936f21a20941'
                },
                {
                  buildHookId: '631317e8d407756fedf93bb1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-rc4eqxy4',
                  apiId: '2d597d4f-4f23-4665-a5a5-607690f96ecc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karanwebdev/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-rc4eqxy4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
