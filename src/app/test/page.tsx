import React from 'react';
import Lottie from 'lottie-react';
import HeroAnimation from '@/assets/animations/Hero.json';

export default function TestPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Тест анимации Hero</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Hero Animation</h2>
        <div style={{ width: '600px', height: '400px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
          <Lottie
            animationData={HeroAnimation}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Debug Info:</h3>
        <p>Animation file size: {JSON.stringify(HeroAnimation).length} bytes</p>
        <p>Animation type: {typeof HeroAnimation}</p>
        <p>Animation keys: {Object.keys(HeroAnimation || {}).join(', ')}</p>
      </div>
    </div>
  );
}
