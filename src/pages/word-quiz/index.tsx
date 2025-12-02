import { View, Text, Image } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useEffect, useState, useMemo } from 'react'
import { getSectionById, Section, Word, mockParts } from '../../data/mock'
import { addStudyRecord, toggleFavoriteWord, isFavoriteWord } from '../../data/storage'
import './index.less'

interface QuizQuestion {
  word: Word
  options: string[]
  correctIndex: number
}

export default function WordQuiz() {
  const router = useRouter()
  const [section, setSection] = useState<Section | null>(null)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  // 获取所有可用的单词释义（用于生成选项）
  const allMeanings = useMemo(() => {
    const meanings: string[] = []
    mockParts.forEach(part => {
      part.sections.forEach(s => {
        s.words.forEach(w => {
          if (!meanings.includes(w.meaning)) {
            meanings.push(w.meaning)
          }
        })
      })
    })
    return meanings
  }, [])

  useEffect(() => {
    const sectionId = router.params.id
    if (sectionId) {
      const sectionData = getSectionById(sectionId)
      if (sectionData) {
        setSection(sectionData)
        Taro.setNavigationBarTitle({ title: `${sectionData.title} - 单词测试` })
        generateQuestions(sectionData.words)
        
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
  }, [router.params.id])

  // 生成测试题
  const generateQuestions = (words: Word[]) => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5)
    const quizQuestions: QuizQuestion[] = shuffledWords.map(word => {
      // 生成4个选项，包含正确答案
      const correctMeaning = word.meaning
      const otherMeanings = allMeanings
        .filter(m => m !== correctMeaning)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
      
      const options = [...otherMeanings, correctMeaning].sort(() => Math.random() - 0.5)
      const correctIndex = options.indexOf(correctMeaning)
      
      return {
        word,
        options,
        correctIndex
      }
    })
    
    setQuestions(quizQuestions)
  }

  const handleSelectAnswer = (index: number) => {
    if (showResult) return
    
    setSelectedAnswer(index)
    setShowResult(true)
    
    const currentQuestion = questions[currentIndex]
    const isCorrect = index === currentQuestion.correctIndex
    
    if (isCorrect) {
      setCorrectCount(prev => prev + 1)
    } else {
      setWrongCount(prev => prev + 1)
    }
    
    // 记录学习结果
    addStudyRecord({
      wordId: currentQuestion.word.id,
      word: currentQuestion.word.word,
      meaning: currentQuestion.word.meaning,
      phonetic: currentQuestion.word.phonetic,
      sectionId: section?.id || '',
      isCorrect,
      studyTime: Date.now()
    })
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
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

  const handleRestart = () => {
    if (section) {
      generateQuestions(section.words)
      setCurrentIndex(0)
      setSelectedAnswer(null)
      setShowResult(false)
      setCorrectCount(0)
      setWrongCount(0)
      setQuizComplete(false)
    }
  }

  const handleBackToStudy = () => {
    Taro.navigateBack()
  }

  if (!section || questions.length === 0) {
    return (
      <View className='loading'>
        <Text>加载中...</Text>
      </View>
    )
  }

  // 完成页面
  if (quizComplete) {
    const accuracy = Math.round((correctCount / questions.length) * 100)
    const getGrade = () => {
      if (accuracy >= 90) return { emoji: '🏆', text: '太棒了！', color: '#52c41a' }
      if (accuracy >= 70) return { emoji: '👍', text: '不错哦！', color: '#1890ff' }
      if (accuracy >= 50) return { emoji: '💪', text: '继续加油！', color: '#faad14' }
      return { emoji: '📚', text: '多多练习！', color: '#ff4d4f' }
    }
    const grade = getGrade()

    return (
      <View className='quiz-page complete-page'>
        <View className='complete-card'>
          <Text className='complete-emoji'>{grade.emoji}</Text>
          <Text className='complete-title'>{grade.text}</Text>
          <Text className='complete-subtitle'>本轮测试完成</Text>
          
          <View className='score-circle' style={{ borderColor: grade.color }}>
            <Text className='score-num' style={{ color: grade.color }}>{accuracy}</Text>
            <Text className='score-percent'>%</Text>
          </View>
          
          <View className='stats-row'>
            <View className='stat-item correct'>
              <Text className='stat-icon'>✓</Text>
              <Text className='stat-num'>{correctCount}</Text>
              <Text className='stat-label'>正确</Text>
            </View>
            <View className='stat-divider'></View>
            <View className='stat-item wrong'>
              <Text className='stat-icon'>✗</Text>
              <Text className='stat-num'>{wrongCount}</Text>
              <Text className='stat-label'>错误</Text>
            </View>
            <View className='stat-divider'></View>
            <View className='stat-item total'>
              <Text className='stat-icon'>📝</Text>
              <Text className='stat-num'>{questions.length}</Text>
              <Text className='stat-label'>总计</Text>
            </View>
          </View>

          <View className='action-btns'>
            <View className='action-btn restart-btn' onClick={handleRestart}>
              <Text className='btn-icon'>🔄</Text>
              <Text className='btn-text'>再测一次</Text>
            </View>
            <View className='action-btn back-btn' onClick={handleBackToStudy}>
              <Text className='btn-icon'>📖</Text>
              <Text className='btn-text'>返回学习</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const currentQuestion = questions[currentIndex]
  const isFav = favorites.has(currentQuestion.word.id)

  return (
    <View className='quiz-page'>
      {/* 进度条 */}
      <View className='progress-header'>
        <View className='progress-top'>
          <View className='back-btn' onClick={handleBackToStudy}>
            <Text className='back-icon'>←</Text>
          </View>
          <View className='progress-info'>
            <Text className='progress-text'>{currentIndex + 1} / {questions.length}</Text>
            <View className='score-info'>
              <Text className='correct-score'>✓ {correctCount}</Text>
              <Text className='wrong-score'>✗ {wrongCount}</Text>
            </View>
          </View>
        </View>
        <View className='progress-bar'>
          <View 
            className='progress-fill' 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></View>
        </View>
      </View>

      {/* 单词卡片 */}
      <View className='word-card'>
        <View className='word-header'>
          <View className='word-main'>
            <Text className='word-text'>{currentQuestion.word.word}</Text>
            <Text className='word-phonetic'>{currentQuestion.word.phonetic}</Text>
          </View>
          <View 
            className={`favorite-btn ${isFav ? 'active' : ''}`}
            onClick={() => handleToggleFavorite(currentQuestion.word.id)}
          >
            <Text className='fav-icon'>{isFav ? '⭐' : '☆'}</Text>
          </View>
        </View>
        
        <View className='example-box'>
          <Text className='example-label'>例句</Text>
          <Text className='example-text'>{currentQuestion.word.example}</Text>
        </View>
      </View>

      {/* 选项区域 */}
      <View className='options-area'>
        <Text className='options-title'>请选择正确的释义</Text>
        <View className='options-list'>
          {currentQuestion.options.map((option, index) => {
            let optionClass = 'option-item'
            if (showResult) {
              if (index === currentQuestion.correctIndex) {
                optionClass += ' correct'
              } else if (index === selectedAnswer && index !== currentQuestion.correctIndex) {
                optionClass += ' wrong'
              }
            } else if (selectedAnswer === index) {
              optionClass += ' selected'
            }
            
            return (
              <View
                key={index}
                className={optionClass}
                onClick={() => handleSelectAnswer(index)}
              >
                <View className='option-letter'>
                  <Text>{String.fromCharCode(65 + index)}</Text>
                </View>
                <Text className='option-text'>{option}</Text>
                {showResult && index === currentQuestion.correctIndex && (
                  <Text className='result-icon'>✓</Text>
                )}
                {showResult && index === selectedAnswer && index !== currentQuestion.correctIndex && (
                  <Text className='result-icon'>✗</Text>
                )}
              </View>
            )
          })}
        </View>
      </View>

      {/* 下一题按钮 */}
      {showResult && (
        <View className='next-btn-area'>
          <View className='next-btn' onClick={handleNext}>
            <Text className='next-text'>
              {currentIndex < questions.length - 1 ? '下一题 →' : '查看结果'}
            </Text>
          </View>
        </View>
      )}
    </View>
  )
}

