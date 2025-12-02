import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getAllParts } from '../../data/mock'
import './index.less'

export default function Index() {
  const parts = getAllParts()

  const handleSectionClick = (sectionId: string) => {
    Taro.navigateTo({
      url: `/pages/study/index?id=${sectionId}`
    })
  }

  const handlePartClick = (partId: string) => {
    Taro.navigateTo({
      url: `/pages/section-list/index?id=${partId}`
    })
  }

  return (
    <View className='index-page'>
      {/* 顶部Banner */}
      <View className='banner'>
        <View className='banner-content'>
          <Text className='banner-title'>📚 看故事背雅思单词</Text>
          <Text className='banner-subtitle'>沉浸式学习，轻松记忆</Text>
        </View>
        <View className='banner-decoration'></View>
      </View>

      {/* Part列表 */}
      <View className='part-list'>
        {parts.map((part, partIndex) => (
          <View key={part.id} className='part-card'>
            <View 
              className='part-header'
              onClick={() => handlePartClick(part.id)}
            >
              <View className='part-info'>
                <Text className='part-title'>{part.title}</Text>
                <Text className='part-desc'>{part.description}</Text>
              </View>
              <View className='part-badge'>
                <Text className='badge-text'>{part.sections.length} 章节</Text>
              </View>
            </View>

            {/* Section预览 */}
            <View className='section-preview'>
              {part.sections.slice(0, 2).map((section, index) => (
                <View 
                  key={section.id} 
                  className='section-item'
                  onClick={() => handleSectionClick(section.id)}
                >
                  <Image 
                    className='section-thumb' 
                    src={section.backgroundImage}
                    mode='aspectFill'
                  />
                  <View className='section-info'>
                    <Text className='section-title'>{section.title}</Text>
                    <Text className='section-subtitle'>{section.subtitle}</Text>
                    <View className='word-count'>
                      <Text className='word-icon'>📝</Text>
                      <Text className='word-num'>{section.words.length} 个单词</Text>
                    </View>
                  </View>
                </View>
              ))}
              {part.sections.length > 2 && (
                <View 
                  className='more-btn'
                  onClick={() => handlePartClick(part.id)}
                >
                  <Text className='more-text'>查看全部 {part.sections.length} 章节 →</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

