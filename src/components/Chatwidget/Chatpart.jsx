import React, { useEffect } from 'react';

const GoftinoWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.goftino.com/widget/eIuwK9`;

    const handleLoad = () => {
      const l = localStorage.getItem('goftino_eIuwK9');
      if (l) {
        script.src += `?o=${l}`;
      }
      document.head.appendChild(script);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null;
};

export default GoftinoWidget;
