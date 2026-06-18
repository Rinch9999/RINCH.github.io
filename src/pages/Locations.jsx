import React from 'react'
import { motion } from 'framer-motion'

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: '布鲁克林大桥',
      image: 'https://cdn.jsdelivr.net/gh/Rinch9999/RINCH.github.io/images/brooklyn_bridge.jpg',
      description: '布鲁克林大桥是剧中经常出现的标志性地点，多次作为关键场景的背景。'
    },
    {
      id: 2,
      name: '中央公园',
      image: 'https://cdn.jsdelivr.net/gh/Rinch9999/RINCH.github.io/images/central_park.jpg',
      description: '中央公园是纽约的标志性景点，在剧中多次出现，是角色们经常活动的场所。'
    },
    {
      id: 3,
      name: '纽约公共图书馆',
      image: 'https://cdn.jsdelivr.net/gh/Rinch9999/RINCH.github.io/images/new_york_public_library.jpg',
      description: '纽约公共图书馆在剧中作为重要场景出现，具有浓厚的文化氛围。'
    },
    {
      id: 4,
      name: '大中央车站',
      image: 'https://cdn.jsdelivr.net/gh/Rinch9999/RINCH.github.io/images/grand_central_terminal.jpg',
      description: '大中央车站是纽约的交通枢纽，在剧中多次作为角色们会面和行动的地点。'
    },
    {
      id: 5,
      name: '布鲁克林植物园',
      image: 'https://cdn.jsdelivr.net/gh/Rinch9999/RINCH.github.io/images/brooklyn_botanical_garden.jpg',
      description: '布鲁克林植物园是剧中的一个美丽场景，经常用于角色们的重要对话。'
    },
    {
      id: 6,
      name: '皇后区博物馆',
      image: 'https://cdn.jsdelivr.net/gh/Rinch9999/RINCH.github.io/images/queens_museum.jpg',
      description: '皇后区博物馆在剧中作为重要场景出现，与「The Machine」的故事线有关。'
    }
  ]

  return (
    <motion.div 
      className="locations-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>纽约拍摄地点</h1>
      
      <p className="locations-intro">
        《疑犯追踪》主要在纽约拍摄，剧中出现了许多标志性的纽约地点。以下是一些主要的拍摄地点，跟随POI的脚步游览这座不夜城。
      </p>
      
      <div className="card-grid">
        {locations.map((location) => (
          <motion.div
            key={location.id}
            className="location-card card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: location.id * 0.1 }}
            whileHover={{ y: -5, boxShadow: 'var(--shadow-large)' }}
          >
            <motion.img 
              src={location.image} 
              alt={location.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h3>{location.name}</h3>
            <p>{location.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="locations-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2>游览提示</h2>
        <p>如果您计划前往这些地点游览，建议提前查看开放时间和门票信息。这些地点不仅在剧中具有重要意义，也是纽约的著名景点，值得一游。</p>
      </motion.div>
    </motion.div>
  )
}

export default Locations