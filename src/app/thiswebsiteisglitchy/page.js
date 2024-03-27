'use client';

import React from 'react';
import { useState, useEffect } from 'react';

const Page = () => {
  const [secretKey, setSecretKey] = useState(
    localStorage.getItem('secretkey') || 'level1'
  );

  useEffect(() => {
    // Check if secretKey is 'level1' only on initial render
    if (secretKey === 'level1') {
      localStorage.setItem('secretkey', 'level2');
      console.log('Level 1: Setting secretKey to level2');
    }
    if (secretKey === 'level3') {
        window.location.replace('https://treasurehunt-nitgoa.vercel.app/youarecloser');
        console.log('Level 2: Redirecting to /youareclose');
      }
      if (secretKey === 'level4') {
        window.location.replace('https://treasurehunt-nitgoa.vercel.app/youknowwhattodonext');
        console.log('Level 2: Redirecting to /youareclose');
      }
      if (secretKey === 'level5') {
        window.location.replace('https://treasurehunt-nitgoa.vercel.app/congratulation');
        console.log('Level 2: Redirecting to /youareclose');
      }
  }, [/* empty dependency array */]);

  useEffect(() => {
    // Redirect based on secretKey, but only once after setting level2
    if (secretKey === 'level2') {
      window.location.replace('https://treasurehunt-nitgoa.vercel.app/youareclose');
      console.log('Level 2: Redirecting to /youareclose');
    }
  }, [secretKey]); // Only re-run if secretKey changes

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This site seems glitchy. Try something!</h1>
    </div>
  );
};

export default Page;
