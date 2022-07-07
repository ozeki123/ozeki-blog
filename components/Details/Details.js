import React from 'react';
import styles from './Details.module.scss';

const Details = ({ date}) => {
  return (
    <div className={styles.details}>
      <p className={styles.type}></p>
      <div className={styles.circle}/>
      <p>{date}</p>
    </div>
  )
}

export default Details;
