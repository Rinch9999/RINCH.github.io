// 主JavaScript文件 - 包含网站的核心功能

/**
 * DOM加载完成后执行的代码
 */
document.addEventListener('DOMContentLoaded', function() {
    // 初始化媒体轮播
    initSlider();
    
    // 初始化回到顶部/上一页按钮
    initBackToTop();
    
    // 初始化图片懒加载
    initLazyLoading();
});

/**
 * 初始化媒体轮播功能
 */
function initSlider() {
    const sliderContainer = document.querySelector('#media-container .slider');
    if (!sliderContainer) return;
    
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!slides.length || !dotsContainer || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // 确保轮播容器和slide有正确的样式
    sliderContainer.style.width = '100%';
    sliderContainer.style.height = '400px'; // 设置固定高度
    sliderContainer.style.position = 'relative';
    sliderContainer.style.overflow = 'hidden';
    
    slides.forEach((slide, index) => {
        slide.style.position = 'absolute';
        slide.style.top = '0';
        slide.style.left = '0';
        slide.style.width = '100%';
        slide.style.height = '100%';
        slide.style.opacity = index === 0 ? '1' : '0';
        slide.style.transition = 'opacity 0.5s ease';
        
        // 确保图片样式正确并立即显示
        const img = slide.querySelector('img');
        if (img) {
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';
            img.style.objectFit = 'cover';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.opacity = '1'; // 直接显示图片，不使用懒加载逻辑
            img.removeAttribute('loading'); // 移除懒加载属性
            img.removeAttribute('data-src'); // 移除data-src属性，因为直接使用src
        }
    });
    
    // 设置活动指示点
    function setActiveDot(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
                dot.setAttribute('aria-selected', 'true');
                dot.setAttribute('tabindex', '0');
            } else {
                dot.classList.remove('active');
                dot.setAttribute('aria-selected', 'false');
                dot.setAttribute('tabindex', '-1');
            }
        });
    }
    
    // 滑动到指定索引
    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentSlide = index;
        
        // 更新slide可见性
        slides.forEach((slide, i) => {
            slide.style.opacity = i === currentSlide ? '1' : '0';
            slide.classList.toggle('active', i === currentSlide);
        });
        
        // 更新指示点状态
        setActiveDot(currentSlide);
    }
    
    // 绑定按钮事件
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    
    // 绑定指示点点击事件
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
        
        // 添加键盘事件
        dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToSlide(index);
            }
        });
    });
    
    // 自动播放
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 4000); // 4秒自动切换
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // 开始自动播放
    startAutoplay();
    
    // 鼠标悬停时暂停自动播放
    sliderContainer.addEventListener('mouseenter', stopAutoplay);
    sliderContainer.addEventListener('mouseleave', startAutoplay);
    
    // 初始化第一张幻灯片
    goToSlide(0);
}

/**
 * 初始化回到顶部/上一页功能
 */
function initBackToTop() {
    // 此函数目前未被使用，因为backToTop按钮仅在特定页面出现
    // 保留函数结构，以便未来扩展
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.history.back();
        });
    }
}

/**
 * 初始化图片懒加载
 */
function initLazyLoading() {
    // 直接加载轮播图片（优先处理轮播图）
    const carouselImages = document.querySelectorAll('#media-container .slide img');
    carouselImages.forEach(img => {
        // 移除懒加载属性，确保轮播图图片立即加载
        img.removeAttribute('loading');
        img.removeAttribute('data-src');
        
        // 确保图片样式正确
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.objectFit = 'cover';
        img.style.opacity = '1';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.transition = 'opacity 0.5s ease';
    });
    
    // 检查浏览器是否原生支持懒加载
    if ('loading' in HTMLImageElement.prototype) {
        // 浏览器原生支持懒加载，使用HTML属性即可，无需额外JS
        console.log('使用浏览器原生懒加载');
    } else {
        // 浏览器不支持原生懒加载，使用Intersection Observer进行懒加载
        console.log('使用Intersection Observer懒加载');
        
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    
                    // 仅处理有data-src且没有src的图片
                    if (lazyImage.dataset.src && !lazyImage.src) {
                        // 设置图片源
                        lazyImage.src = lazyImage.dataset.src;
                        
                        lazyImage.onload = () => {
                            lazyImage.classList.add('lazy-loaded');
                            lazyImage.style.opacity = '1';
                            lazyImageObserver.unobserve(lazyImage);
                        };
                        
                        lazyImage.onerror = () => {
                            console.error('Failed to load image:', lazyImage.dataset.src);
                            lazyImage.classList.add('lazy-load-error');
                            lazyImage.style.opacity = '1';
                            lazyImageObserver.unobserve(lazyImage);
                        };
                    }
                }
            });
        }, {
            rootMargin: '100px 0px',
            threshold: 0.01
        });

        // 观察所有有data-src属性的非轮播图片
        const lazyImages = document.querySelectorAll('img[data-src]:not(#media-container img)');
        lazyImages.forEach(img => {
            lazyImageObserver.observe(img);
        });
    }
}

/**
 * 辅助函数：添加类
 */
function addClass(element, className) {
    if (element && !element.classList.contains(className)) {
        element.classList.add(className);
    }
}

/**
 * 辅助函数：移除类
 */
function removeClass(element, className) {
    if (element && element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

/**
 * 辅助函数：切换类
 */
function toggleClass(element, className) {
    if (element) {
        element.classList.toggle(className);
    }
}