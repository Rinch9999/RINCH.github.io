import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="footer__content">
        <div className="footer__links">
          <Link to="/episodes" className="footer__link">剧集情节</Link>
          <Link to="/timeline" className="footer__link">角色时间线</Link>
          <Link to="/locations" className="footer__link">纽约打卡地</Link>
          <Link to="/beat-nolan" className="footer__link">鞭笞乔诺兰</Link>
        </div>
        <div className="footer__copyright">
          # © 2025 《疑犯追踪》（Person of Interest）粉丝维基 
          1. 网站性质说明：本站为《疑犯追踪》（Person of Interest）剧集爱好者个人制作的非官方粉丝交流平台，所有内容仅用于粉丝间的学习、讨论与剧集相关内容分享，不涉及任何商业盈利行为（包括但不限于广告投放、付费订阅、商品售卖等）。 
          2. 版权声明：本站与该剧集出品方CBS、发行方Warner Bros.无任何关联，未获得官方授权。站内所涉及的剧集名称、角色、剧情、海报、视频片段等相关知识产权，均归原版权方所有；转载内容已尽可能标注来源，若涉及侵权，请版权方或相关权利人及时联系，我方将在核实后第一时间删除相关内容。 
          3. 联系与反馈：若您对本站内容有任何疑问、建议，或发现版权问题、违规信息，可通过以下邮箱与运营者联系：<a href="mailto:ajbfsdb8866@163.com">ajbfsdb8866@163.com</a>，我方会在合理时间内予以回复并处理。
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer