export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/section-list/index',
    'pages/study/index',
    'pages/word-quiz/index',
    'pages/favorites/index',
    'pages/wrong-words/index',
    'pages/statistics/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#6366f1',
    navigationBarTitleText: '雅思背词',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#6366f1',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '学英语',
        iconPath: 'assets/icons/study.png',
        selectedIconPath: 'assets/icons/study-active.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/icons/mine.png',
        selectedIconPath: 'assets/icons/mine-active.png'
      }
    ]
  }
})

