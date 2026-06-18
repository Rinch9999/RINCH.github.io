import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <motion.aside 
      className="sidebar"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sidebar__section">
        <h3 className="sidebar__title">快速导航</h3>
        <ul role="menu" className="sidebar__list">
          <li role="none" className="sidebar__item">
            <NavLink 
              to="/" 
              role="menuitem" 
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              首页
            </NavLink>
          </li>
          <li role="none" className="sidebar__item">
            <NavLink 
              to="/timeline" 
              role="menuitem" 
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              剧情时间线
            </NavLink>
          </li>
          <li role="none" className="sidebar__item">
            <NavLink 
              to="/characters" 
              role="menuitem" 
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              角色介绍
            </NavLink>
          </li>
          <li role="none" className="sidebar__item">
            <a 
              href="/characters_timeline/characters_timeline.html" 
              role="menuitem" 
              className="sidebar__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              角色时间线
            </a>
          </li>
          <li role="none" className="sidebar__item">
            <NavLink 
              to="/episodes" 
              role="menuitem" 
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              剧集情节
            </NavLink>
          </li>
          <li role="none" className="sidebar__item">
            <NavLink 
              to="/locations" 
              role="menuitem" 
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              拍摄地点
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="sidebar__section">
        <h3 className="sidebar__title">互动游戏</h3>
        <ul className="sidebar__list">
          <li role="none" className="sidebar__item">
            <NavLink 
              to="/beat-nolan" 
              role="menuitem" 
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              鞭笞乔诺兰
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.aside>
  )
}

export default Sidebar