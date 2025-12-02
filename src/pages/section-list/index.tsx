import { View, Text, Image } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useEffect, useState } from 'react'
import { getPartById, Part } from '../../data/mock'
import './index.less'

export default function SectionList() {
  const router = useRouter()
  const [part, setPart] = useState<Part | null>(null)

  useEffect(() => {
    const partId = router.params.id
    if (partId) {
      const partData = getPartById(partId)
      if (partData) {
        setPart(partData)
        Taro.setNavigationBarTitle({ title: partData.title })
      }
    }
  }, [router.params.id])

  const handleSectionClick = (sectionId: string) => {
    Taro.navigateTo({
      url: `/pages/study/index?id=${sectionId}`
    })
  }

  if (!part) {
    return (
      <View className='loading'>
        <Text>加载中...</Text>
      </View>
    )
  }

  return (
    <View className='section-list-page'>
      {/* 头部信息 */}
      <View className='header'>
        <Text className='header-title'>{part.title}</Text>
        <Text className='header-desc'>{part.description}</Text>
        <View className='header-stats'>
          <View className='stat'>
            <Text className='stat-num'>{part.sections.length}</Text>
            <Text className='stat-label'>章节</Text>
          </View>
          <View className='stat'>
            <Text className='stat-num'>
              {part.sections.reduce((sum, s) => sum + s.words.length, 0)}
            </Text>
            <Text className='stat-label'>单词</Text>
          </View>
        </View>
      </View>

      {/* Section列表 */}
      <View className='section-list'>
        {part.sections.map((section, index) => (
          <View 
            key={section.id} 
            className='section-card'
            onClick={() => handleSectionClick(section.id)}
          >
            <View className='section-index'>
              <Text className='index-num'>{String(index + 1).padStart(2, '0')}</Text>
            </View>
            <Image 
              className='section-image' 
              src={section.backgroundImage}
              mode='aspectFill'
            />
            <View className='section-overlay'></View>
            <View className='section-content'>
              <Text className='section-title'>{section.title}</Text>
              <Text className='section-subtitle'>{section.subtitle}</Text>
              <View className='section-meta'>
                <View className='meta-item'>
                  <Text className='meta-icon'>📝</Text>
                  <Text className='meta-text'>{section.words.length} 个单词</Text>
                </View>
                <View className='meta-item'>
                  <Text className='meta-icon'>🎧</Text>
                  <Text className='meta-text'>有音频</Text>
                </View>
              </View>
            </View>
            <View className='play-btn'>
              <Text className='play-icon'>▶</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

