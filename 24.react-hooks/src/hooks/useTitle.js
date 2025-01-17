import React, { useEffect } from 'react';

// return 없음 -> app.jsx에서 사용
export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    console.log(prevTitle);
    document.title = title; //실제로 Title 변경됨

    // Unmount
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
