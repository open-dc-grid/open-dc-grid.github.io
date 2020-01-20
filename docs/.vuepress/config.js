module.exports = {
    title: 'Open DC Grid',
    description: 'A low voltage DC microgrid defined as an open standard. Software and hardware reference designs freely available under open source. Join the project!',
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
        nav: [
            { text: 'Project', link: '/' },
            { text: 'Standard', link: '/standard/' },
            { text: 'Implementation', link: '/implementation/' },
        ],
        sidebar: {
            '/standard/': [{
                title: "Standard",
                collapsable: false,
                children: [
                    '1_scope',
                    //'2_normative_references',
                    '3_terms_definitions',
                    '4_requirements',
                    '5_topology',
                    '6_control',
                    '7_communications',
                    '8_test_cases',
                ]
            }],
            '/implementation/': [{
                title: "Implementation",
                collapsable: false,
                children: [
                    '1_devices',
                    '2_grid',
                    '3_control',
                ],
            }],
            '/': [{
                title: "Project",
                collapsable: false,
                children: [
                    //['', 'Welcome'],
                    'meetings',
                    'contributing',
                    'references',
                    'participants',
                    //'about',
                ]
            }],
        },
        // if your docs are in a different repo from your main project:
        docsRepo: 'open-dc-grid/open-dc-grid.github.io',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'source',
        // defaults to false, set to true to enable
        editLinks: false,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'GitHub',

        lastUpdated: 'Last Updated', // string | boolean
    }
}
