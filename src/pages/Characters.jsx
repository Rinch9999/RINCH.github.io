import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Characters = () => {
  const characters = [
    {
      id: 1,
      name: '哈罗德·芬奇（Harold Finch）',
      role: '软件工程师，「The Machine」的创造者',
      image: '/images/harold_finch.png',
      description: 'Harold Finch是一位神秘的亿万富翁软件工程师，他创造了名为「The Machine」的超级人工智能系统，能够预测暴力犯罪。他行事低调，很少在公众场合露面，使用各种化名来隐藏自己的真实身份。',
      htmlPath: '/characters/finch.html'
    },
    {
      id: 2,
      name: '约翰·里瑟（John Reese）',
      role: '前中央情报局特工，芬奇的搭档',
      image: '/images/john_reese.png',
      description: 'John Reese是一名前中央情报局特工，在一次任务中被组织抛弃，后来被Finch招募成为他的搭档。他具有出色的战斗技能和情报收集能力，负责执行「The Machine」预测的案件。',
      htmlPath: '/characters/reese.html'
    },
    {
      id: 3,
      name: '萨米恩·肖（Sameen Shaw）',
      role: '前政府特工，团队成员',
      image: '/images/shaw.png',
      description: 'Sameen Shaw是一名前政府特工，曾在巴基斯坦执行任务，后来加入Finch和Reese的团队。她具有非凡的战斗技能和冷静的判断力，对数字非常敏感。',
      htmlPath: '/characters/shaw.html'
    },
    {
      id: 4,
      name: '萨曼莎·格罗夫斯（Root）',
      role: '黑客，「机器」的信徒',
      image: '/images/root.png',
      description: 'Samantha Groves，绰号Root，是一名天才黑客，对「The Machine」充满崇拜。她最初是Finch和Reese的对手，后来成为团队的重要成员，与「The Machine」有着特殊的联系。',
      htmlPath: '/characters/root.html'
    }
  ]

  return (
    <motion.div 
      className="characters-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>主要角色</h1>
      
      <div className="card-grid">
        {characters.map((character) => (
          <motion.div
            key={character.id}
            className="character-card card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: character.id * 0.1 }}
            whileHover={{ y: -5, boxShadow: 'var(--shadow-large)' }}
          >
            <motion.img 
              src={character.image} 
              alt={character.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200" fill="%23444"%3E%3Ctext x="50%" y="50%" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="%23aaa"%3E图片加载失败%3C/text%3E%3C/svg%3E';
              }}
            />
            <h3>
              <a 
                href={character.htmlPath} 
                className="character-name-link" 
                target="_blank"
                rel="noopener noreferrer"
              >
                {character.name}
              </a>
            </h3>
            <p className="character-role">{character.role}</p>
            <p className="character-description">{character.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="character-timeline-link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>角色时间线</h2>
        <p>想了解更多角色的详细发展历程？点击下方链接查看完整的角色时间线：</p>
        <a href="/characters_timeline/characters_timeline.html" className="btn" target="_blank" rel="noopener noreferrer">查看角色时间线</a>
      </motion.div>
    </motion.div>
  )
}

export default Characters