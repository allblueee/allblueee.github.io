const { defaultTheme } = require('vuepress')

module.exports = {
    lang: 'zh-CN',
    title: 'allblueee',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text:'算法',
                link:'/index.md'
            }
        ],
    }),
}