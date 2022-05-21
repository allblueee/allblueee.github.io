import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/algorithm/': [
    {
      text: '算法',
      children: [
        '/algorithm/README.md',
        '/algorithm/selectSort.md',
        '/algorithm/bubbleSort.md',

      ],
    },
  ],
  '/javascript/':[
    {
      text:'JavaScript',
      children:[
        '/javascript/README.md'
      ]
    }
  ]
}
