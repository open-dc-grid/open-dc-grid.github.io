module.exports = {
    title: 'Managed 48V DC Minigrid',
    description: 'Open specification for a low voltage DC grid',
    base: '/',
    plugins: [
        'vuepress-plugin-export',
        ['mathjax', {
            target: 'svg',
            macros: {
              '*': '\\times',
            },
          }],
    ],
    themeConfig: {
        nav: [ ],
        // if your docs are in a different repo from your main project:
        docsRepo: 'dc-grid/dc-grid.github.io',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Propose modification on GitHub!',

        lastUpdated: 'Last Updated', // string | boolean
    }
}