import { View, Text, Slider, ScrollView, Input, Image } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useEffect, useState, useRef, useMemo } from 'react'
import { getSectionById, Section } from '../../data/mock'
import './index.less'

// 解析文本中的重点词标记，返回包含普通文本和高亮词的数组
const parseHighlightedText = (text: string, isEnglish: boolean) => {
  const parts: { text: string; isHighlight: boolean }[] = []
  
  if (isEnglish) {
    // 英文用 [word] 标记
    const regex = /\[([^\]]+)\]/g
    let lastIndex = 0
    let match
    
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ text: text.slice(lastIndex, match.index), isHighlight: false })
      }
      parts.push({ text: match[1], isHighlight: true })
      lastIndex = regex.lastIndex
    }
    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex), isHighlight: false })
    }
  } else {
    // 中文用 【word】(english) 标记
    const regex = /【([^】]+)】\([^)]+\)/g
    let lastIndex = 0
    let match
    
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ text: text.slice(lastIndex, match.index), isHighlight: false })
      }
      parts.push({ text: match[0], isHighlight: true })
      lastIndex = regex.lastIndex
    }
    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex), isHighlight: false })
    }
  }
  
  return parts.length > 0 ? parts : [{ text, isHighlight: false }]
}

// 渲染段落内容（带重点词高亮）
const ParagraphContent = ({ text, isEnglish }: { text: string; isEnglish: boolean }) => {
  const parts = parseHighlightedText(text, isEnglish)
  
  return (
    <Text className='paragraph-text'>
      {parts.map((part, index) => (
        part.isHighlight ? (
          <Text key={index} className='highlight-word'>{part.text}</Text>
        ) : (
          <Text key={index}>{part.text}</Text>
        )
      ))}
    </Text>
  )
}

// 将内容按段落分割
const splitIntoParagraphs = (content: string): string[] => {
  return content
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(p => p.length > 0)
}

