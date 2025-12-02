import { View, Text } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import { getWrongWords, removeWrongWord, StudyRecord, addStudyRecord } from '../../data/storage'
import './index.less'

export default function WrongWords() {
  const [words, setWords] = useState<StudyRecord[]>([])
  const [reviewMode, setReviewMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)

  useDidShow(() => {
    loadWrongWords()
  })

  const loadWrongWords = () => {
    const wrongWords = getWrongWords()
    // 按时间倒序排列
    wrongWords.sort((a, b) => b.studyTime - a.studyTime)
    setWords(wrongWords)
  }

  const handleRemoveWord = (wordId: string) => {
    Taro.showModal({
      title: '移除单词',
      content: '确定要从错词本移除这个单词吗？',
      success: (res) => {
        if (res.confirm) {
          removeWrongWord(wordId)
          loadWrongWords()
          Taro.showToast({
            title: '已移除',
            icon: 'none'
          })
        }
      }
    })
  }

  const handleStartReview = () => {
    if (words.length === 0) {
      Taro.showToast({
        title: '暂无错词需要复习',
        icon: 'none'
      })
      return
    }
    setReviewMode(true)
    setCurrentIndex(0)
    setShowMeaning(false)
  }

  const handleMarkMastered = () => {
    const currentWord = words[currentIndex]
    // 记录为正确
    addStudyRecord({
      ...currentWord,
      isCorrect: true,
      studyTime: Date.now()
    })
    
    handleNextWord()
  }

  const handleStillWrong = () => {
    handleNextWord()
  }

  const handleNextWord = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setShowMeaning(false)
    } else {
      setReviewMode(false)
      loadWrongWords()
      Taro.showToast({
        title: '复习完成！',
        icon: 'success'
      })
    }
  }

  const handleExitReview = () => {
    setReviewMode(false)
    loadWrongWords()
  }

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return `${date.getMonth() + 1}月${date.getDate()}日`
  }

  // 复习模式
  if (reviewMode && words.length > 0) {
    const currentWord = words[currentIndex]
    
    return (
      <View className='wrong-words-page review-mode'>
        {/* 进度 */}
        <View className='review-header'>
          <View className='back-btn' onClick={handleExitReview}>
            <Text className='back-icon'>←</Text>
          </View>
          <Text className='review-progress'>{currentIndex + 1} / {words.length}</Text>
          <View className='placeholder'></View>
        </View>

        <View className='progress-bar'>
          <View 
            className='progress-fill' 
            style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
          ></View>
        </View>

        {/* 单词卡片 */}
        <View className='review-card' onClick={() => setShowMeaning(true)}>
          <Text className='review-word'>{currentWord.word}</Text>
          <Text className='review-phonetic'>{currentWord.phonetic}</Text>
          
          {showMeaning ? (
            <View className='meaning-reveal'>
              <View className='divider'></View>
              <Text className='review-meaning'>{currentWord.meaning}</Text>
            </View>
          ) : (
            <View className='tap-hint'>
              <Text className='hint-text'>👆 点击查看释义</Text>
            </View>
          )}
        </View>

        {/* 操作按钮 */}
        {showMeaning && (
          <View className='review-actions'>
            <View className='action-btn wrong-btn' onClick={handleStillWrong}>
              <Text className='btn-icon'>🤔</Text>
              <Text className='btn-text'>还不熟悉</Text>
            </View>
            <View className='action-btn mastered-btn' onClick={handleMarkMastered}>
              <Text className='btn-icon'>✅</Text>
              <Text className='btn-text'>已掌握</Text>
            </View>
          </View>
        )}
      </View>
    )
  }

  return (
    <View className='wrong-words-page'>
      {/* 头部 */}
      <View className='header'>
        <View className='header-bg'></View>
        <View className='header-content'>
          <Text className='header-icon'>🎯</Text>
          <View className='header-info'>
            <Text className='header-title'>错词本</Text>
            <Text className='header-count'>共 {words.length} 个单词待复习</Text>
          </View>
          {words.length > 0 && (
            <View className='review-btn' onClick={handleStartReview}>
              <Text className='review-btn-text'>开始复习</Text>
            </View>
          )}
        </View>
      </View>

      {/* 单词列表 */}
      {words.length > 0 ? (
        <View className='word-list'>
          {words.map((word, index) => (
            <View key={word.wordId} className='word-item'>
              <View className='word-left'>
                <View className='word-index'>
                  <Text>{String(index + 1).padStart(2, '0')}</Text>
                </View>
                <View className='word-info'>
                  <View className='word-header-row'>
                    <Text className='word-text'>{word.word}</Text>
                    <Text className='word-phonetic'>{word.phonetic}</Text>
                  </View>
                  <Text className='word-meaning'>{word.meaning}</Text>
                  <Text className='word-date'>{formatDate(word.studyTime)}</Text>
                </View>
              </View>
              <View 
                className='remove-btn'
                onClick={() => handleRemoveWord(word.wordId)}
              >
                <Text className='remove-icon'>✕</Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View className='empty-state'>
          <Text className='empty-icon'>🎉</Text>
          <Text className='empty-title'>太棒了！</Text>
          <Text className='empty-desc'>目前没有错词，继续保持！</Text>
          <View 
            className='go-study-btn'
            onClick={() => Taro.switchTab({ url: '/pages/index/index' })}
          >
            <Text className='btn-text'>继续学习</Text>
          </View>
        </View>
      )}
    </View>
  )
}

