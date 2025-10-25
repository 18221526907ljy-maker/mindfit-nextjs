'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Hero() {
  const router = useRouter();

  const navigateToAssessment = () => {
    router.push('/assessment-test');
  };

  return (
    <>
      <div className="relative isolate px-6 lg:px-8 hero-gradient" style={{ paddingTop: '90px' }}>
        <div aria-hidden="true" className="smoke-blur smoke-1"></div>
        <div aria-hidden="true" className="smoke-blur smoke-2"></div>
        <div aria-hidden="true" className="smoke-blur smoke-3"></div>
        <div aria-hidden="true" className="smoke-blur smoke-4"></div>
        <div aria-hidden="true" className="smoke-blur smoke-5"></div>
        
        {/* 桌面端 Hero */}
        <div className="hidden lg:block relative mx-auto max-w-7xl py-32 lg:py-40 hero-content">
          <div className="flex items-center gap-x-16">
            <div className="flex-1 fade-in-up">
              <div className="mb-8">
                <div className="announcement-badge inline-block rounded-full px-4 py-1.5 text-sm text-primary">
                  探索身心健康的全新旅程 
                  <Link href="/body-neutrality" className="font-semibold text-accent hover:text-mint ml-2">
                    了解更多 <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              
              <h1 className="hero-title-desktop font-bold tracking-tight leading-tight mb-6">
                科学管理身心<br />
                <span className="title-black">告别身材焦虑</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-content max-w-xl">
                平台提供个性化推荐、心理干预和身体管理工具，帮助用户缓解心理管身材焦虑
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button 
                  onClick={navigateToAssessment}
                  className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary transition-all hover:scale-105"
                >
                  开始探索
                </button>
                <Link 
                  href="/body-neutrality"
                  className="text-sm font-semibold leading-6 text-primary hover:text-mint transition-colors"
                >
                  了解更多 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 logo-container fade-in-up flex justify-center" style={{ animationDelay: '0.3s' }}>
              <Image
                src="/images/4628bfc1e3354401744b6bcf8a6e267.jpg"
                alt="MindFit Logo"
                width={384}
                height={384}
                className="logo-desktop"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* 移动端 Hero - 左文右图横向布局 */}
        <div className="lg:hidden relative mx-auto max-w-4xl py-16 sm:py-24 hero-content">
          {/* 通知徽章 */}
          <div className="flex justify-center mb-6 fade-in-up px-4">
            <div className="announcement-badge rounded-full px-3 py-1 text-xs text-primary">
              探索身心健康的全新旅程 
              <Link href="/body-neutrality" className="font-semibold text-accent hover:text-mint ml-1">
                了解更多 <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          
          {/* 左文右图横向布局 */}
          <div className="flex items-center gap-4 px-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* 左侧文字内容 */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-3 text-left" style={{ color: '#2d3e36' }}>
                科学管理身心<br />
                <span style={{ color: '#000000' }}>告别身材焦虑</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-content mb-4 text-left">
                平台提供个性化推荐、心理干预和身体管理工具，帮助用户缓解心理管身材焦虑
              </p>
              <div className="flex items-center gap-3">
                <button 
                  onClick={navigateToAssessment}
                  className="rounded-md bg-accent px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-primary transition-all"
                >
                  开始探索
                </button>
                <Link 
                  href="/body-neutrality"
                  className="text-xs sm:text-sm font-semibold text-primary hover:text-mint transition-colors whitespace-nowrap"
                >
                  了解更多 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            {/* 右侧 Logo */}
            <div className="logo-container flex-shrink-0">
              <Image
                src="/images/4628bfc1e3354401744b6bcf8a6e267.jpg"
                alt="MindFit Logo"
                width={120}
                height={120}
                className="logo-mobile"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-gradient {
          background: #F5F3EE;
          position: relative;
          overflow: hidden;
        }
        
        .smoke-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.25;
          animation: float 25s ease-in-out infinite;
          pointer-events: none;
        }
        
        .smoke-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(143, 217, 168, 0.4) 0%, rgba(143, 217, 168, 0.1) 50%, transparent 100%);
          top: -100px;
          left: -150px;
          animation-delay: 0s;
        }
        
        .smoke-2 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(195, 230, 203, 0.5) 0%, rgba(195, 230, 203, 0.15) 50%, transparent 100%);
          top: 20%;
          right: -200px;
          animation-delay: 7s;
        }
        
        .smoke-3 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(143, 217, 168, 0.35) 0%, rgba(143, 217, 168, 0.08) 50%, transparent 100%);
          bottom: 10%;
          left: 20%;
          animation-delay: 14s;
        }
        
        .smoke-4 {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(174, 223, 186, 0.4) 0%, rgba(174, 223, 186, 0.12) 50%, transparent 100%);
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 21s;
        }
        
        .smoke-5 {
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(143, 217, 168, 0.3) 0%, rgba(143, 217, 168, 0.1) 50%, transparent 100%);
          bottom: -100px;
          right: 10%;
          animation-delay: 28s;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
          }
          25% { 
            transform: translate(40px, -40px) scale(1.05);
          }
          50% { 
            transform: translate(-30px, 30px) scale(0.95);
          }
          75% { 
            transform: translate(20px, -20px) scale(1.02);
          }
        }
        
        .logo-container :global(img) {
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(74, 97, 87, 0.15);
          animation: logoFloat 4s ease-in-out infinite;
          object-fit: cover;
        }
        
        :global(.logo-desktop) {
          width: 384px !important;
          height: 384px !important;
        }
        
        :global(.logo-mobile) {
          width: 120px !important;
          height: 120px !important;
        }
        
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
        }
        
        .hero-title-desktop {
          color: #2d3e36;
          font-size: 3.5rem;
          line-height: 1.1;
          text-align: left;
        }
        
        .title-black {
          color: #000000;
        }
        
        @media (min-width: 1024px) {
          .hero-title-desktop {
            font-size: 4.5rem;
          }
        }
        
        .announcement-badge {
          background: rgba(143, 217, 168, 0.2);
          border: 1px solid rgba(143, 217, 168, 0.4);
          backdrop-filter: blur(10px);
        }
        
        @media (max-width: 1023px) {
          .smoke-1, .smoke-2, .smoke-3, .smoke-4, .smoke-5 {
            width: 350px;
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}
