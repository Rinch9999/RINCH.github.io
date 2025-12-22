import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BeatNolan = () => {
  const [gameActive, setGameActive] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [level, setLevel] = useState(1)
  const [showDifficulty, setShowDifficulty] = useState(false)
  const [gameMode, setGameMode] = useState('normal')
  const [bestScore, setBestScore] = useState(parseInt(localStorage.getItem('bestScore') || '0'))
  const [comboCount, setComboCount] = useState(0)
  const [hitCount, setHitCount] = useState(0)
  const [missCount, setMissCount] = useState(0)
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  
  const targetRef = useRef(null)
  const gameContainerRef = useRef(null)
  const comboTimerRef = useRef(null)
  const gameStartTimeRef = useRef(null)

  const gameSettings = {
    normal: { speed: 1000, time: 60, levelUp: 10 },
    timed: { speed: 800, time: 30, levelUp: 15 },
    endless: { speed: 1000, time: -1, levelUp: 10 }
  }

  const MODE_NAMES = {
    normal: '经典模式',
    timed: '限时挑战',
    endless: '无限模式'
  }

  // 计算目标位置
  const calculateTargetPosition = () => {
    if (!gameContainerRef.current) return { x: 0, y: 0 }
    
    const containerRect = gameContainerRef.current.getBoundingClientRect()
    const containerWidth = containerRect.width
    const containerHeight = containerRect.height
    const targetSize = 100 // 目标大小
    
    // 生成随机位置，确保目标完全在容器内
    const x = Math.floor(Math.random() * (containerWidth - targetSize))
    const y = Math.floor(Math.random() * (containerHeight - targetSize))
    
    return { x, y }
  }

  // 移动目标
  const moveTarget = () => {
    const newPosition = calculateTargetPosition()
    setTargetPosition(newPosition)
  }

  // 开始游戏
  const startGame = () => {
    const settings = gameSettings[gameMode]
    setTimeLeft(settings.time)
    setScore(0)
    setLevel(1)
    setGameActive(true)
    setShowDifficulty(false)
    setComboCount(0)
    setHitCount(0)
    setMissCount(0)
    gameStartTimeRef.current = Date.now()
    
    // 初始移动目标
    moveTarget()
    
    // 清除可能存在的旧定时器
    if (comboTimerRef.current) {
      clearTimeout(comboTimerRef.current)
    }
  }

  // 结束游戏
  const endGame = () => {
    setGameActive(false)
    
    // 更新最佳成绩
    if (score > bestScore) {
      setBestScore(score)
      localStorage.setItem('bestScore', score.toString())
    }
  }

  // 处理目标点击
  const handleTargetClick = () => {
    if (!gameActive) return
    
    // 更新分数和击中次数
    const newScore = score + 1 + Math.floor(comboCount / 5) // 每5连击额外加1分
    setScore(newScore)
    setHitCount(prev => prev + 1)
    
    // 检查是否升级
    if (newScore >= level * gameSettings[gameMode].levelUp) {
      setLevel(prev => prev + 1)
    }
    
    // 更新连击数
    setComboCount(prev => prev + 1)
    
    // 重置连击计时器
    if (comboTimerRef.current) {
      clearTimeout(comboTimerRef.current)
    }
    comboTimerRef.current = setTimeout(() => {
      setComboCount(0)
    }, 1000)
    
    // 移动目标
    moveTarget()
  }

  // 处理容器点击（未击中）
  const handleContainerClick = (e) => {
    if (gameActive && e.target === gameContainerRef.current) {
      setMissCount(prev => prev + 1)
    }
  }

  // 计时器
  useEffect(() => {
    let timerId
    
    if (gameActive && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (gameActive && timeLeft === 0 && gameMode !== 'endless') {
      endGame()
    }
    
    return () => {
      if (timerId) clearInterval(timerId)
    }
  }, [gameActive, timeLeft, gameMode])

  // 目标移动计时器
  useEffect(() => {
    let moveTimerId
    
    if (gameActive) {
      const moveSpeed = Math.max(200, gameSettings[gameMode].speed - (level - 1) * 50) // 随等级增加速度
      moveTimerId = setInterval(() => {
        moveTarget()
      }, moveSpeed)
    }
    
    return () => {
      if (moveTimerId) clearInterval(moveTimerId)
    }
  }, [gameActive, gameMode, level])

  // 清理定时器
  useEffect(() => {
    return () => {
      if (comboTimerRef.current) {
        clearTimeout(comboTimerRef.current)
      }
    }
  }, [])

  // 游戏时长计算
  const getGameDuration = () => {
    if (!gameStartTimeRef.current) return 0
    return Math.floor((Date.now() - gameStartTimeRef.current) / 1000)
  }

  // 计算命中率
  const getHitRate = () => {
    const totalAttempts = hitCount + missCount
    return totalAttempts > 0 ? Math.round((hitCount / totalAttempts) * 100) : 0
  }

  return (
    <div className="beat-nolan-page">
      <h1>暴打乔纳森·诺兰</h1>
      <p className="game-description">
        在限定时间内，尽情点击那个让你烧脑的"罪魁祸首"！随着关卡提升，目标会变得更快更难击中！
      </p>
      
      {/* UI显示 */}
      <div className="game-ui">
        <div className="ui-item">
          时间: <span>{gameMode === 'endless' ? getGameDuration() + '秒' : timeLeft}秒</span>
        </div>
        <div className="ui-item">
          分数: <span>{score}</span>
        </div>
        <div className="ui-item">
          关卡: <span>{level}</span>
        </div>
        <div className="ui-item">
          最佳成绩: <span>{bestScore}</span>
        </div>
      </div>
      
      {/* 连击显示 */}
      <AnimatePresence>
        {comboCount > 1 && (
          <motion.div 
            className="combo-display"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            连击！x{comboCount}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 游戏消息 */}
      {!gameActive && (
        <div className="game-message">
          {score > 0 ? (
            <div>
              <p>游戏结束！</p>
              <p>最终得分：{score}，达到了第{level}关</p>
              <p>游戏时长：{getGameDuration()}秒</p>
              <p>命中率：{getHitRate()}%</p>
              <p>最佳成绩：{bestScore}</p>
            </div>
          ) : (
            <p>点击开始游戏，选择您喜欢的游戏模式！</p>
          )}
        </div>
      )}
      
      {/* 游戏容器 */}
      <div 
        ref={gameContainerRef}
        className="game-container"
        onClick={handleContainerClick}
      >
        {/* 目标 */}
        <motion.div
          ref={targetRef}
          className="target"
          style={{ 
            left: `${targetPosition.x}px`, 
            top: `${targetPosition.y}px`
          }}
          onClick={handleTargetClick}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.8, rotate: -5 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: gameActive ? 1 : 0, scale: gameActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="/images/nolan.jpg" 
            alt="乔纳森·诺兰"
          />
        </motion.div>
      </div>
      
      {/* 游戏按钮 */}
      <div className="game-buttons">
        {!gameActive ? (
          <>
            <motion.button
              className="start-button"
              onClick={() => setShowDifficulty(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              开始游戏！
            </motion.button>
            <motion.button
              className="restart-button"
              onClick={startGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              再玩一次？
            </motion.button>
          </>
        ) : (
          <motion.button
            className="stop-button"
            onClick={endGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            结束游戏
          </motion.button>
        )}
      </div>
      
      {/* 难度选择覆盖层 */}
      <AnimatePresence>
        {showDifficulty && (
          <motion.div 
            className="game-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="difficulty-selection">
              <h2>选择游戏模式</h2>
              <div className="difficulty-buttons">
                <motion.button
                  className="difficulty-btn easy"
                  onClick={() => { setGameMode('normal'); startGame(); }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  经典模式
                </motion.button>
                <motion.button
                  className="difficulty-btn medium"
                  onClick={() => { setGameMode('timed'); startGame(); }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  限时挑战
                </motion.button>
                <motion.button
                  className="difficulty-btn hard"
                  onClick={() => { setGameMode('endless'); startGame(); }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  无限模式
                </motion.button>
              </div>
              <motion.button
                className="close-button"
                onClick={() => setShowDifficulty(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                取消
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 游戏模式提示 */}
      {gameActive && (
        <div className="game-mode-indicator">
          当前模式：{MODE_NAMES[gameMode]}
        </div>
      )}
    </div>
  )
}

export default BeatNolan