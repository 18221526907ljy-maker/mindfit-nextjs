'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-body">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <i className="fa fa-heartbeat text-white"></i>
            </div>
            <span className="navbar-logo-text">MindFit</span>
          </Link>
          
          {/* Desktop Navigation Items */}
          <div className="navbar-items">
            <Link href="/assessment-test" className="navbar-link">评估</Link>
            <Link href="/daily-practice" className="navbar-link">练习</Link>
            <Link href="/practice-records" className="navbar-link">记录</Link>
            <Link href="/body-neutrality" className="navbar-link">理论</Link>
          </div>
          
          {/* Desktop Buttons */}
          <div className="navbar-buttons">
            <Link href="/profile" className="navbar-button navbar-button-primary">
              个人中心
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div 
            className={`mobile-nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link href="/assessment-test" className="mobile-nav-link" onClick={closeMobileMenu}>
            评估测试
          </Link>
          <Link href="/daily-practice" className="mobile-nav-link" onClick={closeMobileMenu}>
            日常练习
          </Link>
          <Link href="/practice-records" className="mobile-nav-link" onClick={closeMobileMenu}>
            练习记录
          </Link>
          <Link href="/body-neutrality" className="mobile-nav-link" onClick={closeMobileMenu}>
            身体中立
          </Link>
          
          <div className="mobile-nav-buttons">
            <Link 
              href="/profile" 
              className="navbar-button navbar-button-primary mobile-nav-button"
              onClick={closeMobileMenu}
            >
              个人中心
            </Link>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .navbar-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
        }
        
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: transform 0.2s ease;
          text-decoration: none;
        }
        
        .navbar-logo:hover {
          transform: scale(1.05);
        }
        
        .navbar-logo-icon {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: #4A6157;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .navbar-logo-text {
          font-size: 1.125rem;
          font-weight: 700;
          color: #4A6157;
        }
        
        .navbar-items {
          display: none;
          gap: 2rem;
        }
        
        @media (min-width: 1024px) {
          .navbar-items {
            display: flex;
          }
        }
        
        .navbar-link {
          font-size: 1rem;
          font-weight: 600;
          color: #4A6157;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }
        
        .navbar-link:hover {
          color: #8FD9A8;
        }
        
        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #8FD9A8;
          transition: width 0.3s ease;
        }
        
        .navbar-link:hover::after {
          width: 100%;
        }
        
        .navbar-buttons {
          display: none;
          align-items: center;
          gap: 1rem;
        }
        
        @media (min-width: 1024px) {
          .navbar-buttons {
            display: flex;
          }
        }
        
        .navbar-button {
          padding: 0.5rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          text-decoration: none;
          display: inline-block;
        }
        
        .navbar-button-primary {
          background: #4A6157;
          color: white;
        }
        
        .navbar-button-primary:hover {
          background: #8FD9A8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(74, 97, 87, 0.3);
        }
        
        .mobile-nav-toggle {
          display: flex;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        @media (min-width: 1024px) {
          .mobile-nav-toggle {
            display: none;
          }
        }
        
        .mobile-nav-toggle span {
          width: 24px;
          height: 2px;
          background: #4A6157;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        
        .mobile-nav-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-nav-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-nav-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        
        .mobile-nav-menu {
          display: none;
          position: fixed;
          top: 73px;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          animation: slideDown 0.3s ease;
        }
        
        @media (min-width: 1024px) {
          .mobile-nav-menu {
            display: none !important;
          }
        }
        
        .mobile-nav-menu.active {
          display: block;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-nav-link {
          display: block;
          padding: 1rem;
          color: #4A6157;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
          border-radius: 0.5rem;
        }
        
        .mobile-nav-link:hover {
          background: #f0faf5;
          color: #8FD9A8;
        }
        
        .mobile-nav-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .mobile-nav-button {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
}
