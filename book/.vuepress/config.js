module.exports = {
    base: '/',
    title: 'SICP Javascript版本 中文版',
    description: '【译-中文】SICP in JavaScript',
    dest: './docs',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: 'https://github.com/iheyunfei/sicp-javascript-zh' },
      ],
      sidebar: [
        {
          title: 'SICP in Javascript',
          collapsable: false,
          children: [
            '/donate',
            '/preface',
          ],
        },
        {
          title: 'Chapter 1',
          collapsable: false,
          children: [
            '/ch1',
            '/ch1.1',
          ],
        },
      ]
    },
  }