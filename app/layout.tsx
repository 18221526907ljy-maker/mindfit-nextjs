import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MindFit - 科学管理身心，告别身材焦虑',
  description: '平台提供个性化推荐、心理干预和身体管理工具，帮助用户缓解心理管身材焦虑',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
