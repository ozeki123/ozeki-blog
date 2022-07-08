import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from './Header.module.scss'
import MenuIcon from '../MenuIcon/MenuIcon'
import Menu from '../Menu/Menu';
import CloseButton from '../CloseButton/CloseButton';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen])
  
  return (
    <nav className={styles.header}>
      <div className={styles.nav}>

        <div className={isOpen ? styles.visible : styles.hidden}>
          <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
        
        <motion.div 
          className={styles.left}
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.8]
          }}
        >
          <Link href="/" passHref>
            <a>
              <h2>Ozeki Blog</h2>
            </a>
            
          </Link>
          <p>Front end development</p>
        </motion.div>
        <motion.div 
          className={styles.right}
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.8]
          }}
        >
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/'>
            <a>Portfolio</a>
          </Link>
          
          <button onClick={() => setIsOpen((prev) => !prev)}>
          {
            (isOpen)
            ?  <CloseButton/>
            :  <MenuIcon/>
          }
           
            
          </button>
        </motion.div>
      </div>
      
      
    </nav>
  )
}

export default Header