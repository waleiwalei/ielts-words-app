// 雅思背单词故事数据 - 林远的故事

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
  content: string      // 英文内容（带重点词标记）
  translation: string  // 中文翻译（带重点词标记）
  words: Word[]
}

export interface Part {
  id: string
  title: string
  description: string
  sections: Section[]
}

// 背景图片 - 与标题内容相关
const SECTION_IMAGES = {
  // 山与天空 - 壮观的山峰和天空
  mountainAndSky: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
  // 暴风雨 - 闪电和暴风雨场景
  storm: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800',
  // 家乡的水 - 宁静的河流和水景
  watersOfHome: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
  // 奶奶的草药园 - 草药和花园
  herbGarden: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
  // 森林课堂 - 森林场景
  forestClassroom: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800'
}

export const mockParts: Part[] = [
  {
    id: 'part1',
    title: 'Part 1',
    description: '林远的童年 - 山村与自然',
    sections: [
      {
        id: 'section1-1',
        title: 'The Mountain and the Sky',
        subtitle: '山与天空',
        audioUrl: '/assets/audio/section-1.1.mp3',
        backgroundImage: SECTION_IMAGES.mountainAndSky,
        content: `The Mountain and the Sky

Time: Summer, 2002
Place: A village in Yunnan, China
Lin Yuan's Age: 7

That summer was exceptionally hot. Lin Yuan followed his grandfather up Laojun Mountain behind their village. It was his first time reaching such a high [altitude]. Standing at the summit, he gazed at the distant [horizon] stretching endlessly before him.

His grandfather pointed to the sky. "This layer of air above us is called the [atmosphere]. It contains the [oxygen] we breathe, along with [carbon dioxide] and traces of [hydrogen]."

"What's below the ground?" Lin Yuan asked.

Grandfather squatted down and drew a circle in the dirt. "The Earth is like an egg. The outer shell is the [crust]. Below that is the [mantle], hot as [magma]. At the center lies the [core]."

He explained that the Earth was divided by lines of [longitude] and [latitude], with the [equator] circling its middle. "We live on the [lithosphere], surrounded by the [hydrosphere] — all the water on Earth."

Lin Yuan picked up a smooth [pebble] and a piece of rough [granite]. He noticed some sparkling [quartz] and even found what looked like [ore] containing [mineral] deposits. Grandfather said the [marble] in the village temple came from these very mountains.

Suddenly, a [gust] of wind swept through, followed by a gentle [breeze]. "The [monsoon] season is coming," Grandfather said. "We might see a [gale] or even a [typhoon] this year. Last year, a [tornado] touched down in the valley."

Dark clouds gathered. Lin Yuan learned that day that mountain [weather] could change in an instant.`,
        translation: `山与天空

时间：2002年夏天
地点：中国云南某山村
林远年龄：7岁

那年夏天特别热。林远跟着爷爷爬上村后的老君山，这是他第一次登上这么高的【海拔】(altitude)。站在山顶，他看到远处的【地平线】(horizon)一望无际。

爷爷指着天空说："我们头顶的这层空气叫做【大气层】(atmosphere)。里面有我们呼吸的【氧气】(oxygen)，还有【二氧化碳】(carbon dioxide)和少量的【氢气】(hydrogen)。"

"那地下面是什么？"林远问。

爷爷蹲下来在地上画了一个圆："地球就像一个鸡蛋。最外面是【地壳】(crust)，下面是【地幔】(mantle)，热得像【岩浆】(magma)。最中间是【地核】(core)。"

他解释说，地球被【经度】(longitude)和【纬度】(latitude)线划分，【赤道】(equator)环绕中间。"我们住在【岩石圈】(lithosphere)上，周围是【水圈】(hydrosphere)——地球上所有的水。"

林远捡起一块光滑的【鹅卵石】(pebble)和一块粗糙的【花岗岩】(granite)。他注意到一些闪闪发光的【石英】(quartz)，甚至找到了看起来含有【矿物】(mineral)沉积的【矿石】(ore)。爷爷说村里庙宇的【大理石】(marble)就来自这些山。

突然，一阵【狂风】(gust)刮过，随后是轻柔的【微风】(breeze)。"【季风】(monsoon)季节要来了，"爷爷说，"今年可能会有【大风】(gale)甚至【台风】(typhoon)。去年山谷里还下过【龙卷风】(tornado)。"

乌云聚集。林远那天学到，山里的【天气】(weather)变化无常。`,
        words: [
          { id: 'w1-1', word: 'atmosphere', phonetic: '/ˈætməsfɪə/', meaning: 'n. 大气层, 大气圈; 气氛', example: 'The Earth\'s atmosphere protects us from harmful radiation.' },
          { id: 'w1-2', word: 'hydrosphere', phonetic: '/ˈhaɪdrəsfɪə/', meaning: 'n. 水圈; 大气中的水气', example: 'The hydrosphere includes all water on Earth.' },
          { id: 'w1-3', word: 'lithosphere', phonetic: '/ˈlɪθəsfɪə/', meaning: 'n. 岩石圈', example: 'We live on the lithosphere.' },
          { id: 'w1-4', word: 'oxygen', phonetic: '/ˈɒksɪdʒən/', meaning: 'n. 氧气', example: 'Plants produce oxygen through photosynthesis.' },
          { id: 'w1-5', word: 'oxide', phonetic: '/ˈɒksaɪd/', meaning: 'n. 氧化物', example: 'Rust is iron oxide.' },
          { id: 'w1-6', word: 'carbon dioxide', phonetic: '/ˌkɑːbən daɪˈɒksaɪd/', meaning: 'n. 二氧化碳', example: 'Trees absorb carbon dioxide from the air.' },
          { id: 'w1-7', word: 'hydrogen', phonetic: '/ˈhaɪdrədʒən/', meaning: 'n. 氢气', example: 'Water is made of hydrogen and oxygen.' },
          { id: 'w1-8', word: 'core', phonetic: '/kɔː/', meaning: 'n. 中心, 核心; 地核', example: 'The Earth\'s core is extremely hot.' },
          { id: 'w1-9', word: 'crust', phonetic: '/krʌst/', meaning: 'n. 地壳; 外壳', example: 'The Earth\'s crust is relatively thin.' },
          { id: 'w1-10', word: 'mantle', phonetic: '/ˈmæntl/', meaning: 'n. 地幔; 斗篷, 披风', example: 'The mantle lies between the crust and the core.' },
          { id: 'w1-11', word: 'longitude', phonetic: '/ˈlɒŋɡɪtjuːd/', meaning: 'n. 经度', example: 'Lines of longitude run from pole to pole.' },
          { id: 'w1-12', word: 'latitude', phonetic: '/ˈlætɪtjuːd/', meaning: 'n. 纬度', example: 'The equator is at zero degrees latitude.' },
          { id: 'w1-13', word: 'horizon', phonetic: '/həˈraɪzn/', meaning: 'n. 地平线; 眼界, 见识', example: 'The sun set below the horizon.' },
          { id: 'w1-14', word: 'altitude', phonetic: '/ˈæltɪtjuːd/', meaning: 'n. 高度, 海拔', example: 'The plane reached an altitude of 30,000 feet.' },
          { id: 'w1-15', word: 'disaster', phonetic: '/dɪˈzɑːstə/', meaning: 'n. 灾难', example: 'The earthquake was a major disaster.' },
          { id: 'w1-16', word: 'mishap', phonetic: '/ˈmɪshæp/', meaning: 'n. 小灾难', example: 'The trip was full of mishaps.' },
          { id: 'w1-17', word: 'catastrophic', phonetic: '/ˌkætəˈstrɒfɪk/', meaning: 'adj. 灾难性的', example: 'The flood had catastrophic consequences.' },
          { id: 'w1-18', word: 'calamity', phonetic: '/kəˈlæmɪti/', meaning: 'n. 灾难, 不幸的事', example: 'War brings calamity to innocent people.' },
          { id: 'w1-19', word: 'endanger', phonetic: '/ɪnˈdeɪndʒə/', meaning: 'v. 使遭受危险, 危及', example: 'Pollution endangers wildlife.' },
          { id: 'w1-20', word: 'jeopardise', phonetic: '/ˈdʒepədaɪz/', meaning: 'v. 危害, 危及', example: 'His actions could jeopardise the mission.' },
          { id: 'w1-21', word: 'destructive', phonetic: '/dɪˈstrʌktɪv/', meaning: 'adj. 破坏性的, 有害的', example: 'The hurricane was extremely destructive.' },
          { id: 'w1-22', word: 'El Nino', phonetic: '/el ˈniːnjəʊ/', meaning: 'n. 厄尔尼诺现象', example: 'El Nino affects global weather patterns.' },
          { id: 'w1-23', word: 'greenhouse', phonetic: '/ˈɡriːnhaʊs/', meaning: 'n. 温室, 暖房', example: 'We grow tomatoes in the greenhouse.' },
          { id: 'w1-24', word: 'phenomenon', phonetic: '/fɪˈnɒmɪnən/', meaning: 'n. 现象', example: 'Lightning is a natural phenomenon.' },
          { id: 'w1-25', word: 'pebble', phonetic: '/ˈpebl/', meaning: 'n. 鹅卵石', example: 'The beach was covered with smooth pebbles.' },
          { id: 'w1-26', word: 'magnet', phonetic: '/ˈmæɡnɪt/', meaning: 'n. 磁铁, 吸铁石', example: 'A magnet attracts iron.' },
          { id: 'w1-27', word: 'ore', phonetic: '/ɔː/', meaning: 'n. 矿石; 矿', example: 'Iron ore is mined in this region.' },
          { id: 'w1-28', word: 'mineral', phonetic: '/ˈmɪnərəl/', meaning: 'n. 矿物, 矿物质', example: 'The rock contains valuable minerals.' },
          { id: 'w1-29', word: 'marble', phonetic: '/ˈmɑːbl/', meaning: 'n. 大理石', example: 'The statue is made of white marble.' },
          { id: 'w1-30', word: 'quartz', phonetic: '/kwɔːts/', meaning: 'n. 石英', example: 'Quartz is a common mineral.' },
          { id: 'w1-31', word: 'granite', phonetic: '/ˈɡrænɪt/', meaning: 'n. 花岗岩', example: 'The countertop is made of granite.' },
          { id: 'w1-32', word: 'gust', phonetic: '/ɡʌst/', meaning: 'n. 一阵狂风', example: 'A gust of wind blew my hat away.' },
          { id: 'w1-33', word: 'breeze', phonetic: '/briːz/', meaning: 'n. 微风, 和风', example: 'A cool breeze came from the sea.' },
          { id: 'w1-34', word: 'monsoon', phonetic: '/mɒnˈsuːn/', meaning: 'n. 季风; 雨季', example: 'The monsoon brings heavy rainfall.' },
          { id: 'w1-35', word: 'gale', phonetic: '/ɡeɪl/', meaning: 'n. 大风', example: 'The ship was caught in a gale.' },
          { id: 'w1-36', word: 'hurricane', phonetic: '/ˈhʌrɪkən/', meaning: 'n. 飓风', example: 'The hurricane caused widespread damage.' },
          { id: 'w1-37', word: 'tornado', phonetic: '/tɔːˈneɪdəʊ/', meaning: 'n. 龙卷风', example: 'The tornado destroyed several houses.' },
          { id: 'w1-38', word: 'typhoon', phonetic: '/taɪˈfuːn/', meaning: 'n. 台风', example: 'The typhoon hit the coast yesterday.' },
          { id: 'w1-39', word: 'volcano', phonetic: '/vɒlˈkeɪnəʊ/', meaning: 'n. 火山', example: 'The volcano erupted without warning.' },
          { id: 'w1-40', word: 'erupt', phonetic: '/ɪˈrʌpt/', meaning: 'v. 爆发, 喷发', example: 'The volcano could erupt at any time.' },
          { id: 'w1-41', word: 'magma', phonetic: '/ˈmæɡmə/', meaning: 'n. 岩浆', example: 'Magma flows beneath the Earth\'s surface.' },
          { id: 'w1-42', word: 'thermodynamic', phonetic: '/ˌθɜːməʊdaɪˈnæmɪk/', meaning: 'adj. 热力的', example: 'Thermodynamic processes generate heat.' },
          { id: 'w1-43', word: 'smog', phonetic: '/smɒɡ/', meaning: 'n. 烟雾, 雾霾', example: 'The city is covered in smog.' },
          { id: 'w1-44', word: 'fume', phonetic: '/fjuːm/', meaning: 'n. 烟, 气体', example: 'Toxic fumes filled the room.' },
          { id: 'w1-45', word: 'mist', phonetic: '/mɪst/', meaning: 'n. 薄雾', example: 'The valley was covered in mist.' },
          { id: 'w1-46', word: 'tsunami', phonetic: '/tsuːˈnɑːmi/', meaning: 'n. 海啸', example: 'The earthquake triggered a tsunami.' },
          { id: 'w1-47', word: 'drought', phonetic: '/draʊt/', meaning: 'n. 干旱, 旱灾', example: 'The drought lasted for three years.' },
          { id: 'w1-48', word: 'flooding', phonetic: '/ˈflʌdɪŋ/', meaning: 'n. 洪水泛滥', example: 'Heavy rain caused severe flooding.' },
          { id: 'w1-49', word: 'torrent', phonetic: '/ˈtɒrənt/', meaning: 'n. 激流, 洪流', example: 'A torrent of water rushed down the hill.' },
          { id: 'w1-50', word: 'earthquake', phonetic: '/ˈɜːθkweɪk/', meaning: 'n. 地震', example: 'The earthquake measured 7.0 on the scale.' },
          { id: 'w1-51', word: 'seismic', phonetic: '/ˈsaɪzmɪk/', meaning: 'adj. 地震的', example: 'Seismic activity was detected yesterday.' },
          { id: 'w1-52', word: 'avalanche', phonetic: '/ˈævəlɑːnʃ/', meaning: 'n. 雪崩', example: 'The avalanche buried the village.' },
          { id: 'w1-53', word: 'terrain', phonetic: '/təˈreɪn/', meaning: 'n. 地形', example: 'The terrain was rough and mountainous.' },
          { id: 'w1-54', word: 'landscape', phonetic: '/ˈlændskeɪp/', meaning: 'n. 风景, 地貌', example: 'The landscape was breathtaking.' },
          { id: 'w1-55', word: 'continent', phonetic: '/ˈkɒntɪnənt/', meaning: 'n. 大陆; 洲', example: 'Asia is the largest continent.' },
          { id: 'w1-56', word: 'cave', phonetic: '/keɪv/', meaning: 'n. 洞穴, 山洞', example: 'We explored the cave.' },
          { id: 'w1-57', word: 'cliff', phonetic: '/klɪf/', meaning: 'n. 悬崖, 峭壁', example: 'The cliff overlooks the ocean.' },
          { id: 'w1-58', word: 'glacier', phonetic: '/ˈɡlæsiə/', meaning: 'n. 冰川, 冰河', example: 'The glacier is slowly melting.' },
          { id: 'w1-59', word: 'swamp', phonetic: '/swɒmp/', meaning: 'n. 沼泽, 湿地', example: 'Alligators live in the swamp.' },
          { id: 'w1-60', word: 'delta', phonetic: '/ˈdeltə/', meaning: 'n. 三角洲', example: 'The Nile delta is very fertile.' },
          { id: 'w1-61', word: 'plain', phonetic: '/pleɪn/', meaning: 'n. 平原', example: 'The plain stretches for miles.' },
          { id: 'w1-62', word: 'plateau', phonetic: '/ˈplætəʊ/', meaning: 'n. 高原', example: 'Tibet is a high plateau.' },
          { id: 'w1-63', word: 'oasis', phonetic: '/əʊˈeɪsɪs/', meaning: 'n. 绿洲', example: 'The oasis provided water in the desert.' },
          { id: 'w1-64', word: 'globe', phonetic: '/ɡləʊb/', meaning: 'n. 球体; 地球仪', example: 'We studied the globe in geography class.' },
          { id: 'w1-65', word: 'hemisphere', phonetic: '/ˈhemɪsfɪə/', meaning: 'n. 半球', example: 'Australia is in the southern hemisphere.' },
          { id: 'w1-66', word: 'equator', phonetic: '/ɪˈkweɪtə/', meaning: 'n. 赤道', example: 'The equator divides Earth into two hemispheres.' },
          { id: 'w1-67', word: 'arctic', phonetic: '/ˈɑːktɪk/', meaning: 'adj. 极冷的; 北极的', example: 'Arctic temperatures can be deadly.' },
          { id: 'w1-68', word: 'Antarctic', phonetic: '/æntˈɑːktɪk/', meaning: 'adj. 南极的', example: 'Antarctic ice is melting.' },
          { id: 'w1-69', word: 'pole', phonetic: '/pəʊl/', meaning: 'n. 极', example: 'The North Pole is covered in ice.' },
          { id: 'w1-70', word: 'polar', phonetic: '/ˈpəʊlə/', meaning: 'adj. 极地的', example: 'Polar bears live in the Arctic.' },
          { id: 'w1-71', word: 'axis', phonetic: '/ˈæksɪs/', meaning: 'n. 轴, 轴线', example: 'The Earth rotates on its axis.' },
          { id: 'w1-72', word: 'deteriorate', phonetic: '/dɪˈtɪəriəreɪt/', meaning: 'v. 变坏, 恶化', example: 'The weather continued to deteriorate.' },
          { id: 'w1-73', word: 'aggravate', phonetic: '/ˈæɡrəveɪt/', meaning: 'v. 加重, 加剧', example: 'Stress can aggravate health problems.' },
          { id: 'w1-74', word: 'degrade', phonetic: '/dɪˈɡreɪd/', meaning: 'v. 降解; 使恶化', example: 'Plastic takes years to degrade.' },
          { id: 'w1-75', word: 'upgrade', phonetic: '/ʌpˈɡreɪd/', meaning: 'v. 使升级; 改善', example: 'We need to upgrade our equipment.' },
          { id: 'w1-76', word: 'erode', phonetic: '/ɪˈrəʊd/', meaning: 'v. 侵蚀, 腐蚀', example: 'Wind and rain erode the rocks.' },
          { id: 'w1-77', word: 'weather', phonetic: '/ˈweðə/', meaning: 'n. 天气', example: 'The weather is nice today.' },
          { id: 'w1-78', word: 'meteorology', phonetic: '/ˌmiːtiəˈrɒlədʒi/', meaning: 'n. 气象学', example: 'She studied meteorology at university.' }
        ]
      },
      {
        id: 'section1-2',
        title: 'The Storm',
        subtitle: '暴风雨',
        audioUrl: '/assets/audio/section-1.2.mp3',
        backgroundImage: SECTION_IMAGES.storm,
        content: `The Storm

Time: August, 2002
Place: Yunnan village
Lin Yuan's Age: 7

The [disaster] came without warning. One night, the sky turned an ominous color, and the wind howled like a wounded beast. What started as a minor [mishap] — a tree falling on the village road — quickly escalated into a [catastrophic] event.

The [volcano] on the distant mountain, which everyone thought was dormant, began to [erupt]. [Smog] filled the air, and poisonous [fumes] made breathing difficult. A thick [mist] descended on the valley.

"This is a [calamity]!" Grandfather shouted. "The [earthquake] has triggered it!"

The ground shook with [seismic] activity. Lin Yuan felt the [thermodynamic] heat rising from the earth. [Flooding] began as the river swelled into a [torrent]. The villagers feared a [tsunami] might reach them from the coast.

Years of [drought] had [degraded] the soil, and now it couldn't absorb the sudden rain. The conditions continued to [deteriorate] and [aggravate] the situation. The [destructive] force of nature could [endanger] and [jeopardise] everything they had built.

Lin Yuan watched as water [eroded] the hillside. This was no ordinary storm — it was a demonstration of the [El Nino] [phenomenon]. Climate change had turned their peaceful [greenhouse] of a valley into a disaster zone.

An [avalanche] of mud slid down from the [cliff] above the village. The [terrain] changed overnight. What was once a gentle [landscape] now looked like a war zone.

But the villagers didn't give up. They worked together to [upgrade] their defenses, building barriers to redirect the water. Lin Yuan learned that day that humans could fight back against nature's fury.`,
        translation: `暴风雨

时间：2002年8月
地点：云南山村
林远年龄：7岁

【灾难】(disaster)来得毫无预兆。一天夜里，天空变成了不祥的颜色，狂风像受伤的野兽一样嚎叫。一开始只是个【小灾难】(mishap)——一棵树倒在村路上——很快演变成了【灾难性的】(catastrophic)事件。

远山上那座大家都以为休眠的【火山】(volcano)开始【喷发】(erupt)。【烟雾】(smog)弥漫在空气中，有毒的【烟气】(fume)让人难以呼吸。浓厚的【薄雾】(mist)笼罩了山谷。

"这是一场【大灾难】(calamity)！"爷爷喊道，"【地震】(earthquake)引发的！"

大地因【地震】(seismic)活动而颤抖。林远感受到从地底升起的【热力】(thermodynamic)。河水暴涨成【激流】(torrent)，【洪水】(flooding)开始泛滥。村民们担心【海啸】(tsunami)会从海岸传来。

多年的【干旱】(drought)使土壤【退化】(degrade)，现在它无法吸收突然的降雨。情况持续【恶化】(deteriorate)并【加剧】(aggravate)。大自然【破坏性的】(destructive)力量可能【危及】(endanger)并【危害】(jeopardise)他们所建造的一切。

林远看着水流【侵蚀】(erode)山坡。这不是普通的暴风雨——这是【厄尔尼诺】(El Nino)【现象】(phenomenon)的展示。气候变化把他们宁静的【温室】(greenhouse)般的山谷变成了灾区。

一场泥石流从村子上方的【悬崖】(cliff)滑落。【地形】(terrain)一夜之间改变。曾经温和的【地貌】(landscape)现在看起来像战区。

但村民们没有放弃。他们齐心协力【升级】(upgrade)防御工事，建造屏障引导水流。林远那天学到，人类可以反击大自然的怒火。`,
        words: [
          { id: 'w2-1', word: 'Mediterranean', phonetic: '/ˌmedɪtəˈreɪniən/', meaning: 'adj. 地中海的', example: 'Mediterranean climate is mild and sunny.' },
          { id: 'w2-2', word: 'Atlantic', phonetic: '/ətˈlæntɪk/', meaning: 'adj. 大西洋的', example: 'We crossed the Atlantic Ocean.' },
          { id: 'w2-3', word: 'pacific', phonetic: '/pəˈsɪfɪk/', meaning: 'adj. 平静的; 太平洋的', example: 'The Pacific Ocean is the largest ocean.' },
          { id: 'w2-4', word: 'ocean', phonetic: '/ˈəʊʃn/', meaning: 'n. 海洋', example: 'The ocean is vast and deep.' },
          { id: 'w2-5', word: 'marine', phonetic: '/məˈriːn/', meaning: 'adj. 海生的, 海洋的', example: 'Marine life is diverse and beautiful.' },
          { id: 'w2-6', word: 'navigation', phonetic: '/ˌnævɪˈɡeɪʃn/', meaning: 'n. 航行; 航海', example: 'Navigation by stars was common in ancient times.' },
          { id: 'w2-7', word: 'gulf', phonetic: '/ɡʌlf/', meaning: 'n. 海湾', example: 'The Gulf of Mexico is warm.' },
          { id: 'w2-8', word: 'beach', phonetic: '/biːtʃ/', meaning: 'n. 海滩', example: 'We spent the day at the beach.' },
          { id: 'w2-9', word: 'coast', phonetic: '/kəʊst/', meaning: 'n. 海岸, 海滨', example: 'The coast is lined with hotels.' },
          { id: 'w2-10', word: 'shore', phonetic: '/ʃɔː/', meaning: 'n. 岸, 滨', example: 'We walked along the shore.' },
          { id: 'w2-11', word: 'tide', phonetic: '/taɪd/', meaning: 'n. 趋势, 潮流; 潮汐', example: 'The tide comes in twice a day.' },
          { id: 'w2-12', word: 'current', phonetic: '/ˈkʌrənt/', meaning: 'n. 水流; 电流; 趋向', example: 'The current was too strong to swim against.' },
          { id: 'w2-13', word: 'brook', phonetic: '/brʊk/', meaning: 'n. 小河, 溪', example: 'A small brook ran through the garden.' },
          { id: 'w2-14', word: 'stream', phonetic: '/striːm/', meaning: 'n. 小河, 溪; 流', example: 'We crossed the stream on stepping stones.' },
          { id: 'w2-15', word: 'source', phonetic: '/sɔːs/', meaning: 'n. 河的源头; 根源', example: 'The source of the river is in the mountains.' },
          { id: 'w2-16', word: 'shallow', phonetic: '/ˈʃæləʊ/', meaning: 'adj. 浅的; 肤浅的', example: 'The water is shallow here.' },
          { id: 'w2-17', word: 'superficial', phonetic: '/ˌsuːpəˈfɪʃl/', meaning: 'adj. 表皮的, 表层的', example: 'The wound was only superficial.' },
          { id: 'w2-18', word: 'flat', phonetic: '/flæt/', meaning: 'adj. 平坦的; 扁平的', example: 'The land is flat for miles.' },
          { id: 'w2-19', word: 'smooth', phonetic: '/smuːð/', meaning: 'adj. 光滑的; 平稳的', example: 'The stone was smooth to the touch.' },
          { id: 'w2-20', word: 'rough', phonetic: '/rʌf/', meaning: 'adj. 粗糙的; 粗略的', example: 'The bark felt rough.' },
          { id: 'w2-21', word: 'sandy', phonetic: '/ˈsændi/', meaning: 'adj. 铺满沙的', example: 'The sandy beach was warm.' },
          { id: 'w2-22', word: 'stony', phonetic: '/ˈstəʊni/', meaning: 'adj. 多石的', example: 'The path was stony and difficult to walk on.' },
          { id: 'w2-23', word: 'vertical', phonetic: '/ˈvɜːtɪkl/', meaning: 'adj. 垂直的, 直立的', example: 'The cliff was nearly vertical.' },
          { id: 'w2-24', word: 'steep', phonetic: '/stiːp/', meaning: 'adj. 陡峭的', example: 'The hill was too steep to climb.' },
          { id: 'w2-25', word: 'parallel', phonetic: '/ˈpærəlel/', meaning: 'adj. 平行的', example: 'The two lines are parallel.' },
          { id: 'w2-26', word: 'narrow', phonetic: '/ˈnærəʊ/', meaning: 'adj. 狭窄的', example: 'The passage was narrow and dark.' },
          { id: 'w2-27', word: 'Oceania', phonetic: '/ˌəʊsiˈɑːniə/', meaning: 'n. 大洋洲', example: 'Australia is part of Oceania.' },
          { id: 'w2-28', word: 'mainland', phonetic: '/ˈmeɪnlænd/', meaning: 'n. 大陆, 本土', example: 'The island is 50km from the mainland.' },
          { id: 'w2-29', word: 'peninsula', phonetic: '/pəˈnɪnsjələ/', meaning: 'n. 半岛', example: 'Italy is a peninsula.' },
          { id: 'w2-30', word: 'climate', phonetic: '/ˈklaɪmət/', meaning: 'n. 气候; 风气', example: 'The climate here is mild.' }
        ]
      },
      {
        id: 'section1-3',
        title: 'The Waters of Home',
        subtitle: '家乡的水',
        audioUrl: '/assets/audio/section-1.3.mp3',
        backgroundImage: SECTION_IMAGES.watersOfHome,
        content: `The Waters of Home

Time: Autumn, 2002
Place: Yunnan village
Lin Yuan's Age: 7

After the storm passed, Lin Yuan's grandfather took him to explore the changed [landscape]. They walked along the [brook] that had swelled into a proper [stream]. Grandfather explained that every river has a [source] — theirs came from a [glacier] high in the mountains.

"The water flows from the [plateau] down to the [plain]," Grandfather said, pointing to where the [delta] met the [swamp]. "Eventually, it reaches the [ocean]."

They stood on the [shore] watching the [tide] come in and go out. The [current] was strong near the [coast]. Lin Yuan dipped his feet in the [shallow] water near the [beach], feeling the [sandy] bottom give way to [stony] patches.

"See how [steep] that [cliff] is?" Grandfather pointed to a [vertical] rock face. "And look at those [parallel] lines in the stone — they show how the earth moved millions of years ago."

They discussed the world's great bodies of water: the [Mediterranean] Sea, the [Atlantic] and [Pacific] Oceans. Lin Yuan learned that their [continent] was connected to the [mainland] of Asia, and that far away was [Oceania], a region of islands.

"Some places are [arctic] cold," Grandfather explained, "like the [Antarctic] at the South [Pole]. The [polar] regions have a completely different [climate]."

Lin Yuan found a [cave] entrance near the [gulf]. Inside, the walls were [smooth] in some places and [rough] in others. The [flat] floor showed signs of ancient [marine] life — this cave had once been underwater!

"[Navigation] was how our ancestors explored the world," Grandfather said. "They sailed from [peninsula] to [peninsula], across [narrow] straits."

That day, Lin Yuan understood that water connected everything on their [globe], from the highest [hemisphere] to the lowest valley.`,
        translation: `家乡的水

时间：2002年秋天
地点：云南山村
林远年龄：7岁

暴风雨过后，爷爷带林远去探索变化了的【地貌】(landscape)。他们沿着已经涨成真正【溪流】(stream)的【小河】(brook)行走。爷爷解释说，每条河都有一个【源头】(source)——他们的源头来自高山上的【冰川】(glacier)。

"水从【高原】(plateau)流向【平原】(plain)，"爷爷指着【三角洲】(delta)与【沼泽】(swamp)相接的地方说，"最终，它流入【海洋】(ocean)。"

他们站在【岸边】(shore)看【潮汐】(tide)涨落。【海岸】(coast)附近的【水流】(current)很强。林远把脚伸进【海滩】(beach)附近的【浅水】(shallow)里，感受【沙质】(sandy)的底部变成【多石】(stony)的区域。

"看那【悬崖】(cliff)有多【陡峭】(steep)？"爷爷指着一面【垂直】(vertical)的岩壁说，"再看岩石上那些【平行】(parallel)的线——它们显示了数百万年前地球是如何移动的。"

他们讨论了世界上伟大的水域：【地中海】(Mediterranean)、【大西洋】(Atlantic)和【太平洋】(Pacific)。林远了解到他们的【大陆】(continent)与亚洲【大陆】(mainland)相连，而远处是【大洋洲】(Oceania)，一个岛屿区域。

"有些地方【极冷】(arctic)，"爷爷解释说，"比如南【极】(Pole)的【南极洲】(Antarctic)。【极地】(polar)地区有完全不同的【气候】(climate)。"

林远在【海湾】(gulf)附近发现了一个【洞穴】(cave)入口。里面，墙壁有些地方【光滑】(smooth)，有些地方【粗糙】(rough)。【平坦】(flat)的地面显示出古代【海洋】(marine)生物的迹象——这个洞穴曾经在水下！

"【航海】(navigation)是我们祖先探索世界的方式，"爷爷说，"他们从一个【半岛】(peninsula)航行到另一个，穿越【狭窄】(narrow)的海峡。"

那天，林远明白了水连接着【地球】(globe)上的一切，从最高的【半球】(hemisphere)到最低的山谷。`,
        words: [
          { id: 'w3-1', word: 'mild', phonetic: '/maɪld/', meaning: 'adj. 温和的; 不严重的', example: 'The winter here is mild.' },
          { id: 'w3-2', word: 'heating', phonetic: '/ˈhiːtɪŋ/', meaning: 'n. 供暖; 暖气装置', example: 'The heating system broke down.' },
          { id: 'w3-3', word: 'moderate', phonetic: '/ˈmɒdərət/', meaning: 'adj. 适度的; 温和的', example: 'Exercise at a moderate pace.' },
          { id: 'w3-4', word: 'warm', phonetic: '/wɔːm/', meaning: 'adj. 温暖的', example: 'The weather is warm today.' },
          { id: 'w3-5', word: 'thermal', phonetic: '/ˈθɜːml/', meaning: 'adj. 热量的', example: 'Thermal energy powers the plant.' },
          { id: 'w3-6', word: 'tropics', phonetic: '/ˈtrɒpɪks/', meaning: 'n. 热带地区', example: 'The tropics are near the equator.' },
          { id: 'w3-7', word: 'arid', phonetic: '/ˈærɪd/', meaning: 'adj. 干燥的, 干旱的', example: 'The desert is arid and hot.' },
          { id: 'w3-8', word: 'moist', phonetic: '/mɔɪst/', meaning: 'adj. 潮湿的, 湿润的', example: 'The air was moist and warm.' },
          { id: 'w3-9', word: 'damp', phonetic: '/dæmp/', meaning: 'adj. 潮湿的', example: 'The basement is damp.' },
          { id: 'w3-10', word: 'humid', phonetic: '/ˈhjuːmɪd/', meaning: 'adj. 潮湿的, 湿热的', example: 'The climate is humid in summer.' },
          { id: 'w3-11', word: 'snowy', phonetic: '/ˈsnəʊi/', meaning: 'adj. 下雪多的', example: 'It was a snowy winter.' },
          { id: 'w3-12', word: 'frost', phonetic: '/frɒst/', meaning: 'n. 霜; 霜冻', example: 'There was frost on the window.' },
          { id: 'w3-13', word: 'hail', phonetic: '/heɪl/', meaning: 'n. 雹, 冰雹', example: 'Hail damaged the crops.' },
          { id: 'w3-14', word: 'thaw', phonetic: '/θɔː/', meaning: 'v. 解冻, 融化', example: 'The snow began to thaw.' },
          { id: 'w3-15', word: 'chill', phonetic: '/tʃɪl/', meaning: 'n. 寒冷', example: 'There was a chill in the air.' },
          { id: 'w3-16', word: 'freeze', phonetic: '/friːz/', meaning: 'v. 结冰', example: 'Water will freeze at 0°C.' },
          { id: 'w3-17', word: 'frigid', phonetic: '/ˈfrɪdʒɪd/', meaning: 'adj. 寒冷的', example: 'The frigid wind cut through us.' },
          { id: 'w3-18', word: 'icy', phonetic: '/ˈaɪsi/', meaning: 'adj. 冰冷的', example: 'The roads were icy.' },
          { id: 'w3-19', word: 'chilly', phonetic: '/ˈtʃɪli/', meaning: 'adj. 寒冷的', example: 'It\'s chilly outside.' },
          { id: 'w3-20', word: 'frosty', phonetic: '/ˈfrɒsti/', meaning: 'adj. 结霜的', example: 'It was a frosty morning.' }
        ]
      },
      {
        id: 'section2-1',
        title: 'Grandmother\'s Herb Garden',
        subtitle: '奶奶的草药园',
        audioUrl: '/assets/audio/section-2.1.mp3',
        backgroundImage: SECTION_IMAGES.herbGarden,
        content: `Grandmother's Herb Garden

Time: Spring, 2003
Place: Yunnan village
Lin Yuan's Age: 8

Lin Yuan's grandmother was the village's herbal doctor. Every spring, she would take him into the mountains to gather [herbs] for medicine. This year, she decided to teach him about [botany] — the science of plants.

"All life depends on [photosynthesis]," Grandmother explained as they walked through the [vegetation]. "Plants take in [carbon dioxide] and release [oxygen]. They [respire] just like we do, but in reverse."

She showed him various specimens: [perennial] plants that came back year after year, and annual ones that completed their lifecycle in a single season. Lin Yuan was fascinated by the [ecology] of the forest — how everything formed a connected [ecosystem].

"This is [eco-friendly] farming," Grandmother said, pointing to her garden. "We work with nature, not against it." She practiced [horticulture] — the art of cultivating plants — and grew everything from vegetables to medicinal herbs.

Every living thing, she explained, was an [organism] with its own role. [Genetics] determined their basic traits, but [mutation] and [variation] created [diversity]. Through [hybridisation], farmers could create new plant varieties.

Lin Yuan learned to [classify] plants by their characteristics. Some could [reproduce] through seeds, others through roots or cuttings. Over millions of years, plants had [evolved] to survive in different environments.

"See how the population of this plant [fluctuates] with the seasons?" Grandmother asked. "Nature is always adjusting."`,
        translation: `奶奶的草药园

时间：2003年春天
地点：云南山村
林远年龄：8岁

林远的奶奶是村里的草药医生。每年春天，她都会带他上山采【药草】(herb)。今年，她决定教他【植物学】(botany)——研究植物的科学。

"所有生命都依赖【光合作用】(photosynthesis)，"奶奶一边穿过【植被】(vegetation)一边解释道，"植物吸收【二氧化碳】(carbon dioxide)，释放【氧气】(oxygen)。它们也【呼吸】(respire)，只是和我们相反。"

她给他展示了各种标本：年复一年生长的【多年生】(perennial)植物，以及在一个季节内完成生命周期的一年生植物。林远对森林的【生态】(ecology)着迷——一切是如何形成一个相连的【生态系统】(ecosystem)。

"这是【生态友好】(eco-friendly)的耕作方式，"奶奶指着她的园子说，"我们与自然合作，而不是对抗。"她实践【园艺】(horticulture)——种植植物的艺术——种植从蔬菜到药草的一切。

她解释说，每个生物都是一个【有机体】(organism)，有自己的角色。【遗传学】(genetics)决定它们的基本特征，但【变异】(mutation)和【变种】(variation)创造了【多样性】(diversity)。通过【杂交】(hybridisation)，农民可以创造新的植物品种。

林远学会了按特征【分类】(classify)植物。有些可以通过种子【繁殖】(reproduce)，有些通过根或插条。经过数百万年，植物已经【进化】(evolve)以适应不同的环境。

"看这种植物的数量如何随季节【波动】(fluctuate)？"奶奶问，"大自然总是在调整。"`,
        words: [
          { id: 'w4-1', word: 'photosynthesis', phonetic: '/ˌfəʊtəʊˈsɪnθəsɪs/', meaning: 'n. 光合作用', example: 'Photosynthesis occurs in leaves.' },
          { id: 'w4-2', word: 'respire', phonetic: '/rɪˈspaɪə/', meaning: 'v. 呼吸', example: 'All living things respire.' },
          { id: 'w4-3', word: 'dioxide', phonetic: '/daɪˈɒksaɪd/', meaning: 'n. 二氧化物', example: 'Carbon dioxide is a greenhouse gas.' },
          { id: 'w4-4', word: 'vegetation', phonetic: '/ˌvedʒɪˈteɪʃn/', meaning: 'n. 植物, 草木', example: 'The vegetation was lush and green.' },
          { id: 'w4-5', word: 'herb', phonetic: '/hɜːb/', meaning: 'n. 药草; 香草', example: 'She grows herbs in her garden.' },
          { id: 'w4-6', word: 'perennial', phonetic: '/pəˈreniəl/', meaning: 'n. 多年生植物', example: 'Roses are perennial flowers.' },
          { id: 'w4-7', word: 'botany', phonetic: '/ˈbɒtəni/', meaning: 'n. 植物学', example: 'She studies botany at university.' },
          { id: 'w4-8', word: 'ecology', phonetic: '/ɪˈkɒlədʒi/', meaning: 'n. 生态学; 生态', example: 'Ecology studies the relationship between organisms.' },
          { id: 'w4-9', word: 'ecosystem', phonetic: '/ˈiːkəʊsɪstəm/', meaning: 'n. 生态系统', example: 'The forest is a complex ecosystem.' },
          { id: 'w4-10', word: 'eco-friendly', phonetic: '/ˌiːkəʊˈfrendli/', meaning: 'adj. 生态友好的', example: 'We use eco-friendly products.' },
          { id: 'w4-11', word: 'horticulture', phonetic: '/ˈhɔːtɪkʌltʃə/', meaning: 'n. 园艺学', example: 'Horticulture is the art of growing plants.' },
          { id: 'w4-12', word: 'organism', phonetic: '/ˈɔːɡənɪzəm/', meaning: 'n. 有机体, 生物', example: 'Every organism plays a role in nature.' },
          { id: 'w4-13', word: 'genetics', phonetic: '/dʒəˈnetɪks/', meaning: 'n. 遗传学', example: 'Genetics explains hereditary traits.' },
          { id: 'w4-14', word: 'mutation', phonetic: '/mjuːˈteɪʃn/', meaning: 'n. 变异, 突变', example: 'Mutations can cause new traits.' },
          { id: 'w4-15', word: 'variation', phonetic: '/ˌveəriˈeɪʃn/', meaning: 'n. 变种; 变异', example: 'There is much variation in this species.' },
          { id: 'w4-16', word: 'diversity', phonetic: '/daɪˈvɜːsəti/', meaning: 'n. 多样性', example: 'Biodiversity is essential for ecosystems.' },
          { id: 'w4-17', word: 'hybridisation', phonetic: '/ˌhaɪbrɪdaɪˈzeɪʃn/', meaning: 'n. 杂交', example: 'Hybridisation creates new varieties.' },
          { id: 'w4-18', word: 'classify', phonetic: '/ˈklæsɪfaɪ/', meaning: 'v. 分类', example: 'Scientists classify animals into groups.' },
          { id: 'w4-19', word: 'reproduce', phonetic: '/ˌriːprəˈdjuːs/', meaning: 'v. 繁殖', example: 'Plants reproduce through seeds.' },
          { id: 'w4-20', word: 'evolve', phonetic: '/ɪˈvɒlv/', meaning: 'v. 进化', example: 'Species evolve over time.' },
          { id: 'w4-21', word: 'fluctuate', phonetic: '/ˈflʌktʃueɪt/', meaning: 'v. 波动, 起伏', example: 'Prices fluctuate daily.' }
        ]
      },
      {
        id: 'section2-2',
        title: 'The Forest Classroom',
        subtitle: '森林课堂',
        audioUrl: '/assets/audio/section-2.2.mp3',
        backgroundImage: SECTION_IMAGES.forestClassroom,
        content: `The Forest Classroom

Time: Summer, 2003
Place: Mountain forest
Lin Yuan's Age: 8

Grandmother continued Lin Yuan's education in the forest. She showed him how plants [adapt] to their environment — some grew [dense] leaves to capture more sunlight, while others developed [barren] appearances to survive in harsh conditions.

"Look at this [trunk]," she said, touching an ancient tree. "Its [bark] protects it from insects and disease." She pointed to the [bud] on a [twig], explaining how it would [bloom] into a flower and then [blossom] fully.

The [foliage] above them filtered the sunlight. Grandmother identified different parts: the [petal] of a flower, the [pollen] that insects carried, the [stem] that supported everything. Some plants had [thorns] for protection.

"These will [wither] soon," she said, pointing to some [wilting] flowers. "But look — new [sprouts] are emerging from the [seedlings]."

She explained the concept of [fertility] — how [fertile] soil helped plants grow. The [humus] in the ground provided nourishment. Some plants were [edible], while others were [toxic] or [poisonous].

"That one is [flammable]," she warned, pointing to a dry bush. "And those [evergreen] trees keep their leaves all year."

Lin Yuan learned about [cereal] crops and how they [germinate] from seeds. He saw [weeds] that could [smother] other plants, and learned about [pesticides] that farmers used. Grandmother preferred [organic] methods — more [wholesome] for both plants and people.

"The [vegetation] here is [lush]," she smiled, "because we respect the land."`,
        translation: `森林课堂

时间：2003年夏天
地点：山林
林远年龄：8岁

奶奶在森林里继续教导林远。她展示了植物如何【适应】(adapt)环境——有些长出【茂密的】(dense)叶子来捕获更多阳光，而另一些则发展出【贫瘠】(barren)的外表以在恶劣条件下生存。

"看这棵【树干】(trunk)，"她触摸着一棵古树说，"它的【树皮】(bark)保护它免受昆虫和疾病侵害。"她指着【细枝】(twig)上的【芽】(bud)，解释它将如何【开花】(bloom)然后【盛开】(blossom)。

头顶的【树叶】(foliage)过滤着阳光。奶奶辨认出不同的部分：花的【花瓣】(petal)、昆虫携带的【花粉】(pollen)、支撑一切的【茎】(stem)。有些植物有【刺】(thorn)作为保护。

"这些很快就会【枯萎】(wither)，"她指着一些正在【凋谢】(wilt)的花说，"但看——新的【嫩芽】(sprout)正从【幼苗】(seedling)中长出。"

她解释了【肥沃】(fertility)的概念——【肥沃的】(fertile)土壤如何帮助植物生长。地里的【腐殖质】(humus)提供营养。有些植物是【可食用的】(edible)，而另一些是【有毒的】(toxic/poisonous)。

"那个是【易燃的】(flammable)，"她警告说，指着一丛干灌木，"那些【常绿】(evergreen)树全年保持叶子。"

林远了解了【谷物】(cereal)作物以及它们如何从种子【发芽】(germinate)。他看到了能【覆盖】(smother)其他植物的【杂草】(weed)，还了解了农民使用的【农药】(pesticide)。奶奶更喜欢【有机】(organic)方法——对植物和人都更【健康】(wholesome)。

"这里的【植被】(vegetation)很【茂盛】(lush)，"她微笑着说，"因为我们尊重土地。"`,
        words: [
          { id: 'w5-1', word: 'adapt', phonetic: '/əˈdæpt/', meaning: 'v. 适应', example: 'Animals adapt to their environment.' },
          { id: 'w5-2', word: 'dense', phonetic: '/dens/', meaning: 'adj. 密集的, 稠密的', example: 'The forest was dense and dark.' },
          { id: 'w5-3', word: 'barren', phonetic: '/ˈbærən/', meaning: 'adj. 贫瘠的', example: 'The land was barren and dry.' },
          { id: 'w5-4', word: 'trunk', phonetic: '/trʌŋk/', meaning: 'n. 树干', example: 'The trunk of the tree was thick.' },
          { id: 'w5-5', word: 'bark', phonetic: '/bɑːk/', meaning: 'n. 树皮', example: 'The bark protects the tree.' },
          { id: 'w5-6', word: 'bud', phonetic: '/bʌd/', meaning: 'n. 芽, 花蕾', example: 'The buds will bloom in spring.' },
          { id: 'w5-7', word: 'twig', phonetic: '/twɪɡ/', meaning: 'n. 细枝', example: 'A bird sat on a twig.' },
          { id: 'w5-8', word: 'bloom', phonetic: '/bluːm/', meaning: 'v. 开花', example: 'Flowers bloom in spring.' },
          { id: 'w5-9', word: 'blossom', phonetic: '/ˈblɒsəm/', meaning: 'v. 开花', example: 'The cherry trees blossom beautifully.' },
          { id: 'w5-10', word: 'foliage', phonetic: '/ˈfəʊliɪdʒ/', meaning: 'n. 树叶', example: 'The autumn foliage is colorful.' },
          { id: 'w5-11', word: 'petal', phonetic: '/ˈpetl/', meaning: 'n. 花瓣', example: 'Rose petals are soft.' },
          { id: 'w5-12', word: 'pollen', phonetic: '/ˈpɒlən/', meaning: 'n. 花粉', example: 'Bees carry pollen from flower to flower.' },
          { id: 'w5-13', word: 'stem', phonetic: '/stem/', meaning: 'n. 茎', example: 'The stem supports the flower.' },
          { id: 'w5-14', word: 'thorn', phonetic: '/θɔːn/', meaning: 'n. 刺', example: 'Roses have thorns.' },
          { id: 'w5-15', word: 'wither', phonetic: '/ˈwɪðə/', meaning: 'v. 枯萎', example: 'The flowers withered in the heat.' },
          { id: 'w5-16', word: 'wilt', phonetic: '/wɪlt/', meaning: 'v. 凋谢', example: 'The plants wilted without water.' },
          { id: 'w5-17', word: 'sprout', phonetic: '/spraʊt/', meaning: 'n. 嫩芽', example: 'New sprouts appeared in spring.' },
          { id: 'w5-18', word: 'seedling', phonetic: '/ˈsiːdlɪŋ/', meaning: 'n. 幼苗', example: 'The seedlings need water.' },
          { id: 'w5-19', word: 'fertility', phonetic: '/fɜːˈtɪləti/', meaning: 'n. 肥沃', example: 'The soil has good fertility.' },
          { id: 'w5-20', word: 'fertile', phonetic: '/ˈfɜːtaɪl/', meaning: 'adj. 肥沃的', example: 'The valley has fertile soil.' },
          { id: 'w5-21', word: 'humus', phonetic: '/ˈhjuːməs/', meaning: 'n. 腐殖质', example: 'Humus makes soil rich.' },
          { id: 'w5-22', word: 'nourish', phonetic: '/ˈnʌrɪʃ/', meaning: 'v. 滋养', example: 'Good soil nourishes plants.' },
          { id: 'w5-23', word: 'edible', phonetic: '/ˈedɪbl/', meaning: 'adj. 可食用的', example: 'Not all mushrooms are edible.' },
          { id: 'w5-24', word: 'toxic', phonetic: '/ˈtɒksɪk/', meaning: 'adj. 有毒的', example: 'Some plants are toxic.' },
          { id: 'w5-25', word: 'poisonous', phonetic: '/ˈpɔɪzənəs/', meaning: 'adj. 有毒的', example: 'The berries are poisonous.' },
          { id: 'w5-26', word: 'flammable', phonetic: '/ˈflæməbl/', meaning: 'adj. 易燃的', example: 'Keep flammable materials away from fire.' },
          { id: 'w5-27', word: 'evergreen', phonetic: '/ˈevəɡriːn/', meaning: 'adj. 常绿的', example: 'Pine trees are evergreen.' },
          { id: 'w5-28', word: 'cereal', phonetic: '/ˈsɪəriəl/', meaning: 'n. 谷物', example: 'Wheat is a cereal crop.' },
          { id: 'w5-29', word: 'germinate', phonetic: '/ˈdʒɜːmɪneɪt/', meaning: 'v. 发芽', example: 'Seeds germinate in spring.' },
          { id: 'w5-30', word: 'weed', phonetic: '/wiːd/', meaning: 'n. 杂草', example: 'We need to remove the weeds.' },
          { id: 'w5-31', word: 'smother', phonetic: '/ˈsmʌðə/', meaning: 'v. 覆盖', example: 'Weeds can smother young plants.' },
          { id: 'w5-32', word: 'pesticide', phonetic: '/ˈpestɪsaɪd/', meaning: 'n. 农药', example: 'Organic farmers avoid pesticides.' },
          { id: 'w5-33', word: 'organic', phonetic: '/ɔːˈɡænɪk/', meaning: 'adj. 有机的', example: 'We buy organic vegetables.' },
          { id: 'w5-34', word: 'wholesome', phonetic: '/ˈhəʊlsəm/', meaning: 'adj. 健康的', example: 'Eat wholesome food.' },
          { id: 'w5-35', word: 'lush', phonetic: '/lʌʃ/', meaning: 'adj. 茂盛的', example: 'The garden is lush and green.' }
        ]
      }
    ]
  },
  {
    id: 'part2',
    title: 'Part 2',
    description: '进阶词汇 - 待更新',
    sections: []
  },
  {
    id: 'part3',
    title: 'Part 3',
    description: '高级词汇 - 待更新',
    sections: []
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
