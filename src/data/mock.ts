// Mock数据 - 雅思背单词故事数据

export interface Word {
  id: string
  word: string
  phonetic: string
  meaning: string
  example: string
}

export interface Section {
  id: string
  title: string
  subtitle: string
  audioUrl: string
  backgroundImage: string
  content: string
  translation: string
  words: Word[]
}

export interface Part {
  id: string
  title: string
  description: string
  sections: Section[]
}

// 模拟音频URL（实际项目中需要替换为真实音频）
const MOCK_AUDIO = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

// 模拟背景图片
const MOCK_IMAGES = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800'
]

export const mockParts: Part[] = [
  {
    id: 'part1',
    title: 'Part 1',
    description: '基础词汇 - 日常生活场景',
    sections: [
      {
        id: 'section1-1',
        title: 'The Morning Routine',
        subtitle: '早晨的日常',
        audioUrl: MOCK_AUDIO,
        backgroundImage: MOCK_IMAGES[0],
        content: `Every morning, Sarah wakes up at 6 AM. She has a rigorous routine that helps her maintain her productivity throughout the day. First, she meditates for 15 minutes to enhance her mental clarity. Then, she goes for a brisk walk in the nearby park, where the serene environment helps her contemplate the day ahead.`,
        translation: `每天早上，萨拉在6点钟醒来。她有一套严格的日常程序，帮助她保持一整天的工作效率。首先，她冥想15分钟来增强思维清晰度。然后，她在附近的公园进行快步走，那里宁静的环境帮助她思考即将到来的一天。`,
        words: [
          {
            id: 'w1',
            word: 'rigorous',
            phonetic: '/ˈrɪɡərəs/',
            meaning: 'adj. 严格的，严厉的',
            example: 'The training program is rigorous but effective.'
          },
          {
            id: 'w2',
            word: 'productivity',
            phonetic: '/ˌprɒdʌkˈtɪvəti/',
            meaning: 'n. 生产力，工作效率',
            example: 'Working from home increased her productivity.'
          },
          {
            id: 'w3',
            word: 'meditate',
            phonetic: '/ˈmedɪteɪt/',
            meaning: 'v. 冥想，沉思',
            example: 'I meditate every morning to reduce stress.'
          },
          {
            id: 'w4',
            word: 'enhance',
            phonetic: '/ɪnˈhɑːns/',
            meaning: 'v. 提高，增强',
            example: 'The new software will enhance our capabilities.'
          },
          {
            id: 'w5',
            word: 'serene',
            phonetic: '/səˈriːn/',
            meaning: 'adj. 宁静的，平静的',
            example: 'The lake was serene in the early morning.'
          },
          {
            id: 'w6',
            word: 'contemplate',
            phonetic: '/ˈkɒntəmpleɪt/',
            meaning: 'v. 沉思，考虑',
            example: 'She sat by the window contemplating her future.'
          }
        ]
      },
      {
        id: 'section1-2',
        title: 'The Busy Office',
        subtitle: '忙碌的办公室',
        audioUrl: MOCK_AUDIO,
        backgroundImage: MOCK_IMAGES[1],
        content: `The office was bustling with activity. Colleagues were collaborating on various projects, demonstrating remarkable efficiency. The manager emphasized the importance of meeting deadlines while maintaining quality. Despite the pressure, the team remained cohesive and supportive of each other.`,
        translation: `办公室里一片繁忙景象。同事们正在合作处理各种项目，展现出非凡的效率。经理强调了在保持质量的同时完成截止日期的重要性。尽管压力很大，团队仍然保持团结和相互支持。`,
        words: [
          {
            id: 'w7',
            word: 'bustling',
            phonetic: '/ˈbʌslɪŋ/',
            meaning: 'adj. 熙熙攘攘的，忙碌的',
            example: 'The market was bustling with shoppers.'
          },
          {
            id: 'w8',
            word: 'collaborate',
            phonetic: '/kəˈlæbəreɪt/',
            meaning: 'v. 合作，协作',
            example: 'We collaborated with other teams on the project.'
          },
          {
            id: 'w9',
            word: 'remarkable',
            phonetic: '/rɪˈmɑːkəbl/',
            meaning: 'adj. 非凡的，显著的',
            example: 'She made remarkable progress in her studies.'
          },
          {
            id: 'w10',
            word: 'efficiency',
            phonetic: '/ɪˈfɪʃnsi/',
            meaning: 'n. 效率，效能',
            example: 'We need to improve the efficiency of our processes.'
          },
          {
            id: 'w11',
            word: 'emphasize',
            phonetic: '/ˈemfəsaɪz/',
            meaning: 'v. 强调，着重',
            example: 'The teacher emphasized the importance of practice.'
          },
          {
            id: 'w12',
            word: 'cohesive',
            phonetic: '/kəʊˈhiːsɪv/',
            meaning: 'adj. 有凝聚力的，团结的',
            example: 'A cohesive team achieves better results.'
          }
        ]
      },
      {
        id: 'section1-3',
        title: 'Weekend Adventures',
        subtitle: '周末冒险',
        audioUrl: MOCK_AUDIO,
        backgroundImage: MOCK_IMAGES[2],
        content: `Tom decided to explore the countryside during the weekend. The landscape was breathtaking, with rolling hills and pristine streams. He encountered various wildlife and felt a profound connection with nature. This excursion rejuvenated his spirit and provided much-needed respite from urban life.`,
        translation: `汤姆决定在周末探索乡村。那里的风景令人叹为观止，有连绵起伏的山丘和清澈的溪流。他遇到了各种野生动物，感受到与大自然深深的联系。这次郊游振奋了他的精神，为他提供了急需的远离都市生活的休息。`,
        words: [
          {
            id: 'w13',
            word: 'breathtaking',
            phonetic: '/ˈbreθteɪkɪŋ/',
            meaning: 'adj. 令人惊叹的，惊人的',
            example: 'The view from the mountain was breathtaking.'
          },
          {
            id: 'w14',
            word: 'pristine',
            phonetic: '/ˈprɪstiːn/',
            meaning: 'adj. 原始的，纯净的',
            example: 'The beach was pristine and untouched.'
          },
          {
            id: 'w15',
            word: 'encounter',
            phonetic: '/ɪnˈkaʊntər/',
            meaning: 'v. 遇到，遭遇',
            example: 'We encountered several obstacles during our journey.'
          },
          {
            id: 'w16',
            word: 'profound',
            phonetic: '/prəˈfaʊnd/',
            meaning: 'adj. 深刻的，意义深远的',
            example: 'The book had a profound impact on me.'
          },
          {
            id: 'w17',
            word: 'rejuvenate',
            phonetic: '/rɪˈdʒuːvəneɪt/',
            meaning: 'v. 使恢复活力，使年轻',
            example: 'A good vacation can rejuvenate your mind.'
          },
          {
            id: 'w18',
            word: 'respite',
            phonetic: '/ˈrespaɪt/',
            meaning: 'n. 暂缓，休息',
            example: 'The weekend provided a welcome respite.'
          }
        ]
      }
    ]
  },
  {
    id: 'part2',
    title: 'Part 2',
    description: '进阶词汇 - 学术与社会话题',
    sections: [
      {
        id: 'section2-1',
        title: 'Climate Change Debate',
        subtitle: '气候变化辩论',
        audioUrl: MOCK_AUDIO,
        backgroundImage: MOCK_IMAGES[3],
        content: `The symposium on climate change brought together scientists from around the globe. They presented compelling evidence about the deteriorating state of our environment. The consensus was that immediate action is imperative to mitigate the adverse effects. Some proposed innovative solutions while others advocated for stricter regulations.`,
        translation: `这场关于气候变化的研讨会聚集了来自世界各地的科学家。他们展示了关于我们环境恶化状态的有力证据。共识是立即采取行动以减轻不利影响是必要的。一些人提出了创新解决方案，而另一些人则主张实施更严格的法规。`,
        words: [
          {
            id: 'w19',
            word: 'symposium',
            phonetic: '/sɪmˈpəʊziəm/',
            meaning: 'n. 研讨会，座谈会',
            example: 'The medical symposium attracted many experts.'
          },
          {
            id: 'w20',
            word: 'compelling',
            phonetic: '/kəmˈpelɪŋ/',
            meaning: 'adj. 令人信服的，引人注目的',
            example: 'The lawyer presented a compelling argument.'
          },
          {
            id: 'w21',
            word: 'deteriorating',
            phonetic: '/dɪˈtɪəriəreɪtɪŋ/',
            meaning: 'adj. 恶化的，变坏的',
            example: 'The patient\'s health was deteriorating rapidly.'
          },
          {
            id: 'w22',
            word: 'consensus',
            phonetic: '/kənˈsensəs/',
            meaning: 'n. 共识，一致意见',
            example: 'The committee reached a consensus on the issue.'
          },
          {
            id: 'w23',
            word: 'imperative',
            phonetic: '/ɪmˈperətɪv/',
            meaning: 'adj. 必要的，紧迫的',
            example: 'It is imperative that we act now.'
          },
          {
            id: 'w24',
            word: 'mitigate',
            phonetic: '/ˈmɪtɪɡeɪt/',
            meaning: 'v. 减轻，缓和',
            example: 'Measures were taken to mitigate the damage.'
          }
        ]
      },
      {
        id: 'section2-2',
        title: 'Technology Revolution',
        subtitle: '科技革命',
        audioUrl: MOCK_AUDIO,
        backgroundImage: MOCK_IMAGES[4],
        content: `The digital transformation has revolutionized every aspect of modern society. Artificial intelligence is no longer a futuristic concept but a tangible reality that permeates our daily lives. While skeptics raise concerns about privacy and employment, proponents argue that the benefits far outweigh the potential drawbacks.`,
        translation: `数字化转型已经彻底改变了现代社会的方方面面。人工智能不再是一个未来主义的概念，而是渗透在我们日常生活中的切实现实。虽然怀疑论者对隐私和就业提出担忧，但支持者认为好处远远超过潜在的缺点。`,
        words: [
          {
            id: 'w25',
            word: 'revolutionize',
            phonetic: '/ˌrevəˈluːʃənaɪz/',
            meaning: 'v. 彻底改变，革新',
            example: 'The internet revolutionized communication.'
          },
          {
            id: 'w26',
            word: 'tangible',
            phonetic: '/ˈtændʒəbl/',
            meaning: 'adj. 有形的，切实的',
            example: 'We need tangible evidence to support this claim.'
          },
          {
            id: 'w27',
            word: 'permeate',
            phonetic: '/ˈpɜːmieɪt/',
            meaning: 'v. 渗透，弥漫',
            example: 'The smell of coffee permeated the room.'
          },
          {
            id: 'w28',
            word: 'skeptic',
            phonetic: '/ˈskeptɪk/',
            meaning: 'n. 怀疑论者',
            example: 'Even the skeptics were impressed by the results.'
          },
          {
            id: 'w29',
            word: 'proponent',
            phonetic: '/prəˈpəʊnənt/',
            meaning: 'n. 支持者，倡导者',
            example: 'She is a proponent of renewable energy.'
          },
          {
            id: 'w30',
            word: 'outweigh',
            phonetic: '/ˌaʊtˈweɪ/',
            meaning: 'v. 超过，重于',
            example: 'The advantages outweigh the disadvantages.'
          }
        ]
      }
    ]
  },
  {
    id: 'part3',
    title: 'Part 3',
    description: '高级词汇 - 抽象概念与哲学思考',
    sections: [
      {
        id: 'section3-1',
        title: 'Philosophy of Life',
        subtitle: '人生哲学',
        audioUrl: MOCK_AUDIO,
        backgroundImage: MOCK_IMAGES[5],
        content: `The pursuit of happiness is a ubiquitous theme in human existence. Philosophers throughout history have grappled with questions about the meaning of life and the nature of fulfillment. Some advocate for hedonistic pleasures, while others endorse a more ascetic lifestyle. Ultimately, each individual must embark on their own journey of self-discovery.`,
        translation: `追求幸福是人类存在中无处不在的主题。历史上的哲学家们一直在努力解答关于人生意义和满足本质的问题。一些人主张享乐主义的乐趣，而另一些人则认可更为禁欲的生活方式。最终，每个人都必须踏上自己的自我发现之旅。`,
        words: [
          {
            id: 'w31',
            word: 'ubiquitous',
            phonetic: '/juːˈbɪkwɪtəs/',
            meaning: 'adj. 无处不在的，普遍的',
            example: 'Smartphones have become ubiquitous in modern society.'
          },
          {
            id: 'w32',
            word: 'grapple',
            phonetic: '/ˈɡræpl/',
            meaning: 'v. 努力解决，搏斗',
            example: 'Scientists grapple with complex problems daily.'
          },
          {
            id: 'w33',
            word: 'fulfillment',
            phonetic: '/fʊlˈfɪlmənt/',
            meaning: 'n. 满足，实现',
            example: 'She found fulfillment in helping others.'
          },
          {
            id: 'w34',
            word: 'hedonistic',
            phonetic: '/ˌhiːdəˈnɪstɪk/',
            meaning: 'adj. 享乐主义的',
            example: 'He rejected the hedonistic lifestyle.'
          },
          {
            id: 'w35',
            word: 'ascetic',
            phonetic: '/əˈsetɪk/',
            meaning: 'adj. 禁欲的，苦行的',
            example: 'The monk led an ascetic life.'
          },
          {
            id: 'w36',
            word: 'embark',
            phonetic: '/ɪmˈbɑːk/',
            meaning: 'v. 开始，着手',
            example: 'She embarked on a new career in technology.'
          }
        ]
      },
      {
        id: 'section3-2',
        title: 'Art and Expression',
        subtitle: '艺术与表达',
        audioUrl: MOCK_AUDIO,
        backgroundImage: MOCK_IMAGES[0],
        content: `Art serves as a conduit for human emotions and ideas. Throughout civilizations, artists have endeavored to capture the ephemeral beauty of life. Their works often transcend cultural boundaries, speaking to universal human experiences. The aesthetic appeal of art lies not merely in its visual splendor but in its ability to evoke profound emotional responses.`,
        translation: `艺术是人类情感和思想的导管。在各个文明中，艺术家们都努力捕捉生命中短暂的美。他们的作品常常超越文化界限，讲述普遍的人类经历。艺术的美学吸引力不仅在于其视觉壮丽，还在于它唤起深刻情感反应的能力。`,
        words: [
          {
            id: 'w37',
            word: 'conduit',
            phonetic: '/ˈkɒndjuɪt/',
            meaning: 'n. 导管，渠道',
            example: 'Music is a conduit for expressing emotions.'
          },
          {
            id: 'w38',
            word: 'endeavor',
            phonetic: '/ɪnˈdevər/',
            meaning: 'v. 努力，尽力',
            example: 'We will endeavor to meet your expectations.'
          },
          {
            id: 'w39',
            word: 'ephemeral',
            phonetic: '/ɪˈfemərəl/',
            meaning: 'adj. 短暂的，转瞬即逝的',
            example: 'Fame can be ephemeral in the entertainment industry.'
          },
          {
            id: 'w40',
            word: 'transcend',
            phonetic: '/trænˈsend/',
            meaning: 'v. 超越，胜过',
            example: 'Great music transcends cultural boundaries.'
          },
          {
            id: 'w41',
            word: 'aesthetic',
            phonetic: '/esˈθetɪk/',
            meaning: 'adj. 美学的，审美的',
            example: 'The building has great aesthetic appeal.'
          },
          {
            id: 'w42',
            word: 'evoke',
            phonetic: '/ɪˈvəʊk/',
            meaning: 'v. 唤起，引起',
            example: 'The song evoked memories of my childhood.'
          }
        ]
      }
    ]
  }
]

// 获取所有部分
export const getAllParts = () => mockParts

// 根据ID获取Part
export const getPartById = (partId: string) => 
  mockParts.find(part => part.id === partId)

// 根据ID获取Section
export const getSectionById = (sectionId: string) => {
  for (const part of mockParts) {
    const section = part.sections.find(s => s.id === sectionId)
    if (section) return section
  }
  return null
}

