'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [secretKey, setSecretKey] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('secretkey') || 'level1' : 'level1'
  );

  useEffect(() => {
    // Redirect to '/thiswebsiteisglitchy' if secretKey is level1 (on client-side)
    if (secretKey === 'level1' && typeof window !== 'undefined') {
      window.location.replace('https://treasurehunt-eta.vercel.app/thiswebsiteisglitchy');
    }
  }, [secretKey]); // Run only when secretKey changes

  useEffect(() => {
    // Handle secretKey progression and redirections
    if (typeof window !== 'undefined') {
      if (secretKey === 'level2') {
        localStorage.setItem('secretkey', 'level3');
      }
      if (secretKey === 'level4') {
        window.location.replace('https://treasurehunt-eta.vercel.app/youknowwhattodonext');
        console.log('Level 2: Redirecting to /youknowwhattodonext');
      }
      if (secretKey === 'level5') {
        window.location.replace('https://treasurehunt-eta.vercel.app/congratulation');
        console.log('Level 2: Redirecting to /congratulation');
      }
      if (secretKey === 'level3') {
        window.location.replace('https://treasurehunt-eta.vercel.app/youarecloser');
      }
    }
  }, [secretKey]); // Run only when secretKey changes

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  p-10 lg:p-24">
      <h1>Level 2  yeah!</h1>
    </div>
  );
};

export default Page;
