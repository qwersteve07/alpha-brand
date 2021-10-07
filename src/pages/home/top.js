import { useRef, useEffect, useState } from 'react';
import styles from './index.module.sass';

const Top = () => {
  const requestRef = useRef();

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const photoList = [];
    const img = new Image();
    img.src = '/alpha-potrait.jpg';

    const ctx = canvas.getContext('2d');
    let canvasWidth, canvasHeight;

    const canvasResize = () => {
      draw();
    };

    const addPhoto = posX => {
      photoList.push({
        x: posX,
        y: 0,
        speedX: Math.random(1, 5),
        speedY: Math.random(1, 5),
        angleX: Math.random() * 360,
        angleY: Math.random() * 360,
      });
    };

    const init = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerWidth * 0.55;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      let imgWidth = canvasWidth * 0.45;
      addPhoto(0);
      addPhoto(canvasWidth * 0.214);
      addPhoto(canvasWidth - imgWidth);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      canvasWidth = window.innerWidth;
      canvasHeight = window.innerWidth * 0.55;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      let imgWidth = canvasWidth * 0.45;
      let imgHeight = (imgWidth * 800) / 642;

      for (let i = 0; i < photoList.length; i++) {
        let photo = photoList[i];
        photo.angleX += photo.speedX;
        photo.angleY += photo.speedY;
        let dx = Math.cos(((photo.angleX * (Math.PI / 180)) / 5) * 10) * 20 + 30;
        let dy = Math.sin(((photo.angleX * (Math.PI / 180)) / 5) * 10) * 20 + 30;
        ctx.drawImage(img, dx, dy, imgWidth - 50, imgHeight - 50, photo.x, photo.y, imgWidth, imgHeight);
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
