export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/section-list/index',
    'pages/study/index',
    'pages/word-quiz/index'
  ],
  // 启用组件按需注入，优化性能
  lazyCodeLoading: 'requiredComponents',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#667eea',
    navigationBarTitleText: '雅思背词',
    navigationBarTextStyle: 'white'
  }
})

