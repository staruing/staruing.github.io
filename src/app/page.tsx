'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href')!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    // Add some interactive effects
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('link-btn')) {
        if (e.type === 'mouseenter') {
          target.style.transform = 'translateY(-3px) scale(1.05)';
        } else {
          target.style.transform = 'translateY(0) scale(1)';
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    document.addEventListener('mouseenter', handleLinkHover);
    document.addEventListener('mouseleave', handleLinkHover);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('mouseenter', handleLinkHover);
      document.removeEventListener('mouseleave', handleLinkHover);
    };
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <Image 
          src="/images/profile.png" 
          alt="별으잉 프로필" 
          width={150} 
          height={150}
          className="profile-img"
        />
        <h1 className="name">별으잉 ⭐</h1>
        <p className="tagline">방송하는 족제비 별으잉</p>
        
        <nav className="nav">
          <a href="#about" className="nav-btn">소개</a>
          <a href="#schedule" className="nav-btn">방송일정</a>
          <a href="#links" className="nav-btn">링크</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>으잉이 소개</h2>
        <div className="about-content">
          <div className="about-text">
            <p>평일 1시, 저녁먹고, 또는 주말 중에 출몰 주의 크ㅇ앙</p>
            <p>주요 컨텐츠는 <strong>메이플스토리</strong>입니다! 🍁</p>
            <p>언제든지 편하게 놀러와주세요! ✨</p>
          </div>
          <div className="profile-info">
            <div className="info-item">
              <div className="info-label">프사</div>
              <div className="info-value">별으잉</div>
            </div>
            <div className="info-item">
              <div className="info-label">종족</div>
              <div className="info-value">족제비</div>
            </div>
            <div className="info-item">
              <div className="info-label">생일</div>
              <div className="info-value">1925년 1월 23일</div>
            </div>
            <div className="info-item">
              <div className="info-label">방송 시작</div>
              <div className="info-value">2025년 6월 28일</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section">
        <h2>방송 일정</h2>
        <div className="schedule-grid">
          <div className="schedule-item">
            <div className="schedule-day">평일</div>
            <div className="schedule-time">오후 1시 ~ 2시</div>
          </div>
          <div className="schedule-item">
            <div className="schedule-day">평일 저녁</div>
            <div className="schedule-time">사전 고지 후</div>
          </div>
          <div className="schedule-item">
            <div className="schedule-day">주말</div>
            <div className="schedule-time">사전 고지 후</div>
          </div>
          <div className="schedule-item">
            <div className="schedule-day">가끔</div>
            <div className="schedule-time">심심할 때</div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="section">
        <h2>링크</h2>
        <div className="links-buttons">
          <a href="https://chzzk.naver.com/9dae12aba137c65ba5c5f5158be2bbcb" target="_blank" rel="noopener noreferrer" className="link-btn">
            <i className="fas fa-video"></i>
            치지직
          </a>
          <a href="https://www.youtube.com/@StarUing" target="_blank" rel="noopener noreferrer" className="link-btn">
            <i className="fab fa-youtube"></i>
            유튜브
          </a>
          <a href="https://discord.gg/YdEbFNuYRA" target="_blank" rel="noopener noreferrer" className="link-btn">
            <i className="fab fa-discord"></i>
            디스코드
          </a>
          <a href="https://cafe.naver.com/staruing" target="_blank" rel="noopener noreferrer" className="link-btn">
            <i className="fas fa-coffee"></i>
            네이버 카페
          </a>
        </div>
      </section>
    </div>
  );
}
