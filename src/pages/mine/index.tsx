import { View, Text, Image } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import { getStudyStats } from '../../data/storage'
import './index.less'

interface MenuItem {
  icon: string
  title: string
  desc: string
  url?: string
}

export default function Mine() {
  const [stats, setStats] = useState({
    totalWords: 0,
    consecutiveDays: 0,
    accuracy: 0
  })

  useDidShow(() => {
    const studyStats = getStudyStats()
    setStats({
      totalWords: studyStats.totalWords,
      consecutiveDays: studyStats.consecutiveDays,
      accuracy: studyStats.accuracy
    })
  })

  const menuItems: MenuItem[] = [
    { icon: '📊', title: '学习统计', desc: '查看你的学习进度', url: '/pages/statistics/index' },
    { icon: '⭐', title: '收藏单词', desc: '复习重点词汇', url: '/pages/favorites/index' },
    { icon: '🎯', title: '错词本', desc: '攻克薄弱环节', url: '/pages/wrong-words/index' },
    { icon: '⚙️', title: '设置', desc: '个性化配置' },
    { icon: '💬', title: '意见反馈', desc: '帮助我们改进' },
    { icon: '📖', title: '关于我们', desc: '了解更多' }
  ]

  const handleMenuClick = (item: MenuItem) => {
    if (item.url) {
      Taro.navigateTo({ url: item.url })
    } else {
      Taro.showToast({
        title: '功能开发中...',
        icon: 'none'
      })
    }
  }

  return (
    <View className='mine-page'>
      {/* 用户信息卡片 */}
      <View className='user-card'>
        <View className='user-bg'></View>
        <View className='user-content'>
          <View className='avatar-wrapper'>
            <View className='avatar'>
              <Text className='avatar-text'>👤</Text>
            </View>
            <View className='vip-badge'>VIP</View>
          </View>
          <View className='user-info'>
            <Text className='username'>雅思学习者</Text>
            <Text className='user-desc'>每天进步一点点</Text>
          </View>
        </View>
      </View>

      {/* 学习数据 */}
      <View className='stats-card'>
        <View className='stat-item' onClick={() => Taro.navigateTo({ url: '/pages/statistics/index' })}>
          <Text className='stat-num'>{stats.totalWords}</Text>
          <Text className='stat-label'>已学单词</Text>
        </View>
        <View className='stat-divider'></View>
        <View className='stat-item'>
          <Text className='stat-num'>{stats.consecutiveDays}</Text>
          <Text className='stat-label'>连续天数</Text>
        </View>
        <View className='stat-divider'></View>
        <View className='stat-item'>
          <Text className='stat-num'>{stats.accuracy}%</Text>
          <Text className='stat-label'>正确率</Text>
        </View>
      </View>

      {/* 菜单列表 */}
      <View className='menu-list'>
        {menuItems.map((item, index) => (
          <View 
            key={index} 
            className='menu-item'
            onClick={() => handleMenuClick(item)}
          >
            <View className='menu-left'>
              <Text className='menu-icon'>{item.icon}</Text>
              <View className='menu-info'>
                <Text className='menu-title'>{item.title}</Text>
                <Text className='menu-desc'>{item.desc}</Text>
              </View>
            </View>
            <Text className='menu-arrow'>›</Text>
          </View>
        ))}
      </View>

      {/* 底部版本 */}
      <View className='footer'>
        <Text className='version'>Version 1.0.0</Text>
      </View>
    </View>
  )
}
