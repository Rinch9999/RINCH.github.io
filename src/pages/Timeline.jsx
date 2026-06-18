import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const timelineEvents = [
    {
      id: 1,
      year: '2001',
      title: '「The Machine」的诞生',
      description: 'Harold Finch和Nathan Ingram开始开发「The Machine」，最初是为了在9/11事件后监控和预防恐怖袭击。'
    },
    {
      id: 2,
      year: '2008',
      title: 'Nathan Ingram之死',
      description: 'Nathan Ingram在试图揭露「The Machine」的存在时被谋杀，Finch从此过上了隐居生活。'
    },
    {
      id: 3,
      year: '2011',
      title: 'John Reese的加入',
      description: 'Finch招募了前CIA特工John Reese，开始处理「The Machine」提供的"无关号码"。'
    },
    {
      id: 4,
      year: '2012',
      title: 'Root的出现',
      description: '天才黑客Root出现，对「The Machine」表现出浓厚兴趣，成为Finch和Reese的对手。'
    },
    {
      id: 5,
      year: '2013',
      title: 'Shaw的加入',
      description: '前政府特工Sameen Shaw加入团队，成为重要成员。'
    },
    {
      id: 6,
      year: '2014',
      title: 'Samaritan的觉醒',
      description: '另一个人工智能系统Samaritan觉醒，与「The Machine」展开对抗。'
    },
    {
      id: 7,
      year: '2015',
      title: '最终对决',
      description: '「The Machine」与Samaritan进行最终对决，团队成员面临生死考验。'
    }
  ]

  return (
    <motion.div 
      className="timeline-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>剧情时间线</h1>
      
      <div className="timeline-container">
        {timelineEvents.map((event) => (
          <motion.div
            key={event.id}
            className={`timeline-item ${event.id % 2 === 0 ? 'right' : 'left'}`}
            initial={{ opacity: 0, x: event.id % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: event.id * 0.1 }}
          >
            <div className="timeline-content card">
              <div className="timeline-year">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="timeline-notes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2>时间线说明</h2>
        <p>以上时间线涵盖了《疑犯追踪》剧集的主要事件，从「The Machine」的诞生到与Samaritan的最终对决。每一个事件都对剧情发展产生了深远影响，塑造了剧中的主要角色和故事情节。</p>
      </motion.div>
    </motion.div>
  )
}

export default Timeline