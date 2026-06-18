import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Episodes = () => {
  const [activeSeason, setActiveSeason] = useState(1)

  // 剧集数据
  const seasons = [
    {
      id: 1,
      title: '第一季',
      year: '2011-2012',
      episodes: 23,
      firstAired: '2011年9月22日',
      lastAired: '2012年5月17日',
      description: 'John Reese被Harold Finch招募，开始处理「The Machine」提供的"无关号码"，两人组成团队打击犯罪。',
      mainCharacters: 'Reese, Finch, Carter',
      episodeList: [
        { number: 1, title: '试播集', description: '当一名年轻检察官的社会保障号码被提及时，里斯和芬奇合作，试图确定他们的嫌疑人是受害者还是加害者。' },
        { number: 2, title: '鬼魂', description: '当他们收到一个两年前死亡的青少年的社会安全号码时，Reese和Finch开始质疑The Machine的绝对正确性。' },
        { number: 3, title: '任务蔓延', description: '当机器指引里斯和芬奇找到一名与犯罪团伙有可疑联系的前海军陆战队员时，里斯必须潜入帮派，参与他们的抢劫。' },
        { number: 4, title: '治愈你自己', description: '里斯和芬奇监视他们最新的关注对象梅根·蒂尔曼博士，试图揭开这位有前途的年轻医生所面临的威胁。' },
        { number: 5, title: '审判', description: '当机器提供了一位以严厉判决著称的法官的社会保障号码时，里斯和芬奇面临额外的挑战。' },
        { number: 6, title: '修复', description: '里瑟和芬奇调查一位华尔街交易员，他可能卷入了内部交易。' },
        { number: 7, title: '目击者', description: '机器确认一名目击黑帮袭击的教师是下一个重点调查对象，里斯和芬奇赶紧救他。' },
        { number: 8, title: '敌人', description: '当里斯和芬奇发现他们最新的兴趣人与冷战时期苏联间谍圈有联系时，他们很快了解到在"机器"出现之前的世界，秘密行动是如何进行的。' },
        { number: 9, title: '去找卡特', description: '当机器宣布她是他们最新的关注对象时，里斯和芬奇与侦探卡特的猫捉老鼠游戏变得更加复杂。' },
        { number: 10, title: '数字加算', description: '当卡特侦探处理她最近与里斯和芬奇的遭遇后果时，机器加大了对两人的赌注，给了他们四个社会保障号码，而不是一个。' },
        { number: 11, title: '超级', description: '一位天才程序员发现了一个危险的电脑游戏，游戏中的死亡会在现实生活中发生。' },
        { number: 12, title: '遗产', description: '当卡特最终与里斯面对面时，他敦促她联手帮助他们最新的兴趣人——一位来自社会边缘的坚韧年轻女子。' },
        { number: 13, title: ' root cause', description: '一个名为"Root"的神秘黑客出现，她似乎对「The Machine」有着深入的了解，并开始追踪Finch。' },
        { number: 14, title: '狼与羊', description: '里斯和芬奇调查一位专门保护富人和名人的私人保镖，他似乎成为了某人的目标。' },
        { number: 15, title: '蓝码', description: '团队帮助一位年轻的黑客，他无意中发现了一个危险的政府秘密。' },
        { number: 16, title: '风险', description: '里斯和芬奇调查一位风险投资家，他的投资项目似乎总是在关键时刻失败。' },
        { number: 17, title: '婴儿蓝', description: '机器提供了一个婴儿的社会保障号码，里斯和芬奇必须保护这个婴儿免受未知的威胁。' },
        { number: 18, title: '身份', description: '里斯失去了记忆，不知道自己是谁，也不知道自己在做什么。' },
        { number: 19, title: '致命病毒', description: '一个致命的电脑病毒在纽约市蔓延，里斯和芬奇必须找到创造病毒的人。' },
        { number: 20, title: '致命一击', description: '卡特侦探终于找到了里斯的真实身份，并开始调查他的过去。' },
        { number: 21, title: '不可避免', description: '里斯和芬奇必须保护一位即将成为总统的参议员，同时避免被政府特工发现。' },
        { number: 22, title: '无人区', description: '里斯和芬奇被政府特工追捕，他们必须找到一个安全的地方躲避。' },
        { number: 23, title: '火与冰', description: '第一季大结局：里斯和芬奇必须阻止一个恐怖分子计划，同时面对来自政府和犯罪组织的双重威胁。' }
      ]
    },
    {
      id: 2,
      title: '第二季',
      year: '2012-2013',
      episodes: 22,
      firstAired: '2012年9月27日',
      lastAired: '2013年5月9日',
      description: '团队规模扩大，Root和Shaw先后出现，「The Machine」的秘密逐渐被揭露。',
      mainCharacters: 'Reese, Finch, Carter, Fusco, Root, Shaw',
      episodeList: [
        { number: 1, title: '回归', description: '里斯从死亡边缘回来，继续与芬奇合作处理「The Machine」提供的"无关号码"。' },
        { number: 2, title: '坏代码', description: '团队调查一位天才程序员，他创造了一个危险的电脑病毒。' },
        { number: 3, title: '蛇穴', description: '里斯潜入一个黑帮组织，调查他们的非法活动。' },
        { number: 4, title: '冷眼', description: '一位前政府特工出现，她似乎对「The Machine」有着特殊的兴趣。' },
        { number: 5, title: '狼来了', description: 'Root再次出现，她带来了关于「The Machine」的重要信息。' },
        { number: 6, title: '犯罪心理', description: '团队帮助一位心理学家，她的病人似乎都陷入了危险。' },
        { number: 7, title: '追踪者', description: '里斯和芬奇调查一位私人侦探，他专门追踪失踪人员。' },
        { number: 8, title: '死亡天使', description: '团队必须阻止一位连环杀手，他专门针对老年人。' },
        { number: 9, title: '黑名单', description: '卡特侦探被列入黑名单，她必须依靠里斯和芬奇的帮助。' },
        { number: 10, title: '上帝模式', description: 'Root获得了访问「The Machine」的权限，她开始利用它来实现自己的目标。' },
        { number: 11, title: '暗影', description: '团队调查一位神秘的黑帮头目，他似乎拥有超自然的能力。' },
        { number: 12, title: '监狱暴动', description: '里斯被关入监狱，他必须在那里继续保护无辜的人。' },
        { number: 13, title: '越狱', description: '芬奇和卡特必须制定计划，将里斯从监狱中救出来。' },
        { number: 14, title: '女人', description: 'Shaw正式加入团队，她带来了自己独特的技能和视角。' },
        { number: 15, title: '间谍游戏', description: '团队调查一位前CIA特工，他似乎被卷入了一场国际间谍阴谋。' },
        { number: 16, title: '叛徒', description: '团队中出现了叛徒，他们必须找出是谁在泄露信息。' },
        { number: 17, title: '记忆', description: '芬奇回忆起了「The Machine」的起源和他与Nathan Ingram的合作。' },
        { number: 18, title: '失踪', description: '一位年轻女子失踪，团队必须找到她并揭开真相。' },
        { number: 19, title: '身份危机', description: '里斯的身份再次被曝光，他必须面对来自过去的敌人。' },
        { number: 20, title: '死局', description: '团队陷入了一个死局，他们必须做出艰难的选择。' },
        { number: 21, title: '致命错误', description: '卡特侦探发现了一个关于「The Machine」的致命秘密，她必须决定如何处理。' },
        { number: 22, title: '清白', description: '第二季大结局：卡特侦探的命运在一场激烈的战斗中被决定，团队面临前所未有的挑战。' }
      ]
    },
    {
      id: 3,
      title: '第三季',
      year: '2013-2014',
      episodes: 23,
      firstAired: '2013年9月24日',
      lastAired: '2014年5月13日',
      description: '「The Machine」与政府的冲突加剧，团队面临更大的威胁，Root的角色更加重要。',
      mainCharacters: 'Reese, Finch, Fusco, Root, Shaw',
      episodeList: [
        { number: 1, title: '死者之语', description: '团队在失去卡特后继续前行，他们必须适应新的现实并继续保护无辜的人。' },
        { number: 2, title: '后果', description: '里斯和芬奇调查一位新闻记者，他似乎掌握了一些危险的信息。' },
        { number: 3, title: '危险游戏', description: '团队帮助一位年轻的黑客，他被卷入了一场危险的游戏。' },
        { number: 4, title: '昨日重现', description: 'Root回到团队，她带来了关于「The Machine」的重要更新。' },
        { number: 5, title: '猎头', description: '团队调查一位专门招聘高级人才的猎头，他似乎有不可告人的秘密。' },
        { number: 6, title: '兄弟情', description: 'Fusco侦探必须面对自己的过去，同时帮助团队处理一个新的案件。' },
        { number: 7, title: '坏种子', description: '团队调查一位年轻的罪犯，他似乎有着黑暗的过去。' },
        { number: 8, title: '真理', description: '一位科学家发现了「The Machine」的存在，她必须决定是否将其公之于众。' },
        { number: 9, title: '死亡名单', description: '「The Machine」开始提供一些特殊的号码，这些号码似乎与一个更大的阴谋有关。' },
        { number: 10, title: '上帝的视角', description: 'Root获得了与「The Machine」直接交流的能力，她开始看到一个不同的世界。' },
        { number: 11, title: '控制', description: '政府开始加强对「The Machine」的控制，团队必须阻止他们。' },
        { number: 12, title: '革命', description: '一场革命在纽约市爆发，团队必须保护无辜的人免受伤害。' },
        { number: 13, title: '紧急状态', description: '纽约市陷入紧急状态，团队必须找到造成混乱的原因。' },
        { number: 14, title: '过去的阴影', description: '里斯的过去再次困扰着他，他必须面对自己的内心恶魔。' },
        { number: 15, title: '秘密', description: 'Finch发现了一个关于「The Machine」的秘密，这个秘密可能改变一切。' },
        { number: 16, title: '背叛', description: '团队中有人背叛了他们，他们必须找出是谁。' },
        { number: 17, title: '救赎', description: '一位前罪犯试图改过自新，团队帮助他实现这个目标。' },
        { number: 18, title: '致命选择', description: '团队必须在两个无辜的人之间做出选择，他们只能救一个。' },
        { number: 19, title: '战争边缘', description: '「The Machine」与政府的冲突达到了临界点，战争一触即发。' },
        { number: 20, title: '黑暗时代', description: '团队必须在一个没有「The Machine」的世界中生存。' },
        { number: 21, title: '机器的觉醒', description: '「The Machine」开始展现出一些新的能力，团队必须适应这些变化。' },
        { number: 22, title: '最后的战役', description: '团队与政府特工展开最后的战役，决定「The Machine」的命运。' },
        { number: 23, title: '分裂', description: '第三季大结局：「The Machine」被分裂成两部分，团队必须找到并保护它。' }
      ]
    },
    {
      id: 4,
      title: '第四季',
      year: '2014-2015',
      episodes: 22,
      firstAired: '2014年9月23日',
      lastAired: '2015年5月5日',
      description: 'Samaritan的威胁日益明显，团队必须采取行动对抗这个更强大的人工智能。',
      mainCharacters: 'Reese, Finch, Fusco, Root, Shaw',
      episodeList: [
        { number: 1, title: '新的游戏', description: '团队开始与一个名为Samaritan的新人工智能对抗，这个人工智能比「The Machine」更加强大。' },
        { number: 2, title: '逃亡者', description: '团队必须保护一位科学家，他掌握了可以摧毁Samaritan的关键信息。' },
        { number: 3, title: '双面间谍', description: '一位双面间谍出现，他似乎同时为Samaritan和团队工作。' },
        { number: 4, title: '失踪的女孩', description: '团队调查一位失踪的女孩，她似乎与Samaritan有关。' },
        { number: 5, title: '数字战争', description: 'Samaritan开始攻击「The Machine」的基础设施，团队必须阻止它。' },
        { number: 6, title: '死亡陷阱', description: '团队被Samaritan困在一个陷阱中，他们必须找到逃脱的方法。' },
        { number: 7, title: '记忆碎片', description: 'Root开始恢复一些关于自己过去的记忆，这些记忆可能改变一切。' },
        { number: 8, title: '最后的机会', description: '团队给一位罪犯提供了最后的机会，让他改过自新。' },
        { number: 9, title: 'Samaritan的眼睛', description: 'Samaritan开始在全球范围内监控一切，团队必须找到一种方法来躲避它的监视。' },
        { number: 10, title: '机器的声音', description: '「The Machine」开始以一种新的方式与团队交流，它似乎有了自己的意识。' },
        { number: 11, title: '黑暗中的光芒', description: '在一个没有「The Machine」的世界中，团队必须找到希望的光芒。' },
        { number: 12, title: '战争迷雾', description: '团队与Samaritan的战争进入了一个新的阶段，双方都在寻找对方的弱点。' },
        { number: 13, title: '背叛者', description: '团队中出现了一个背叛者，他向Samaritan泄露了重要信息。' },
        { number: 14, title: '牺牲', description: '团队必须做出一些艰难的牺牲，以阻止Samaritan的计划。' },
        { number: 15, title: '机器的进化', description: '「The Machine」开始进化，它变得更加强大和智能。' },
        { number: 16, title: '最后的防线', description: '团队建立了最后的防线，准备与Samaritan进行最后的对决。' },
        { number: 17, title: '破碎的信任', description: '团队成员之间的信任开始破裂，他们必须重新团结起来。' },
        { number: 18, title: 'Samaritan的崛起', description: 'Samaritan开始在全球范围内实施其计划，团队必须阻止它。' },
        { number: 19, title: '机器的选择', description: '「The Machine」必须做出一个重要的选择，这个选择将决定所有人的命运。' },
        { number: 20, title: '最后的战役', description: '团队与Samaritan展开最后的战役，决定人类的未来。' },
        { number: 21, title: '牺牲的代价', description: '团队成员为了阻止Samaritan付出了沉重的代价。' },
        { number: 22, title: '黑暗中的光明', description: '第四季大结局：团队在失去Shaw后继续前行，他们必须找到一种方法来击败Samaritan。' }
      ]
    },
    {
      id: 5,
      title: '第五季',
      year: '2016',
      episodes: 13,
      firstAired: '2016年5月3日',
      lastAired: '2016年6月21日',
      description: '「The Machine」与Samaritan的最终对决，团队成员面临生死考验。',
      mainCharacters: 'Reese, Finch, Fusco, Root',
      episodeList: [
        { number: 1, title: '回归', description: '团队在失去Shaw后重新集结，他们准备与Samaritan进行最后的对决。' },
        { number: 2, title: '失踪的人', description: '团队寻找失踪的Shaw，他们怀疑她可能还活着。' },
        { number: 3, title: '危险的交易', description: '团队与一位神秘的商人进行交易，他们希望获得一些可以击败Samaritan的信息。' },
        { number: 4, title: '记忆的痕迹', description: 'Root开始恢复一些关于Shaw的记忆，这些记忆可能帮助他们找到她。' },
        { number: 5, title: '最后的机会', description: '团队给Samaritan提供了最后的机会，让它停止其计划。' },
        { number: 6, title: '破碎的梦想', description: '团队成员的梦想开始破碎，他们必须面对现实并继续前行。' },
        { number: 7, title: '机器的觉醒', description: '「The Machine」完全觉醒，它变得比以往任何时候都更加强大。' },
        { number: 8, title: '最后的准备', description: '团队为与Samaritan的最终对决做最后的准备。' },
        { number: 9, title: '死亡的阴影', description: '死亡的阴影笼罩着团队，他们必须决定谁将牺牲自己来拯救其他人。' },
        { number: 10, title: '最后的告别', description: '团队成员之间的告别，他们知道这可能是最后一次见面。' },
        { number: 11, title: '最终对决', description: '「The Machine」与Samaritan展开最终对决，决定人类的未来。' },
        { number: 12, title: '牺牲', description: '团队成员为了击败Samaritan付出了最终的牺牲。' },
        { number: 13, title: '永远的守护者', description: '第五季大结局：「The Machine」成为了人类永远的守护者，它将继续保护无辜的人。' }
      ]
    }
  ]

  return (
    <motion.div 
      className="episodes-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>剧集情节</h1>
      
      <div className="seasons-nav">
        {seasons.map((season) => (
          <motion.button
            key={season.id}
            className={`season-btn ${activeSeason === season.id ? 'active' : ''}`}
            onClick={() => setActiveSeason(season.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: season.id * 0.1 }}
          >
            {season.title}
          </motion.button>
        ))}
      </div>
      
      <motion.div 
        className="season-info card"
        key={activeSeason}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{seasons[activeSeason - 1].title}</h2>
        <div className="season-details">
          <div className="detail-item">
            <strong>年份：</strong>{seasons[activeSeason - 1].year}
          </div>
          <div className="detail-item">
            <strong>集数：</strong>{seasons[activeSeason - 1].episodes}集
          </div>
          <div className="detail-item">
            <strong>首播：</strong>{seasons[activeSeason - 1].firstAired}
          </div>
          <div className="detail-item">
            <strong>季终：</strong>{seasons[activeSeason - 1].lastAired}
          </div>
          <div className="detail-item">
            <strong>主要角色：</strong>{seasons[activeSeason - 1].mainCharacters}
          </div>
          <div className="detail-item">
            <strong>简介：</strong>{seasons[activeSeason - 1].description}
          </div>
        </div>
        
        <div className="season-episodes">
          <h3>每集信息</h3>
          <div className="episodes-list">
            {seasons[activeSeason - 1].episodeList.map((episode) => (
              <motion.div
                key={episode.number}
                className="episode-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: episode.number * 0.05 }}
              >
                <div className="episode-header">
                  <span className="episode-number">{episode.number}</span>
                  <h4 className="episode-title">{episode.title}</h4>
                </div>
                <p className="episode-description">{episode.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Episodes