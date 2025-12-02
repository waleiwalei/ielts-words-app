import { View, Text } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import { getStudyStats, getUserStudyData } from '../../data/storage'
import { mockParts } from '../../data/mock'
import './index.less'

interface Stats {
  totalWords: number
  correctWords: number
  wrongWords: number
  favoriteWords: number
  learnedSections: number
  totalStudyDays: number
  consecutiveDays: number
  todayWords: number
  accuracy: number
}

export default function Statistics() {
  const [stats, setStats] = useState<Stats>({
    totalWords: 0,
    correctWords: 0,
    wrongWords: 0,
    favoriteWords: 0,
    learnedSections: 0,
    totalStudyDays: 0,
    consecutiveDays: 0,
    todayWords: 0,
    accuracy: 0
  })

  // 计算总单词数
  const totalWordsInApp = mockParts.reduce((sum, part) => 
    sum + part.sections.reduce((s, section) => s + section.words.length, 0), 0)
  
  const totalSectionsInApp = mockParts.reduce((sum, part) => 
    sum + part.sections.length, 0)

  useDidShow(() => {
    const studyStats = getStudyStats()
    setStats(studyStats)
  })

  const handleNavigate = (page: string) => {
    Taro.navigateTo({ url: page })
  }

  // 学习进度百分比
  const learningProgress = Math.min(100, Math.round((stats.totalWords / totalWordsInApp) * 100))

  return (
    <View className='statistics-page'>
      {/* 头部概览 */}
      <View className='header'>
        <View className='header-bg'></View>
        <View className='header-content'>
          <View className='overview-card'>
            <View className='progress-circle'>
              <View className='progress-ring'>
                <Text className='progress-num'>{learningProgress}</Text>
                <Text className='progress-percent'>%</Text>
              </View>
              <Text className='progress-label'>学习进度</Text>
            </View>
            <View className='overview-stats'>
              <View className='overview-item'>
                <Text className='overview-num'>{stats.totalWords}</Text>
                <Text className='overview-label'>已学单词</Text>
              </View>
              <View className='overview-item'>
                <Text className='overview-num'>{totalWordsInApp}</Text>
                <Text className='overview-label'>总单词数</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 学习记录 */}
      <View className='section'>
        <View className='section-header'>
          <Text className='section-title'>📅 学习记录</Text>
        </View>
        <View className='record-cards'>
          <View className='record-card streak'>
            <View className='record-icon'>🔥</View>
            <View className='record-info'>
              <Text className='record-num'>{stats.consecutiveDays}</Text>
              <Text className='record-label'>连续学习</Text>
              <Text className='record-unit'>天</Text>
            </View>
          </View>
          <View className='record-card total'>
            <View className='record-icon'>📚</View>
            <View className='record-info'>
              <Text className='record-num'>{stats.totalStudyDays}</Text>
              <Text className='record-label'>累计学习</Text>
              <Text className='record-unit'>天</Text>
            </View>
          </View>
          <View className='record-card today'>
            <View className='record-icon'>✨</View>
            <View className='record-info'>
              <Text className='record-num'>{stats.todayWords}</Text>
              <Text className='record-label'>今日单词</Text>
              <Text className='record-unit'>个</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 学习成果 */}
      <View className='section'>
        <View className='section-header'>
          <Text className='section-title'>📊 学习成果</Text>
        </View>
        <View className='achievement-grid'>
          <View className='achievement-card' onClick={() => handleNavigate('/pages/favorites/index')}>
            <View className='achievement-header'>
              <Text className='achievement-icon'>⭐</Text>
              <Text className='achievement-arrow'>›</Text>
            </View>
            <Text className='achievement-num'>{stats.favoriteWords}</Text>
            <Text className='achievement-label'>收藏单词</Text>
          </View>
          <View className='achievement-card' onClick={() => handleNavigate('/pages/wrong-words/index')}>
            <View className='achievement-header'>
              <Text className='achievement-icon'>🎯</Text>
              <Text className='achievement-arrow'>›</Text>
            </View>
            <Text className='achievement-num'>{stats.wrongWords}</Text>
            <Text className='achievement-label'>待复习</Text>
          </View>
          <View className='achievement-card correct'>
            <View className='achievement-header'>
              <Text className='achievement-icon'>✅</Text>
            </View>
            <Text className='achievement-num'>{stats.correctWords}</Text>
            <Text className='achievement-label'>已掌握</Text>
          </View>
          <View className='achievement-card accuracy'>
            <View className='achievement-header'>
              <Text className='achievement-icon'>📈</Text>
            </View>
            <Text className='achievement-num'>{stats.accuracy}%</Text>
            <Text className='achievement-label'>正确率</Text>
          </View>
        </View>
      </View>

      {/* 章节进度 */}
      <View className='section'>
        <View className='section-header'>
          <Text className='section-title'>📖 章节进度</Text>
          <Text className='section-subtitle'>{stats.learnedSections} / {totalSectionsInApp} 章节</Text>
        </View>
        <View className='parts-list'>
          {mockParts.map(part => {
            const partWordCount = part.sections.reduce((s, section) => s + section.words.length, 0)
            return (
              <View key={part.id} className='part-item'>
                <View className='part-header'>
                  <Text className='part-title'>{part.title}</Text>
                  <Text className='part-desc'>{part.description}</Text>
                </View>
                <View className='part-progress'>
                  <View className='progress-bar-bg'>
                    <View 
                      className='progress-bar-fill'
                      style={{ width: `${Math.random() * 60 + 20}%` }}
                    ></View>
                  </View>
                  <View className='part-stats'>
                    <Text className='part-stat'>{part.sections.length} 章节</Text>
                    <Text className='part-stat'>{partWordCount} 单词</Text>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </View>

      {/* 激励语 */}
      <View className='motivation'>
        <Text className='motivation-emoji'>💪</Text>
        <Text className='motivation-text'>坚持学习，雅思高分不是梦！</Text>
      </View>
    </View>
  )
}

