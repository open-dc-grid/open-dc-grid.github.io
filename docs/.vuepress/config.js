module.exports = {
    title: 'Open DC Grid',
    description: 'A low voltage DC microgrid defined as an open standard. Software and hardware reference designs freely available under open source. Join the project!',
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
      ['link', { rel: "manifest", href: "/site.webmanifest"}],
      ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
      //['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
      //['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
      //['meta', { name: "theme-color", content: "#ffffff"}],
    ],
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
        logo: '/apple-touch-icon.png',
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
                    '0_introduction',
                    '1_scope_and_purpose',
                    '2_normative_references',
                    '3_terms_definitions',
                    '4_system_architecture',
                    '5_grid_communications',
                    '6_12V_link',
                    '7_48V_link',
                    '8_annex_unmanaged_grid',
                    '9_annex_wiring',
                    '10_conformance_tests',
                    '11_annex_bibliography',
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
                    ['https://buttondown.email/jlgula','Subscribe'],
                    ['contributing', 'How to Participate'],
                    'meetings',
                    ['participants', 'Team Members'],
                    'references',
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
