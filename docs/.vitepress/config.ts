import { defineConfig } from "vitepress";
import {
  demoblockPlugin,
  demoblockVitePlugin,
} from "vitepress-theme-demoblock";

export default defineConfig({
  title: "VitePress",

  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },

  themeConfig: {
    logo: "/R-C2.jpg",
    siteTitle: "VitePress-Fun",

    socialLinks: [
      { icon: "github", link: "https://www.baidu.com" },
      { icon: "discord", link: "https://www.baidu.com" },
      {
        icon: {
          svg: '<svg t="1689388902572" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="948" width="48" height="48"><path d="M868.2496 392.3968m0 115.0464l0 303.5648q0 115.0464-115.0464 115.0464l-289.28 0q-115.0464 0-115.0464-115.0464l0-303.5648q0-115.0464 115.0464-115.0464l289.28 0q115.0464 0 115.0464 115.0464Z" fill="#CFF6FF" p-id="949"></path><path d="M874.3424 322.048a25.6 25.6 0 0 0 25.6-25.6V276.48a135.5264 135.5264 0 0 0-135.424-135.424h-107.264v-42.8544a25.6 25.6 0 0 0-51.2 0v43.0592H419.3792v-43.0592a25.6 25.6 0 0 0-51.2 0v43.0592h-107.52A135.5776 135.5776 0 0 0 125.3376 276.48v528.64a135.5776 135.5776 0 0 0 135.424 135.3728h503.7568a135.5264 135.5264 0 0 0 135.424-135.3728V455.68a25.6 25.6 0 0 0-51.2 0v349.5936a84.2752 84.2752 0 0 1-84.224 84.1728H260.7616a84.2752 84.2752 0 0 1-84.224-84.1728V276.48a84.3264 84.3264 0 0 1 84.224-84.0192h107.52v48.5376a25.6 25.6 0 0 0 51.2 0v-48.5376h186.6752v48.5376a25.6 25.6 0 0 0 51.2 0v-48.5376h107.264A84.3264 84.3264 0 0 1 848.7424 276.48v19.968a25.6 25.6 0 0 0 25.6 25.6z" fill="#474747" p-id="950"></path><path d="M697.6 427.4176H328.3968a25.6 25.6 0 0 1 0-51.2h369.2032a25.6 25.6 0 0 1 0 51.2zM697.6 581.5808H328.3968a25.6 25.6 0 0 1 0-51.2h369.2032a25.6 25.6 0 0 1 0 51.2zM519.5264 733.6448h-191.488a25.6 25.6 0 1 1 0-51.2h191.488a25.6 25.6 0 0 1 0 51.2z" fill="#1285EF" p-id="951"></path></svg>',
        },
        link: "https://www.baidu.com",
      },
    ],

    // 顶部右侧导航
    nav: [
      { text: "Guide", link: "/guide/" },
      {
        text: "Config",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          {
            text: "Item C",
            items: [
              { text: "Section A Item A", link: "..." },
              { text: "Section B Item B", link: "..." },
            ],
          },
        ],
      },
      { text: "Changelog", link: "https://github.com/..." },
    ],

    // 页脚
    footer: {
      // message: "Released under the MIT License.",
      message:
        'Released under the <a href="https://baidu.com">MIT License</a>.',
      copyright: "Copyright © 2019-present Evan You",
    },

    // 菜单栏
    sidebar: [
      { text: "快速开始", link: "/guide/" },
      {
        text: "通用",
        items: [{ text: "Button 按钮", link: "/components/button.md" }],
      },
      { text: "导航" },
      { text: "反馈" },
      { text: "数据录入" },
      { text: "数据展示" },
      { text: "布局" },
    ],

    // 搜索
    search: {
      provider: "local",
    },
  },
});
