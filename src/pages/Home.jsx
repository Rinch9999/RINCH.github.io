import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 0, src: '/images/brooklyn_bridge.jpg', alt: '《疑犯追踪》图片1' },
    { id: 1, src: '/images/y_b_w.jpg', alt: '《疑犯追踪》图片2' },
    { id: 2, src: '/images/grand_central_terminal.jpg', alt: '《疑犯追踪》图片3' },
    { id: 3, src: '/images/poi_background.jpg', alt: '《疑犯追踪》图片4' }
  ]

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  // 切换到上一张
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // 切换到下一张
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  // 角色数据
  const characters = [
    {
      id: 1,
      name: '哈罗德·芬奇（Harold Finch）',
      role: '软件工程师，「The Machine」的创造者',
      image: '/images/harold_finch.png'
    },
    {
      id: 2,
      name: '约翰·里瑟（John Reese）',
      role: '前中央情报局特工，芬奇的搭档',
      image: '/images/john_reese.png'
    },
    {
      id: 3,
      name: '萨米恩·肖（Sameen Shaw）',
      role: '前政府特工，团队成员',
      image: '/images/shaw.png'
    },
    {
      id: 4,
      name: '萨曼莎·格罗夫斯（Root）',
      role: '黑客，「机器」的信徒',
      image: '/images/root.png'
    }
  ]

  // 内容网格数据
  const contentGridItems = [
    {
      id: 1,
      title: '剧情时间线',
      description: '按时间顺序探索剧中的重要事件，从「The Machine」的诞生到与「Samaritan」的最终对决。',
      image: '/images/poi_background.jpg',
      link: '/timeline'
    },
    {
      id: 2,
      title: '角色时间线',
      description: '深入了解四位核心角色的发展历程，探索每个角色的成长轨迹。',
      image: '/images/finch2.jpg',
      link: '/characters'
    },
    {
      id: 3,
      title: '纽约拍摄地点',
      description: '探索剧中出现的纽约实景拍摄地点，跟随POI的脚步游览这座不夜城。',
      image: '/images/queens_museum.jpg',
      link: '/locations'
    }
  ]

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 媒体轮播 */}
      <section id="media-container" className="media-container" aria-label="媒体轮播">
        <div className="slider-container" style={{ position: 'relative', width: '100%', height: '400px' }}>
          <motion.div 
            className="slider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: 'var(--border-radius-medium)'
            }}
          >
            {slides.map((slide) => (
              <motion.div
                key={slide.id}
                className={`slide ${currentSlide === slide.id ? 'active' : ''}`}
                style={{
                  opacity: currentSlide === slide.id ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
                animate={{
                  opacity: currentSlide === slide.id ? 1 : 0,
                  scale: currentSlide === slide.id ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={slide.src} 
                  alt={slide.alt} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200" fill="%23444"%3E%3Ctext x="50%" y="50%" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="%23aaa"%3E图片加载失败%3C/text%3E%3C/svg%3E';
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--border-radius-medium)'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <button 
          className="prev-btn"
          onClick={prevSlide}
          aria-label="查看上一张图片"
        >
          上一张
        </button>
        <button 
          className="next-btn"
          onClick={nextSlide}
          aria-label="查看下一张图片"
        >
          下一张
        </button>
        
        <div className="dots" role="tablist" aria-label="轮播图片导航">
          {slides.map((_, index) => (
            <motion.span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              role="tab"
              aria-selected={currentSlide === index ? 'true' : 'false'}
              tabIndex={currentSlide === index ? '0' : '-1'}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </section>

      {/* 主要介绍 */}
      <motion.div 
        className="banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="banner-content">
          <motion.img 
            src="/images/queens_museum.jpg" 
            alt="《疑犯追踪》" 
            className="banner__image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200" fill="%23444"%3E%3Ctext x="50%" y="50%" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="%23aaa"%3E图片加载失败%3C/text%3E%3C/svg%3E';
            }}
          />
          <div className="banner-text">
            <h2>关于《疑犯追踪》（Person of Interest）</h2>
            <p>《疑犯追踪》（Person of Interest）是一部美国科幻犯罪电视剧，由乔纳森·诺兰创作，J·J·艾布拉姆斯担任执行制作人。</p>
            <p>剧集讲述了一位神秘的亿万富翁Harold Finch和前中央情报局特工John Reese联手，利用芬奇开发的名为「The Machine」的超级人工智能系统，阻止犯罪发生的故事。</p>
            <p>在剧中，「机器」能够预测暴力犯罪，但只提供涉案人员的社保号码，芬奇和里瑟必须在犯罪发生前找出谁是受害者，谁是加害者。</p>
          </div>
        </div>
      </motion.div>

      {/* 主要角色 */}
      <motion.div 
        className="characters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>主要角色</h2>
        <div className="character-grid">
          {characters.map((character) => (
            <motion.div
              key={character.id}
              className="character-card card"
              whileHover={{ y: -5, boxShadow: 'var(--shadow-large)' }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/characters" style={{ display: 'block' }}>
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
                <h4>{character.name}</h4>
                <p>{character.role}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 内容网格 */}
      <motion.div 
        className="content-grid-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>探索更多</h2>
        <div className="card-grid">
          {contentGridItems.map((item) => (
            <motion.div
              key={item.id}
              className="content-card card"
              whileHover={{ y: -5, boxShadow: 'var(--shadow-large)' }}
              transition={{ duration: 0.3 }}
            >
              <Link to={item.link} style={{ display: 'block' }}>
                <motion.img 
                  src={item.image} 
                  alt={item.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200" fill="%23444"%3E%3Ctext x="50%" y="50%" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="%23aaa"%3E图片加载失败%3C/text%3E%3C/svg%3E';
                  }}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="read-more">查看详情 →</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home