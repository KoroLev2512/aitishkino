import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  // Включаем строгий режим React
  reactStrictMode: true,
  turbopack: {
    rules: {
      '**/*.lottie': [
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    },
  },
  
  // Настройка алиасов путей
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    config.module.rules.push({
      test: /\.lottie$/,
      type: 'asset/resource',
    });

    return config;
  },
  
  // Оптимизация изображений
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true,
  },
  
  // Настройки для экспорта статического сайта
  output: 'export',
  
  // Отключаем проверку ESLint при сборке
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Отключаем проверку типов TypeScript при сборке
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;