export default function Study() {
  const router = useRouter()
  const [section, setSection] = useState<Section | null>(null)
  const [showTranslation, setShowTranslation] = useState(false)
  const [showVocabulary, setShowVocabulary] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioContext = useRef<Taro.InnerAudioContext | null>(null)

  // 分割段落
  const paragraphs = useMemo(() => {
    if (!section) return []
    return splitIntoParagraphs(section.content)
  }, [section])

  const translationParagraphs = useMemo(() => {
    if (!section) return []
    return splitIntoParagraphs(section.translation)
  }, [section])

  // 过滤词汇列表
  const filteredWords = useMemo(() => {
    if (!section) return []
    if (!searchKeyword.trim()) return section.words
    const keyword = searchKeyword.toLowerCase().trim()
    return section.words.filter(word => 
      word.word.toLowerCase().includes(keyword) ||
      word.meaning.toLowerCase().includes(keyword)
    )
  }, [section, searchKeyword])

  useEffect(() => {
    const sectionId = router.params.id
    if (sectionId) {
      const sectionData = getSectionById(sectionId)
      if (sectionData) {
        setSection(sectionData)
        Taro.setNavigationBarTitle({ title: sectionData.title })
        initAudio(sectionData.audioUrl)
      }
    }

    return () => {
      if (audioContext.current) {
        audioContext.current.stop()
        audioContext.current.destroy()
      }
    }
  }, [router.params.id])

  // 初始化音频
  const initAudio = (audioUrl: string) => {
    if (audioContext.current) {
      audioContext.current.destroy()
    }
    
    const audio = Taro.createInnerAudioContext()
    audioContext.current = audio
    audio.src = audioUrl
    
    audio.onCanplay(() => {
      console.log('Audio can play, duration:', audio.duration)
      if (audio.duration && audio.duration > 0) {
        setDuration(Math.floor(audio.duration))
      }
    })
    
    audio.onTimeUpdate(() => {
      setCurrentTime(Math.floor(audio.currentTime))
      if (duration === 0 && audio.duration > 0) {
        setDuration(Math.floor(audio.duration))
      }
    })
    
    audio.onEnded(() => {
      setIsPlaying(false)
      setCurrentTime(0)
    })
    
    audio.onError((res) => {
      console.error('Audio error:', res)
      Taro.showToast({
        title: '音频加载失败',
        icon: 'none'
      })
      setIsPlaying(false)
    })
  }

  const togglePlay = () => {
    if (!audioContext.current) return
    
    if (isPlaying) {
      audioContext.current.pause()
      setIsPlaying(false)
    } else {
      audioContext.current.play()
      setIsPlaying(true)
    }
  }

  const handleSliderChange = (e: any) => {
    const newTime = e.detail.value
    setCurrentTime(newTime)
    if (audioContext.current) {
      audioContext.current.seek(newTime)
    }
  }

  const handleSeek = (offset: number) => {
    if (!audioContext.current) return
    const newTime = Math.max(0, Math.min(duration, currentTime + offset))
    setCurrentTime(newTime)
    audioContext.current.seek(newTime)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${String(secs).padStart(2, '0')}`
  }

  const goBack = () => {
    Taro.navigateBack()
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
      {/* 功能按钮栏 */}
      <View className='action-bar'>
        <View 
          className={`action-btn ${showTranslation ? 'active' : ''}`}
          onClick={() => setShowTranslation(!showTranslation)}
        >
          <Text className='action-icon'>🔤</Text>
          <Text className='action-text'>{showTranslation ? '隐藏释义' : '显示释义'}</Text>
        </View>
        <View 
          className='action-btn vocab-btn'
          onClick={() => setShowVocabulary(true)}
        >
          <Text className='action-icon'>📚</Text>
          <Text className='action-text'>词汇表</Text>
          <View className='vocab-badge'>
            <Text className='badge-num'>{section.words.length}</Text>
          </View>
        </View>
      </View>

      {/* 主内容区域 */}
      <ScrollView className='content-scroll' scrollY>
        <View className='content-inner'>
          {/* 英文段落 */}
          <View className='paragraphs-container'>
            {paragraphs.map((para, index) => (
              <View key={index}>
                <View className='paragraph-item'>
                  <ParagraphContent text={para} isEnglish={true} />
                </View>
                {/* 在第1个段落之后插入图片 */}
                {index === 1 && (
                  <View className='story-image-wrapper'>
                    <Image 
                      className='story-image'
                      src={section.backgroundImage}
                      mode='aspectFill'
                    />
                  </View>
                )}
              </View>
            ))}
          </View>
          
          {/* 中文翻译 */}
          {showTranslation && (
            <View className='translation-box'>
              <View className='translation-header'>
                <Text className='translation-icon'>🇨🇳</Text>
                <Text className='translation-label'>中文释义</Text>
              </View>
              <View className='paragraphs-container'>
                {translationParagraphs.map((para, index) => (
                  <View key={index} className='paragraph-item translation-para'>
                    <ParagraphContent text={para} isEnglish={false} />
                  </View>
                ))}
              </View>
            </View>
          )}
          
          {/* 底部留白 */}
          <View className='content-footer-space'></View>
        </View>
      </ScrollView>

      {/* 底部音频控制 */}
      <View className='audio-controls'>
        <View className='audio-card'>
          <View className='progress-row'>
            <Text className='time-text'>{formatTime(currentTime)}</Text>
            <Slider 
              className='progress-slider'
              min={0}
              max={duration || 100}
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
            <View className='audio-btn' onClick={() => handleSeek(-10)}>
              <Text className='audio-btn-icon'>⏪</Text>
            </View>
            <View className='play-btn' onClick={togglePlay}>
              <Text className='play-btn-icon'>{isPlaying ? '⏸' : '▶'}</Text>
            </View>
            <View className='audio-btn' onClick={() => handleSeek(10)}>
              <Text className='audio-btn-icon'>⏩</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 词汇弹窗 */}
      {showVocabulary && (
        <View className='vocabulary-modal'>
          <View className='modal-overlay' onClick={() => { setShowVocabulary(false); setSearchKeyword(''); }}></View>
          <View className='modal-content'>
            <View className='modal-header'>
              <Text className='modal-title'>📚 重点词汇</Text>
              <View className='close-btn' onClick={() => { setShowVocabulary(false); setSearchKeyword(''); }}>
                <Text className='close-icon'>✕</Text>
              </View>
            </View>
            {/* 搜索框 */}
            <View className='search-box'>
              <Text className='search-icon'>🔍</Text>
              <Input 
                className='search-input'
                type='text'
                placeholder='搜索单词或释义...'
                value={searchKeyword}
                onInput={(e) => setSearchKeyword(e.detail.value)}
              />
              {searchKeyword && (
                <View className='clear-btn' onClick={() => setSearchKeyword('')}>
                  <Text className='clear-icon'>✕</Text>
                </View>
              )}
            </View>
            {/* 搜索结果统计 */}
            {searchKeyword && (
              <View className='search-result-info'>
                <Text className='result-text'>
                  找到 {filteredWords.length} 个匹配单词
                </Text>
              </View>
            )}
            <ScrollView className='word-list' scrollY>
              {filteredWords.length > 0 ? (
                filteredWords.map((word) => (
                  <View key={word.id} className='word-item'>
                    <View className='word-header'>
                      <View className='word-main-info'>
                        <Text className='word-text'>{word.word}</Text>
                        <Text className='word-phonetic'>{word.phonetic}</Text>
                      </View>
                    </View>
                    <Text className='word-meaning'>{word.meaning}</Text>
                    <View className='word-example'>
                      <Text className='example-label'>例句：</Text>
                      <Text className='example-text'>{word.example}</Text>
                    </View>
                  </View>
                ))
              ) : (
                <View className='no-result'>
                  <Text className='no-result-icon'>🔍</Text>
                  <Text className='no-result-text'>没有找到匹配的单词</Text>
                </View>
              )}
            </ScrollView>
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
