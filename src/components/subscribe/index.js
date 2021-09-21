import { useState } from 'react';
import styles from './index.module.sass';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const subscribe = () => {};

  return (
    <div className={styles.subscribe}>
      <h3>Suscribe to newsletters</h3>
      <input placeholder="Enter your email address here" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={subscribe}>訂閱革命式生活電子報</button>
    </div>
  );
};

export default Subscribe;
