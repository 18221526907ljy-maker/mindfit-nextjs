import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <i className="fa fa-heartbeat text-white"></i>
            </div>
            <span className="text-xl font-bold text-primary">MindFit</span>
          </div>
          <p className="text-gray-600 text-sm">科学管理身心，告别身材焦虑</p>
          <p className="text-gray-500 text-xs mt-4">© 2024 MindFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
