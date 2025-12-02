// 本地存储管理 - 用户学习数据

import Taro from '@tarojs/taro'

// 学习记录接口
export interface StudyRecord {
  wordId: string
  word: string
  meaning: string
  phonetic: string
  sectionId: string
  isCorrect: boolean
  studyTime: number  // 时间戳
}

// 用户学习数据接口
export interface UserStudyData {
  favoriteWords: string[]  // 收藏的单词ID
  wrongWords: StudyRecord[]  // 错词记录
  correctWords: StudyRecord[]  // 正确的单词记录
  learnedSections: string[]  // 已学习的章节
  totalStudyDays: number  // 累计学习天数
  consecutiveDays: number  // 连续学习天数
  lastStudyDate: string  // 最后学习日期 YYYY-MM-DD
  todayWords: number  // 今日学习单词数
}

const STORAGE_KEY = 'ielts_user_study_data'

// 默认数据
const defaultData: UserStudyData = {
  favoriteWords: [],
  wrongWords: [],
  correctWords: [],
  learnedSections: [],
  totalStudyDays: 7,
  consecutiveDays: 7,
  lastStudyDate: '',
  todayWords: 0
}

// 获取用户学习数据
export const getUserStudyData = (): UserStudyData => {
  try {
    const data = Taro.getStorageSync(STORAGE_KEY)
    if (data) {
      return { ...defaultData, ...JSON.parse(data) }
    }
  } catch (e) {
    console.error('获取用户数据失败', e)
  }
  return { ...defaultData }
}

// 保存用户学习数据
export const saveUserStudyData = (data: UserStudyData): void => {
  try {
    Taro.setStorageSync(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.error('保存用户数据失败', e)
  }
}

// 检查并更新学习天数
export const updateStudyStreak = (): void => {
  const data = getUserStudyData()
  const today = new Date().toISOString().split('T')[0]
  
  if (data.lastStudyDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
    
    if (data.lastStudyDate === yesterday) {
      // 连续学习
      data.consecutiveDays += 1
    } else if (data.lastStudyDate !== '') {
      // 中断了，重新计算
      data.consecutiveDays = 1
    } else {
      data.consecutiveDays = 1
    }
    
    data.totalStudyDays += 1
    data.lastStudyDate = today
    data.todayWords = 0
    saveUserStudyData(data)
  }
}

// 添加收藏单词
export const addFavoriteWord = (wordId: string): boolean => {
  const data = getUserStudyData()
  if (!data.favoriteWords.includes(wordId)) {
    data.favoriteWords.push(wordId)
    saveUserStudyData(data)
    return true
  }
  return false
}

// 移除收藏单词
export const removeFavoriteWord = (wordId: string): boolean => {
  const data = getUserStudyData()
  const index = data.favoriteWords.indexOf(wordId)
  if (index > -1) {
    data.favoriteWords.splice(index, 1)
    saveUserStudyData(data)
    return true
  }
  return false
}

// 切换收藏状态
export const toggleFavoriteWord = (wordId: string): boolean => {
  const data = getUserStudyData()
  if (data.favoriteWords.includes(wordId)) {
    removeFavoriteWord(wordId)
    return false
  } else {
    addFavoriteWord(wordId)
    return true
  }
}

// 检查是否收藏
export const isFavoriteWord = (wordId: string): boolean => {
  const data = getUserStudyData()
  return data.favoriteWords.includes(wordId)
}

// 添加学习记录
export const addStudyRecord = (record: StudyRecord): void => {
  const data = getUserStudyData()
  updateStudyStreak()
  
  if (record.isCorrect) {
    // 从错词本移除（如果存在）
    data.wrongWords = data.wrongWords.filter(w => w.wordId !== record.wordId)
    // 添加到正确记录
    const existingIndex = data.correctWords.findIndex(w => w.wordId === record.wordId)
    if (existingIndex > -1) {
      data.correctWords[existingIndex] = record
    } else {
      data.correctWords.push(record)
    }
  } else {
    // 添加到错词本
    const existingIndex = data.wrongWords.findIndex(w => w.wordId === record.wordId)
    if (existingIndex > -1) {
      data.wrongWords[existingIndex] = record
    } else {
      data.wrongWords.push(record)
    }
  }
  
  data.todayWords += 1
  saveUserStudyData(data)
}

// 获取错词列表
export const getWrongWords = (): StudyRecord[] => {
  const data = getUserStudyData()
  return data.wrongWords
}

// 清除单个错词
export const removeWrongWord = (wordId: string): void => {
  const data = getUserStudyData()
  data.wrongWords = data.wrongWords.filter(w => w.wordId !== wordId)
  saveUserStudyData(data)
}

// 获取学习统计
export const getStudyStats = () => {
  const data = getUserStudyData()
  return {
    totalWords: data.correctWords.length + data.wrongWords.length,
    correctWords: data.correctWords.length,
    wrongWords: data.wrongWords.length,
    favoriteWords: data.favoriteWords.length,
    learnedSections: data.learnedSections.length,
    totalStudyDays: data.totalStudyDays,
    consecutiveDays: data.consecutiveDays,
    todayWords: data.todayWords,
    accuracy: data.correctWords.length > 0 || data.wrongWords.length > 0
      ? Math.round((data.correctWords.length / (data.correctWords.length + data.wrongWords.length)) * 100)
      : 0
  }
}

// 标记章节为已学习
export const markSectionLearned = (sectionId: string): void => {
  const data = getUserStudyData()
  if (!data.learnedSections.includes(sectionId)) {
    data.learnedSections.push(sectionId)
    saveUserStudyData(data)
  }
}

// 获取收藏单词的完整信息
export const getFavoriteWordsDetail = () => {
  const { mockParts } = require('./mock')
  const data = getUserStudyData()
  const favoriteDetails: any[] = []
  
  for (const part of mockParts) {
    for (const section of part.sections) {
      for (const word of section.words) {
        if (data.favoriteWords.includes(word.id)) {
          favoriteDetails.push({
            ...word,
            sectionId: section.id,
            sectionTitle: section.title
          })
        }
      }
    }
  }
  
  return favoriteDetails
}

