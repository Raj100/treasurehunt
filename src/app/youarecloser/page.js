'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [secretKey, setSecretKey] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('secretkey') || 'level1'
      : 'level1'
  );

  useEffect(() => {
    // Update secretKey based on current level (on client-side)
    if (typeof window !== 'undefined') {
      switch (secretKey) {
        case 'level1':
          localStorage.setItem('secretkey', 'level2');
          console.log('Level 1: Setting secretKey to level2');
          break;
        case 'level2':
          localStorage.setItem('secretkey', 'level3');
          console.log('Level 2: Setting secretKey to level3');
          break;
        case 'level3':
          localStorage.setItem('secretkey', 'level4');
          console.log('Level 3: Setting secretKey to level4');
          break;
        default:
          break;
      }
    }
  }, [secretKey]); // Run only when secretKey changes

  useEffect(() => {
    // Handle redirections based on secretKey (on client-side)
    if (typeof window !== 'undefined') {
      if (secretKey === 'level4') {
        window.location.replace('https://treasurehunt-eta.vercel.app/youknowwhattodonext');
      } else if (secretKey === 'level5') {
        window.location.replace('https://treasurehunt-eta.vercel.app/congratulation');
      }
    }
  }, [secretKey]); // Run only when secretKey changes

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Level 3 yeah!</h1>
    </div>
  );
};

export default Page;
