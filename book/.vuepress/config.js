module.exports = {
    base: '/sicp-javascript-zh/',
    dest: './docs',
    title: '《计算机程序的构造与解释》JavaScript版',
    description: '暂无',
    themeConfig: {
        repo: 'iheyunfei/sicp-javascript-zh',
        // displayAllHeaders: true,
        lastUpdated: true,
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
              ],
          },
          
        ]
    },

  }