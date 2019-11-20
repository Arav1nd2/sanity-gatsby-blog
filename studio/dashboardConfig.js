export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dd4e04a75838f21e7381825',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qbdsnwpe',
                  apiId: 'a237945d-30db-4795-adbd-95d9340aab72'
                },
                {
                  buildHookId: '5dd4e04a7299ea97383b864a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oo63m6te',
                  apiId: 'b042030f-4472-4e14-8f8b-da37d133a0dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Arav1nd2/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oo63m6te.netlify.com', category: 'apps'}
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
