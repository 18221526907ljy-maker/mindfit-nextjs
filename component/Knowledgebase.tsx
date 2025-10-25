'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function KnowledgeBase() {
  const router = useRouter();

  const knowledgeCards = [
    {
      id: 1,
      title: '身体中立基础',
      description: '了解身体中立的核心理念',
      image: '/images/身体中立基础.jpg',
      buttonText: '开始学习',
      buttonColor: 'bg-primary hover:bg-primary/90',
      link: '/body-neutrality-basics',
    },
    {
      id: 2,
      title: '实践方法',
      description: '日常生活中的身体中立练习',
      image: '/images/实践方法.jpg',
      buttonText: '开始练习',
      buttonColor: 'bg-mint hover:bg-mint/90',
      link: '/practice-methods',
    },
    {
      id: 3,
      title: '科学研究',
      description: '相关心理学研究和证据',
      image: '/images/科学研究.jpg',
      buttonText: '查看研究',
      buttonColor: 'bg-accent hover:bg-accent/90',
      link: '/scientific-research',
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              身体中立知识库
            </h2>
            <p className="text-content text-lg">
              科学理论支撑，帮助建立健康的身体认知
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {knowledgeCards.map((card) => (
              <div key={card.id} className="card-container">
                <div
                  className="card-body knowledge-3d-card rounded-xl p-6 border cursor-pointer"
                  onClick={() => router.push(card.link)}
                >
                  <div className="card-item card-item-50">
                    <h3 className="text-xl font-bold text-primary">{card.title}</h3>
                  </div>
                  <div className="card-item card-item-60">
                    <p className="text-content text-sm max-w-sm mt-2">
                      {card.description}
                    </p>
                  </div>
                  <div className="card-item card-item-100 mt-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={400}
                      height={240}
                      className="h-60 w-full object-cover rounded-xl hover:shadow-xl transition-shadow"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="card-item card-item-20">
                      <span className="text-xs font-normal text-primary">
                        探索更多 →
                      </span>
                    </div>
                    <div className="card-item card-item-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(card.link);
                        }}
                        className={`px-4 py-2 rounded-xl text-white text-xs font-bold transition-colors ${card.buttonColor}`}
                      >
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .card-container {
          perspective: 1000px;
        }
        
        .card-body {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .card-container:hover .card-body {
          transform: rotateY(5deg) rotateX(5deg);
        }
        
        .card-item {
          transform-style: preserve-3d;
        }
        
        .card-item-50 {
          transform: translateZ(50px);
        }
        
        .card-item-60 {
          transform: translateZ(60px);
        }
        
        .card-item-100 {
          transform: translateZ(100px);
        }
        
        .card-item-20 {
          transform: translateZ(20px);
        }
        
        .knowledge-3d-card {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .knowledge-3d-card:hover {
          box-shadow: 0 20px 60px rgba(74, 97, 87, 0.2);
        }
      `}</style>
    </>
  );
}
