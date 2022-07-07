import React from 'react';
import styles from './CloseButton.module.scss';

const CloseButton = () => {
  return (
    <div className={styles.close}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </div>
  )
}

export default CloseButton