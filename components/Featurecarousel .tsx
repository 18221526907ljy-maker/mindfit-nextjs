'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const cards = [
    {
      id: 1,
      title: '了解自己',
      description: '通过各种帮助信任认知当下的自己',
      image: '/images/了解自己.jpg',
      buttonText: '开始评估',
      onClick: () => router.push('/assessment-test'),
    },
    {
      id: 2,
      title: '日常练习',
      description: '培养健康生活习惯的时候解决伴随紧张感',
      image: '/images/日常练习.jpg',
      buttonText: '开始练习',
      onClick: () => router.push('/daily-practice'),
    },
    {
      id: 3,
      title: '深度工具',
      description: '通过心理干预或深入了解内心',
      image: '/images/深度工具.jpg',
      buttonText: '探索工具',
      onClick: () => router.push('/cbt-tools'),
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      startAutoplay();
    } else {
      stopAutoplay();
      setCurrentSlide(0);
    }

    return () => stopAutoplay();
  }, [isMobile]);

  const startAutoplay = () => {
    if (autoplayRef.current) return;
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const resetAutoplay = () => {
    if (isMobile) {
      stopAutoplay();
      startAutoplay();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.changedTouches[0].screenX;
    (e.currentTarget as HTMLElement).dataset.touchStartX = touchStartX.toString();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchStartX = parseFloat((e.currentTarget as HTMLElement).dataset.touchStartX || '0');
    const touchEndX = e.changedTouches[0].screenX;

    if (touchEndX < touchStartX - 50) {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
      resetAutoplay();
    }
    if (touchEndX > touchStartX + 50) {
      setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
      resetAutoplay();
    }
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-center">
            探索您的身心健康之旅
          </h2>
          <p className="text-center text-content text-lg mb-12">
            选择适合您的工具，开始改变
          </p>
          
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: isMobile ? `translateX(-${currentSlide * (280 + 32)}px)` : 'translateX(0)',
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="carousel-card"
                  onClick={card.onClick}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={350}
                    height={250}
                    className="carousel-card-image"
                  />
                  <div className="carousel-card-content">
                    <div className="carousel-card-icon">
                      <Image
                        src={card.image}
                        alt={`${card.title}图标`}
                        width={80}
                        height={80}
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                    <h3 className="carousel-card-title">{card.title}</h3>
                    <p className="carousel-card-description">{card.description}</p>
                    <button className="carousel-card-button">{card.buttonText}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 轮播导航点 */}
          {isMobile && (
            <div className="carousel-nav">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 2rem 0;
        }
        
        .carousel-track {
          display: flex;
          gap: 2rem;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 2rem;
        }
        
        @media (min-width: 1024px) {
          .carousel-track {
            justify-content: center;
            transform: none !important;
          }
        }
        
        .carousel-card {
          min-width: 350px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          flex-shrink: 0;
        }
        
        @media (min-width: 1024px) {
          .carousel-card {
            flex: 1;
            max-width: 400px;
          }
          
          .carousel-card:hover {
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          }
        }
        
        @media (max-width: 1023px) {
          .carousel-card:hover {
            transform: scale(1.05) translateY(-8px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          }
        }
        
        .carousel-card :global(.carousel-card-image) {
          width: 100%;
          height: 250px;
          object-fit: cover;
          background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
        }
        
        .carousel-card-content {
          padding: 2rem;
          text-align: center;
        }
        
        .carousel-card-icon {
          width: 80px;
          height: 80px;
          margin: -60px auto 1.5rem;
          border-radius: 1.25rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          position: relative;
          z-index: 10;
        }
        
        .carousel-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4A6157;
          margin-bottom: 0.75rem;
        }
        
        .carousel-card-description {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .carousel-card-button {
          width: 100%;
          padding: 0.875rem;
          background: white;
          border: 2px solid #4A6157;
          color: #4A6157;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .carousel-card-button:hover {
          background: #8FD9A8;
          border-color: #8FD9A8;
          color: white;
          transform: translateY(-2px);
        }
        
        .carousel-nav {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        @media (min-width: 1024px) {
          .carousel-nav {
            display: none;
          }
        }
        
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .carousel-dot.active {
          width: 24px;
          border-radius: 4px;
          background: #4A6157;
        }
        
        @media (max-width: 768px) {
          .carousel-card {
            min-width: 280px;
          }
          
          .carousel-card :global(.carousel-card-image) {
            height: 200px;
          }
          
          .carousel-card-icon {
            width: 64px;
            height: 64px;
            margin-top: -50px;
          }
          
          .carousel-card-title {
            font-size: 1.25rem;
          }
          
          .carousel-card-description {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
}
