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
        sidebar: {
            '/': [{
                title: "Introduction",
                collapsable: false,
                children: [
                    'a1_goals_objectives',
                    'a2_publication',
                    'a3_contributing',
                ],
            }, {
                title: "Specification",
                collapsable: false,
                children: [
                    'b1_requirements',
                    'b2_topology',
                    'b3_control',
                    'b4_communications',
                ],
            }, {
                title: "Implementation",
                collapsable: false,
                children: [
                    'c1_devices',
                    'c2_infrastructure',
                    'c3_control',
                    'c4_test-cases',
                ],
            }]
        },
        // if your docs are in a different repo from your main project:
        docsRepo: 'open-dc-grid/open-dc-grid.github.io',
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