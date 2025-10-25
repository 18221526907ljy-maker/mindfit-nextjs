"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800", className)}>
      {children}
    </nav>
  );
};

export const NavBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("hidden md:flex items-center justify-between px-8 py-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export const NavItems = ({ items, className }: { items: { name: string; link: string }[]; className?: string }) => {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      {items.map((item, idx) => (
        
          key={`nav-item-${idx}`}
          href={item.link}
          className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export const NavbarLogo = ({ className }: { className?: string }) => {
  return (
    <a href="/" className={cn("text-2xl font-bold text-blue-600 dark:text-blue-400", className)}>
      MindFit
    </a>
  );
};

export const NavbarButton = ({ 
  children, 
  variant = "primary",
  onClick,
  className 
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-transparent text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
  };

  return (
    <button 
      onClick={onClick}
      className={cn("px-6 py-2 rounded-lg font-medium transition", variants[variant], className)}
    >
      {children}
    </button>
  );
};

export const MobileNav = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("md:hidden", className)}>
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex items-center justify-between px-4 py-4", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ 
  isOpen, 
  onClick,
  className 
}: { 
  isOpen: boolean; 
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button 
      onClick={onClick}
      className={cn("p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg", className)}
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
};

export const MobileNavMenu = ({ 
  children, 
  isOpen,
  onClose,
  className 
}: { 
  children: React.ReactNode; 
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className={cn("px-4 py-6 space-y-4 border-t border-neutral-200 dark:border-neutral-800", className)}>
      {children}
    </div>
  );
};
```

4. 点击 **"Commit changes"**

---

## 📋 确认检查清单：

请确保您已经创建了以下所有文件：
```
mindfit-nextjs/
├── components/
│   ├── ui/
│   │   └── resizable-navbar.tsx  ⬅️ 刚刚创建这个
│   ├── Navbar.tsx                ✅
│   ├── Hero.tsx                  ✅
│   ├── FeatureCarousel.tsx       ✅
│   └── Footer.tsx                ✅
├── lib/
│   └── utils.ts                  ✅
├── app/
│   └── page.tsx
└── package.json                  ✅
