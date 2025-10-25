'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Recommendations() {
  const router = useRouter();

  const recommendations = [
    {
      id: 1,
      icon: 'fa-search',
      iconBg: 'bg-primary',
      title: '想了解自己的身心状态？',
      onClick: () => router.push('/assessment-test'),
    },
    {
      id: 2,
      icon: 'fa-leaf',
      iconBg: 'bg-mint',
      title: '如何建立健康的身体观念？',
      onClick: () => router.push('/daily-practice'),
    },
    {
      id: 3,
      icon: 'fa-book',
      iconBg: 'bg-accent',
      title: '什么是身体中立理念？',
      onClick: () => window.open('/body-neutrality', '_blank'),
    },
    {
      id: 4,
      icon: 'fa-chart-line',
      iconBg: 'bg-blue-500',
      title: '查看我的练习记录和进展？',
      onClick: () => router.push('/practice-records'),
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">个性化推荐</h2>
            <p className="text-content text-lg">基于您的需求，为您推荐合适的内容</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-all"
                onClick={item.onClick}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <i className={`fa ${item.icon} text-white text-lg`}></i>
                    </div>
                    <span className="text-primary font-medium">{item.title}</span>
                  </div>
                  <i className="fa fa-chevron-right text-gray-400"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
