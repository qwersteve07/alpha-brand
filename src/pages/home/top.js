import { useRef, useEffect, useState } from 'react';
import styles from './index.module.sass';

const Top = () => {
  const requestRef = useRef();

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const photoList = [];
    const isDesktop = window.innerWidth > 1023;
    const img = new Image();
    img.src = '/alpha-potrait.jpg';

    const ctx = canvas.getContext('2d');
    let canvasWidth, canvasHeight;

    const canvasResize = () => {
      init();
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(draw);
    };

    const photoInit = posX => {
      return {
        x: posX,
        y: 0,
        speedX: Math.random(1, 5),
        speedY: Math.random(1, 5),
        angleX: Math.random() * 360,
        angleY: Math.random() * 360,
      };
    };

    const init = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = () => {
        if (isDesktop) {
          return window.innerWidth * 0.55 > window.innerHeight ? window.innerHeight : window.innerWidth * 0.55;
        } else {
          return window.innerWidth * 1.25 > window.innerHeight ? window.innerHeight : window.innerWidth * 1.25;
        }
      };
      canvas.width = canvasWidth;
      canvas.height = canvasHeight();
      let imgWidth = isDesktop ? canvasWidth * 0.45 : canvasWidth * 0.575;

      if (isDesktop) {
        photoList[0] = photoInit(0);
        photoList[1] = photoInit(canvasWidth * 0.214);
        photoList[2] = photoInit(canvasWidth - imgWidth);
      } else {
        photoList[0] = photoInit(0);
        photoList[1] = photoInit(canvasWidth - imgWidth);
        photoList[2] = {};
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      canvasWidth = window.innerWidth;
      canvasHeight = () => {
        if (isDesktop) {
          return window.innerWidth * 0.55 > window.innerHeight ? window.innerHeight : window.innerWidth * 0.55;
        } else {
          return window.innerWidth * 1.25 > window.innerHeight ? window.innerHeight : window.innerWidth * 1.25;
        }
      };
      canvas.width = canvasWidth;
      canvas.height = canvasHeight();
      let imgWidth = isDesktop ? canvasWidth * 0.45 : canvasHeight() * 0.7;
      let imgHeight = isDesktop ? (imgWidth * 800) / 642 : canvasHeight();

      for (let i = 0; i < photoList.length; i++) {
        let photo = photoList[i];
        photo.angleX += photo.speedX;
        photo.angleY += photo.speedY;
        let dx = Math.cos(((photo.angleX * (Math.PI / 180)) / 5) * 10) * 20 + (isDesktop ? 20 : 70);
        let dy = Math.sin(((photo.angleX * (Math.PI / 180)) / 5) * 10) * 20 + 20;
        ctx.drawImage(img, dx, dy, 600, 600 * 1.24, photo.x, photo.y, imgWidth, imgHeight);
        // ctx.drawImage(img, photo.x, photo.y, imgWidth, imgHeight);
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    img.onload = init;

    window.addEventListener('resize', canvasResize);
    requestRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', canvasResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <header className={styles.top}>
      <h1>Alpha</h1>
      <canvas id="canvas" />
    </header>
  );
};

export default Top;
