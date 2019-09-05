module.exports = {
    base: '/sicp-javascript-zh/',
    dest: './docs',
    title: '《SICP in JavaScript》',
    description: '《计算机程序的构造与解释》JavaScript版',
    themeConfig: {
        repo: 'iheyunfei/sicp-javascript-zh',
        // displayAllHeaders: true,
        lastUpdated: true,
        sidebarDepth: 2,
        sidebar: [
          '/',
          '/foreword',
          '/prefaces',
          {
              title: '第一章',
              collapsable: false,
              children: [
                '/chapter1',
                '/chapter1.1',
                '/chapter1.2',
              ],
          },
          
        ]
    },

  }
