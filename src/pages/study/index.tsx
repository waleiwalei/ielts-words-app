import { View, Text, Image, Slider } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useEffect, useState, useRef } from 'react'
import { getSectionById, Section, Word } from '../../data/mock'
import { toggleFavoriteWord, isFavoriteWord } from '../../data/storage'
import './index.less'

export default function Study() {
  const router = useRouter()
  const [section, setSection] = useState<Section | null>(null)
  const [showTranslation, setShowTranslation] = useState(false)
  const [showVocabulary, setShowVocabulary] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180) // 模拟3分钟音频
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const audioContext = useRef<Taro.InnerAudioContext | null>(null)
  const timerRef = useRef<any>(null)

  useEffect(() => {
    const sectionId = router.params.id
    if (sectionId) {
      const sectionData = getSectionById(sectionId)
      if (sectionData) {
        setSection(sectionData)
        Taro.setNavigationBarTitle({ title: sectionData.title })
        
        // 初始化收藏状态
        const favSet = new Set<string>()
        sectionData.words.forEach(w => {
          if (isFavoriteWord(w.id)) {
            favSet.add(w.id)
          }
        })
        setFavorites(favSet)
      }
    }

    // 创建音频上下文
    audioContext.current = Taro.createInnerAudioContext()
    
    return () => {
      if (audioContext.current) {
        audioContext.current.destroy()
      }
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [router.params.id])

  // 模拟音频播放进度
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, duration])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSliderChange = (e: any) => {
    setCurrentTime(e.detail.value)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${String(secs).padStart(2, '0')}`
  }

  const goBack = () => {
    Taro.navigateBack()
  }

  const handleToggleFavorite = (wordId: string) => {
    const isFav = toggleFavoriteWord(wordId)
    setFavorites(prev => {
      const newSet = new Set(prev)
      if (isFav) {
        newSet.add(wordId)
      } else {
        newSet.delete(wordId)
      }
      return newSet
    })
    
    Taro.showToast({
      title: isFav ? '已收藏' : '已取消收藏',
      icon: 'none',
      duration: 1000
    })
  }

  const handleStartQuiz = () => {
    if (section) {
      Taro.navigateTo({
        url: `/pages/word-quiz/index?id=${section.id}`
      })
    }
  }

  if (!section) {
    return (
      <View className='loading'>
        <Text>加载中...</Text>
      </View>
    )
  }

  return (
    <View className='study-page'>
      {/* 背景图片 */}
      <Image 
        className='bg-image' 
        src={section.backgroundImage}
        mode='aspectFill'
      />
      <View className='bg-overlay'></View>

      {/* 顶部控制栏 */}
      <View className='top-controls'>
        <View className='control-row'>
          <View className='back-btn' onClick={goBack}>
            <Text className='back-icon'>←</Text>
          </View>
          <View 
            className={`control-btn ${showTranslation ? 'active' : ''}`}
            onClick={() => setShowTranslation(!showTranslation)}
          >
            <Text className='btn-icon'>🔤</Text>
            <Text className='btn-text'>{showTranslation ? '隐藏释义' : '显示释义'}</Text>
          </View>
          <View 
            className='control-btn vocab-btn'
            onClick={() => setShowVocabulary(true)}
          >
            <Text className='btn-icon'>📚</Text>
            <Text className='btn-text'>词汇表</Text>
            <View className='vocab-badge'>
              <Text className='badge-num'>{section.words.length}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 主内容区域 */}
      <View className='content-area'>
        <View className='content-card'>
          <Text className='content-title'>{section.title}</Text>
          <Text className='content-subtitle'>{section.subtitle}</Text>
          <View className='content-divider'></View>
          <Text className='content-text'>{section.content}</Text>
          
          {showTranslation && (
            <View className='translation-box'>
              <View className='translation-header'>
                <Text className='translation-icon'>🇨🇳</Text>
                <Text className='translation-label'>中文释义</Text>
              </View>
              <Text className='translation-text'>{section.translation}</Text>
            </View>
          )}
        </View>
      </View>

      {/* 底部音频控制 */}
      <View className='audio-controls'>
        <View className='audio-card'>
          <View className='progress-row'>
            <Text className='time-text'>{formatTime(currentTime)}</Text>
            <Slider 
              className='progress-slider'
              min={0}
              max={duration}
              value={currentTime}
              activeColor='#667eea'
              backgroundColor='rgba(255,255,255,0.3)'
              blockSize={20}
              blockColor='#fff'
              onChange={handleSliderChange}
            />
            <Text className='time-text'>{formatTime(duration)}</Text>
          </View>
          <View className='control-row'>
            <View className='audio-btn' onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}>
              <Text className='audio-btn-icon'>⏪</Text>
            </View>
            <View className='play-btn' onClick={togglePlay}>
              <Text className='play-btn-icon'>{isPlaying ? '⏸' : '▶'}</Text>
            </View>
            <View className='audio-btn' onClick={() => setCurrentTime(Math.min(duration, currentTime + 10))}>
              <Text className='audio-btn-icon'>⏩</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 词汇弹窗 */}
      {showVocabulary && (
        <View className='vocabulary-modal'>
          <View className='modal-overlay' onClick={() => setShowVocabulary(false)}></View>
          <View className='modal-content'>
            <View className='modal-header'>
              <Text className='modal-title'>📚 重点词汇</Text>
              <View className='close-btn' onClick={() => setShowVocabulary(false)}>
                <Text className='close-icon'>✕</Text>
              </View>
            </View>
            <View className='word-list'>
              {section.words.map((word, index) => (
                <View key={word.id} className='word-item'>
                  <View className='word-header'>
                    <View className='word-main-info'>
                      <Text className='word-text'>{word.word}</Text>
                      <Text className='word-phonetic'>{word.phonetic}</Text>
                    </View>
                    <View 
                      className={`fav-btn ${favorites.has(word.id) ? 'active' : ''}`}
                      onClick={() => handleToggleFavorite(word.id)}
                    >
                      <Text className='fav-icon'>{favorites.has(word.id) ? '⭐' : '☆'}</Text>
                    </View>
                  </View>
                  <Text className='word-meaning'>{word.meaning}</Text>
                  <View className='word-example'>
                    <Text className='example-label'>例句：</Text>
                    <Text className='example-text'>{word.example}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View className='modal-footer'>
              <View className='quiz-btn' onClick={handleStartQuiz}>
                <Text className='quiz-btn-icon'>📝</Text>
                <Text className='quiz-btn-text'>开始测试</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

