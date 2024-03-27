'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [secretKey, setSecretKey] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('secretkey') || 'level1'
      : 'level1'
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Update secretKey based on current level and handle redirections (client-side only)
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
        case 'level4':
          localStorage.setItem('secretkey', 'level5');
          console.log('Level 4: Setting secretKey to level5');
          break;
        case 'level5':
          window.location.replace('https://treasurehunt-eta.vercel.app/congratulation');
          console.log('Level 5: Redirecting to /congratulation');
          break;
        default:
          break;
      }
    }
  }, [secretKey]); // Only re-run when secretKey changes

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Level 4 yeah!</h1>
    </div>
  );
};

export default Page;
