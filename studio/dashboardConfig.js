export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d3864a837165a4c3790837c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n7md5s8t',
                  apiId: 'ec7f91a1-2c47-4693-bd14-6888b6c01650'
                },
                {
                  buildHookId: '5d3864a82d42b7c451ef9040',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bh68nwq2',
                  apiId: 'b0668377-7fc6-4df5-a2f5-c811ea8e49be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rynoV/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bh68nwq2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
