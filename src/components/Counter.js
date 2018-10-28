import React, { useState, useEffect } from 'react';
import styles from './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `useThePlatform(${count})`;
  });

  return (
    <div>
      <button className={styles.button} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
