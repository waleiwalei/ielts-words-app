import { View, Text } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import { getFavoriteWordsDetail, removeFavoriteWord } from '../../data/storage'
import './index.less'

interface FavoriteWord {
  id: string
  word: string
  phonetic: string
  meaning: string
  example: string
  sectionId: string
  sectionTitle: string
}

export default function Favorites() {
  const [words, setWords] = useState<FavoriteWord[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useDidShow(() => {
    loadFavorites()
  })

  const loadFavorites = () => {
    const favorites = getFavoriteWordsDetail()
    setWords(favorites)
  }

  const handleRemoveFavorite = (wordId: string) => {
    Taro.showModal({
      title: '取消收藏',
      content: '确定要取消收藏这个单词吗？',
      success: (res) => {
        if (res.confirm) {
          removeFavoriteWord(wordId)
          loadFavorites()
          Taro.showToast({
            title: '已取消收藏',
            icon: 'none'
          })
        }
      }
    })
  }

  const handleToggleExpand = (wordId: string) => {
    setExpandedId(expandedId === wordId ? null : wordId)
  }

  const handleStudySection = (sectionId: string) => {
    Taro.navigateTo({
      url: `/pages/study/index?id=${sectionId}`
    })
  }

  return (
    <View className='favorites-page'>
      {/* 头部统计 */}
      <View className='header'>
        <View className='header-bg'></View>
        <View className='header-content'>
          <Text className='header-icon'>⭐</Text>
          <Text className='header-title'>收藏单词</Text>
          <Text className='header-count'>共 {words.length} 个单词</Text>
        </View>
      </View>

      {/* 单词列表 */}
      {words.length > 0 ? (
        <View className='word-list'>
          {words.map((word, index) => (
            <View 
              key={word.id} 
              className={`word-card ${expandedId === word.id ? 'expanded' : ''}`}
            >
              <View 
                className='word-header'
                onClick={() => handleToggleExpand(word.id)}
              >
                <View className='word-index'>
                  <Text>{String(index + 1).padStart(2, '0')}</Text>
                </View>
                <View className='word-main'>
                  <Text className='word-text'>{word.word}</Text>
                  <Text className='word-phonetic'>{word.phonetic}</Text>
                </View>
                <View className='expand-icon'>
                  <Text>{expandedId === word.id ? '▲' : '▼'}</Text>
                </View>
              </View>

              <View className='word-meaning-row'>
                <Text className='word-meaning'>{word.meaning}</Text>
              </View>

              {expandedId === word.id && (
                <View className='word-detail'>
                  <View className='example-box'>
                    <Text className='example-label'>📝 例句</Text>
                    <Text className='example-text'>{word.example}</Text>
                  </View>
                  
                  <View className='section-info'>
                    <Text className='section-label'>📚 来自章节</Text>
                    <View 
                      className='section-link'
                      onClick={() => handleStudySection(word.sectionId)}
                    >
                      <Text className='section-title'>{word.sectionTitle}</Text>
                      <Text className='link-arrow'>→</Text>
                    </View>
                  </View>

                  <View className='action-row'>
                    <View 
                      className='remove-btn'
                      onClick={() => handleRemoveFavorite(word.id)}
                    >
                      <Text className='remove-icon'>✕</Text>
                      <Text className='remove-text'>取消收藏</Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
      ) : (
        <View className='empty-state'>
          <Text className='empty-icon'>📚</Text>
          <Text className='empty-title'>还没有收藏单词</Text>
          <Text className='empty-desc'>在学习过程中点击星标即可收藏</Text>
          <View 
            className='go-study-btn'
            onClick={() => Taro.switchTab({ url: '/pages/index/index' })}
          >
            <Text className='btn-text'>去学习</Text>
          </View>
        </View>
      )}
    </View>
  )
}

