'use client'; // Declare the Page component as a Client Component

import React from 'react';
import { useState, useEffect } from 'react';

const Page = () => {
  const [secretKey, setSecretKey] = useState(
    localStorage.getItem('secretkey') || 'level1'
  );

  useEffect(() => {
    // Redirect to '/thiswebsiteisglitchy' if secretKey is level1
    if (secretKey === 'level1') {
      window.location.replace('https://treasurehunt-nitgoa.vercel.app/thiswebsiteisglitchy');
    }
  }, [secretKey]); // Run only when secretKey changes

  useEffect(() => {
    // Handle secretKey progression and redirections
    if (secretKey === 'level2') {
      localStorage.setItem('secretkey', 'level3');
    }
    if (secretKey === 'level4') {
        window.location.replace('https://treasurehunt-nitgoa.vercel.app/youknowwhattodonext');
        console.log('Level 2: Redirecting to /youareclose');
      }
      if (secretKey === 'level5') {
        window.location.replace('https://treasurehunt-nitgoa.vercel.app/congratulation');
        console.log('Level 2: Redirecting to /youareclose');
      }

    if (secretKey === 'level3') {
      window.location.replace('https://treasurehunt-nitgoa.vercel.app/youarecloser');
    }
  }, [secretKey]); // Run only when secretKey changes

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Level 2  yeah!</h1>
    </div>
  );
};

export default Page;
