import styles from './MenuIcon.module.scss'
import { motion } from 'framer-motion';

const MenuIcon = () => {
  return (
    <div className={styles.icon}>
      <div className={styles.line}/>
      <div className={styles.line}/>
      <div className={styles.line}/>
    </div>
  )
}

export default MenuIcon
